import {loginModule} from './LoginModule.js';
import {shoeModule} from './ShoeModule.js';
import {userModule} from './UserModule.js';
import {purchaseModule} from './PurchaseModule.js';
import {adminModule} from './AdminModule.js';
import {gainModule} from './GainModule.js';
class ViewModule {
    showLoginForm() {
        document.getElementById('info').innerHTML = '';
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
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div class="registration-container">
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
                    <img src="Images/phone.png" class="input-img"></img>
                    <input class="input-field" id="phone" pattern=".{8,}" type="number" placeholder="Phone" name="phone" required>
                </div>
            
                <div class="input-container">
                    <img src="Images/money.png" class="input-img"></img>
                    <input class="input-field" id="money" type="number" placeholder="$" name="money" required>
                </div>
            
                <button type="submit" id="register">Зарегистрироваться</button>
            </div>`;
        const register = document.getElementById('register');
        register.addEventListener('click', (e) => {
            e.preventDefault();
            userModule.registration();
        });
    }
    showCreateUser() {
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div class="registration-container">
                <div class="registration-heading">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
                            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                        </filter>
                    </svg>
                    <h2 filter-content="S">Добавление пользователя</h2>
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
                    <img src="Images/phone.png" class="input-img"></img>
                    <input class="input-field" id="phone" pattern=".{8,}" type="number" placeholder="Phone" name="phone" required>
                </div>
            
                <div class="input-container">
                    <img src="Images/money.png" class="input-img"></img>
                    <input class="input-field" id="money" type="number" placeholder="$" name="money" required>
                </div>
            
                <button type="submit" id="register">Добавить</button>
            </div>`;
        const register = document.getElementById('register');
        register.addEventListener('click', (e) => {
            e.preventDefault();
            userModule.registration();
        });
    }
    showCreateModel() {
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="shoe-add-container">
            <div class="top-content">
                <span class="container-title">Добавление обуви</span>
            </div>
            <div class="mid-content">
                <div class="wrap-input100 validate-input" data-validate="Enter name">
                    <input class="input100" type="text" id="model-name" name="modelName" placeholder="Model name">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter firm">
                    <input class="input100" type="text" id="model-firm" name="modelFirm" placeholder="Model firm">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter size">
                    <input class="input100" type="number" maxlength="2" id="model-size" name="modelSize" placeholder="Model size">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter price">
                    <input class="input100" type="number" pattern="[^,\x22]" id="model-price" name="price" placeholder="Price">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter amount">
                    <input class="input100" type="number" id="model-amount" min="1" max="50" name="amount" placeholder="Amount">
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" id="add-model">Добавить</button>
                </div>
            </div>
        </div>`;
        const addModel = document.getElementById('add-model');
        addModel.addEventListener('click', (e) => {
            e.preventDefault();
            shoeModule.createModel();
        });
        const input = document.getElementsByClassName('input100');
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('focusin', (e) => {
                e.preventDefault();
                input[i].style.borderBottom = '2px solid white';
                input[i].style.marginBottom = '60px';
                input[i].style.fontSize = '20px';
                
                input[i].addEventListener('focusout', (e) => {
                    e.preventDefault();
                    input[i].style.borderBottom = '2px solid rgba(255,255,255,0.24)';
                    input[i].style.marginBottom = '30px';
                    input[i].style.fontSize = '16px';
                });
            });
        }
    }
    showEditModel() {
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="shoe-edit-container">
            <div class="top-content">
                <span class="model-edit-title">Изменение обуви</span>
            </div>
            <div class="mid-content">
                <label for="list models">Список моделей:</label>
                <select name="list models" id="list-models">

                </select>
                <div class="wrap-input100 validate-input" data-validate="Enter name">
                    <input class="input100" type="text" id="model-name" name="modelName" placeholder="Model name">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter firm">
                    <input class="input100" type="text" id="model-firm" name="modelFirm" placeholder="Model firm">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter size">
                    <input class="input100" type="number" maxlength="2" id="model-size" name="modelSize" placeholder="Model size">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter price">
                    <input class="input100" type="number" pattern=".{.2}" id="model-price" name="price" placeholder="Price">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter amount">
                    <input class="input100" type="number" id="model-amount" min="1" max="50" name="amount" placeholder="Amount">
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" id="submit-edit-model">Изменить</button>
                </div>
            </div>
        </div>`;
        const editModel = document.getElementById('submit-edit-model');
        editModel.addEventListener('click', (e) => {
            e.preventDefault();
            shoeModule.editModel();
            shoeModule.getListModels();
        });
        const input = document.getElementsByClassName('input100');
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('focusin', (e) => {
                e.preventDefault();
                input[i].style.borderBottom = '2px solid white';
                input[i].style.marginBottom = '60px';
                input[i].style.fontSize = '20px';
                
                input[i].addEventListener('focusout', (e) => {
                    e.preventDefault();
                    input[i].style.borderBottom = '2px solid rgba(255,255,255,0.24)';
                    input[i].style.marginBottom = '30px';
                    input[i].style.fontSize = '16px';
                });
            });
        }
        const chooseModel = document.getElementsByTagName('select');
        for (let i = 0; i < chooseModel.length; i++) {
            chooseModel[i].addEventListener('change', (e) => {
                e.preventDefault();
                shoeModule.insertModelInfo();
            });
        }
    }
    showEditUser() {
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="user-edit-container">
            <div class="top-content">
                <span class="user-edit-title">Изменение пользователя</span>
            </div>
            <div class="mid-content">
                <label for="list users">Список пользователей:</label>
                <select name="list users" id="list-users">

                </select>
                <div class="wrap-input100 validate-input" data-validate="Enter first name">
                    <input class="input100" type="text" id="user-first-name" name="user-firstNamer" placeholder="First name">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter last name">
                    <input class="input100" type="text" id="user-last-name" name="user-lastName" placeholder="Last name">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter phone">
                    <input class="input100" type="number" pattern=".{8,}" maxlength="2" id="user-phone" name="phone" placeholder="Phone">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter money">
                    <input class="input100" type="number" id="user-money" name="money" placeholder="Money">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter username">
                    <input class="input100" type="text" id="user-username" name="username" placeholder="Username">
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" id="submit-edit-user">Изменить</button>
                </div>
            </div>
        </div>`;
        const editUser = document.getElementById('submit-edit-user');
        editUser.addEventListener('click', (e) => {
            e.preventDefault();
            userModule.editUser();
            userModule.getListUsers();
        });
        const input = document.getElementsByClassName('input100');
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('focusin', (e) => {
                e.preventDefault();
                input[i].style.borderBottom = '2px solid white';
                input[i].style.marginBottom = '60px';
                input[i].style.fontSize = '20px';
                
                input[i].addEventListener('focusout', (e) => {
                    e.preventDefault();
                    input[i].style.borderBottom = '2px solid rgba(255,255,255,0.24)';
                    input[i].style.marginBottom = '30px';
                    input[i].style.fontSize = '16px';
                });
            });
        }
        const chooseUser = document.getElementsByTagName('select');
        for (let i = 0; i < chooseUser.length; i++) {
            chooseUser[i].addEventListener('change', (e) => {
                e.preventDefault();
                userModule.insertUserInfo();
            });
        }
    }
    showPurchaseForm() {
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="purchase-container">
            <div class="top-content">
                <span class="purchase-title">Покупка обуви</span>
            </div>
            <div class="mid-content">
                <label for="list models">Список моделей:</label>
                <select name="list models" id="purchase-list-models">

                </select>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" id="submit-purchase">Купить</button>
                </div>
            </div>
        </div>`;
        const purchase = document.getElementById('submit-purchase');
        purchase.addEventListener('click', (e) => {
            purchaseModule.buyModel();
            purchaseModule.getModels();
        });
    }
    showAdminPanel() {
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="role-container">
            <div class="top-content">
                <span class="role-title">Назначение ролей</span>
            </div>
            <div class="mid-content">
                <label for="list users">Список пользователей:</label>
                <select name="list users" id="list-users">

                </select>
                <select name="list roles" id="list-roles">
                    <option value="SECONDADMIN">ADDITIONAL ADMINISTRATOR</option>
                    <option value="MANAGER">MANAGER</option>
                    <option value="USER">USER</option>
                </select>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" id="change-role">Изменить</button>
                </div>
            </div>
        </div>`;
        const changeRole = document.getElementById('change-role');
        changeRole.addEventListener('click', (e) => {
            adminModule.changeRole();
            adminModule.getUsers();
        });
    }
    showGain() {
        document.getElementById('info').innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div id="gainCont" class="gain-container">
            <button id="allGainBtn">
                Показать заработок за всё время
            </button>
            <div id="collapseExample">
                <p id="allGainTxt">&nbsp;</p>
            </div>
            <h3>Прибыль магазина за определенный месяц</h3>
            <p id="gainForAMonth">
                &nbsp;
            </p>
            <div class="allGainContainers" style="font-size: 18px; font-family: Molot">
                <div id="firstColumn" style="width: 35em; text-align: center">
                    <div id="gainForSeptember" class="month list-group-item list-group-item-action list-group-item-warning">Сентябрь</div>
                    <div id="gainForOctober" class="month list-group-item list-group-item-action list-group-item-warning">Октябрь</div>
                    <div id="gainForNovember" class="month list-group-item list-group-item-action list-group-item-warning">Ноябрь</div>

                    <div id="gainForMarch" class="month list-group-item list-group-item-action list-group-item-info">Март</div>
                    <div id="gainForApril" class="month list-group-item list-group-item-action list-group-item-info">Апрель</div>
                    <div id="gainForMay" class="month list-group-item list-group-item-action list-group-item-info">Май</div>
                </div>
                <div id="secondColumn" style="width: 35em; text-align: center">
                    <div id="gainForDecember" class="month list-group-item list-group-item-action list-group-item-primary">Декабрь</div>
                    <div id="gainForJanuary" class="month list-group-item list-group-item-action list-group-item-primary">Январь</div>
                    <div id="gainForFebruary" class="month list-group-item list-group-item-action list-group-item-primary">Февраль</div>

                    <div id="gainForJune" class="month list-group-item list-group-item-action list-group-item-danger">Июнь</div>
                    <div id="gainForJuly" class="month list-group-item list-group-item-action list-group-item-danger">Июль</div>
                    <div id="gainForAugust" class="month list-group-item list-group-item-action list-group-item-danger">Август</div>
                </div>   
            </div>
        </div>`
        const allGainBtn = document.getElementById('allGainBtn');
        allGainBtn.addEventListener('click', (e) => {
            gainModule.showAllGain();
        });
        const gainSeptemberBtn = document.getElementById('gainForSeptember');
        gainSeptemberBtn.addEventListener('click', (e) => {
            gainModule.showGainForSeptember();
        });
        const gainOctoberBtn = document.getElementById('gainForOctober');
        gainOctoberBtn.addEventListener('click', (e) => {
            gainModule.showGainForOctober();
        });
        const gainNovemberBtn = document.getElementById('gainForNovember');
        gainNovemberBtn.addEventListener('click', (e) => {
            gainModule.showGainForNovember();
        });
        const gainDecemberBtn = document.getElementById('gainForDecember');
        gainDecemberBtn.addEventListener('click', (e) => {
            gainModule.showGainForDecember();
        });
        const gainJanuaryBtn = document.getElementById('gainForJanuary');
        gainJanuaryBtn.addEventListener('click', (e) => {
            gainModule.showGainForJanuary();
        });
        const gainFebruaryBtn = document.getElementById('gainForFebruary');
        gainFebruaryBtn.addEventListener('click', (e) => {
            gainModule.showGainForFebruary();
        });
        const gainMarchBtn = document.getElementById('gainForMarch');
        gainMarchBtn.addEventListener('click', (e) => {
            gainModule.showGainForMarch();
        });
        const gainAprilBtn = document.getElementById('gainForApril');
        gainAprilBtn.addEventListener('click', (e) => {
            gainModule.showGainForApril();
        });
        const gainMayBtn = document.getElementById('gainForMay');
        gainMayBtn.addEventListener('click', (e) => {
            gainModule.showGainForMay();
        });
        const gainJuneBtn = document.getElementById('gainForJune');
        gainJuneBtn.addEventListener('click', (e) => {
            gainModule.showGainForJune();
        });
        const gainJulyBtn = document.getElementById('gainForJuly');
        gainJulyBtn.addEventListener('click', (e) => {
            gainModule.showGainForJuly();
        });
        const gainAugustBtn = document.getElementById('gainForAugust');
        gainAugustBtn.addEventListener('click', (e) => {
            gainModule.showGainForAugust();
        });

    }
}
const viewModule = new ViewModule();
export {viewModule};