
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
