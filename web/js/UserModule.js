class UserModule {
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
                })
                .catch(error => {
                    if(firstName === "" || lastName === "" || username === "" || password === "" || phone === "" || money === "") {
                        document.getElementById('info').innerHTML = "Заполните все поля!";
                        return;
                    }
                    document.getElementById('info').innerHTML = error.info;
                });
    }
    getListUsers() {
        let promiseListUsers = fetch('getListUsers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
        });
        promiseListUsers.then(response => response.json())
                .then(response => {
                    if(response.status) {
                        let userSelect = document.getElementById('list-users');
                        userSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = "--Выберите пользователя--";
                        option.value = '';
                        userSelect.add(option);
                        for (let i = 0; i < response.options.length; i++) {
                            option = document.createElement('option');
                            option.text = response.options[i].firstname + ' // ' + response.options[i].lastname + ' // ' + response.options[i].money + '$';
                            option.value = response.options[i].id;
                            userSelect.add(option);
                        }
                    }else {
                        let userSelect = document.getElementById('list-users');
                        userSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = "Список пользователей пуст..."
                        option.value = '';
                        document.getElementById('info').innerHTML = response.info;
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "getListUsers" + error.info;
                });
    }
    insertUserInfo() {
        const userId = document.getElementById('list-users').value;
        const user = {
            "id": userId
        }
        let promiseGetUser = fetch('getUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        });
        promiseGetUser.then(response => response.json())
                .then(response => {
                    if(response.status) {
                        document.getElementById('user-first-name').value = response.user.firstname;
                        document.getElementById('user-last-name').value = response.user.lastname;
                        document.getElementById('user-phone').value = response.user.phone;
                        document.getElementById('user-money').value = response.user.money;
                        document.getElementById('user-username').value = response.user.username;
                    }else {
                        document.getElementById('info').innerHTML = response.info;                 
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "insertUserInfo " + error.info;
                });

    }
    editUser() {
        const userId = document.getElementById('list-users').value;
        const firstName = document.getElementById('user-first-name').value;
        const lastName = document.getElementById('user-last-name').value;
        const phone = document.getElementById('user-phone').value;
        const money = document.getElementById('user-money').value;
        const username = document.getElementById('user-username').value;
        const editUser = {
            "id": userId,
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            "money": money,
            "username": username
        };

        let promiseEditUser = fetch('editUser', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(editUser)
        });
        promiseEditUser.then(response => response.json())
        .then(response => {
            if(response.status) {
                    const body = document.getElementsByTagName('body');
                        body[0].style.transition = 'ease all 0.4s';
                        body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                        body[0].style.backgroundColor = 'rgb(0, 255, 0)'
                        setTimeout(() => {
                            body[0].style.transition = 'ease all 0.7s';
                            body[0].style.backgroundColor = 'white'
                        }, 230);
                    document.getElementById('info').innerHTML = response.info;
                }else {
                    document.getElementById('info').innerHTML = response.info;
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = error.info;
                const body = document.getElementsByTagName('body');
                body[0].style.transition = 'ease all 0.4s';
                body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                body[0].style.backgroundColor = 'red'
                setTimeout(() => {
                    body[0].style.transition = 'ease all 0.7s';
                    body[0].style.backgroundColor = 'white'
                }, 50);
            });
    }
}
const userModule = new UserModule();
export {userModule};