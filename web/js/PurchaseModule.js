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
                        option.text = "-Выберите модель-";
                        option.value = '';
                        modelSelect.add(option);
                        for (let i = 0; i < response.options.length; i++) {
                            option = document.createElement('option');
                            var formatedPrice = new Intl.NumberFormat().format(response.options[i].modelPrice);
                            var frPrice = formatedPrice.replace(",",".");
                            option.text = response.options[i].modelName + ' // ' 
                            + response.options[i].modelFirm + ' // ' 
                            + frPrice + '$ // ' 
                            + response.options[i].modelAmount;
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
                        document.getElementById('info').style.opacity = '1';
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "insertListModels" + " " + error.message;
                    document.getElementById('info').style.opacity = '1';
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
                    if(sessionStorage.getItem('user') !== null) {
                        sessionStorage.setItem('user', JSON.stringify(response.user));
                        const userBank = document.getElementById('user-bank');
                        userBank.innerHTML = JSON.parse(sessionStorage.getItem('user')).money + "$";
                    }
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
                    if(response.noMoney) {
                        const body = document.getElementsByTagName('body');
                        body[0].style.transition = 'ease all 0.4s';
                        body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                        body[0].style.backgroundColor = 'red'
                        setTimeout(() => {
                            body[0].style.transition = 'ease all 0.7s';
                            body[0].style.backgroundColor = 'white'
                        }, 230);
                        document.getElementById('info').innerHTML = response.info;
                        document.getElementById('info').style.opacity = '1';
                    }
                    if(response.empty) {
                        const body = document.getElementsByTagName('body');
                        body[0].style.transition = 'ease all 0.4s';
                        body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                        body[0].style.backgroundColor = 'red'
                        setTimeout(() => {
                            body[0].style.transition = 'ease all 0.7s';
                            body[0].style.backgroundColor = 'white'
                        }, 230);
                        document.getElementById('info').innerHTML = response.info;
                        document.getElementById('info').style.opacity = '1';
                    }
                }
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
}
const purchaseModule = new PurchaseModule();
export{purchaseModule};