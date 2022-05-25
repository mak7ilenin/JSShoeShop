class LoginModule {
    sendCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const credential = {
            "username": username,
            "password": password
        };
        let promise = fetch('username', {
            method: 'POST',
            headers: {
                ContentType: 'application/json;charset:utf-8'
            },
            credentials: 'include',
            body: JSON.stringify(credential)
        });
        promise.then(response => response.json())
                .then(response => {
                    document.getElementById('info').innerHTML = response.info;
                    if(response.auth) {
                        sessionStorage.setItem('user', JSON.stringify(response.user));
                        document.getElementById('content').innerHTML = "";
                    }
                })
    }
}