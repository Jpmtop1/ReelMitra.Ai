<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelMitra.AI - Autonomous AI Reel Studio</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --primary: #ec4899;
            --secondary: #8b5cf6;
            --text-color: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #10b981;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: var(--bg-color); color: var(--text-color); min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 15px; }
        
        .header { width: 100%; max-width: 480px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .logo-area { display: flex; align-items: center; gap: 10px; }
        .logo-icon { background: linear-gradient(135deg, var(--primary), var(--secondary)); width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .logo-text h1 { font-size: 16px; font-weight: bold; background: linear-gradient(to right, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .logo-text p { font-size: 11px; color: var(--text-muted); }

        .coin-badge { background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent); padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: bold; color: var(--accent); cursor: pointer; }

        .container { width: 100%; max-width: 480px; background: var(--card-bg); padding: 22px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); margin-bottom: 20px; }
        
        h2 { font-size: 18px; text-align: center; margin-bottom: 6px; }
        .subtitle { font-size: 12px; text-align: center; color: var(--text-muted); margin-bottom: 20px; }

        .form-group { margin-bottom: 16px; }
        label { display: block; font-size: 13px; margin-bottom: 6px; color: var(--text-muted); font-weight: 500; }
        textarea, select, input[type="file"] { width: 100%; padding: 12px; background: #0f172a; border: 1px solid #334155; border-radius: 10px; color: white; font-size: 14px; outline: none; }
        textarea:focus, select:focus { border-color: var(--primary); }
        textarea { resize: none; height: 90px; }

        .file-upload-box { border: 2px dashed #334155; padding: 15px; text-align: center; border-radius: 10px; cursor: pointer; background: #0f172a; font-size: 13px; color: var(--text-muted); }
        .file-upload-box:hover { border-color: var(--primary); color: white; }

        .btn { width: 100%; padding: 12px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border: none; border-radius: 10px; color: white; font-size: 15px; font-weight: bold; cursor: pointer; transition: 0.3s; }
        .btn:hover { opacity: 0.9; transform: translateY(-1px); }

        #loader { display: none; text-align: center; margin-top: 20px; }
        .spinner { width: 40px; height: 40px; border: 4px solid #334155; border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 10px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        #resultSection { display: none; margin-top: 20px; text-align: center; }
        .video-container { position: relative; width: 100%; aspect-ratio: 9/16; background: #000; border-radius: 12px; overflow: hidden; margin-bottom: 15px; }
        video { width: 100%; height: 100%; object-fit: cover; }
        .watermark-overlay { position: absolute; bottom: 15px; left: 15px; background: rgba(0,0,0,0.6); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: white; }

        .footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: auto; padding: 10px; }
        .footer span { color: var(--primary); }
    </style>
</head>
<body>

    <div class="header">
        <div class="logo-area">
            <div class="logo-icon">🚀</div>
            <div class="logo-text">
                <h1>ReelMitra.AI</h1>
                <p>JP Mishra Digital Studio</p>
            </div>
        </div>
        <div class="coin-badge" id="coinCount" onclick="alert('पॉइंट्स जोड़ने के लिए रीचार्ज करें!')">🪙 30 पॉइंट्स</div>
    </div>

    <div class="container">
        <h2>ऑटोनॉमस AI रील स्टूडियो</h2>
        <p class="subtitle">1 मिनट+ लंबी एंगेजिंग वीडियो, कस्टम फोटो और आवाज़ (Audio) के साथ!</p>

        <div class="form-group">
            <label>रील का टॉपिक या स्क्रिप्ट प्रॉम्प्ट</label>
            <textarea id="reelTopic" placeholder="यहाँ अपना टॉपिक लिखें (जैसे: हनुमान जी के 12 नाम)..."></textarea>
        </div>

        <div class="form-group">
            <label>अपनी फोटो या ब्रांड लोगो अपलोड करें (Optional)</label>
            <div class="file-upload-box" onclick="document.getElementById('imageInput').click()">
                📁 <span id="fileName">यहाँ क्लिक करके अपनी फोटो/लोगो चुनें</span>
            </div>
            <input type="file" id="imageInput" accept="image/*" style="display: none;" onchange="handleImageUpload(event)">
        </div>

        <div class="form-group">
            <label>वॉइस स्टाइल और भाषा (Audio Voice)</label>
            <select id="voiceStyle">
                <option value="hindi-deep">हिंदी (Cinematic Deep Voice - HD)</option>
                <option value="hindi-madhur">हिंदी (Madhur Voice - Sweet)</option>
                <option value="hindi-energetic">हिंदी (High Energy / Fast Paced)</option>
            </select>
        </div>

        <button class="btn" onclick="generateReel()">✨ Generate 1-Min Pro AI Reel (10 पॉइंट्स)</button>

        <div id="loader">
            <div class="spinner"></div>
            <p id="loaderText" style="font-size: 13px; color: var(--text-muted);">AI स्क्रिप्ट और वॉइसओवर तैयार हो रही है...</p>
        </div>

        <div id="resultSection">
            <p style="color: var(--accent); font-weight: bold; margin-bottom: 10px;">✅ आपकी कस्टम AI रील आवाज़ के साथ तैयार है!</p>
            <div class="video-container">
                <!-- यहाँ आपकी वीडियो और ऑडियो लोड होगी -->
                <video id="outputVideo" controls autoplay muted>
                    <source src="" type="video/mp4">
                    आपका ब्राउज़र वीडियो टैग को सपोर्ट नहीं करता।
                </video>
                <div class="watermark-overlay">⚡ ReelMitra.AI | JP Mishra Digital</div>
            </div>
            <button class="btn" style="background: var(--accent);" onclick="alert('रील डाउनलोड हो रही है!')">📥 एचडी रील डाउनलोड करें</button>
        </div>
    </div>

    <div class="footer">
        © 2026 ReelMitra.AI • Developed with ❤️ by <span>JP Mishra Digital</span>
    </div>

    <script>
        let userCredits = 30;

        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                document.getElementById('fileName').innerText = file.name;
            }
        }

        function generateReel() {
            const topic = document.getElementById('reelTopic').value.trim();
            if (!topic) {
                alert('कृपया पहले रील का कोई टॉपिक लिखें!');
                return;
            }

            if (userCredits < 10) {
                alert('आपके पॉइंट्स कम हो गए हैं! रील बनाने के लिए कम से कम 10 पॉइंट्स चाहिए।');
                return;
            }

            userCredits -= 10;
            document.getElementById('coinCount').innerText = `🪙 ${userCredits} पॉइंट्स`;

            document.getElementById('loader').style.display = 'block';
            document.getElementById('resultSection').style.display = 'none';

            let progress = 0;
            let loaderText = document.getElementById('loaderText');

            const interval = setInterval(() => {
                progress += 25;
                if (progress === 25) loaderText.innerText = '📝 AI स्क्रिप्ट तैयार हो रही है (25%)...';
                if (progress === 50) loaderText.innerText = '🎙️ एचडी वॉइसओवर और ऑडियो सिंक हो रहा है (50%)...';
                if (progress === 75) loaderText.innerText = '🎬 इमेज और वीडियो एनिमेशन प्रोसेस हो रहा है (75%)...';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('resultSection').style.display = 'block';
                    
                    // यहाँ डिफ़ॉल्ट या जनरेटेड वीडियो का लिंक सेट करें जिसमें ऑडियो हो
                    const videoElem = document.getElementById('outputVideo');
                    videoElem.src = "https://www.w3schools.com/html/mov_bbb.mp4"; // डेमो वीडियो लिंक
                    videoElem.muted = false; // आवाज़ इनेबल करने के लिए
                }
            }, 1000);
        }
    </script>
</body>
</html>
