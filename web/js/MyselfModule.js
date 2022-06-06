class MyselfModule {
    insertMyselfInfo() {
        let myId;
        myId = JSON.parse(sessionStorage.getItem('user')).id.toString();
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
                        var formatedMoney = new Intl.NumberFormat().format(response.user.money);
                        var frMoney = formatedMoney.replace(",",".");
                        document.getElementById('user-money').value = frMoney;
                        document.getElementById('user-username').value = response.user.username;
                    }else {
                        document.getElementById('info').innerHTML = response.info;
                        document.getElementById('info').style.opacity = '1';
                    }
                })
                .catch(error => {
                    document.getElementById('info').innerHTML = "insertMyselfInfo " + error.info;
                    document.getElementById('info').style.opacity = '1';
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
        promiseEditMyself.then(response => response.json())
        .then(response => {
            if(response.status) {
                if(sessionStorage.getItem('user') !== null) {
                    sessionStorage.setItem('user', JSON.stringify(response.editedUser));
                    const userBank = document.getElementById('user-bank');
                    userBank.innerHTML = JSON.parse(sessionStorage.getItem('user')).money + "$";
                }
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
            }else {
                if(sessionStorage.getItem('user') !== null) {
                    const userBank = document.getElementById('user-bank');
                    userBank.innerHTML = JSON.parse(sessionStorage.getItem('user')).money + "$";
                }
                document.getElementById('info').innerHTML = response.info;
                document.getElementById('info').style.opacity = '1';
            }
            })
        .catch(error => {
            document.getElementById('info').innerHTML = error.info;
            document.getElementById('info').style.opacity = '1';
            const body = document.getElementsByTagName('body');
            body[0].style.transition = 'ease all 0.4s';
            body[0].style.transitionTimingFunction = 'cubic-bezier(.76,.08,.47,.79)';
            body[0].style.backgroundColor = 'red'
            setTimeout(() => {
                body[0].style.transition = 'ease all 0.7s';
                body[0].style.backgroundColor = 'white'
            }, 230);
        });
    }
}
const myselfModule = new MyselfModule();
export{myselfModule};