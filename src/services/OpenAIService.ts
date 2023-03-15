/**
 * @author Manas Sahu
 * https://github.com/mrsahugit/chatgpt
 *
 * @license
 * Copyright (c) 2023 - Present, Manas Sahu
 *
 * All rights reserved. Code licensed under the MIT license
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */
import axios from 'axios';

export class OpenAIService {

    url: string = 'https://api.openai.com';

    constructor() {
    }

    buildHeader(key: string): any {
        if (key) {
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`
                },
            };            
        }
        return null;
    }  
    
    async executeGPTTurbo(key: string, q: string): Promise<any> {
        const { headers } = this.buildHeader(key);

        var body = JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [{
                'role': 'user',
                'content': q
            }]
        });

        try {
            const response = await axios.post(`${this.url}/v1/chat/completions`, body, { headers });
            // console.log(response);
            return { code: 'OK', status: response.status, data: response.data };
        } catch (error: any) {
            return { code: 'Error', data: error };
        }
    }

    async executeCodex(key: string, q: string): Promise<any> {
        const { headers } = this.buildHeader(key);

        var body = JSON.stringify({
            'model': 'code-davinci-002',
            'prompt': q,
            'temperature': 0.1,
            'max_tokens': 512,
            'frequency_penalty': 0.38
        });

        try {
            const response = await axios.post(`${this.url}/v1/completions`, body, { headers });
            return { code: 'OK', status: response.status, data: response.data };
        } catch (error: any) {
            return { code: 'Error', data: error };
        }
    }
}