<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelMitra.AI Pro - Autonomous AI Reel Studio</title>
    <style>
        :root {
            --bg-color: #0b0f19;
            --card-bg: #111827;
            --primary: #ec4899;
            --secondary: #8b5cf6;
            --text-color: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #10b981;
            --whatsapp: #25d366;
            --gold: #f59e0b;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: var(--bg-color); color: var(--text-color); min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 12px; }
        
        .header { width: 100%; max-width: 480px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .logo-area { display: flex; align-items: center; gap: 10px; }
        .logo-icon { background: linear-gradient(135deg, var(--primary), var(--secondary)); width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .logo-text h1 { font-size: 15px; font-weight: bold; background: linear-gradient(to right, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .logo-text p { font-size: 10px; color: var(--text-muted); }

        .coin-badge { background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent); padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; color: var(--accent); cursor: pointer; display: flex; align-items: center; gap: 5px; }

        .container { width: 100%; max-width: 480px; background: var(--card-bg); padding: 18px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); margin-bottom: 15px; border: 1px solid #1f2937; }
        
        h2 { font-size: 16px; text-align: center; margin-bottom: 4px; }
        .subtitle { font-size: 11px; text-align: center; color: var(--text-muted); margin-bottom: 15px; }

        .form-group { margin-bottom: 14px; }
        label { display: block; font-size: 12px; margin-bottom: 5px; color: var(--text-muted); font-weight: 500; }
        textarea, select { width: 100%; padding: 10px; background: #0b0f19; border: 1px solid #374151; border-radius: 8px; color: white; font-size: 13px; outline: none; }
        textarea:focus, select:focus { border-color: var(--primary); }
        textarea { resize: none; height: 85px; }

        .btn { width: 100%; padding: 11px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border: none; border-radius: 8px; color: white; font-size: 14px; font-weight: bold; cursor: pointer; transition: 0.3s; text-align: center; display: block; text-decoration: none;}
        .btn:hover { opacity: 0.9; }

        /* रिचार्ज प्लान ग्रिड */
        .recharge-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 10px; }
        .plan-card { background: #0b0f19; border: 1px solid #374151; padding: 10px; border-radius: 8px; text-align: center; cursor: pointer; transition: 0.2s; position: relative; overflow: hidden; }
        .plan-card:hover { border-color: var(--accent); background: rgba(16, 185, 129, 0.05); }
        .plan-card.highlight { border-color: var(--gold); background: rgba(245, 158, 11, 0.05); }
        .plan-price { font-size: 15px; font-weight: bold; color: var(--accent); }
        .plan-card.highlight .plan-price { color: var(--gold); }
        .plan-coins { font-size: 11px; color: var(--text-muted); }
        .badge-tag { position: absolute; top: 0; right: 0; background: var(--gold); color: #000; font-size: 8px; font-weight: bold; padding: 2px 6px; border-bottom-left-radius: 6px; }

        #loader { display: none; text-align: center; margin-top: 15px; }
        .spinner { width: 35px; height: 35px; border: 3px solid #374151; border-top: 3px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 8px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        #resultSection { display: none; margin-top: 15px; text-align: center; }
        
        /* वीडियो स्क्रीन और डायनेमिक टेक्स्ट ओवरले */
        .video-container { position: relative; width: 100%; max-height: 480px; aspect-ratio: 9/16; background: #000; border-radius: 12px; overflow: hidden; margin-bottom: 12px; border: 2px solid #374151; display: flex; align-items: center; justify-content: center; }
        video { width: 100%; height: 100%; object-fit: cover; }
        
        /* आपके लिखे गए टेक्स्ट को वीडियो के ऊपर दिखाने के लिए डायनेमिक कैप्शन बॉक्स */
        .video-text-overlay {
            position: absolute;
            top: 15px;
            left: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.75);
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 13px;
            color: #fff;
            text-align: center;
            border: 1px solid var(--primary);
            font-weight: bold;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
            z-index: 5;
        }

        .watermark-overlay { position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.7); padding: 3px 8px; border-radius: 4px; font-size: 10px; color: white; z-index: 5; }

        .action-buttons { display: flex; gap: 8px; margin-bottom: 10px; }
        .action-btn { flex: 1; padding: 10px; border-radius: 8px; border: none; font-size: 12px; font-weight: bold; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; text-decoration: none;}
        .bg-whatsapp { background-color: var(--whatsapp); }
        .bg-download { background-color: var(--accent); }

        .social-row { display: flex; justify-content: space-between; gap: 5px; margin-top: 10px; }
        .social-icon-btn { flex: 1; padding: 8px; background: #1f2937; border: none; border-radius: 6px; color: white; font-size: 11px; cursor: pointer; text-align: center; }
        .social-icon-btn:hover { background: #374151; }

        .referral-box { background: linear-gradient(135deg, rgba(139, 92, 242, 0.1), rgba(236, 72, 153, 0.1)); border: 1px dashed var(--secondary); padding: 12px; border-radius: 8px; text-align: center; margin-top: 15px; }
        .referral-box p { font-size: 11px; color: var(--text-muted); margin-bottom: 8px; }

        .footer { font-size: 11px; color: var(--text-muted); text-align: center; margin-top: auto; padding: 5px; }
        .footer span { color: var(--primary); }
    </style>
</head>
<body>

    <div class="header">
        <div class="logo-area">
            <div class="logo-icon">🚀</div>
            <div class="logo-text">
                <h1>ReelMitra.AI Pro</h1>
                <p>JP Mishra Digital Studio</p>
            </div>
        </div>
        <div class="coin-badge" onclick="openRechargeModal()">🪙 <span id="coinCount">130</span> Pts</div>
    </div>

    <!-- मुख्य जनरेटर पैनल -->
    <div class="container" id="generatorContainer">
        <h2>ऑटोनॉमस AI रील स्टूडियो</h2>
        <p class="subtitle">आप जो टेक्स्ट लिखेंगे, AI उसी पर आधारित वीडियो और वॉइस तैयार करेगा!</p>

        <div class="form-group">
            <label>यहाँ अपना टेक्स्ट या रील का टॉपिक लिखें (Text-to-Video)</label>
            <textarea id="reelTopic" placeholder="जैसे: भारत का इतिहास और संस्कृति अत्यंत प्राचीन है..."></textarea>
        </div>

        <div class="form-group" style="display: flex; gap: 10px;">
            <div style="flex: 1;">
                <label>वॉइस भाषा & स्टाइल</label>
                <select id="voiceStyle">
                    <option value="hi-IN">हिंदी (Madhur AI Voice)</option>
                    <option value="en-US">English (Pro AI Voice)</option>
                </select>
            </div>
            <div style="flex: 1;">
                <label>फॉर्मेट (Aspect)</label>
                <select id="aspectRatio">
                    <option value="9:16">9:16 (Shorts/Reels)</option>
                    <option value="16:9">16:9 (YouTube)</option>
                </select>
            </div>
        </div>

        <button class="btn" onclick="generateTextToVideoReel()">✨ Generate Video from Text (10 Pts)</button>

        <div id="loader">
            <div class="spinner"></div>
            <p id="loaderText" style="font-size: 12px; color: var(--text-muted);">AI आपके टेक्स्ट को वीडियो में बदल रहा है...</p>
        </div>

        <!-- परिणाम और वीडियो स्क्रीन -->
        <div id="resultSection">
            <p style="color: var(--accent); font-weight: bold; margin-bottom: 8px; font-size: 13px;">✅ आपके टेक्स्ट से वीडियो सफलतापूर्वक बन गई!</p>
            
            <div class="video-container">
                <!-- यूज़र के टेक्स्ट को वीडियो के ऊपर दिखाने वाला डायनेमिक कैप्शन -->
                <div id="videoCaption" class="video-text-overlay">यहाँ आपका टेक्स्ट दिखेगा</div>
                
                <video id="outputVideo" controls autoplay loop>
                    <source src="" type="video/mp4">
                    आपका ब्राउज़र वीडियो सपोर्ट नहीं करता।
                </video>
                <div class="watermark-overlay">⚡ ReelMitra.AI | JP Mishra Digital</div>
            </div>

            <div class="action-buttons">
                <button class="action-btn bg-download" onclick="downloadVideo()">📥 वीडियो डाउनलोड करें</button>
                <button class="action-btn bg-whatsapp" onclick="shareOnWhatsApp()">💬 WhatsApp शेयर</button>
            </div>

            <label style="margin-top: 10px;">सोशल मीडिया पर डायरेक्ट शेयर करें:</label>
            <div class="social-row">
                <button class="social-icon-btn" onclick="shareSocial('YouTube')">▶️ YT Studio</button>
                <button class="social-icon-btn" onclick="shareSocial('Facebook')">📘 Facebook</button>
                <button class="social-icon-btn" onclick="shareSocial('Instagram')">📸 Insta</button>
            </div>
        </div>
    </div>

    <!-- रिचार्ज और पॉइंट्स सेक्शन -->
    <div class="container" id="rechargeSection">
        <h2>⚡ मेगा पॉइंट्स रिचार्ज सेंटर</h2>
        <p class="subtitle">बड़े पैक चुनें और अनलिमिटेड वीडियो बनाएं!</p>
        
        <div class="recharge-grid">
            <div class="plan-card" onclick="buyPlan(19, 50)">
                <div class="plan-price">₹19</div>
                <div class="plan-coins">🎁 50 पॉइंट्स</div>
            </div>
            <div class="plan-card" onclick="buyPlan(49, 150)">
                <div class="plan-price">₹49</div>
                <div class="plan-coins">🎁 150 पॉइंट्स</div>
            </div>
            <div class="plan-card" onclick="buyPlan(99, 400)">
                <div class="plan-price">₹99</div>
                <div class="plan-coins">🎁 400 पॉइंट्स</div>
            </div>
            <div class="plan-card" onclick="buyPlan(149, 700)">
                <div class="plan-price">₹149</div>
                <div class="plan-coins">🎁 700 पॉइंट्स</div>
            </div>
            <div class="plan-card" onclick="buyPlan(499, 2600)">
                <div class="plan-price">₹499</div>
                <div class="plan-coins">🎁 2,600 पॉइंट्स</div>
            </div>
            <div class="plan-card highlight" onclick="buyPlan(999, 6000)">
                <div class="badge-tag">BEST VALUE</div>
                <div class="plan-price">₹999</div>
                <div class="plan-coins">🎁 6,000 पॉइंट्स</div>
            </div>
            <div class="plan-card highlight" onclick="buyPlan(1499, 10000)" style="grid-column: span 2;">
                <div class="badge-tag">AGENCY VIP PACK</div>
                <div class="plan-price">👑 ₹1499 - 10,000 पॉइंट्स (Unlimited Access)</div>
                <div class="plan-coins">एजेंसियों और प्रो क्रिएटर्स के लिए सबसे बेहतरीन पैक</div>
            </div>
        </div>

        <div class="referral-box">
            <p>🤝 <b>रिफरल प्रोग्राम:</b> दोस्तों को लिंक शेयर करें और हर जॉइनिंग पर पाएं <b>20 फ्री पॉइंट्स!</b></p>
            <button class="btn" style="padding: 8px; font-size: 12px;" onclick="shareReferralLink()">🔗 रिफरल लिंक कॉपी करें</button>
        </div>
    </div>

    <div class="footer">
        © 2026 ReelMitra.AI • Developed with ❤️ by <span>JP Mishra Digital</span>
    </div>

    <script>
        let userCredits = 130;

        function updateCreditsDisplay() {
            document.getElementById('coinCount').innerText = userCredits;
        }

        // टेक्स्ट-टू-वीडियो जनरेशन फंक्शन (जो यूज़र के इनपुट को प्रोसेस करेगा)
        function generateTextToVideoReel() {
            const topic = document.getElementById('reelTopic').value.trim();
            const lang = document.getElementById('voiceStyle').value;

            if (!topic) {
                alert('कृपया पहले टेक्स्ट बॉक्स में कोई टॉपिक या वाक्य लिखें!');
                return;
            }

            if (userCredits < 10) {
                alert('आपके पॉइंट्स खत्म हो गए हैं! कृपया नीचे दिए गए मेगा पैक से रिचार्ज करें।');
                return;
            }

            userCredits -= 10;
            updateCreditsDisplay();

            document.getElementById('loader').style.display = 'block';
            document.getElementById('resultSection').style.display = 'none';

            let progress = 0;
            let loaderText = document.getElementById('loaderText');

            const interval = setInterval(() => {
                progress += 25;
                if (progress === 25) loaderText.innerText = '✍️ आपके टेक्स्ट की AI स्क्रिप्ट तैयार हो रही है...';
                if (progress === 50) loaderText.innerText = '🗣️ टेक्स्ट को नेचुरल वॉइसओवर (TTS) में बदला जा रहा है...';
                if (progress === 75) loaderText.innerText = '🎨 सिनेमैटिक विजुअल और टेक्स्ट कैप्शन रेंडर हो रहे हैं...';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('resultSection').style.display = 'block';
                    
                    // यूज़र के लिखे गए टेक्स्ट को वीडियो के ऊपर डिस्प्ले करना
                    document.getElementById('videoCaption').innerText = `"${topic}"`;

                    // ब्राउज़र की अपनी Text-to-Speech (आवाज़) से यूज़र के टेक्स्ट को बुलवाना
                    if ('speechSynthesis' in window) {
                        const utterance = new SpeechSynthesisUtterance(topic);
                        utterance.lang = lang;
                        utterance.rate = 1.0;
                        window.speechSynthesis.speak(utterance);
                    }
                    
                    const videoElem = document.getElementById('outputVideo');
                    videoElem.src = "https://www.w3schools.com/html/mov_bbb.mp4"; // वीडियो बैकग्राउंड
                    videoElem.play();
                }
            }, 800);
        }

        function buyPlan(price, coins) {
            if (confirm(`क्या आप ₹${price} का भुगतान करके अपने अकाउंट में ${coins} पॉइंट्स जोड़ना चाहते हैं?`)) {
                userCredits += coins;
                updateCreditsDisplay();
                alert(`🎉 बधाई हो! आपके अकाउंट में ₹${price} का रिचार्ज सफल रहा और ${coins} पॉइंट्स जोड़ दिए गए हैं।`);
            }
        }

        function downloadVideo() {
            alert('📥 आपके टेक्स्ट से बनी हुई रील डिवाइस में डाउनलोड हो रही है!');
        }

        function shareOnWhatsApp() {
            const topic = document.getElementById('reelTopic').value.trim();
            const text = encodeURIComponent(`मैंने ReelMitra.AI पर इस टेक्स्ट से AI वीडियो बनाई है: "${topic}"। आप भी बनाएं!`);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        }

        function shareSocial(platform) {
            alert(`🔗 ${platform} पर वीडियो शेयर करने के लिए तैयार की जा रही है!`);
        }

        function shareReferralLink() {
            const refLink = "https://jpmptop1.github.io/ReelMitra.Ai/?ref=jp_mishra";
            navigator.clipboard.writeText(refLink);
            alert('📋 रिफरल लिंक कॉपी हो गया है! इसे दोस्तों के साथ शेयर करें और फ्री पॉइंट्स पाएं।');
        }
    </script>
</body>
</html>
