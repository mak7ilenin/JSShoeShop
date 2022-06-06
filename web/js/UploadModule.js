class UploadModule {
    insertListPictures() {
        const promiseListPictures = fetch('getListPictures',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            // credentials: 'include',
        });
        promiseListPictures.then(response => response.json())
                .then(response => {
                    if(response.status){
                        console.log("fdsjfhsdifhsi");
                        const select = document.getElementById('list-pictures');
                        select.options.length = 0;
                        let option = document.createElement('option');
                        option.text = "-Выберите изображение-";
                        option.value = '';
                        select.add(option);
                        
                        for(let i=0; i < response.pictures.length; i++){
                            option = document.createElement('option');
                            option.text = response.pictures[i];
                            option.value = response.pictures[i];
                            select.add(option);
                        }
                        
                    }else {
                       document.getElementById('info').innerHTML = response.info;  
                    }
                })
                .catch(error=>{
                    document.getElementById('info').innerHTML = 'Ошибка сервера insertListPictures: ' + error;
                });
    }
    getPicture() {
        const pictureId = document.getElementById('list-pictures').value;
        const picture = {
            "id": pictureId
        }
        const promiseListPictures = fetch('getPicture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(picture)
        });
        promiseListPictures.then(response => response.json())
            .then(response => {
                if(response.status){
                    const modelImage = document.getElementById('model-image');
                    modelImage.src = response.picturePath;
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = 'Ошибка сервера getPicture: ' + error;
            });
    }
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