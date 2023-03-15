/**
 * @author Manas Sahu
 * https://github.com/mrsahugit/openai-developer
 *
 * @license
 * Copyright (c) 2023 - Present, Manas Sahu
 *
 * All rights reserved. Code licensed under the MIT license
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */
import * as vscode from 'vscode';

import { OpenAIService } from '../services/OpenAIService';
import { changeAPIKey } from './changeAPIKey';

export async function startConversation(): Promise<void> {

    let config = vscode.workspace.getConfiguration();
    const model = config.get("openai-developer.model") as string | null;

    const q = await vscode.window.showInputBox({
        title: "OpenAI Developer Conversation",
        prompt: "Ask anything",
        ignoreFocusOut: true,
        placeHolder: "Query",
    });

    if (q) {
        const key = await changeAPIKey();
        if (key) {
        } else {
            vscode.window.showErrorMessage('Key couldn\'t be retrieved. Please change the OpenAI API Key.');
            return;
        }

        const client = new OpenAIService();

        if (model === "gpt-turbo") {
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: 'Querying ChatGPT. Please wait...',
                cancellable: false
            }, async () => {
                const response = await client.executeGPTTurbo(key, q);
                if (response) {
                    if (response.code === 'OK') {
                        showTextDocument(response.data.choices[0].message.content);
                    } else {
                        vscode.window.showErrorMessage('Error: ', response.data.message);
                    }
                } else {
                    vscode.window.showErrorMessage('No response recieved');
                }
            });
        } else if (model === "codex") {
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: 'Querying Codex. Please wait...',
                cancellable: false
            }, async () => {
                const response = await client.executeCodex(key, q);

                if (response) {
                    if (response.code === 'OK') {
                        showTextDocument(response.data.choices[0].text);
                    } else {
                        vscode.window.showErrorMessage('Error: ', response.data.message);
                    }
                } else {
                    vscode.window.showErrorMessage('No response recieved');
                }
            });
        } else {
            vscode.window.showErrorMessage('No model selected.');
        }
    } else {
        vscode.window.showErrorMessage('Please enter your query to get response from OpenAI');
        return;
    }
}

async function showTextDocument(content: string) {
    const outputDocument = await vscode.workspace.openTextDocument({
        content: content,
        language: "markdown",
    });
    const outputDocumentEditor = await vscode.window.showTextDocument(
        outputDocument,
        {
            viewColumn: vscode.ViewColumn.Beside,
            preserveFocus: true,
            preview: true,
        },
    );
}

