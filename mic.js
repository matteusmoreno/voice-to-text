const btn = document.getElementById('btn');
const textarea = document.getElementById('text');
const languageSelect = document.getElementById('language');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// 🎯 Placeholder dinâmico para cada idioma
const placeholders = {
    "en-US": "Speak something and see the text here...",
    "pt-BR": "Fale algo e veja o texto aqui...",
    "es-ES": "Habla algo y ve el texto aquí...",
    "id-ID": "Bicara sesuatu dan lihat teksnya di sini...",
    "zh-CN": "说点什么，文本会显示在这里...",
    "zh-TW": "說點什麼，文字會顯示在這裡...",
    "hi-IN": "कुछ बोलें और यहां टेक्स्ट देखें...",
    "ar-SA": "تحدث بشيء وشاهد النص هنا...",
    "fr-FR": "Parlez et voyez le texte ici...",
    "de-DE": "Sprechen Sie etwas und sehen Sie den Text hier...",
    "ja-JP": "何か話して、ここにテキストが表示されます...",
    "ko-KR": "무엇인가 말하면 여기에 텍스트가 표시됩니다...",
    "ru-RU": "Скажите что-нибудь, и текст появится здесь...",
    "tr-TR": "Bir şey söyle ve metni burada gör...",
    "it-IT": "Dì qualcosa e vedi il testo qui...",
    "nl-NL": "Zeg iets en zie de tekst hier...",
    "pl-PL": "Powiedz coś, a tekst pojawi się tutaj...",
    "sv-SE": "Säg något och se texten här...",
    "th-TH": "พูดอะไรสักอย่างแล้วดูข้อความที่นี่...",
    "vi-VN": "Nói điều gì đó và xem văn bản ở đây..."
};

function updatePlaceholder() {
    const selectedLang = languageSelect.value;
    textarea.placeholder = placeholders[selectedLang] || "Speak something and see the text here...";
}

// Atualiza o placeholder no carregamento da página
updatePlaceholder();

// Atualiza o placeholder sempre que mudar o idioma
languageSelect.addEventListener('change', updatePlaceholder);

if (!SpeechRecognition) {
    alert("Your browser does not support speech recognition. Please use Google Chrome.");
} else {
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    let listening = false;

    // Atualiza o idioma quando o usuário muda
    languageSelect.addEventListener('change', () => {
        recognition.lang = languageSelect.value;
    });

    // Define idioma inicial
    recognition.lang = languageSelect.value;

    btn.addEventListener('click', () => {
        if (!listening) {
            recognition.start();
            btn.textContent = '🛑 Stop Listening';
            listening = true;
        } else {
            recognition.stop();
            btn.textContent = '🎤 Start Listening';
            listening = false;
        }
    });

    recognition.onresult = (event) => {
        const result = Array.from(event.results)
            .map(r => r[0])
            .map(r => r.transcript)
            .join('');

        textarea.value = result;
    };

    recognition.onerror = (event) => {
        console.error('Recognition error:', event.error);
    };
}
