import {checkRole} from './index.js';
import {viewModule} from './ViewModule.js';

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
                    document.getElementById('content').innerHTML = "";
                });
    }
    logout() {
        let promiseLogout = fetch('logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/html;charset:utf8'
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
    registration() {
        var newUserForm = new FormData(document.getElementById('newUserForm'));
        console.log("Created FormData, " + [...newUserForm.keys()].length + " keys in data");
        const promiseRegistration = fetch('registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            body: newUserForm
        });
        promiseRegistration.then(response => response.json())
                .then(response => {
                    if(response.status) {
                        document.getElementById('info').innerHTML = response.info;
                        viewModule.showLoginForm();
                    }else {
                        document.getElementById('info').innerHTML = response.info;
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = error;
                    // document.getElementById('content').innerHTML = "";
                });
    }
}
const loginModule = new LoginModule();
export {loginModule};