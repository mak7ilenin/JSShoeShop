class PurchaseModule {
    buyModel() {
        const modelId = document.getElementById('list-models').value;
        const buyModel = {
            "modelId": modelId
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
                document.getElementById('info').innerHTML = error.info;
            });
    }
}
const purchaseModule = new PurchaseModule();
export{purchaseModule};