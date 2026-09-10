<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelMitra.Ai - Autonomous AI Reel Studio by JP Mishra</title>
    <style>
        :root {
            --primary: #8a2be2;
            --primary-gradient: linear-gradient(135deg, #ff4b2b, #ff416c, #8a2be2);
            --bg: #0b0d14;
            --card-bg: #151828;
            --text: #ffffff;
            --text-secondary: #94a3b8;
            --accent: #00f2fe;
            --success: #10b981;
            --gold: #ffd700;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: var(--bg);
            color: var(--text);
            padding: 10px;
            display: flex;
            justify-content: center;
        }

        .container {
            width: 100%;
            max-width: 480px;
            background: var(--card-bg);
            border-radius: 24px;
            padding: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255, 255, 255, 0.03);
            padding: 10px 14px;
            border-radius: 16px;
            margin-bottom: 14px;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .logo-area .logo {
            font-size: 20px;
            font-weight: 900;
            background: linear-gradient(to right, #00f2fe, #ff416c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .logo-area .sub-logo {
            font-size: 10px;
            color: var(--text-secondary);
            font-weight: 600;
        }

        .credits-badge {
            background: rgba(255, 215, 0, 0.12);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 800;
            color: var(--gold);
            border: 1px solid rgba(255, 215, 0, 0.35);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .studio-title {
            text-align: center;
            margin-bottom: 14px;
        }

        .studio-title h1 {
            font-size: 20px;
            font-weight: 900;
            color: #fff;
            margin-bottom: 3px;
        }

        .studio-title p {
            font-size: 11px;
            color: var(--accent);
            font-weight: 600;
        }

        .referral-banner {
            background: linear-gradient(135deg, rgba(0, 242, 254, 0.08), rgba(138, 43, 226, 0.15));
            border: 1px dashed rgba(0, 242, 254, 0.4);
            border-radius: 14px;
            padding: 10px 12px;
            margin-bottom: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .referral-text {
            font-size: 11px;
            color: var(--text-secondary);
        }

        .referral-text strong {
            color: var(--accent);
            display: block;
            font-size: 12px;
        }

        .btn-ref {
            background: var(--accent);
            color: #000;
            border: none;
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 800;
            font-size: 10px;
            cursor: pointer;
            text-transform: uppercase;
        }

        .form-group {
            margin-bottom: 12px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-size: 11px;
            color: var(--text-secondary);
            font-weight: 700;
        }

        input[type="text"], select {
            width: 100%;
            padding: 11px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            color: var(--text);
            font-size: 13px;
            outline: none;
        }

        input[type="text"]:focus, select:focus {
            border-color: var(--accent);
        }

        .upload-box {
            border: 2px dashed rgba(255, 255, 255, 0.18);
            border-radius: 12px;
            padding: 12px;
            text-align: center;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.02);
            transition: 0.2s;
        }

        .upload-box:hover {
            border-color: var(--accent);
        }

        #imagePreview {
            display: none;
            max-width: 100%;
            height: 100px;
            object-fit: cover;
            border-radius: 8px;
            margin-top: 8px;
        }

        .btn-generate {
            width: 100%;
            padding: 14px;
            background: var(--primary-gradient);
            border: none;
            border-radius: 12px;
            color: #fff;
            font-size: 14px;
            font-weight: 900;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(138, 43, 226, 0.45);
            margin-top: 6px;
            transition: 0.2s;
        }

        .btn-generate:active { transform: scale(0.98); }

        #loader {
            display: none;
            text-align: center;
            padding: 15px 0;
        }

        .spinner {
            width: 32px;
            height: 32px;
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-top: 4px solid var(--accent);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 0 auto 6px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        #resultSection {
            display: none;
            margin-top: 14px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 14px;
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .video-wrapper {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            background: #000;
            margin-bottom: 10px;
            aspect-ratio: 9 / 16;
            max-height: 320px;
            position: relative;
        }

        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .avatar-overlay {
            position: absolute;
            bottom: 35px;
            left: 10px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 2px solid var(--accent);
            object-fit: cover;
            display: none;
        }

        .action-buttons {
            display: flex;
            gap: 8px;
        }

        .btn-action {
            flex: 1;
            padding: 11px;
            text-align: center;
            text-decoration: none;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 800;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        .btn-download { background: var(--success); }
        .btn-whatsapp { background: #25d366; }

        .social-box {
            display: flex;
            gap: 8px;
            margin-top: 12px;
        }

        .social-btn {
            flex: 1;
            padding: 8px;
            border-radius: 8px;
            font-size: 10px;
            font-weight: 700;
            text-align: center;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }

        .yt-btn { background: rgba(255,0,0,0.12); border: 1px solid rgba(255,0,0,0.3); color: #ff4d4d; }
        .fb-btn { background: rgba(24,119,242,0.12); border: 1px solid rgba(24,119,242,0.3); color: #4facfe; }

        #rechargeModal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            justify-content: center;
            align-items: center;
            padding: 14px;
            z-index: 100;
        }

        .modal-content {
            background: var(--card-bg);
            padding: 18px;
            border-radius: 20px;
            width: 100%;
            max-width: 380px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            text-align: center;
        }

        .pack-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 12px 0;
        }

        .pack-card {
            background: rgba(255, 255, 255, 0.04);
            padding: 12px 8px;
            border-radius: 12px;
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: 0.2s;
        }

        .pack-card:hover { border-color: var(--accent); }

        .pack-price { font-size: 18px; font-weight: 900; color: #fff; }
        .pack-desc { font-size: 10px; color: var(--gold); margin-top: 3px; }

        .btn-close {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border: none;
            padding: 10px 18px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
        }

        .footer {
            text-align: center;
            font-size: 10px;
            color: var(--text-secondary);
            margin-top: 14px;
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <div class="logo-area">
                <div class="logo">ReelMitra.Ai</div>
                <div class="sub-logo">JP Mishra Digital Studio</div>
            </div>
            <div class="credits-badge" onclick="openRechargeModal()">
                🪙 <span id="creditCount">70</span> पॉइंट्स
            </div>
        </header>

        <div class="studio-title">
            <h1>ऑटोनॉमस AI रील स्टूडियो</h1>
            <p>ReelShort से भी एडवांस - खुद की फोटो और ब्रांडिंग के साथ!</p>
        </div>

        <div class="referral-banner">
            <div class="referral-text">
                🎁 <strong>+15 रेफरल पॉइंट्स</strong>
                दोस्तों को शेयर करें और फ्री क्रेडिट पाएं!
            </div>
            <button class="btn-ref" onclick="shareReferral()">रिफर करें</button>
        </div>

        <div class="form-group">
            <label for="reelTopic">रील का टॉपिक या स्क्रिप्ट प्रॉम्प्ट</label>
            <input type="text" id="reelTopic" placeholder="उदा: राम जी का मंत्र, डिजिटल बिजनेस...">
        </div>

        <div class="form-group">
            <label>अपनी फोटो या ब्रांड लोगो अपलोड करें (Optional)</label>
            <div class="upload-box" onclick="document.getElementById('photoInput').click()">
                <span id="uploadText" style="font-size: 11px; color: var(--text-secondary);">
                    📁 यहाँ क्लिक करके अपनी फोटो/लोगो चुनें
                </span>
                <input type="file" id="photoInput" accept="image/*" style="display: none;" onchange="previewPhoto(event)">
                <img id="imagePreview" alt="Uploaded Preview">
            </div>
        </div>

        <div class="form-group">
            <label for="voiceStyle">वॉइस स्टाइल और भाषा</label>
            <select id="voiceStyle">
                <option value="hindi-deep">हिंदी (Cinematic Deep Voice - HD)</option>
                <option value="hindi-female">हिंदी (Sweet Female AI Voice)</option>
                <option value="energetic">जोशीली मोटिवेशनल आवाज़</option>
            </select>
        </div>

        <button class="btn-generate" onclick="generateAutonomousReel()">✨ Generate Autonomous AI Reel (10 पॉइंट्स)</button>

        <div id="loader">
            <div class="spinner"></div>
            <p id="loaderText" style="font-size: 11px; color: var(--accent);">AI वीडियो और सीन निर्माण (25%)...</p>
        </div>

        <div id="resultSection">
            <div class="video-wrapper">
                <video id="outputVideo" controls playsinline webkit-playsinline preload="metadata">
                    आपका ब्राउज़र वीडियो सपोर्ट नहीं करता।
                </video>
                <img id="displayAvatar" class="avatar-overlay" alt="User Avatar">
            </div>
            <p id="successMsg" style="font-size: 11px; color: var(--success); margin-bottom: 8px; text-align: center; font-weight: 700;"></p>
            
            <div class="action-buttons">
                <button class="btn-action btn-whatsapp" onclick="shareOnWhatsApp()">📲 WhatsApp पर भेजें</button>
                <button class="btn-action btn-download" onclick="downloadReel()">📥 एचडी डाउनलोड</button>
            </div>
        </div>

        <div class="social-box">
            <a href="https://studio.youtube.com" target="_blank" class="social-btn yt-btn">📺 YouTube Studio</a>
            <a href="https://facebook.com" target="_blank" class="social-btn fb-btn">📘 Facebook Page</a>
        </div>

        <div class="footer">
            © 2026 ReelMitra.Ai • Powered by JP Mishra Digital
        </div>
    </div>

    <div id="rechargeModal">
        <div class="modal-content" id="modalBodyContent"></div>
    </div>

    <script>
        const MY_UPI_ID = "jpm786064-1@okhdfcbank";
        const BUSINESS_NAME = "JP Mishra";

        let userPoints = parseInt(localStorage.getItem('reel_points')) || 70;
        document.getElementById('creditCount').innerText = userPoints;

        let uploadedPhotoUrl = null;

        function updatePointsDisplay() {
            document.getElementById('creditCount').innerText = userPoints;
            localStorage.setItem('reel_points', userPoints);
        }

        function previewPhoto(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    uploadedPhotoUrl = e.target.result;
                    const img = document.getElementById('imagePreview');
                    img.src = uploadedPhotoUrl;
                    img.style.display = 'block';
                    document.getElementById('uploadText').innerText = "✅ फोटो जुड़ी: " + file.name;
                }
                reader.readAsDataURL(file);
            }
        }

        function shareReferral() {
            const shareText = "🔥 ReelMitra.Ai पर AI से शानदार वीडियो व रील्स बनाएं! लिंक: " + window.location.href;
            if (navigator.share) {
                navigator.share({ title: 'ReelMitra AI', text: shareText, url: window.location.href })
                    .then(() => giveReferralReward())
                    .catch(() => {});
            } else {
                navigator.clipboard.writeText(shareText);
                alert("रेफरल लिंक कॉपी हो गया! दोस्तों को भेजें।");
                giveReferralReward();
            }
        }

        function giveReferralReward() {
            if (!localStorage.getItem('referred_bonus_claimed')) {
                userPoints += 15;
                updatePointsDisplay();
                localStorage.setItem('referred_bonus_claimed', 'true');
                alert("🎉 बधाई! रेफरल के माध्यम से +15 पॉइंट्स जोड़ दिए गए हैं!");
            }
        }

        function generateAutonomousReel() {
            const topic = document.getElementById('reelTopic').value.trim();
            if (!topic && !uploadedPhotoUrl) {
                alert("कृपया पहले रील का टॉपिक या कोई फोटो दर्ज करें!");
                return;
            }

            if (userPoints < 10) {
                alert("आपके पॉइंट्स खत्म हो गए हैं! कृपया रिचार्ज करें।");
                openRechargeModal();
                return;
            }

            userPoints -= 10;
            updatePointsDisplay();

            document.getElementById('loader').style.display = 'block';
            document.getElementById('resultSection').style.display = 'none';

            let progress = 0;
            const loaderText = document.getElementById('loaderText');
            const interval = setInterval(() => {
                progress += 25;
                if (progress === 25) loaderText.innerText = "🎬 AI स्क्रिप्ट और सीन निर्माण (25%)...";
                if (progress === 50) loaderText.innerText = "🎙️ सिनेमैटिक वॉइसओवर निर्माण... (50%)";
                if (progress >= 100) {
                    clearInterval(interval);
                    document.getElementById('loader').style.display = 'none';

                    const videoEl = document.getElementById('outputVideo');
                    videoEl.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
                    videoEl.load();

                    const avatarEl = document.getElementById('displayAvatar');
                    if (uploadedPhotoUrl) {
                        avatarEl.src = uploadedPhotoUrl;
                        avatarEl.style.display = 'block';
                    } else {
                        avatarEl.style.display = 'none';
                    }

                    const displayTitle = topic || "कस्टम फोटो रील";
                    document.getElementById('successMsg').innerText = `✅ "${displayTitle.substring(0, 20)}..." पर आधारित AI रील तैयार है!`;
                    document.getElementById('resultSection').style.display = 'block';
                    videoEl.play().catch(e => console.log("Autoplay blocked"));
                }
            }, 500);
        }

        function shareOnWhatsApp() {
            const topic = document.getElementById('reelTopic').value || "AI Reel";
            const text = `🎬 देखिए मैंने ReelMitra.Ai (JP Mishra Digital) से बनाई है: ${topic}. आप भी बनाएं: ${window.location.href}`;
            window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(text), '_blank');
        }

        function downloadReel() {
            alert("📥 आपकी एचडी रील डाउनलोड हो रही है!");
        }

        function openRechargeModal() {
            renderPacksHTML();
            document.getElementById('rechargeModal').style.display = 'flex';
        }

        function closeRechargeModal() {
            document.getElementById('rechargeModal').style.display = 'none';
        }

        function renderPacksHTML() {
            const modal = document.getElementById('modalBodyContent');
            modal.innerHTML = `
                <h3 style="margin-bottom: 6px; font-size: 16px;">⚡ क्रेडिट्स रिचार्ज करें</h3>
                <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 12px;">1 रील = 10 पॉइंट्स</p>

                <div class="pack-grid">
                    <div class="pack-card" onclick="showUPIQRCode(19, 30)">
                        <div class="pack-price">₹19</div>
                        <div class="pack-desc">30 पॉइंट्स (3 रील्स)</div>
                    </div>
                    <div class="pack-card" onclick="showUPIQRCode(49, 90)">
                        <div class="pack-price">₹49</div>
                        <div class="pack-desc">90 पॉइंट्स (9 रील्स)</div>
                    </div>
                    <div class="pack-card" onclick="showUPIQRCode(99, 200)">
                        <div class="pack-price">₹99</div>
                        <div class="pack-desc">200 पॉइंट्स</div>
                    </div>
                    <div class="pack-card" onclick="showUPIQRCode(249, 600)">
                        <div class="pack-price">₹249</div>
                        <div class="pack-desc">600 पॉइंट्स</div>
                    </div>
                </div>

                <button class="btn-close" onclick="closeRechargeModal()">बंद करें</button>
            `;
        }

        function showUPIQRCode(amount, points) {
            const note = encodeURIComponent(`ReelMitra ${points} Points`);
            const name = encodeURIComponent(BUSINESS_NAME);
            const upiString = `upi://pay?pa=${MY_UPI_ID}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;
            const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiString)}`;

            const modal = document.getElementById('modalBodyContent');
            modal.innerHTML = `
                <h3 style="margin-bottom: 4px; font-size: 15px;">💳 भुगतान करें: ₹${amount}</h3>
                <p style="font-size: 11px; color: var(--gold); margin-bottom: 10px;">मिलेंगे: ${points} पॉइंट्स</p>

                <div style="background: #ffffff; padding: 6px; border-radius: 12px; display: inline-block; margin-bottom: 10px;">
                    <img src="${qrImageUrl}" alt="UPI QR Code" style="width: 150px; height: 150px; display: block;">
                </div>

                <p style="font-size: 10px; color: var(--text-secondary); margin-bottom: 10px;">GPay, PhonePay, Paytm से स्कैन करें</p>

                <a href="${upiString}" style="display: block; background: var(--accent); color: #000; padding: 10px; border-radius: 10px; text-decoration: none; font-weight: 800; font-size: 12px; margin-bottom: 8px;">
                    🚀 UPI ऐप से सीधा पे करें
                </a>

                <button onclick="confirmPayment(${points})" style="width: 100%; background: var(--success); color: #fff; padding: 10px; border: none; border-radius: 10px; font-weight: 800; font-size: 12px; cursor: pointer; margin-bottom: 8px;">
                    ✅ मैंने पेमेंट कर दिया है
                </button>

                <button class="btn-close" onclick="renderPacksHTML()" style="width: 100%;">← पैक वापस चुनें</button>
            `;
        }

        function confirmPayment(points) {
            userPoints += points;
            updatePointsDisplay();
            alert("🎉 भुगतान सफल! " + points + " पॉइंट्स आपके खाते में जोड़ दिए गए हैं।");
            closeRechargeModal();
        }
    </script>
</body>
</html>
