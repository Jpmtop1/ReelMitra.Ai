const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json({ limit: "10mb" }));

// ===============================
// HEALTH CHECK
// ===============================
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "ReelMitra.Ai Backend is Running Live! 🚀"
  });
});

// ===============================
// REEL GENERATION
// ===============================
app.post("/generate", async (req, res) => {
  try {

    const {
      prompt,
      topic,
      language = "Hindi",
      voice = "hi-IN-MadhurNeural",
      aspect_ratio = "9:16"
    } = req.body;

    // New frontend + old frontend दोनों support
    const finalTopic = (prompt || topic || "").trim();

    if (!finalTopic) {
      return res.status(400).json({
        success: false,
        error: "कृपया रील का विषय लिखें।"
      });
    }

    console.log("🎬 Reel Request Received");
    console.log("Topic:", finalTopic);
    console.log("Language:", language);
    console.log("Voice:", voice);
    console.log("Aspect:", aspect_ratio);

    // ===============================
    // DEMO AI SCRIPT
    // ===============================

    const script = `
नमस्कार दोस्तों! 🙏

आज हम बात करेंगे — ${finalTopic}

इस विषय को आसान और रोचक तरीके से समझिए।
यह जानकारी आपके लिए बहुत उपयोगी हो सकती है।

अगर आपको यह वीडियो पसंद आए,
तो ReelMitra.Ai को Follow करें,
Like करें और अपने दोस्तों के साथ Share करें।

धन्यवाद! ❤️

JP Mishra Digital
`;

    // ===============================
    // DEMO VIDEO
    // ===============================
    // अभी connection test के लिए working MP4
    // बाद में इसे वास्तविक AI Video Engine से replace करेंगे।

    const video_url =
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

    return res.json({

      success: true,

      title: finalTopic,

      script: script.trim(),

      video_url: video_url,

      language: language,

      voice: voice,

      aspect_ratio: aspect_ratio,

      watermark: "JP Mishra Digital",

      message: "🎉 ReelMitra.Ai ने आपकी Demo Reel तैयार कर दी!"
    });

  } catch (error) {

    console.error("❌ Generate Error:", error);

    return res.status(500).json({
      success: false,
      error: "रील तैयार करते समय सर्वर में समस्या हुई।"
    });
  }
});

// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
  console.log(`🚀 ReelMitra.Ai Server running on port ${PORT}`);
});

        
