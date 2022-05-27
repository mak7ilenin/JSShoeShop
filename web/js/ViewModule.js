import {loginModule} from './LoginModule.js';

class ViewModule {
    showLoginForm () {
        const content = document.getElementById('content');
        content.innerHTML = 
        `
        <form action="" method="post">
            <div class="imgcontainer">
                <img src="Images/img_avatar2.png" alt="Avatar" class="avatar">
            </div>
            
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" id="username" placeholder="Enter Username" name="uname" required>
                
                <label for="psw"><b>Password</b></label>
                <input type="password" id="password" placeholder="Enter Password" name="psw" required>
                
                <button id="submit" type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>
                
            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password</a>?</span>
            </div>
        </form>
        `;
        const login = document.getElementById('submit');
        login.addEventListener('click', (e) => {
            e.preventDefault();
            loginModule.sendCredentials();
        });
    }
}
const viewModule = new ViewModule();
export {viewModule};