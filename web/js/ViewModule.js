import {loginModule} from './LoginModule.js';
class ViewModule {
    showLoginForm() {
        document.getElementById('info').innerHTML = "";
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div class="login-container">
                <div class="imgcontainer">
                    <img src="Images/img_avatar2.png" alt="Avatar" class="avatar">
                </div>
                
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" id="username" placeholder="Enter Username" name="uname" required> <br>
                    
                    <label><b>Password</b></label>
                    <input type="password" id="password" placeholder="Enter Password" name="psw" required>
                    
                    <button id="login" type="submit">Войти</button>
                    <button id="registration" type="submit">Зарегистрироваться</button>
                    <label class="remember">
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                </div>
            </div>`;
        const login = document.getElementById('login');
        login.addEventListener('click', (e) => {
            e.preventDefault();
            loginModule.sendCredentials();
            document.getElementById('logOut').style.display = "unset";
            document.getElementById('logIn').style.display = "none";
        });
        const registration = document.getElementById('registration');
        registration.addEventListener('click', (e) => {
            e.preventDefault();
            viewModule.showRegistrationForm();
        });
    };
    showRegistrationForm() {
        document.getElementById('info').innerHTML = "";
        const content = document.getElementById('content');
        content.innerHTML = 
            `<form id="newUserForm" class="registration-container">
                <div class="registration-heading">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
                            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                        </filter>
                    </svg>
                    <h2 filter-content="S">РЕГИСТРАЦИЯ</h2>
                </div>
                <div class="input-container">
                    <img src="Images/first_name.png" class="input-img"></img>
                    <input class="input-field" id="first-name" type="text" placeholder="First name" name="fname" required>
                </div>

                <div class="input-container">
                    <img src="Images/last_name.png" class="input-img"></img>
                    <input class="input-field" id="last-name" type="text" placeholder="Last name" name="lname" required>
                </div>

                <div class="input-container">
                    <img src="Images/username.png" class="input-img"></img>
                    <input class="input-field" id="username" type="text" placeholder="Username" name="uname" required>
                </div>
                    
                <div class="input-container">
                    <img src="Images/password.png" class="input-img"></img>
                    <input class="input-field" id="password" type="password" placeholder="Password" name="psw" required>
                </div>
                
                <div class="input-container">
                    <img src="Images/email.png" class="input-img"></img>
                    <input class="input-field" id="email" type="text" placeholder="Email" name="email" required>
                </div>
            
                <div class="input-container">
                    <img src="Images/phone.png" class="input-img"></img>
                    <input class="input-field" id="phone" type="text" placeholder="Phone" name="phone" required>
                </div>
            
                <div class="input-container">
                    <img src="Images/money.png" class="input-img"></img>
                    <input class="input-field" id="money" type="text" placeholder="$" name="money" required>
                </div>
            
                <input id="register" type="submit" value="Зарегистрироваться">
            </form>`;
        const register = document.getElementById('register');
        register.addEventListener('click', (e) => {
            e.preventDefault();
            loginModule.registration();
        });
    }
}
const viewModule = new ViewModule();
export {viewModule};