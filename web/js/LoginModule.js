import {checkMenu} from './index.js';
class LoginModule {
    sendCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const credential = {
            "username": username,
            "password": password
        };
        //Посылаем запрос а с паттерном 'login', методом POST и телом body в формате JSON
        // возвращается обещание (Promise) со статусом "ожидание"
        let promise = fetch('username', {
            method: 'POST',
            headers: {
                ContentType: 'application/json;charset:utf-8'
            },
            credentials: 'include',
            body: JSON.stringify(credential)
        });
        // Обрабатываем обещание с помощью then
        promise.then(response => response.json()) //переводим обещание в статус выполнено 
        // и преобразовываем JSON в JavaScript object
                .then(response => { // обрабатываем object полученый из обещания
                    document.getElementById('info').innerHTML = response.info;
                    if(response.auth) {
                        sessionStorage.setItem('user', JSON.stringify(response.user));
                        checkMenu();
                        document.getElementById('content').innerHTML = "";
                    }
                })
                .catch(error =>{
                    document.getElementById('info').innerHTML = "Ошибка сервера: " + error;
                    checkMenu();
                    document.getElementById('content').innerHTML = "";
                });
    }
}
export {loginModule};
const loginModule = new LoginModule();