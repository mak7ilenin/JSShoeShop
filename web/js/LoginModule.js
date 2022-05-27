import {checkMenu} from './index.js';
class LoginModule {
    sendCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const credential = {
            "username": username,
            "password": password
        };
        let promise = fetch('username', {
            method: 'POST',
            headers: {
                ContentType: 'application/json;charset:utf-8'
            },
            credentials: 'include',
            body: JSON.stringify(credential)
        });
        promise.then(response => response.json())
                .then(response => {
                    document.getElementById('info').innerHTML = response.info;
                    if(response.auth) {
                        sessionStorage.setItem('user', JSON.stringify(response.user));
                        checkMenu();
                        document.getElementById('content').innerHTML = "";
                    }
                })
                .catch(error =>{
                    document.getElementById('info').innerHTML = "Ошибка сервара: "+error.message;
                    checkMenu();
                    document.getElementById('content').innerHTML = "";
                });
    }
}
const loginModule = new LoginModule();
export {loginModule};