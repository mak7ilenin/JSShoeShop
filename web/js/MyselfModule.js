class MyselfModule {
    insertMyselfInfo() {
        let myId;
        myId = JSON.parse(sessionStorage.getItem('user')).id.toString();
        console.log(myId);
        const myInfo = {
            "id": myId
        }
        let promiseGetMyself = fetch('getMyself', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            body: JSON.stringify(myInfo)
        });
        promiseGetMyself.then(response => response.json())
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
                    document.getElementById('info').innerHTML = "insertMyselfInfo " + error.info;
                });

    }
    editMyself() {
        const firstName = document.getElementById('user-first-name').value;
        const lastName = document.getElementById('user-last-name').value;
        const phone = document.getElementById('user-phone').value;
        const money = document.getElementById('user-money').value;
        const username = document.getElementById('user-username').value;
        let myIdToEdit = JSON.parse(sessionStorage.getItem('user')).id.toString();
        const editUser = {
            "id": myIdToEdit,
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            "money": money,
            "username": username
        };
        
        let promiseEditMyself = fetch('editMyself', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(editUser)
        });
        console.log(promiseEditMyself);
        promiseEditMyself.then(response => response.json())
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
const myselfModule = new MyselfModule();
export{myselfModule};