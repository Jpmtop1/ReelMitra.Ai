ब् <!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelMitra.Ai Pro - Developed by JP Mishra</title>
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
            --youtube: #ff0000;
            --facebook: #1877f2;
            --insta: #e4405f;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: var(--bg-color); color: var(--text-color); min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 10px; }
        
        .header { width: 100%; max-width: 450px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; background: rgba(17, 24, 39, 0.8); backdrop-filter: blur(10px); padding: 10px 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); }
        .logo-area { display: flex; align-items: center; gap: 10px; }
        .logo-icon { background: linear-gradient(135deg, var(--primary), var(--secondary)); width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 4px 15px rgba(244, 63, 94, 0.4); }
        .logo-text h1 { font-size: 16px; font-weight: bold; background: linear-gradient(to right, #f43f5e, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .logo-text p { font-size: 10px; color: var(--text-muted); }

        .coin-badge { background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent); padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; color: var(--accent); display: flex; align-items: center; gap: 5px; }

        .container { width: 100%; max-width: 450px; background: var(--card-bg); padding: 18px; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.6); margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.08); }
        
        /* टैब स्विचिंग स्टाइल्स */
        .tab-menu { display: flex; background: #05070a; border-radius: 10px; padding: 4px; margin-bottom: 15px; border: 1px solid #374151; }
        .tab-btn { flex: 1; padding: 8px; text-align: center; font-size: 12px; font-weight: bold; color: var(--text-muted); background: none; border: none; border-radius: 8px; cursor: pointer; transition: 0.3s; }
        .tab-btn.active { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; box-shadow: 0 4px 12px rgba(244,63,94,0.3); }

        .tab-content { display: none; }
        .tab-content.active { display: block; }

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
        
        .preview-container { position: relative; width: 100%; aspect-ratio: 9/16; max-height: 520px; background: #000; border-radius: 14px; overflow: hidden; margin-bottom: 12px; border: 2px solid #374151; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.8); }
        
        #outputMedia { width: 100%; height: 100%; object-fit: cover; }
        
        .video-text-overlay {
            position: absolute;
            top: 15px;
            left: 12px;
            right: 12px;
            background: rgba(0, 0, 0, 0.82);
            backdrop-filter: blur(8px);
            padding: 12px 14px;
            border-radius: 10px;
            font-size: 13px;
            color: #fff;
            text-align: center;
            border: 1px solid rgba(244, 63, 94, 0.5);
            font-weight: 600;
            z-index: 5;
            line-height: 1.5;
            max-height: 130px;
            overflow-y: auto;
        }

        .watermark-overlay { position: absolute; bottom: 15px; right: 12px; background: rgba(0,0,0,0.75); padding: 4px 10px; border-radius: 6px; font-size: 10px; color: white; z-index: 5; letter-spacing: 0.5px; border: 1px solid rgba(255,255,255,0.1); }

        .action-buttons { display: flex; gap: 8px; margin-bottom: 10px; }
        .action-btn { flex: 1; padding: 11px; border-radius: 10px; border: none; font-size: 12px; font-weight: bold; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; text-decoration: none; transition: 0.3s; }
        .bg-whatsapp { background-color: var(--whatsapp); }
        .bg-download { background-color: var(--accent); }
        .action-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        .social-share-row { display: flex; gap: 6px; margin-bottom: 12px; }
        .social-btn { flex: 1; padding: 8px; border-radius: 8px; border: none; font-size: 11px; font-weight: bold; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; }
        .bg-yt { background-color: var(--youtube); }
        .bg-fb { background-color: var(--facebook); }
        .bg-insta { background-color: var(--insta); }

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
                <h1>ReelMitra.Ai Pro</h1>
                <p>JP Mishra Digital Studio</p>
            </div>
        </div>
        <div class="coin-badge">🪙 <span id="coinCount">50</span> Pts</div>
    </div>

    <div class="container">
        <!-- टैब मेनू -->
        <div class="tab-menu">
            <button class="tab-btn active" onclick="switchTab('textTab')">✍️ Text to Reel</button>
            <button class="tab-btn" onclick="switchTab('photoTab')">📸 Photo to Video</button>
        </div>

        <!-- टैब 1: टेक्स्ट से रील -->
        <div id="textTab" class="tab-content active">
            <h2>टेक्स्ट से वायरल AI रील बनाएँ</h2>
            <p class="subtitle">अपनी कविता या कहानी लिखें और तुरंत AI वीडियो बनाएं!</p>

            <div class="form-group">
                <label>reel का टॉपिक या प्रॉम्प्ट</label>
                <textarea id="reelTopic" placeholder="यहाँ अपनी स्क्रिप्ट लिखें (जैसे: हनुमान जी के 12 नाम)...">हनुमान जी के 12 नाम</textarea>
            </div>

            <div class="form-group">
                <label>वॉइस भाषा</label>
                <select id="voiceStyle">
                    <option value="hi-IN">हिंदी (पुरुष - Madhur)</option>
                    <option value="en-US">English (Pro Voice)</option>
                </select>
            </div>

            <div class="form-group">
                <label>फ़ॉर्मेट (Aspect)</label>
                <select id="aspectRatio">
                    <option value="9:16">9:16 (Shorts/Reels)</option>
                    <option value="16:9">16:9 (YouTube Landscape)</option>
                </select>
            </div>

            <button class="btn" onclick="generateAiReel()">✨ Generate AI Reel (10 Pts)</button>
        </div>

        <!-- टैब 2: फोटो से वीडियो -->
        <div id="photoTab" class="tab-content">
            <h2>फोटो से सिनेमाटिक वीडियो</h2>
            <p class="subtitle">अपनी इमेज अपलोड करें और उस पर टेक्स्ट चलाएं!</p>

            <div class="form-group">
                <label>अपनी फोटो अपलोड करें</label>
                <div class="file-upload-box" onclick="document.getElementById('photoInput').click()">
                    <span id="uploadStatus" style="font-size: 12px; color: var(--text-muted);">📁 यहाँ क्लिक करके फोटो चुनें...</span>
                    <input type="file" id="photoInput" accept="image/*" style="display:none;" onchange="handleImageUpload(event)">
                </div>
            </div>

            <div class="form-group">
                <label>फोटो के ऊपर दिखने वाला टेक्स्ट</label>
                <textarea id="photoCaptionText" placeholder="फोटो पर चलने वाला टेक्स्ट यहाँ लिखें..."></textarea>
            </div>

            <button class="btn" onclick="generatePhotoVideo()">🚀 Create Photo Video (10 Pts)</button>
        </div>

        <!-- लोडर -->
        <div id="loader">
            <div class="spinner"></div>
            <p id="loaderText" style="font-size: 12px; color: var(--text-muted);">AI रील रेंडर हो रही है...</p>
        </div>

        <!-- रिजल्ट सेक्शन -->
        <div id="resultSection">
            <p style="color: var(--accent); font-weight: bold; margin-bottom: 8px; font-size: 13px;">✅ रील सफलतापूर्वक तैयार हो गई!</p>
            
            <div class="preview-container">
                <div id="videoCaption" class="video-text-overlay">स्क्रिप्ट यहाँ दिखेगी...</div>
                <video id="outputMedia" controls autoplay loop playsinline></video>
                <div class="watermark-overlay">⚡ JP Mishra Digital</div>
            </div>

            <div class="action-buttons">
                <a id="downloadBtn" href="#" class="action-btn bg-download" download="reelmitra_video.mp4">📥 डाउनलोड करें</a>
                <button class="action-btn bg-whatsapp" onclick="shareOnWhatsApp()">💬 WhatsApp शेयर</button>
            </div>

            <div class="social-share-row">
                <button class="social-btn bg-yt" onclick="shareSocial('YouTube')">▶️ YT Studio</button>
                <button class="social-btn bg-fb" onclick="shareSocial('Facebook')">📘 Facebook</button>
                <button class="social-btn bg-insta" onclick="shareSocial('Instagram')">📸 Insta</button>
            </div>
        </div>

        <div class="upi-box">
            <p>💳 **ऑफिशियल UPI ID (सपोर्ट हेतु):**</p>
            <div class="upi-id-text">jpm786064-1@okhdfcbank</div>
            <br>
            <button class="btn" style="padding: 7px; font-size: 11px; background: #374151;" onclick="copyUpiId()">📋 UPI ID कॉपी करें</button>
        </div>
    </div>

    <div class="footer">
        © 2026 ReelMitra.Ai • Created by <span>JP Mishra</span>
    </div>

    <script>
        let userCredits = 50;
        let customUploadedImage = "";

        function switchTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            if(tabId === 'textTab') {
                document.querySelectorAll('.tab-btn')[0].classList.add('active');
                document.getElementById('textTab').classList.add('active');
            } else {
                document.querySelectorAll('.tab-btn')[1].classList.add('active');
                document.getElementById('photoTab').classList.add('active');
            }
        }

        function handleImageUpload(event) {
            const file = event.target.files[0];
            if(file) {
                document.getElementById('uploadStatus').innerText = "✅ " + file.name;
                const reader = new FileReader();
                reader.onload = function(e) {
                    customUploadedImage = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        function generateAiReel() {
            const topic = document.getElementById('reelTopic').value.trim();
            const lang = document.getElementById('voiceStyle').value;

            if(!topic) {
                alert('कृपया रील का टॉपिक या स्क्रिप्ट लिखें!');
                return;
            }

            if(userCredits < 10) {
                alert('आपके पॉइंट्स समाप्त हो गए हैं!');
                return;
            }

            userCredits -= 10;
            document.getElementById('coinCount').innerText = userCredits;

            runGenerationProcess(topic, lang, "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4");
        }

        function generatePhotoVideo() {
            const caption = document.getElementById('photoCaptionText').value.trim();
            if(!caption) {
                alert('कृपया फोटो पर दिखाने के लिए टेक्स्ट लिखें!');
                return;
            }

            if(userCredits < 10) {
                alert('आपके पॉइंट्स समाप्त हो गए हैं!');
                return;
            }

            userCredits -= 10;
            document.getElementById('coinCount').innerText = userCredits;

            let videoSource = customUploadedImage || "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
            runGenerationProcess(caption, "hi-IN", videoSource);
        }

        function runGenerationProcess(text, lang, mediaSrc) {
            document.getElementById('loader').style.display = 'block';
            document.getElementById('resultSection').style.display = 'none';

            let loaderText = document.getElementById('loaderText');
            
            setTimeout(() => { loaderText.innerText = '🎙️ AI वॉइसओवर और स्क्रिप्ट सिंक्रोनाइज हो रही है...'; }, 1200);
            setTimeout(() => { loaderText.innerText = '🎬 9:16 सिनेमाटिक वीडियो लेआउट तैयार हो रहा है...'; }, 2500);

            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                document.getElementById('resultSection').style.display = 'block';

                document.getElementById('videoCaption').innerText = text;
                const mediaElement = document.getElementById('outputMedia');
                mediaElement.src = mediaSrc;
                document.getElementById('downloadBtn').href = mediaSrc;

                if ('speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                    let utterance = new SpeechSynthesisUtterance(text);
                    utterance.lang = lang;
                    utterance.rate = 0.95;
                    window.speechSynthesis.speak(utterance);
                }

            }, 3500);
        }

        function shareOnWhatsApp() {
            const topic = document.getElementById('reelTopic').value || "AI Reel";
            const text = encodeURIComponent(`मैंने ReelMitra.Ai से अपनी नई AI वीडियो बनाई: "${topic}" - By JP Mishra`);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        }

        function shareSocial(platform) {
            alert(`🔗 आपकी वीडियो ${platform} पर शेयर करने के लिए तैयार है!`);
        }

        function copyUpiId() {
            navigator.clipboard.writeText("jpm786064-1@okhdfcbank");
            alert('📋 UPI ID (jpm786064-1@okhdfcbank) सफलतापूर्वक कॉपी हो गई है!');
        }
    </script>
</body>
</html>
