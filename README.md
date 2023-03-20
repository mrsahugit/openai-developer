# OpenAI - Developer

This VSCode Extension queries the OpenAI models [OpenAI](https://openai.com/blog). The models currently implemented are ChatGPT and Codex. Other OpenAI models will be coming soon.

Each model has different capabilities and price points. Prices are per 1,000 tokens. You can think of tokens as pieces of words, where 1,000 tokens are about 750 words. See [OpenAI Pricing](https://openai.com/pricing)

> Missing something? Let us know by opening an issue on the [GitHub repository](https://github.com/mrsahugit/openai-developer/issues/new/choose)

## Features

<img src="https://raw.githubusercontent.com/mrsahugit/openai-developer/main/resources/media/help.gif">

### Start Conversation

Use the "OpenAI Developer: Start Conversation" command in the Command Palette:

1. Press `Ctrl` + `Shift` + `P` to open the Command Palette.
2. Begin typing `OpenAI Developer: Start Conversation`, and select it when it appears.
3. Enter the question you'd like to ask.
4. Wait for the response. It will appear in a new tab.

### Explain the code

<img src="https://raw.githubusercontent.com/mrsahugit/openai-developer/main/resources/media/explain-code.png">

Use the "OpenAI Developer: Explain the code" command in the Command Palette:

1. Select the block of code in the editor you need an explanation for.
2. Right click inside the editor and select `OpenAI Developer: Explain the code`.
4. Wait for the response. It will appear in a new tab.

### Why code is not working

Use the "OpenAI Developer: Why code is not working" command in the Command Palette:

1. Select the block of code in the editor you need to find out why not working
2. Right click inside the editor and select `OpenAI Developer: Why code is not working`.
4. Wait for the response. It will appear in a new tab.

### Change API Key

Once your OpenAI API key has been set you can update it using the "OpenAI Developer: Change API Key" command in the Command Palette:

1. Press `Ctrl` + `Shift` + `P` to open the Command Palette.
2. Begin typing `OpenAI Developer: Change API Key`, and select it when it appears.
3. Enter your OpenAI API key (see above instructions on how to find).

## Authentication

When you query for the first time, you will be prompted to enter an OpenAI API key. This is used by the extension to access the API and is only sent to OpenAI.

### Obtaining API key

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

<img src="https://raw.githubusercontent.com/mrsahugit/openai-developer/main/resources/media/settings.png">

### Maximum Tokens

To set the maximum number of tokens for each request follow these instructions:
> The maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length. 1,000 tokens are about 750 words.

1. `Ctrl` + `,` to open Preferences.
2. Search for openai-developer.maxTokens.
3. Use a number between 0 to Infinity. Default is set to 1024.

### Temperature

To set the temperature follow these instructions:
> What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.

1. `Ctrl` + `,` to open Preferences.
2. Search for openai-developer.temperature.
3. Use a number between 0 to 2. Default is set to 0.5.


## Commands

| Command                                               |                                                                |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| `OpenAI Developer: Change API Key`                    | Change the Open API Key to set Open AI account detail.         |
| `OpenAI Developer: Start Conversation`                | Start the conversation with OpenAI. Ask anything...            |
| `OpenAI Developer: Explain the code`                  | Select your code and find the explanation for your code.       |
| `OpenAI Developer: Why code is not working`           | Select your code and find out why the code is not working      |

## Requirements

You must have Visual Studio Code 1.75.0 (January 2023) or later to install the extension.

## Known Issues

## Release Notes

### 0.0.3

- MaxTokens and Temperature configurations added
- `OpenAI Developer: Explain the code` command added
- `OpenAI Developer: Why code is not working` command added

### 0.0.2

- Documentation Bug fixes

### 0.0.1

- Initial release of OpenAI Developer
- `OpenAI Developer: Start Conversation` command added

**Enjoy!**
