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
export enum Models {
    ChatGPT = "gpt-3.5-turbo",
    Codex = "code-davinci-002",
}

export interface ModelAPIResponse {
    code: string,
    status?: number,
    data?: any
}