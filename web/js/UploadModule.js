class UploadModule {
    uploadPicture() {
        const uploadForm = new FormData(document.getElementById('upload-form'));
        var input = document.querySelector('input[type="file"]')
        uploadForm.append('file', input.files[0])
        // const uploadForm = new URLSearchParams(new FormData(document.getElementById('upload-form')));
        let promisePicture = fetch('uploadPicture', {
            method: 'POST',
            body: uploadForm
        });
        promisePicture.then(response => response.json())
            .then(response => {
                document.getElementById('info').innerHTML = response.info;
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.message;
            });
    }
}
const uploadModule = new UploadModule();
export{uploadModule}