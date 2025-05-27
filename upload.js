const uploadForm = document.getElementById('uploadForm');
const audioFileInput = document.getElementById('audioFile');
const outputText = document.getElementById('text');

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = audioFileInput.files[0];
    if (!file) {
        alert('Por favor, selecione um arquivo de áudio.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        outputText.value = "⏳ Processing, wait a moment...";

        const response = await fetch('http://localhost:8080/speech/recognize', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Erro na transcrição.');
        }

        const data = await response.json();
        outputText.value = data.text || '❌ Nenhum texto encontrado.';
    } catch (error) {
        console.error('Erro:', error);
        outputText.value = '❌ Ocorreu um erro durante a transcrição.';
    }
});
