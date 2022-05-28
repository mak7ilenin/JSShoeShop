import {checkMenu} from './index.js';
class LoginModule {
    sendCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const credential = {
            "username": username,
            "password": password,
        };
        //Посылаем запрос а с паттерном 'login', методом POST и телом body в формате JSON
        // возвращается обещание (Promise) со статусом "ожидание"
        let promise = fetch('login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(credential)
        });
        promise.then(response => response.json())
                .then(response => {
                    sessionStorage.setItem('user', JSON.stringify(response.user));
                    document.getElementById('content').innerHTML = "";
                    checkMenu();
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "Ошибка сервера: " + error;
                    document.getElementById('content').innerHTML = "";
                });
    }
}
const loginModule = new LoginModule();
export {loginModule};