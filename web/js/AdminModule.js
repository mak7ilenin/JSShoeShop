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
                        option.text = "--Выберите пользователя--";
                        option.value = '';
                        userSelect.add(option);
                        for (let i = 0; i < response.options.length; i++) {
                            option = document.createElement('option');
                            option.text = response.options[i].firstname + ' // ' + response.options[i].lastname + ' // ' + response.options[i].role;
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
                    document.getElementById('info').innerHTML = "getUsers " + error.info;
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
                    document.getElementById('info').innerHTML = response.info;
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = "changeRole " + error.info;
            });
    }
}
const adminModule = new AdminModule();
export{adminModule};