class ShoeModule {
    createModel() {
        const picSelect = document.getElementById('list-pictures').value;
        const modelName = document.getElementById('model-name').value;
        const modelFirm = document.getElementById('model-firm').value;
        const modelSize = document.getElementById('model-size').value;
        const modelPrice = document.getElementById('model-price').value;
        const modelAmount = document.getElementById('model-amount').value;

        const newModel = {
            "modelPicture": picSelect,
            "modelName": modelName,
            "modelFirm": modelFirm,
            "modelSize": modelSize,
            "modelPrice": modelPrice,
            "modelAmount": modelAmount,
        };

        let newModelPromise = fetch('createModel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(newModel)
        });
        newModelPromise.then(response => response.json())
            .then(response => {
                document.getElementById('info').innerHTML = response.info;
                document.getElementById('info').style.opacity = '1';
                const body = document.getElementsByTagName('body');
                    body[0].style.transition = 'ease all 0.4s';
                    body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                    body[0].style.backgroundColor = 'rgb(0, 255, 0)'
                    setTimeout(() => {
                        body[0].style.transition = 'ease all 0.7s';
                        body[0].style.backgroundColor = 'white'
                    }, 230);
            })
            .catch(error => {
                const body = document.getElementsByTagName('body');
                body[0].style.transition = 'ease all 0.4s';
                body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                body[0].style.backgroundColor = 'red'
                setTimeout(() => {
                    body[0].style.transition = 'ease all 0.7s';
                    body[0].style.backgroundColor = 'white'
                }, 230);
            });
    }
    getListModels() {
        let promiseListModels = fetch('getListModels', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
        });
        promiseListModels.then(response => response.json())
                .then(response => {
                    if(response.status) {
                        let modelSelect = document.getElementById('list-models');
                        modelSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = "-Выберите модель-";
                        option.value = '';
                        modelSelect.add(option);
                        for (let i = 0; i < response.options.length; i++) {
                            option = document.createElement('option');
                            option.text = response.options[i].modelName + ' // ' 
                            + response.options[i].modelFirm + ' // ' 
                            + response.options[i].modelPrice + '$';
                            option.value = response.options[i].id;
                            modelSelect.add(option);
                        }
                    }else {
                        let modelSelect = document.getElementById('list-models');
                        modelSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = "Список моделей пуст..."
                        option.value = '';
                        modelSelect.add(option);
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "getListModels" + error.info;
                    document.getElementById('info').style.opacity = '1';
                });
    }
    insertModelInfo() {
        const modelId = document.getElementById('list-models').value;
        const model = {
            "id": modelId
        }
        let promiseGetModel = fetch('getModel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(model)
        });
        promiseGetModel.then(response => response.json())
                .then(response => {
                    if(response.status) {
                        let pictureSelect = document.getElementById('list-pictures');
                        pictureSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = response.modelPicturePath;
                        option.value = response.modelPicturePath;
                        pictureSelect.add(option);
                        for(let i=0; i < response.pictures.length; i++){
                            option = document.createElement('option');
                            option.text = response.pictures[i];
                            option.value = response.pictures[i];
                            select.add(option);
                        }
                        document.getElementById('model-name').value = response.model.modelName;
                        document.getElementById('model-firm').value = response.model.modelFirm;
                        document.getElementById('model-size').value = response.model.modelSize;
                        document.getElementById('model-price').value = response.model.modelPrice;
                        document.getElementById('model-amount').value = response.model.modelAmount;
                    }else {
                        document.getElementById('info').innerHTML = response.info;     
                        document.getElementById('info').style.opacity = '1';            
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "insertModelInfo " + error.info;
                    document.getElementById('info').style.opacity = '1';
                });

    }
    editModel() {
        const modelId = document.getElementById('list-models').value;
        const modelName = document.getElementById('model-name').value;
        const modelFirm = document.getElementById('model-firm').value;
        const modelSize = document.getElementById('model-size').value;
        const modelPrice = document.getElementById('model-price').value;
        const modelAmount = document.getElementById('model-amount').value;
        const editModel = {
            "id": modelId,
            "modelName": modelName,
            "modelFirm": modelFirm,
            "modelSize": modelSize,
            "modelPrice": modelPrice,
            "modelAmount": modelAmount,
        };

        let promiseEditModel = fetch('editModel', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(editModel)
        });
        promiseEditModel.then(response => response.json())
            .then(response => {
                if(response.status) {
                    const body = document.getElementsByTagName('body');
                    body[0].style.transition = 'ease all 0.4s';
                    body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                    body[0].style.backgroundColor = 'rgb(0, 255, 0)'
                    setTimeout(() => {
                        body[0].style.transition = 'ease all 0.7s';
                        body[0].style.backgroundColor = 'white'
                    }, 230);
                    document.getElementById('info').innerHTML = response.info;
                    document.getElementById('info').style.opacity = '1';
                }else {
                    document.getElementById('info').innerHTML = response.info;
                    document.getElementById('info').style.opacity = '1';
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.info;
                document.getElementById('info').style.opacity = '1';
                const body = document.getElementsByTagName('body');
                body[0].style.transition = 'ease all 0.4s';
                body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                body[0].style.backgroundColor = 'red'
                setTimeout(() => {
                    body[0].style.transition = 'ease all 0.7s';
                    body[0].style.backgroundColor = 'white'
                }, 230);
            });
    }
}
const shoeModule = new ShoeModule();
export{shoeModule};