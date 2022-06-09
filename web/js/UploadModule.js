import {viewModule} from './ViewModule.js';
class UploadModule {
    insertListPictures() {
        const promiseListPictures = fetch('getListPictures',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
        });
        promiseListPictures.then(response => response.json())
                .then(response => {
                    if(response.status){
                        const select = document.getElementById('list-pictures');
                        let option = null;
                        select.options.length = 0;
                        option = document.createElement('option');
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
                       document.getElementById('info').style.opacity = '1';
                       document.getElementById('info').style.display = 'flex';
                    }
                })
                .catch(error=>{
                    document.getElementById('info').innerHTML = 'Ошибка сервера insertListPictures: ' + error;
                    document.getElementById('info').style.opacity = '1';
                    document.getElementById('info').style.display = 'flex';
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
                    console.log(response.picturePath)
                    modelImage.setAttribute('src', response.picturePath);
                }
                    // viewModule.showCreateModel();
                    // modelImage.setAttribute('src', response.picturePath);
                })
            .catch(error => {
                document.getElementById('info').innerHTML = 'Ошибка сервера getPicture: ' + error;
                document.getElementById('info').style.opacity = '1';
                document.getElementById('info').style.display = 'flex';
            })
            .then(response => {
                try {
                    const modelImage = document.getElementById('model-image');
                    viewModule.checkIfImageExists(modelImage.src, (exists) => {
                        if(exists) {
                            console.log('Image exists. ')
                            document.getElementById('adding-shoe').style.padding = '10px 25px 17px 15px';
                            document.getElementById('img-side').style.width = '55%';
                            document.getElementById('img-side').style.display = 'flex';
                            document.getElementById('adding-shoe').style.marginTop = '120px';
                            document.getElementById('adding-shoe').style.width = '90%';
                        }else {
                            console.error('Image does not exists')
                            document.getElementById('adding-shoe').style.padding = '25px 45px 25px 25px';
                            document.getElementById('img-side').style.display = 'none';
                            document.getElementById('adding-shoe').style.marginTop = '120px';
                            document.getElementById('adding-shoe').style.width = '55%';
                        }
                    });
                } catch (error) {
                    document.getElementById('info').innerHTML = 'getPicture ' + error
                    document.getElementById('info').style.opacity = '1';
                    document.getElementById('info').style.display = 'flex';
                }
            });
    }
    uploadPicture() {
        const uploadForm = new FormData(document.getElementById('upload-form'));
        var input = document.querySelector('input[type="file"]')
        uploadForm.append('file', input.files[0])

        let promisePicture = fetch('uploadPicture', {
            method: 'POST',
            body: uploadForm
        });
        promisePicture.then(response => response.json())
            .then(response => {
                document.getElementById('info').innerHTML = response.info;
                document.getElementById('info').style.opacity = '1';
                document.getElementById('info').style.display = 'flex';
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.message;
                document.getElementById('info').style.opacity = '1';
                document.getElementById('info').style.display = 'flex';
            })
            .then(response => {
                uploadModule.insertListPictures();
            });
    }
}
const uploadModule = new UploadModule();
export{uploadModule}