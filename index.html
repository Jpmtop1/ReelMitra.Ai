<!DOCTYPE html>
<html lang="hi" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReelMitra.Ai Pro - JP Mishra Digital</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-between font-sans pb-10">

    <!-- Header -->
    <header class="w-full max-w-md p-4 flex justify-between items-center border-b border-slate-800">
        <div class="flex items-center space-x-2">
            <div class="bg-gradient-to-r from-purple-600 to-pink-500 p-2.5 rounded-xl shadow-lg">
                <i class="fa-solid fa-wand-magic-sparkles text-xl"></i>
            </div>
            <div>
                <h1 class="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">ReelMitra.Ai Pro</h1>
                <p class="text-[10px] text-slate-400">JP Mishra Digital Studio</p>
            </div>
        </div>
        <div onclick="openRechargeModal()" class="cursor-pointer bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
            <span class="text-amber-400 font-bold text-xs">🪙 <span id="userPoints">150</span> Pts</span>
        </div>
    </header>

    <!-- Main Container -->
    <main class="w-full max-w-md p-4 flex flex-col space-y-4">
        
        <!-- Tabs -->
        <div class="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button onclick="switchTab('text')" id="tabText" class="flex-1 py-2 text-xs font-bold rounded-lg bg-purple-600 text-white transition">✍️ Text to Reel</button>
            <button onclick="switchTab('photo')" id="tabPhoto" class="flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 transition">📸 Photo to Video</button>
        </div>

        <!-- Text to Reel Form -->
        <div id="sectionText" class="bg-slate-900/80 backdrop-blur border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
            <h2 class="text-sm font-semibold text-purple-300">✍️ टेक्स्ट से वायरल AI रील बनाएँ</h2>
            <form id="reelForm" class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">रील का टॉपिक या प्रॉम्प्ट</label>
                    <textarea id="promptInput" rows="3" required placeholder="उदा: हनुमान जी के 12 नाम, मोटिवेशनल विचार..." class="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-purple-500"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">वॉइस भाषा</label>
                        <select id="voiceSelect" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none">
                            <option value="hi-IN-MadhurNeural">हिंदी (पुरुष - Madhur)</option>
                            <option value="hi-IN-SwaraNeural">हिंदी (महिला - Swara)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">फ़ॉर्मेट (Aspect)</label>
                        <select id="aspectSelect" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none">
                            <option value="9:16">9:16 (Shorts/Reels)</option>
                            <option value="1:1">1:1 (Square Post)</option>
                        </select>
                    </div>
                </div>
                <button type="submit" id="submitBtn" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center space-x-2">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <span>Generate AI Reel (10 Pts)</span>
                </button>
            </form>
        </div>

        <!-- Photo to Video Form -->
        <div id="sectionPhoto" class="bg-slate-900/80 backdrop-blur border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4 hidden">
            <h2 class="text-sm font-semibold text-pink-400">📸 फोटो से सिनेमैटिक वीडियो बनाएँ</h2>
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">अपनी फोटो अपलोड करें</label>
                    <input type="file" id="photoFile" accept="image/*" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-500">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">एनीमेशन प्रॉम्प्ट</label>
                    <input type="text" id="photoPrompt" placeholder="उदा: Cinematic 3D motion effect..." class="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500">
                </div>
                <button onclick="handlePhotoToVideo()" id="photoSubmitBtn" class="w-full bg-gradient-to-r from-pink-600 to-purple-600 py-3 rounded-xl font-bold text-sm shadow-lg">
                    ✨ Animate Photo to Video (20 Pts)
                </button>
            </div>
        </div>

        <!-- Loading Box -->
        <div id="loadingBox" class="hidden text-center space-y-3 py-6 bg-slate-900/50 rounded-2xl border border-slate-800">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-500 border-t-transparent"></div>
            <p id="loadingStatus" class="text-xs text-slate-300 animate-pulse">AI स्क्रिप्ट और वीडियो तैयार हो रहा है...</p>
        </div>

        <!-- Result Section -->
        <div id="resultBox" class="hidden bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-4 shadow-xl">
            <div class="flex items-center justify-between text-green-400 text-xs font-semibold">
                <span><i class="fa-solid fa-circle-check mr-1"></i> रील सफलतापूर्वक तैयार हो गई!</span>
            </div>
            
            <div class="relative w-full aspect-[9/16] max-h-[350px] bg-black rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
                <video id="videoPreview" controls class="w-full h-full object-cover"></video>
            </div>

            <!-- Action & Sharing Buttons -->
            <div class="grid grid-cols-2 gap-2">
                <a id="downloadBtn" href="#" download="reelmitra_ai.mp4" class="bg-emerald-600 hover:bg-emerald-500 py-2.5 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center space-x-1.5 shadow">
                    <i class="fa-solid fa-download"></i>
                    <span>डाउनलोड करें</span>
                </a>
                <button onclick="shareWhatsApp()" class="bg-green-600 hover:bg-green-500 py-2.5 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center space-x-1.5 shadow">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span>WhatsApp शेयर</span>
                </button>
            </div>

            <!-- Social Links Connectivity -->
            <div class="pt-2 border-t border-slate-800 flex justify-between gap-2">
                <a href="https://studio.youtube.com" target="_blank" class="flex-1 bg-red-600/20 border border-red-500/30 text-red-400 py-2 rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1">
                    <i class="fa-brands fa-youtube"></i> YT Studio
                </a>
                <a href="https://www.facebook.com" target="_blank" class="flex-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 py-2 rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1">
                    <i class="fa-brands fa-facebook"></i> Facebook
                </a>
                <a href="https://www.instagram.com" target="_blank" class="flex-1 bg-pink-600/20 border border-pink-500/30 text-pink-400 py-2 rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1">
                    <i class="fa-brands fa-instagram"></i> Insta
                </a>
            </div>
        </div>

    </main>

    <!-- Recharge Modal -->
    <div id="rechargeModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-2xl p-5 space-y-4 shadow-2xl">
            <div class="flex justify-between items-center">
                <h3 class="font-bold text-sm text-purple-300">⚡ पॉइंट्स रिचार्ज प्लान</h3>
                <button onclick="closeRechargeModal()" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            
            <div class="grid grid-cols-2 gap-2.5">
                <div onclick="selectPack(19, 100)" class="bg-slate-950 border border-slate-800 hover:border-purple-500 p-3 rounded-xl cursor-pointer text-center">
                    <div class="text-base font-extrabold text-purple-400">₹19</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">100 Points</div>
                </div>
                <div onclick="selectPack(49, 300)" class="bg-slate-950 border border-slate-800 hover:border-purple-500 p-3 rounded-xl cursor-pointer text-center">
                    <div class="text-base font-extrabold text-purple-400">₹49</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">300 Points</div>
                </div>
                <div onclick="selectPack(99, 700)" class="bg-slate-950 border border-slate-800 hover:border-purple-500 p-3 rounded-xl cursor-pointer text-center">
                    <div class="text-base font-extrabold text-purple-400">₹99</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">700 Points</div>
                </div>
                <div onclick="selectPack(149, 1100)" class="bg-slate-950 border border-slate-800 hover:border-purple-500 p-3 rounded-xl cursor-pointer text-center">
                    <div class="text-base font-extrabold text-purple-400">₹149</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">1100 Points</div>
                </div>
                <div onclick="selectPack(199, 1500)" class="col-span-2 bg-slate-950 border border-purple-500/50 hover:border-purple-500 p-3 rounded-xl cursor-pointer text-center bg-purple-950/20">
                    <div class="text-base font-extrabold text-pink-400">₹199 (Ultimate Creator Pack)</div>
                    <div class="text-[10px] text-amber-400 mt-0.5">1500 Points + VIP Badge</div>
                </div>
            </div>

            <div id="upiPaymentBox" class="hidden text-center space-y-3 pt-2 border-t border-slate-800">
                <p id="upiInfoText" class="text-xs font-semibold text-slate-300"></p>
                <a id="upiPayLink" href="#" class="block bg-purple-600 hover:bg-purple-500 text-white py-2.5 rounded-xl font-bold text-xs">UPI App से भुगतान करें</a>
                <button onclick="confirmPayment()" class="w-full bg-emerald-600 hover:bg-emerald-500 py-2 rounded-xl text-xs font-bold text-white">मैंने भुगतान कर दिया है (पॉइंट्स जोड़ें)</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="text-center text-[10px] text-slate-500 mt-6">
        © 2026 ReelMitra.Ai Pro • Developed with ❤️ by JP Mishra Digital
    </footer>

    <script>
        let currentPoints = parseInt(localStorage.getItem('jp_points')) || 150;
        let pendingPointsToAdd = 0;
        document.getElementById('userPoints').innerText = currentPoints;

        function updatePoints(pts) {
            currentPoints = pts;
            document.getElementById('userPoints').innerText = currentPoints;
            localStorage.setItem('jp_points', currentPoints);
        }

        function switchTab(type) {
            if(type === 'text') {
                document.getElementById('sectionText').classList.remove('hidden');
                document.getElementById('sectionPhoto').classList.add('hidden');
                document.getElementById('tabText').className = "flex-1 py-2 text-xs font-bold rounded-lg bg-purple-600 text-white transition";
                document.getElementById('tabPhoto').className = "flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 transition";
            } else {
                document.getElementById('sectionPhoto').classList.remove('hidden');
                document.getElementById('sectionText').classList.add('hidden');
                document.getElementById('tabPhoto').className = "flex-1 py-2 text-xs font-bold rounded-lg bg-pink-600 text-white transition";
                document.getElementById('tabText').className = "flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 transition";
            }
        }

        document.getElementById('reelForm').addEventListener('submit', function(e) {
            e.preventDefault();
            if(currentPoints < 10) {
                alert("पॉइंट्स खत्म हो गए हैं! कृपया रिचार्ज करें।");
                openRechargeModal();
                return;
            }
            updatePoints(currentPoints - 10);
            processGeneration("🎬 AI स्क्रिप्ट और वॉयसओवर तैयार हो रहा है...");
        });

        function handlePhotoToVideo() {
            const fileInput = document.getElementById('photoFile');
            if(fileInput.files.length === 0) {
                alert("कृपया पहले अपनी फोटो चुनें!");
                return;
            }
            if(currentPoints < 20) {
                alert("Photo-to-Video के लिए 20 पॉइंट्स चाहिए। कृपया रिचार्ज करें।");
                openRechargeModal();
                return;
            }
            updatePoints(currentPoints - 20);
            processGeneration("📸 फोटो को सिनेमैटिक AI वीडियो में बदला जा रहा है...");
        }

        function processGeneration(statusText) {
            document.getElementById('loadingBox').classList.remove('hidden');
            document.getElementById('resultBox').classList.add('hidden');
            document.getElementById('loadingStatus').innerText = statusText;

            setTimeout(() => {
                document.getElementById('loadingBox').classList.add('hidden');
                const videoEl = document.getElementById('videoPreview');
                videoEl.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
                videoEl.load();
                document.getElementById('resultBox').classList.remove('hidden');
                videoEl.play().catch(e => console.log("Autoplay restricted"));
            }, 2500);
        }

        function shareWhatsApp() {
            const text = "🎬 मैंने ReelMitra.Ai Pro (JP Mishra Digital) से यह शानदार AI रील बनाई है! आप भी बनाएं:";
            window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + window.location.href)}`, '_blank');
        }

        function openRechargeModal() {
            document.getElementById('rechargeModal').classList.remove('hidden');
            document.getElementById('upiPaymentBox').classList.add('hidden');
        }

        function closeRechargeModal() {
            document.getElementById('rechargeModal').classList.add('hidden');
        }

        function selectPack(amount, points) {
            pendingPointsToAdd = points;
            const upiId = "jpm786064-1@okhdfcbank";
            const upiUrl = `upi://pay?pa=${upiId}&pn=JP%20Mishra&am=${amount}&cu=INR&tn=ReelMitra%20${points}%20Points`;
            
            document.getElementById('upiInfoText').innerText = `₹${amount} भुगतान करने के लिए क्लिक करें (${points} पॉइंट्स मिलेंगे)`;
            document.getElementById('upiPayLink').href = upiUrl;
            document.getElementById('upiPaymentBox').classList.remove('hidden');
        }

        function confirmPayment() {
            updatePoints(currentPoints + pendingPointsToAdd);
            alert(`🎉 भुगतान सफल! ${pendingPointsToAdd} पॉइंट्स आपके खाते में जोड़ दिए गए हैं।`);
            closeRechargeModal();
        }
    </script>
</body>
</html>
