class PurchaseModule {
    getModels() {
        let promiseListModels = fetch('getListModels', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
        });
        promiseListModels.then(response => response.json())
                .then(response => {
                    if(response.status) {
                        let modelSelect = document.getElementById('purchase-list-models');
                        modelSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = "--Выберите модель--";
                        option.value = '';
                        modelSelect.add(option);
                        for (let i = 0; i < response.options.length; i++) {
                            option = document.createElement('option');
                            option.text = response.options[i].modelName + ' // ' + response.options[i].modelFirm + ' // ' + response.options[i].modelPrice + '$' + ' // ' + response.options[i].modelAmount;
                            option.value = response.options[i].id;
                            modelSelect.add(option);
                        }
                    }else {
                        let modelSelect = document.getElementById('purchase-list-models');
                        modelSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = "Список моделей пуст..."
                        option.value = '';
                        document.getElementById('info').innerHTML = response.info;
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "insertListModels" + " " + error.message;
                });
    }
    buyModel() {
        const modelId = document.getElementById('purchase-list-models').value;
        const buyModel = {
            "id": modelId
        }
        let promisePurchase = fetch('buyModel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf8'
            },
            credentials: 'include',
            body: JSON.stringify(buyModel)
        });
        promisePurchase.then(response => response.json())
            .then(response => {
                if(response.status) {
                    document.getElementById('info').innerHTML = response.info;
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.message;
            });
    }
}
const purchaseModule = new PurchaseModule();
export{purchaseModule};