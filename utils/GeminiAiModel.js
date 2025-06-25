// import dotenv from 'dotenv';
// dotenv.config();
import {
    GoogleGenAI,
} from '@google/genai';

const ai = new GoogleGenAI({
    apiKey:process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const config = {
    thinkingConfig: {
        thinkingBudget: -1,
    },
    responseMimeType: 'text/plain',
};

const model = 'gemini-2.5-flash';

const generateContent = async (prompt) => {
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: prompt,
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });

    let result = "";
    for await (const chunk of response) {
        result += chunk.text;
    }
    return result;
}
export default generateContent;
