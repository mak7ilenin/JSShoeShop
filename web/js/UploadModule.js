class UploadModule {
    uploadPicture() {
        const uploadForm = new FormData(document.getElementById('uploadForm'));
        const promisePicture = fetch('uploadPicture', {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        promisePicture.then(response => response.json())
            .catch(error => {
                document.getElementById('info').innerHTML = error.message;
            });
    }
}
const uploadModule = new UploadModule();
export{uploadModule}