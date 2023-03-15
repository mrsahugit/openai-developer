# OpenAI - Developer

This VSCode Extension queries the OpenAI models [OpenAI](https://openai.com/blog). The models currently implemented are ChatGPT and Codex. Other OpenAI models will be coming soon.

Each model has different capabilities and price points. Prices are per 1,000 tokens. You can think of tokens as pieces of words, where 1,000 tokens are about 750 words. See [OpenAI Pricing](https://openai.com/pricing)

## Features

<img src="https://raw.githubusercontent.com/mrsahugit/openai-developer/main/resources/help.gif">

### Start Conversation

Use the "OpenAI Developer: Start Conversation" command in the Command Palette:

1. Press `Ctrl` + `Shift` + `P` to open the Command Palette.
2. Begin typing `OpenAI Developer: Start Conversation`, and select it when it appears.
3. Enter the question you'd like to ask.
4. Wait for the response. It will appear in a new tab.

### Change API Key

Once your OpenAI API key has been set you can update it using the "OpenAI Developer: Change API Key" command in the Command Palette:

1. Press `Ctrl` + `Shift` + `P` to open the Command Palette.
2. Begin typing `OpenAI Developer: Change API Key`, and select it when it appears.
3. Enter your OpenAI API key (see above instructions on how to find).

## Authentication

When you query for the first time, you will be prompted to enter an OpenAI API key. This is used by the extension to access the API and is only sent to OpenAI.

To find your OpenAI API key:

1. Go to https://platform.openai.com/account/api-keys. You will need to log in (or sign up) to your OpenAI account.
2. Click "Create new secret key", and copy it.
3. You should then paste it into VS Code when prompted.

## Configuration

### Switching Between Models

In order to switch between the models ChatGPT and Codex, follow these instructions:

1. `Ctrl` + `,` to open Preferences.
2. Search for openai-developer.model.
3. Use the dropdown to switch between ChatGPT and Codex.

<img src="https://raw.githubusercontent.com/mrsahugit/openai-developer/main/resources/settings.png">

## Commands

| Command                                               |                                                                |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| `OpenAI Developer: Change API Key`                    | Change the Open API Key to set Open AI account detail          |
| `OpenAI Developer: Start Conversation`                | Start the conversation with OpenAI. Ask anything...            |

## Requirements

You must have Visual Studio Code 1.75.0 (January 2023) or later to install the extension.

## Known Issues

## Release Notes

### 0.0.1

Initial release of OpenAI Developer

**Enjoy!**
