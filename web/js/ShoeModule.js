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
}
const shoeModule = new ShoeModule();
export{shoeModule};