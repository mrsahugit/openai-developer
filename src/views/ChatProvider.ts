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

export class ChatProvider implements vscode.WebviewViewProvider {

    private _view?: vscode.WebviewView;

    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext<unknown>, token: vscode.CancellationToken): void | Thenable<void> {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
        };

        webviewView.webview.html = this.getWebviewContent();

        webviewView.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'query':
                        vscode.window.showErrorMessage(message.text);
                        return;
                }
            },
            undefined,
        );
    }

    private getWebviewContent() {
        return `<!doctype html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>OpenAI Developer</title>
                    <style>
                    .container {
                        padding: 0.2rem 0.2rem;
                      }
                      
                      .txt {
                        border: 1px solid #CCC;
                        border-radius: 0.375rem;
                        padding: 0.75rem 0.6rem;
                      }
                      .txt:focus {
                        outline: none;
                        border: 1px solid #2C94F1;
                      }
                      
                      .w100 {
                        width: 100%;
                      }
                      .tacenter {
                        text-align: center;
                      }
                      
                      .btn {
                        border: 1px solid #CCC;
                        border-radius: 0.375rem;
                        padding: 0.75rem 1.25rem;
                        float: right;
                      }
                      
                      .lblLarge {
                        font-size: 1.2rem;
                      }
                      
                      .lblMedium {
                        font-size: 1.0rem;
                        margin-top: 0.5rem;
                        margin-bottom: 0.25rem;
                      }
                      
                      .lblSmall {
                        font-size: 0.9rem;
                      }
                      
                      .lblMini {
                        opacity: 0.75;
                        font-size: 0.75rem;
                      }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <input type="button" value="Send" class="btn" id="send" onclick="search();" />
                        <div style="overflow: hidden; padding-right: 2.0rem;">
                            <input type="text" class="txt w100" id="q" placeholder="Ask anything..." />
                        </div>
                    </div>
                    <div class="container">
                        <div class="lblLarge">Advanced Options</div>
                        <div>
                            <div class="lblMedium">Please select your model</div>
                            <input type="radio" id="chatgpt" name="models" value="chatgpt" checked />
                            <label for="chatgpt" class="lblSmall">ChatGPT</label><br>
                            <input type="radio" id="codex" name="models" value="codex">
                            <label for="codex" class="lblSmall">Codex</label><br>  
                        </div>
                        <div>
                            <div class="lblMedium">Temperature</div>
                            <div class="lblMini">What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.</div>
                            <input type="number" class="txt tacenter" id="temperature" min="0.0" max="2.0" value="0.5" step="0.1" size="3" />
                        </div>
                        <div>
                            <div class="lblMedium">Max Tokens</div>
                            <div class="lblMini">The maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length.</div>
                            <input type="number" class="txt tacenter" id="max_tokens" min="100" value="1024" step="100" size="3" />
                        </div>
                    </div>
                    <script>
                    function search() {
                        let temperature = document.getElementById("temperature");
                      alert(temperature.value);
                    }
                    </script>
                </body>
                </html>`;
    }
}