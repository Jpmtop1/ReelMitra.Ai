const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Health Check / Root Endpoint
app.get('/', (req, res) => {
    res.json({ status: "success", message: "ReelMitra.Ai Backend is Running Live!" });
});

// Main Reel Generation Endpoint
app.post('/generate', async (req, res) => {
    try {
        const { topic, language, tone, voice } = req.body;

        if (!topic) {
            return res.status(400).json({ error: "कृपया रील का विषय (topic) दर्ज करें।" });
        }

        console.log(`[Reel Request Received] Topic: ${topic}, Lang: ${language || 'Hindi'}`);

        // 1. Script Generation (Mock / AI Integration ready)
        const hook = `क्या आप जानते हैं ${topic} के बारे में यह चौंकाने वाला सच?`;
        const bodyText = `${topic} को सही तरीके से समझें तो आपका जीवन 10 गुना आसान हो सकता है। आज ही शुरुआत करें!`;
        const callToAction = `ऐसे ही और पावरफुल टिप्स के लिए ReelMitra को फॉलो करें!`;

        const fullScript = `${hook} ${bodyText} ${callToAction}`;

        // 2. High Quality 9:16 Video Background (Pollinations AI / Vertical Template)
        const promptEncoded = encodeURIComponent(`cinematic 9:16 vertical video shot of ${topic}, ultra realistic, 4k`);
        const sampleVideoUrl = `https://image.pollinations.ai/prompt/${promptEncoded}?width=720&height=1280&nologo=true`;

        // 3. Send Success Response to Frontend
        return res.json({
            success: true,
            title: topic,
            script: fullScript,
            video_url: sampleVideoUrl,
            audio_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            watermark: "JP Mishra Digital",
            message: "आपकी AI रील सफलतापूर्वक तैयार हो गई है!"
        });

    } catch (error) {
        console.error("Error generating reel:", error);
        return res.status(500).json({ error: "रील जनरेट करने में आंतरिक सर्वर त्रुटि हुई।" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${
});
