class ShoeModule {
    createModel() {
        const modelName = document.getElementById('model-name').value;
        const modelFirm = document.getElementById('model-firm').value;
        const modelSize = document.getElementById('model-size').value;
        const modelPrice = document.getElementById('model-price').value;
        const modelAmount = document.getElementById('model-amount').value;

        const newModel = {
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
                sessionStorage.setItem('newModel', JSON.stringify(newModel));
                document.getElementById('content').innerHTML = "";
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.info;
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
                        option.text = "--Выберите модель--";
                        option.value = '';
                        modelSelect.add(option);
                        for (let i = 0; i < response.options.length; i++) {
                            option = document.createElement('option');
                            option.text = response.options[i].modelName + ' // ' + response.options[i].modelFirm + ' // ' + response.options[i].modelPrice + '$';
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
                        document.getElementById('info').innerHTML = response.info;
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "insertListModels" + error.info;
                });
    }
    editModel() {
        const modelName = document.getElementById('model-name');
        const modelFirm = document.getElementById('model-firm');
        const modelSize = document.getElementById('model-size');
        const modelPrice = document.getElementById('model-price');
        const modelAmount = document.getElementById('model-amount');
    }
}
const shoeModule = new ShoeModule();
export{shoeModule};