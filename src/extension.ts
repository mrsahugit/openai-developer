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

import { ext } from './extensionVariables';

import { changeAPIKey } from './commands/changeAPIKey';
import { startConversation } from './commands/startConversation';

export function activate(context: vscode.ExtensionContext) {

	ext.context = context;

	const outputChannel = vscode.window.createOutputChannel("OpenAI Developer");
	ext.outputChannel = outputChannel;
	context.subscriptions.push(outputChannel);

	let disposableChangeAPIKey = vscode.commands.registerCommand('openai-developer.changeAPIKey', async () => {
		await changeAPIKey(true);
	});

	let disposableStartConversation = vscode.commands.registerCommand('openai-developer.startConversation', async () => {
		await startConversation();
	});

	context.subscriptions.push(disposableChangeAPIKey, disposableStartConversation);
}

export function deactivate() {}
