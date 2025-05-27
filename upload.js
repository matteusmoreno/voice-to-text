const uploadBtn = document.getElementById('uploadBtn');
const audioUpload = document.getElementById('audioUpload');
const textarea = document.getElementById('text');

uploadBtn.addEventListener('click', async () => {
    const file = audioUpload.files[0];
    if (!file) {
        alert("Please select an audio file.");
        return;
    }

    const formData = new FormData();
    formData.append('audio', file); // <-- precisa ser 'audio' para casar com o backend

    try {
        const response = await fetch('http://localhost:3000/transcribe', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to transcribe audio');
        }

        const data = await response.json();
        textarea.value = data.text; // <-- backend retorna { text: '...' }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to transcribe audio.');
    }
});
