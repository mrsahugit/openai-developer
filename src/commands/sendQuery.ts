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

export async function sendQuery(query: string): Promise<void> {

    let config = vscode.workspace.getConfiguration();
    const model = config.get("openai-developer.model") as string | null;
    const maxTokens = config.get("openai-developer.maxTokens") as number | 1024;
    const temperature = config.get("openai-developer.temperature") as number | 0.5;

    const key = await changeAPIKey();
    if (key) {
    } else {
        vscode.window.showErrorMessage('Key couldn\'t be retrieved. Please change the OpenAI API Key.');
        return;
    }

    const client = new OpenAIService();

    if (model === "gpt-turbo") {
        const response = await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Querying ChatGPT. Please wait...',
            cancellable: false
        }, async (progress, token) => {
            return await client.executeGPTTurbo(key, maxTokens, temperature, query);
        });

        if (response) {
            if (response.code === "OK") {
                showTextDocument(response.data.choices[0].message.content);
            } else {
                vscode.window.showErrorMessage("Error: " + response.status, response.data);
            }
        } else {
            vscode.window.showInformationMessage("No response recieved. Please try again.", { modal: true });
        }
    } else if (model === "codex") {
        const response = await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Querying Codex. Please wait...',
            cancellable: false
        }, async () => {
            return await client.executeCodex(key, maxTokens, temperature, query);
        });

        if (response) {
            if (response.code === "OK") {
                showTextDocument(response.data.choices[0].text);
            } else {
                vscode.window.showErrorMessage("Error: " + response.status, response.data);
            }
        } else {
            vscode.window.showInformationMessage("No response recieved. Please try again.", { modal: true });
        }
    } else {
        vscode.window.showErrorMessage('No model selected.');
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