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

import { sendQuery } from './sendQuery';

export async function startConversation(): Promise<void> {

    const q = await vscode.window.showInputBox({
        title: "OpenAI Developer: Start Conversation",
        prompt: "Ask anything",
        ignoreFocusOut: true,
        placeHolder: "Query",
    });

    if (q) {
        await sendQuery(q);
    } else {
        vscode.window.showErrorMessage('Please enter your query to get response from OpenAI');
        return;
    }
}
