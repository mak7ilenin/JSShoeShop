class UploadModule {
    uploadPicture() {
        const fileName = document.getElementById('imageName').value;
        const picture = {
            "description": fileName,
        }

        let promisePictureUp = fetch('uploadPicture', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(picture)
        });
        promisePictureUp.then(response => response.json())
            .catch(error => {
                document.getElementById('info').innerHTML = error.message;
            });
    }
}
const uploadModule = new UploadModule();
export{uploadModule}