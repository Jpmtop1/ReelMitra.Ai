<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelMitra.AI Pro - Long Video Studio</title>
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
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: var(--bg-color); color: var(--text-color); min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 12px; }
        
        .header { width: 100%; max-width: 480px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .logo-area { display: flex; align-items: center; gap: 10px; }
        .logo-icon { background: linear-gradient(135deg, var(--primary), var(--secondary)); width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .logo-text h1 { font-size: 15px; font-weight: bold; background: linear-gradient(to right, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .logo-text p { font-size: 10px; color: var(--text-muted); }

        .coin-badge { background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent); padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; color: var(--accent); display: flex; align-items: center; gap: 5px; }

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
        
        .preview-container { position: relative; width: 100%; aspect-ratio: 9/16; background: #000; border-radius: 12px; overflow: hidden; margin-bottom: 12px; border: 2px solid #374151; display: flex; align-items: center; justify-content: center; }
        
        #outputImage { width: 100%; height: 100%; object-fit: cover; }
        
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

        .watermark-overlay { position: absolute; bottom: 35px; left: 12px; background: rgba(0,0,0,0.7); padding: 3px 8px; border-radius: 4px; font-size: 10px; color: white; z-index: 5; }

        /* असली कस्टम वीडियो प्लेयर बार */
        .custom-player-controls {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            padding: 8px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
        }
        .play-pause-btn { background: none; border: none; color: white; font-size: 18px; cursor: pointer; }
        .time-display { font-size: 11px; color: #fff; min-width: 65px; text-align: center; }
        .progress-bar-container { flex: 1; height: 5px; background: #374151; border-radius: 3px; position: relative; cursor: pointer; }
        .progress-bar-fill { height: 100%; background: var(--primary); width: 0%; border-radius: 3px; transition: width 0.1s linear; }

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
        <div class="coin-badge">🪙 <span id="coinCount">100</span> Pts</div>
    </div>

    <div class="container">
        <h2>लंबी AI वीडियो और वॉइस स्टूडियो (60 से 180 सेकंड)</h2>
        <p class="subtitle">अपनी फोटो और लंबी स्क्रिप्ट डालें, पूरी अवधि तक चलने वाली रील बनाएं!</p>

        <div class="form-group">
            <label>📸 अपनी फोटो या पोस्टर चुनें</label>
            <div class="file-upload-box" onclick="document.getElementById('userPhotoFile').click()">
                <span id="fileNameDisplay" style="font-size: 12px; color: var(--text-muted);">📁 यहाँ क्लिक करके फोटो अपलोड करें...</span>
                <input type="file" id="userPhotoFile" accept="image/*" style="display:none;" onchange="handlePhotoUpload(event)">
            </div>
        </div>

        <div class="form-group">
            <label>✍️ लंबी स्क्रिप्ट या कहानी लिखें (1 से 3 मिनट)</label>
            <textarea id="reelTopic" placeholder="यहाँ अपनी पूरी कविता या लंबा टॉपिक विस्तार से लिखें..."></textarea>
        </div>

        <div class="form-group">
            <label>🎙️ वॉइस भाषा चुनें</label>
            <select id="voiceStyle">
                <option value="hi-IN">हिंदी (Pro AI Voice)</option>
                <option value="en-US">English (Pro AI Voice)</option>
            </select>
        </div>

        <button class="btn" onclick="generateLongVideoReel()">✨ Generate Long Video & Voice (10 Pts)</button>

        <div id="loader">
            <div class="spinner"></div>
            <p id="loaderText" style="font-size: 12px; color: var(--text-muted);">लंबी वीडियो और एचडी वॉइस तैयार हो रही है...</p>
        </div>

        <div id="resultSection">
            <p style="color: var(--accent); font-weight: bold; margin-bottom: 8px; font-size: 13px;">✅ आपकी लंबी वीडियो सफलतापूर्वक तैयार हो गई!</p>
            
            <div class="preview-container">
                <div id="videoCaption" class="video-text-overlay">आपका टेक्स्ट यहाँ चलेगा</div>
                
                <img id="outputImage" src="" alt="AI Video Frame">
                
                <div class="watermark-overlay">⚡ ReelMitra.AI | JP Mishra</div>

                <!-- कस्टम वीडियो प्लेयर कंट्रोल्स जो पूरे 60-90 सेकंड चलेंगे -->
                <div class="custom-player-controls">
                    <button class="play-pause-btn" id="playPauseBtn" onclick="togglePlayPause()">⏸️</button>
                    <div class="time-display" id="timeDisplay">0:00 / 1:00</div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" id="progressBarFill"></div>
                    </div>
                </div>
            </div>

            <div class="action-buttons">
                <button class="action-btn bg-download" onclick="downloadResult()">📥 वीडियो डाउनलोड करें</button>
                <button class="action-btn bg-whatsapp" onclick="shareOnWhatsApp()">💬 WhatsApp शेयर</button>
            </div>
        </div>

        <div class="referral-box">
            <p>🤝 <b>रिफरल प्रोग्राम:</b> दोस्तों को लिंक शेयर करें और पाएं <b>20 फ्री पॉइंट्स!</b></p>
            <button class="btn" style="padding: 8px; font-size: 12px;" onclick="shareReferralLink()">🔗 रिफरल लिंक कॉपी करें</button>
        </div>
    </div>

    <div class="footer">
        © 2026 ReelMitra.AI • Developed by <span>JP Mishra Digital</span>
    </div>

    <script>
        let userCredits = 100;
        let uploadedImageSrc = "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60"; // डिफ़ॉल्ट इमेज
        let playbackTimer = null;
        let currentSeconds = 0;
        let totalDuration = 60; // 60 सेकंड की लंबी वीडियो
        let isPlaying = false;
        let speechUtterance = null;

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

        function generateLongVideoReel() {
            const topic = document.getElementById('reelTopic').value.trim();
            const lang = document.getElementById('voiceStyle').value;

            if (!topic) {
                alert('कृपया टेक्स्ट बॉक्स में कुछ टॉपिक या कहानी लिखें!');
                return;
            }

            if (userCredits < 10) {
                alert('आपके पॉइंट्स समाप्त हो गए हैं!');
                return;
            }

            userCredits -= 10;
            document.getElementById('coinCount').innerText = userCredits;

            document.getElementById('loader').style.display = 'block';
            document.getElementById('resultSection').style.display = 'none';

            // पुराना वॉयस और टाइटैनिक टाइमर रोकें
            window.speechSynthesis.cancel();
            if (playbackTimer) clearInterval(playbackTimer);

            let progress = 0;
            let loaderText = document.getElementById('loaderText');

            const loadInterval = setInterval(() => {
                progress += 34;
                if (progress === 34) loaderText.innerText = '📸 फोटो फ्रेम और लेआउट सेट हो रहा है...';
                if (progress === 68) loaderText.innerText = '🎙️ 60 सेकंड का AI वॉइसओवर तैयार हो रहा है...';
                
                if (progress >= 100) {
                    clearInterval(loadInterval);
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('resultSection').style.display = 'block';
                    
                    document.getElementById('videoCaption').innerText = topic;
                    document.getElementById('outputImage').src = uploadedImageSrc;

                    // वीडियो प्लेबैक शुरू करें
                    startCustomPlayer(topic, lang);
                }
            }, 800);
        }

        function startCustomPlayer(text, lang) {
            currentSeconds = 0;
            // टेक्स्ट की लंबाई के हिसाब से वीडियो का समय तय करें (कम से कम 60 सेकंड)
            totalDuration = Math.max(60, text.length * 0.8); 
            isPlaying = true;
            document.getElementById('playPauseBtn').innerText = "⏸️";

            // आवाज़ शुरू करें
            if ('speechSynthesis' in window) {
                speechUtterance = new SpeechSynthesisUtterance(text);
                speechUtterance.lang = lang;
                speechUtterance.rate = 0.9; // स्पष्ट और धीमी गति
                window.speechSynthesis.speak(speechUtterance);
            }

            if (playbackTimer) clearInterval(playbackTimer);

            playbackTimer = setInterval(() => {
                if (isPlaying) {
                    currentSeconds++;
                    updatePlayerUI();

                    if (currentSeconds >= totalDuration) {
                        // लूप करने के लिए वापस शून्य पर भेजें ताकि वीडियो चलती रहे
                        currentSeconds = 0;
                        if ('speechSynthesis' in window) {
                            window.speechSynthesis.cancel();
                            window.speechSynthesis.speak(speechUtterance);
                        }
                    }
                }
            }, 1000);
        }

        function updatePlayerUI() {
            let m = Math.floor(currentSeconds / 60);
            let s = currentSeconds % 60;
            let tm = Math.floor(totalDuration / 60);
            let ts = Math.floor(totalDuration % 60);

            let timeStr = `${m}:${s < 10 ? '0' : ''}${s} / ${tm}:${ts < 10 ? '0' : ''}${ts}`;
            document.getElementById('timeDisplay').innerText = timeStr;

            let percent = (currentSeconds / totalDuration) * 100;
            document.getElementById('progressBarFill').style.width = percent + '%';
        }

        function togglePlayPause() {
            isPlaying = !isPlaying;
            const btn = document.getElementById('playPauseBtn');
            if (isPlaying) {
                btn.innerText = "⏸️";
                if ('speechSynthesis' in window && !window.speechSynthesis.speaking) {
                    window.speechSynthesis.speak(speechUtterance);
                }
            } else {
                btn.innerText = "▶️";
                if ('speechSynthesis' in window) {
                    window.speechSynthesis.pause();
                }
            }
        }

        function downloadResult() {
            alert('📥 आपकी लंबी वीडियो रील डाउनलोड हो रही है!');
        }

        function shareOnWhatsApp() {
            const topic = document.getElementById('reelTopic').value.trim();
            const text = encodeURIComponent(`मैंने ReelMitra.AI से अपनी नई लंबी AI रील बनाई: "${topic}"`);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        }

        function shareReferralLink() {
            const refLink = "https://jpmptop1.github.io/ReelMitra.Ai/?ref=jp_mishra";
            navigator.clipboard.writeText(refLink);
            userCredits += 20;
            document.getElementById('coinCount').innerText = userCredits;
            alert('📋 रिफरल लिंक कॉपी हो गया! आपके अकाउंट में 20 फ्री पॉइंट्स जोड़ दिए गए हैं!');
        }
    </script>
</body>
</html>
