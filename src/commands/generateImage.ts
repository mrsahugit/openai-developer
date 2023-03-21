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


export async function generateImage(): Promise<void> {

    const q = await vscode.window.showInputBox({
        title: "OpenAI Developer: Generate Image",
        prompt: "Provide description of the desired image(s). Max 1000 characters.",
        ignoreFocusOut: true,
        placeHolder: "Description",
    });

    if (q) {
        const key = await changeAPIKey();
        if (key) {
        } else {
            vscode.window.showErrorMessage('Key couldn\'t be retrieved. Please change the OpenAI API Key.');
            return;
        }

        const client = new OpenAIService();

        const response = await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Querying OpenAI Image. Please wait...',
            cancellable: false
        }, async (progress, token) => {
            return await client.executeImage(key, 1, '512x512', q);
        });

        if (response) {
            if (response.code === "OK") {
                // showTextDocument(response.data.choices[0].message.content);
                const panel = vscode.window.createWebviewPanel(
                    'openAIImage',
                    'OpenAI Image',
                    vscode.ViewColumn.One,
                    {}
                );

                panel.webview.html = getWebviewContent(response.data[0].url);
            } else {
                vscode.window.showErrorMessage("Error: " + response.status, response.data);
            }
        } else {
            vscode.window.showInformationMessage("No response recieved. Please try again.", { modal: true });
        }
    } else {
        vscode.window.showErrorMessage('Please enter your query to get response from OpenAI');
        return;
    }
}

function getWebviewContent(url: string) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
    </head>
    <body>
        <img src="${url}" height="512" width="512" />
    </body>
    </html>`;
}