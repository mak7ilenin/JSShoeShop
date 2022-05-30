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
                    document.getElementById('info').innerHTML = response.info;
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
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const money = document.getElementById('money').value;
        const newUser = {
            "firstName": firstName,
            "lastName": lastName,
            "username": username,
            "password": password,
            "phone": phone,
            "money": money,
        }
        let promiseRegistration = fetch('registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(newUser)
        });
        promiseRegistration.then(response => response.json())
                .then(response => {
                    if(response.money === 0) {
                        document.getElementById('info').innerHTML = "Введите сумму больше нуля!";
                        return;
                    }
                    document.getElementById('info').innerHTML = response.info;
                    sessionStorage.setItem('newUser', JSON.stringify(response.newUser));
                    viewModule.showLoginForm();
                })
                .catch(error => {
                    if(firstName === "" || lastName === "" || username === "" || password === "" || phone === "" || money === "") {
                        document.getElementById('info').innerHTML = "Заполните все поля!";
                        return;
                    }
                    document.getElementById('info').innerHTML = error;
                });
    }
}
const loginModule = new LoginModule();
export {loginModule};