const fileInput = document.getElementById('audioFile');
const uploadBtn = document.getElementById('upload-btn');
const resultText = document.getElementById('text');
const languageSelect = document.getElementById('language');

uploadBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    const language = languageSelect.value;

    if (!file) {
        alert('Please select an audio file to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('language', language);

    uploadBtn.disabled = true;
    uploadBtn.textContent = 'Uploading...';

    try {
        const response = await fetch('http://ec2-18-221-142-45.us-east-2.compute.amazonaws.com:8080/speech/transcribe', {
        //const response = await fetch('http://localhost:8080/speech/transcribe', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to transcribe the audio.');
        }

        const data = await response.json();
        resultText.value = data.transcript || 'No transcription returned.';
    } catch (error) {
        console.error(error);
        resultText.value = 'Error transcribing the audio.';
    } finally {
        uploadBtn.disabled = false;
        uploadBtn.textContent = 'Upload and Transcribe';
    }
});
