const uploadBtn = document.getElementById('uploadBtn');
const audioInput = document.getElementById('audioFile');
const transcriptionOutput = document.getElementById('fileTranscription');

uploadBtn.addEventListener('click', async () => {
    if (audioInput.files.length === 0) {
        alert('Please select an audio file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', audioInput.files[0]);

    try {
        const response = await fetch('http://localhost:3000/transcribe', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to transcribe audio.');
        }

        const data = await response.json();
        transcriptionOutput.textContent = data.transcription;
    } catch (error) {
        console.error(error);
        transcriptionOutput.textContent = 'Error during transcription.';
    }
});
