# OpenAI - Developer

This VSCode Extension query the OpenAI models [OpenAI](https://openai.com/blog). The models currently implemented are ChatGPT and Codex. Other models will be implemented soon.

Each model has different capabilities and price points. Prices are per 1,000 tokens. You can think of tokens as pieces of words, where 1,000 tokens is about 750 words. [OpenAI Pricing](https://openai.com/pricing)

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Authentication

## Configuration

### Switching Between Models

In order to switch between the models ChatGPT and Codex, follow these instructions:

1. `Ctrl` + `,` to open Preferences.
2. Search for openai-developer.model.
3. Use the dropdown to switch between ChatGPT and Codex.

## Commands

| Command                                               |                                                                |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| `OpenAI Developer: Change API Key`                    | Change the Open API Key to set Open AI account detail          |
| `OpenAI Developer: Start Conversation`                | Start the conversation with OpenAI. Ask anything...            |

## Requirements

You must have Visual Studio Code 1.75.0 (January 2023) or later to install the extension.

## Extension Settings

In order to switch between OpenAI models, follow these instructions:

1. `Ctrl` + `,` to open Preferences.
2. Search for `openai-developer.model`.
3. Use the dropdown to switch between ChatGPT and Codex.

This extension contributes the following settings:

* `openai-developer.model`: Select the OpenAI model. Default model is ChatGPT (gpt-turbo)

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
