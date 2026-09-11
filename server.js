<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelMitra.AI Pro - Long Video & Voice Studio</title>
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
        textarea, select, input[type="file"] { width: 100%; padding: 10px; background: #0b0f19; border: 1px solid #374151; border-radius: 8px; color: white; font-size: 13px; outline: none; }
        textarea:focus, select:focus { border-color: var(--primary); }
        textarea { resize: none; height: 85px; }

        .file-upload-box { border: 2px dashed #374151; padding: 10px; border-radius: 8px; text-align: center; background: #0b0f19; cursor: pointer; }

        .btn { width: 100%; padding: 11px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border: none; border-radius: 8px; color: white; font-size: 14px; font-weight: bold; cursor: pointer; transition: 0.3s; text-align: center; display: block; text-decoration: none;}
        .btn:hover { opacity: 0.9; }

        #loader { display: none; text-align: center; margin-top: 15px; }
        .spinner { width: 35px; height: 35px; border: 3px solid #374151; border-top: 3px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 8px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        #resultSection { display: none; margin-top: 15px; text-align: center; }
        
        .preview-container { position: relative; width: 100%; max-height: 480px; aspect-ratio: 9/16; background: #000; border-radius: 12px; overflow: hidden; margin-bottom: 12px; border: 2px solid #374151; display: flex; align-items: center; justify-content: center; }
        
        #outputImage { width: 100%; height: 100%; object-fit: cover; display: none; }
        #outputVideo { width: 100%; height: 100%; object-fit: cover; }
        
        .video-text-overlay {
            position: absolute;
            top: 15px;
            left: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.85);
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 13px;
            color: #fff;
            text-align: center;
            border: 1px solid var(--primary);
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(0,0,0,0.6);
            z-index: 5;
            line-height: 1.4;
        }

        .watermark-overlay { position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.7); padding: 3px 8px; border-radius: 4px; font-size: 10px; color: white; z-index: 5; }

        .action-buttons { display: flex; gap: 8px; margin-bottom: 10px; }
        .action-btn { flex: 1; padding: 10px; border-radius: 8px; border: none; font-size: 12px; font-weight: bold; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; text-decoration: none;}
        .bg-whatsapp { background-color: var(--whatsapp); }
        .bg-download { background-color: var(--accent); }

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
        <div class="coin-badge">🪙 <span id="coinCount">110</span> Pts</div>
    </div>

    <!-- मुख्य स्टूडियो पैनल -->
    <div class="container">
        <h2>1 से 3 मिनट AI वीडियो & वॉइस स्टूडियो</h2>
        <p class="subtitle">फोटो अपलोड करें, लंबी स्क्रिप्ट लिखें और पूरी आवाज़ के साथ वीडियो बनाएं!</p>

        <!-- 1. फोटो अपलोड सेक्शन -->
        <div class="form-group">
            <label>📸 अपनी फोटो या पोस्टर अपलोड करें</label>
            <div class="file-upload-box" onclick="document.getElementById('userPhotoFile').click()">
                <span id="fileNameDisplay" style="font-size: 12px; color: var(--text-muted);">📁 यहाँ क्लिक करके फोटो चुनें...</span>
                <input type="file" id="userPhotoFile" accept="image/*" style="display:none;" onchange="handlePhotoUpload(event)">
            </div>
        </div>

        <!-- 2. टेक्स्ट स्क्रिप्ट सेक्शन (1 से 3 मिनट के लिए लंबी कहानी) -->
        <div class="form-group">
            <label>✍️ लंबी स्क्रिप्ट या टॉपिक लिखें (1-3 मिनट के लिए)</label>
            <textarea id="reelTopic" placeholder="यहाँ हनुमान जी के 12 नाम या अपनी पूरी कविता/स्टोरी विस्तार से लिखें..."></textarea>
        </div>

        <div class="form-group">
            <label>🎙️ वॉइस भाषा और आवाज़</label>
            <select id="voiceStyle">
                <option value="hi-IN">हिंदी (Natural Pro Voice - Madhur)</option>
                <option value="en-US">English (Pro AI Voice)</option>
            </select>
        </div>

        <button class="btn" onclick="generateLongAiReel()">✨ Generate 1-3 Min Video & Voice (10 Pts)</button>

        <div id="loader">
            <div class="spinner"></div>
            <p id="loaderText" style="font-size: 12px; color: var(--text-muted);">लंबी स्क्रिप्ट और एचडी वॉइस तैयार हो रही है...</p>
        </div>

        <!-- रिजल्ट सेक्शन -->
        <div id="resultSection">
            <p style="color: var(--accent); font-weight: bold; margin-bottom: 8px; font-size: 13px;">✅ आपकी 1-3 मिनट की रील तैयार है!</p>
            
            <div class="preview-container">
                <div id="videoCaption" class="video-text-overlay">आपका टेक्स्ट यहाँ चलेगा</div>
                
                <img id="outputImage" alt="Uploaded Preview">
                <video id="outputVideo" controls autoplay loop style="display: none;">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                </video>
                
                <div class="watermark-overlay">⚡ ReelMitra.AI | JP Mishra</div>
            </div>

            <div class="action-buttons">
                <button class="action-btn bg-download" onclick="downloadResult()">📥 वीडियो डाउनलोड करें</button>
                <button class="action-btn bg-whatsapp" onclick="shareOnWhatsApp()">💬 WhatsApp शेयर</button>
            </div>
        </div>

        <!-- रिफरल प्रोग्राम बॉक्स -->
        <div class="referral-box">
            <p>🤝 <b>रिफरल प्रोग्राम:</b> दोस्तों को लिंक शेयर करें और हर जॉइनिंग पर पाएं <b>20 फ्री पॉइंट्स!</b></p>
            <button class="btn" style="padding: 8px; font-size: 12px;" onclick="shareReferralLink()">🔗 रिफरल लिंक कॉपी करें (+20 Pts)</button>
        </div>
    </div>

    <div class="footer">
        © 2026 ReelMitra.AI • Developed by <span>JP Mishra Digital</span>
    </div>

    <script>
        let userCredits = 110;
        let uploadedImageSrc = null;
        let speechSynthTimer = null;

        function updateCreditsDisplay() {
            document.getElementById('coinCount').innerText = userCredits;
        }

        function handlePhotoUpload(event) {
            const file = event.target.files[0];
            if (file) {
                document.getElementById('fileNameDisplay').innerText = "✅ " + file.name;
                const reader = new FileReader();
                reader.onload = function(e) {
                    uploadedImageSrc = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        function generateLongAiReel() {
            const topic = document.getElementById('reelTopic').value.trim();
            const lang = document.getElementById('voiceStyle').value;

            if (!topic) {
                alert('कृपया टेक्स्ट बॉक्स में लंबी कहानी या टॉपिक लिखें!');
                return;
            }

            if (userCredits < 10) {
                alert('आपके पॉइंट्स समाप्त हो गए हैं!');
                return;
            }

            userCredits -= 10;
            updateCreditsDisplay();

            document.getElementById('loader').style.display = 'block';
            document.getElementById('resultSection').style.display = 'none';

            // पुरानी आवाज़ बंद करें
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            if (speechSynthTimer) {
                clearInterval(speechSynthTimer);
            }

            let progress = 0;
            let loaderText = document.getElementById('loaderText');

            const interval = setInterval(() => {
                progress += 33;
                if (progress === 33) loaderText.innerText = '📸 फोटो और वीडियो फ्रेम तैयार हो रहे हैं...';
                if (progress === 66) loaderText.innerText = '🎙️ 1 से 3 मिनट का AI वॉइसओवर सिंक हो रहा है...';
                
                if (progress >= 99) {
                    clearInterval(interval);
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('resultSection').style.display = 'block';
                    
                    document.getElementById('videoCaption').innerText = topic;

                    // फोटो या वीडियो शो करना
                    if (uploadedImageSrc) {
                        document.getElementById('outputImage').src = uploadedImageSrc;
                        document.getElementById('outputImage').style.display = 'block';
                        document.getElementById('outputVideo').style.display = 'none';
                    } else {
                        document.getElementById('outputImage').style.display = 'none';
                        document.getElementById('outputVideo').style.display = 'block';
                        const vElem = document.getElementById('outputVideo');
                        vElem.currentTime = 0;
                        vElem.play();
                    }

                    // 1 से 3 मिनट तक आवाज़ को लगातार और स्पष्ट रूप से बोलने के लिए लूपिंग वॉइस इंजन
                    if ('speechSynthesis' in window) {
                        const speakText = () => {
                            const utterance = new SpeechSynthesisUtterance(topic);
                            utterance.lang = lang;
                            utterance.rate = 0.90; // धीमी और स्पष्ट आवाज़ ताकि लंबी चले
                            window.speechSynthesis.speak(utterance);
                        };

                        speakText(); // पहली बार बोलें

                        // अगर टेक्स्ट लंबा है, तो उसे 45 सेकंड बाद दोबारा रिपीट करें ताकि वीडियो लंबी (1-3 मिनट) तक आवाज़ के साथ चले
                        speechSynthTimer = setInterval(() => {
                            if (document.getElementById('resultSection').style.display === 'block') {
                                speakText();
                            } else {
                                clearInterval(speechSynthTimer);
                            }
                        }, 45000);
                    }
                }
            }, 800);
        }

        function downloadResult() {
            alert('📥 वीडियो डाउनलोडिंग शुरू हो गई है!');
        }

        function shareOnWhatsApp() {
            const topic = document.getElementById('reelTopic').value.trim();
            const text = encodeURIComponent(`मैंने ReelMitra.AI से अपनी नई 1-3 मिनट की AI रील बनाई: "${topic}"`);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        }

        function shareReferralLink() {
            const refLink = "https://jpmptop1.github.io/ReelMitra.Ai/?ref=jp_mishra";
            navigator.clipboard.writeText(refLink);
            userCredits += 20;
            updateCreditsDisplay();
            alert('📋 रिफरल लिंक कॉपी हो गया है! आपके अकाउंट में 20 फ्री पॉइंट्स जोड़ दिए गए हैं!');
        }
    </script>
</body>
</html>
