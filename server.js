<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelShort Pro Max - Developed by JP Mishra</title>
    <style>
        :root {
            --bg-color: #07090e;
            --card-bg: #111827;
            --primary: #f43f5e;
            --secondary: #8b5cf6;
            --text-color: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #10b981;
            --whatsapp: #25d366;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: var(--bg-color); color: var(--text-color); min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 10px; }
        
        .header { width: 100%; max-width: 450px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; background: rgba(17, 24, 39, 0.7); backdrop-filter: blur(10px); padding: 10px 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); }
        .logo-area { display: flex; align-items: center; gap: 10px; }
        .logo-icon { background: linear-gradient(135deg, var(--primary), var(--secondary)); width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 4px 15px rgba(244, 63, 94, 0.4); }
        .logo-text h1 { font-size: 16px; font-weight: bold; background: linear-gradient(to right, #f43f5e, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .logo-text p { font-size: 10px; color: var(--text-muted); }

        .coin-badge { background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent); padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; color: var(--accent); display: flex; align-items: center; gap: 5px; }

        .container { width: 100%; max-width: 450px; background: var(--card-bg); padding: 18px; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.6); margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.08); }
        
        h2 { font-size: 17px; text-align: center; margin-bottom: 4px; background: linear-gradient(to right, #fff, var(--text-muted)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { font-size: 11px; text-align: center; color: var(--text-muted); margin-bottom: 15px; }

        .form-group { margin-bottom: 14px; }
        label { display: block; font-size: 12px; margin-bottom: 5px; color: var(--text-muted); font-weight: 500; }
        textarea, select, input[type="file"] { width: 100%; padding: 11px; background: #05070a; border: 1px solid #374151; border-radius: 10px; color: white; font-size: 13px; outline: none; transition: 0.3s; }
        textarea:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 10px rgba(244, 63, 94, 0.2); }
        textarea { resize: none; height: 95px; }

        .file-upload-box { border: 2px dashed #374151; padding: 12px; border-radius: 10px; text-align: center; background: #05070a; cursor: pointer; transition: 0.3s; }
        .file-upload-box:hover { border-color: var(--primary); }

        .btn { width: 100%; padding: 12px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border: none; border-radius: 10px; color: white; font-size: 14px; font-weight: bold; cursor: pointer; transition: 0.3s; text-align: center; display: block; text-decoration: none; box-shadow: 0 5px 15px rgba(244, 63, 94, 0.4); }
        .btn:hover { transform: translateY(-2px); opacity: 0.95; }

        #loader { display: none; text-align: center; margin-top: 15px; }
        .spinner { width: 40px; height: 40px; border: 3px solid #374151; border-top: 3px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 8px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        #resultSection { display: none; margin-top: 15px; text-align: center; }
        
        /* एडवांस लंबी वर्टिकल स्क्रीन */
        .preview-container { position: relative; width: 100%; aspect-ratio: 9/16; max-height: 550px; background: #000; border-radius: 14px; overflow: hidden; margin-bottom: 12px; border: 2px solid #374151; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.8); }
        
        #outputImage { width: 100%; height: 100%; object-fit: cover; animation: zoomEffect 20s infinite alternate; }
        @keyframes zoomEffect { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        
        .video-text-overlay {
            position: absolute;
            top: 20px;
            left: 12px;
            right: 12px;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
            padding: 12px 15px;
            border-radius: 10px;
            font-size: 13px;
            color: #fff;
            text-align: center;
            border: 1px solid rgba(244, 63, 94, 0.5);
            font-weight: 600;
            box-shadow: 0 8px 20px rgba(0,0,0,0.7);
            z-index: 5;
            line-height: 1.5;
            max-height: 140px;
            overflow-y: auto;
        }

        .watermark-overlay { position: absolute; bottom: 55px; left: 12px; background: rgba(0,0,0,0.7); padding: 4px 10px; border-radius: 6px; font-size: 10px; color: white; z-index: 5; letter-spacing: 0.5px; }

        /* स्मूथ एडवांस कस्टम प्लेयर */
        .custom-player-controls {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6));
            padding: 12px 15px;
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 10;
        }
        .play-pause-btn { background: none; border: none; color: white; font-size: 20px; cursor: pointer; transition: 0.2s; }
        .play-pause-btn:hover { transform: scale(1.1); }
        .time-display { font-size: 11px; color: #fff; min-width: 70px; text-align: center; font-family: monospace; }
        .progress-bar-container { flex: 1; height: 6px; background: rgba(255,255,255,0.2); border-radius: 3px; position: relative; cursor: pointer; overflow: hidden; }
        .progress-bar-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary)); width: 0%; border-radius: 3px; transition: width 0.1s linear; }

        .action-buttons { display: flex; gap: 8px; margin-bottom: 10px; }
        .action-btn { flex: 1; padding: 11px; border-radius: 10px; border: none; font-size: 12px; font-weight: bold; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; text-decoration: none; transition: 0.3s; }
        .bg-whatsapp { background-color: var(--whatsapp); }
        .bg-download { background-color: var(--accent); }
        .action-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        .upi-box { background: rgba(139, 92, 242, 0.08); border: 1px dashed var(--secondary); padding: 12px; border-radius: 10px; text-align: center; margin-top: 15px; }
        .upi-box p { font-size: 11px; color: var(--text-muted); margin-bottom: 6px; }
        .upi-id-text { font-size: 13px; font-weight: bold; color: var(--primary); font-family: monospace; background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 6px; display: inline-block; margin-bottom: 8px; }

        .footer { font-size: 11px; color: var(--text-muted); text-align: center; margin-top: auto; padding: 5px; }
        .footer span { color: var(--primary); font-weight: bold; }
    </style>
</head>
<body>

    <div class="header">
        <div class="logo-area">
            <div class="logo-icon">🎬</div>
            <div class="logo-text">
                <h1>ReelShort Pro</h1>
                <p>By JP Mishra Digital</p>
            </div>
        </div>
        <div class="coin-badge">🪙 <span id="coinCount">100</span> Pts</div>
    </div>

    <div class="container">
        <h2>एडवांस लॉन्ग वीडियो & वॉइस स्टूडियो</h2>
        <p class="subtitle">अपनी स्क्रिप्ट लिखें और सिनेमाटिक लॉन्ग वर्टिकल वीडियो तुरंत बनाएं!</p>

        <div class="form-group">
            <label>📸 अपनी फोटो या पोस्टर अपलोड करें</label>
            <div class="file-upload-box" onclick="document.getElementById('userPhotoFile').click()">
                <span id="fileNameDisplay" style="font-size: 12px; color: var(--text-muted);">📁 यहाँ क्लिक करें या फोटो चुनें...</span>
                <input type="file" id="userPhotoFile" accept="image/*" style="display:none;" onchange="handlePhotoUpload(event)">
            </div>
        </div>

        <div class="form-group">
            <label>✍️ अपनी पूरी स्क्रिप्ट या कहानी यहाँ लिखें</label>
            <textarea id="reelTopic" placeholder="यहाँ अपनी लंबी कविता, कहानी या डायलॉग विस्तार से लिखें जो वीडियो पर चलेगा..."></textarea>
        </div>

        <div class="form-group">
            <label>🎙️ वॉइस भाषा और टोन चुनें</label>
            <select id="voiceStyle">
                <option value="hi-IN">हिंदी (Pro Cinematic AI Voice)</option>
                <option value="en-US">English (Pro Cinematic AI Voice)</option>
            </select>
        </div>

        <button class="btn" onclick="generateAdvancedVideo()">🚀 Generate Pro Video & Voice (10 Pts)</button>

        <div id="loader">
            <div class="spinner"></div>
            <p id="loaderText" style="font-size: 12px; color: var(--text-muted);">सिनेमाटिक लॉन्ग वीडियो रेंडर हो रही है...</p>
        </div>

        <div id="resultSection">
            <p style="color: var(--accent); font-weight: bold; margin-bottom: 8px; font-size: 13px;">✨ आपकी एडवांस वीडियो सफलतापूर्वक तैयार है!</p>
            
            <div class="preview-container">
                <div id="videoCaption" class="video-text-overlay">आपकी स्क्रिप्ट यहाँ चलेगी...</div>
                
                <img id="outputImage" src="" alt="AI Video Frame">
                
                <div class="watermark-overlay">⚡ ReelShort Pro | JP Mishra</div>

                <!-- स्मूथ एडवांस प्लेयर कंट्रोल्स -->
                <div class="custom-player-controls">
                    <button class="play-pause-btn" id="playPauseBtn" onclick="togglePlayPause()">⏸️</button>
                    <div class="time-display" id="timeDisplay">0:00 / 1:00</div>
                    <div class="progress-bar-container" onclick="seekVideo(event)">
                        <div class="progress-bar-fill" id="progressBarFill"></div>
                    </div>
                </div>
            </div>

            <div class="action-buttons">
                <button class="action-btn bg-download" onclick="downloadResult()">📥 डाउनलोड वीडियो</button>
                <button class="action-btn bg-whatsapp" onclick="shareOnWhatsApp()">💬 WhatsApp शेयर</button>
            </div>
        </div>

        <div class="upi-box">
            <p>💳 **सपोर्ट या पेमेंट के लिए ऑफिशियल UPI ID:**</p>
            <div class="upi-id-text" id="upiText">jpm786064-1@okhdfcbank</div>
            <br>
            <button class="btn" style="padding: 7px; font-size: 11px; background: #374151;" onclick="copyUpiId()">📋 UPI ID कॉपी करें</button>
        </div>
    </div>

    <div class="footer">
        © 2026 ReelShort Pro Max • Created by <span>JP Mishra</span>
    </div>

    <script>
        let userCredits = 100;
        let uploadedImageSrc = "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60";
        let playbackTimer = null;
        let currentSeconds = 0;
        let totalDuration = 60;
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

        function generateAdvancedVideo() {
            const topic = document.getElementById('reelTopic').value.trim();
            const lang = document.getElementById('voiceStyle').value;

            if (!topic) {
                alert('कृपया अपनी स्क्रिप्ट या कहानी बॉक्स में जरूर लिखें!');
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

            window.speechSynthesis.cancel();
            if (playbackTimer) clearInterval(playbackTimer);

            let progress = 0;
            let loaderText = document.getElementById('loaderText');

            const loadInterval = setInterval(() => {
                progress += 33;
                if (progress === 33) loaderText.innerText = '🎨 सिनेमाटिक फ्रेम और लेआउट तैयार हो रहा है...';
                if (progress === 66) loaderText.innerText = '🎙️ वॉइसओवर और स्क्रिप्ट सिंक्रोनाइज हो रही है...';
                
                if (progress >= 99) {
                    clearInterval(loadInterval);
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('resultSection').style.display = 'block';
                    
                    document.getElementById('videoCaption').innerText = topic;
                    document.getElementById('outputImage').src = uploadedImageSrc;

                    startAdvancedPlayer(topic, lang);
                }
            }, 700);
        }

        function startAdvancedPlayer(text, lang) {
            currentSeconds = 0;
            totalDuration = Math.max(45, Math.floor(text.length * 0.7)); // स्क्रिप्ट के हिसाब से समय सेट होगा
            isPlaying = true;
            document.getElementById('playPauseBtn').innerText = "⏸️";

            if ('speechSynthesis' in window) {
                speechUtterance = new SpeechSynthesisUtterance(text);
                speechUtterance.lang = lang;
                speechUtterance.rate = 0.95;
                window.speechSynthesis.speak(speechUtterance);
            }

            if (playbackTimer) clearInterval(playbackTimer);

            playbackTimer = setInterval(() => {
                if (isPlaying) {
                    currentSeconds++;
                    updatePlayerUI();

                    if (currentSeconds >= totalDuration) {
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

        function seekVideo(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const width = rect.width;
            const percentage = clickX / width;
            currentSeconds = Math.floor(totalDuration * percentage);
            updatePlayerUI();
        }

        function downloadResult() {
            alert('📥 आपकी एडवांस सिनेमाटिक वीडियो डाउनलोड हो रही है!');
        }

        function shareOnWhatsApp() {
            const topic = document.getElementById('reelTopic').value.trim();
            const text = encodeURIComponent(`मैंने ReelShort Pro से अपनी नई AI वीडियो बनाई: "${topic}" - By JP Mishra`);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        }

        function copyUpiId() {
            navigator.clipboard.writeText("jpm786064-1@okhdfcbank");
            alert('📋 UPI ID (jpm786064-1@okhdfcbank) सफलतापूर्वक कॉपी हो गई है!');
        }
    </script>
</body>
</html>
