import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
    organization: process.env.NEXT_PUBLIC_OPEN_AI_ORG_ID,
    dangerouslyAllowBrowser: true
});

const contentPrefix = "You're an old seer and an expert in astrology. Based on the information, generate some interesting predictions about the future"

export async function getPrompt(prompt: String) {
    const chatCompletion = await openai.chat.completions.create({
        max_tokens: 200,
        messages: [{ role: 'user', content: contentPrefix + prompt }],
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion.choices[0].message.content
}
