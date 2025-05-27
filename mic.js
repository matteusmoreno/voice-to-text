const btn = document.getElementById('btn');
const textarea = document.getElementById('text');
const languageSelect = document.getElementById('language');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

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
