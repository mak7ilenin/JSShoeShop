class AdminModule {
    getUsers() {
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
                        option.text = "-Выберите пользователя-";
                        option.value = '';
                        userSelect.add(option);
                        for (let i = 0; i < response.options.length; i++) {
                            option = document.createElement('option');
                            option.text = response.options[i].firstname + ' // ' 
                            + response.options[i].lastname + ' // ' 
                            + response.options[i].role;
                            option.value = response.options[i].id;
                            userSelect.add(option);
                        }
                        let authId = JSON.parse(sessionStorage.getItem('user')).id;
                        for (let i = 1; i < userSelect.length; i++) {
                            if(userSelect.options[i].value == authId) {
                                userSelect.remove(i);
                            }
                        }
                    }else {
                        let userSelect = document.getElementById('list-users');
                        userSelect.options.length = 0;
                        let option = null;
                        option = document.createElement('option');
                        option.text = "Список пользователей пуст..."
                        option.value = '';
                        userSelect.add(option);
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "getUsers " + error.info;
                    document.getElementById('info').style.opacity = '1';
                    document.getElementById('info').style.display = 'flex';
                });
    }
    changeRole() {
        const userId = document.getElementById('list-users').value;
        const role = document.getElementById('list-roles').value;
        const user = {
            "id": userId,
            "role": role
        };
        let changeRolePromise = fetch('changeRole', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        });
        changeRolePromise.then(response => response.json())
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
                    document.getElementById('info').style.opacity = '1';
                    document.getElementById('info').style.display = 'flex';
                }
            })
            .catch(error => {
                const body = document.getElementsByTagName('body');
                body[0].style.transition = 'ease all 0.4s';
                body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
                body[0].style.backgroundColor = 'red'
                document.getElementById('info').innerHTML = "changeRole " + error.info;
                document.getElementById('info').style.opacity = '1';
                document.getElementById('info').style.display = 'flex';
                setTimeout(() => {
                    body[0].style.transition = 'ease all 0.7s';
                    body[0].style.backgroundColor = 'white'
                }, 230);
            });
    }
}
const adminModule = new AdminModule();
export{adminModule};