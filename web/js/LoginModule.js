import {checkRole} from './index.js';

const buyModel = document.getElementById('buy-model');
const createModel = document.getElementById('create-model');
const createUser = document.getElementById('create-user');
const editModel = document.getElementById('edit-model');
const editUser = document.getElementById('edit-user');

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
                    document.getElementById('info').innerHTML = response.info;
                    sessionStorage.setItem('user', JSON.stringify(response.user));
                    document.getElementById('content').innerHTML = "";
                    checkRole();
                })
                .catch(error => {
                    info.innerHTML = "Ошибка сервера: " + error;
                    info.style.display = "unset";
                    document.getElementById('content').innerHTML = "";
                });
    }
    logout() {
        let promiseLogout = fetch('logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include'
        });
        promiseLogout.then(response => response.json())
            .then(response => {
                document.getElementById("info").innerHTML = response.info;
                if(!response.auth) {
                    if(sessionStorage.getItem('user')) {
                        sessionStorage.removeItem('user');
                    }
                    checkRole();
                }
            });
    }
}
const loginModule = new LoginModule();
export {loginModule};