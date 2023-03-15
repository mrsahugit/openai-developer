export enum Models {
    chatGPT = "gpt-3.5-turbo",
    codex = "code-davinci-002",
}

export interface ModelAPIResponse {
    code: string,
    status?: number,
    data?: any
}