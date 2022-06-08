import {loginModule} from './LoginModule.js';
import {shoeModule} from './ShoeModule.js';
import {userModule} from './UserModule.js';
import {purchaseModule} from './PurchaseModule.js';
import {adminModule} from './AdminModule.js';
import {gainModule} from './GainModule.js';
import {myselfModule} from './MyselfModule.js';
import {uploadModule} from './UploadModule.js';
class ViewModule {
    // CHECK IF IMAGE EXISTS FUNCTION
    checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;
        if(img.complete) {
            callback(true);
        }else {
            img.onload = () => {
                callback(true);
            };
            img.onerror = () => {
                callback(false);
            }
        }
    }
    showLoginForm() {
        document.getElementById('info').innerHTML = '';
        document.getElementById('info').style.opacity = '0';
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
                <h2 filter-content="S">Регистрация</h2>
            </div>
            <div class="wrap-input100 validate-input input-container" data-validate="Enter first name">
                <img src="Images/first_name.png" class="input-img"></img>
                <input class="input100" type="text" id="first-name" name="user-firstNamer" placeholder="First name">
            </div>
            <div class="wrap-input100 validate-input input-container" data-validate="Enter last name">
                <img src="Images/last_name.png" class="input-img"></img>
                <input class="input100" type="text" id="last-name" name="user-lastName" placeholder="Last name">
            </div>
            <div class="wrap-input100 validate-input input-container" data-validate="Enter username">
                <img src="Images/username.png" class="input-img"></img>
                <input class="input100" type="text" id="username" name="username" placeholder="Username">
            </div>
            <div class="wrap-input100 validate-input input-container" data-validate="Enter password">
                <img src="Images/password.png" class="input-img"></img>
                <input class="input100" type="password" id="password" name="password" placeholder="Password">
            </div>
            <div class="wrap-input100 validate-input input-container" data-validate="Enter phone">
                <img src="Images/phone.png" class="input-img"></img>
                <input class="input100" type="number" pattern=".{8,}" maxlength="2" id="phone" name="phone" placeholder="Phone">
            </div>
            <div class="wrap-input100 validate-input input-container" data-validate="Enter money">
                <img src="Images/money.png" class="input-img"></img>
                <input class="input100" type="number" id="money" name="money" placeholder="Money">
            </div>
            <button type="submit" id="register">Добавить</button>
        </div>`;
        const register = document.getElementById('register');
        register.addEventListener('click', (e) => {
            e.preventDefault();
            userModule.registration();
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
                <div class="wrap-input100 validate-input input-container" data-validate="Enter first name">
                    <img src="Images/first_name.png" class="input-img"></img>
                    <input class="input100" type="text" id="first-name" name="user-firstNamer" placeholder="First name">
                </div>
                <div class="wrap-input100 validate-input input-container" data-validate="Enter last name">
                    <img src="Images/last_name.png" class="input-img"></img>
                    <input class="input100" type="text" id="last-name" name="user-lastName" placeholder="Last name">
                </div>
                <div class="wrap-input100 validate-input input-container" data-validate="Enter username">
                    <img src="Images/username.png" class="input-img"></img>
                    <input class="input100" type="text" id="username" name="username" placeholder="Username">
                </div>
                <div class="wrap-input100 validate-input input-container" data-validate="Enter password">
                    <img src="Images/password.png" class="input-img"></img>
                    <input class="input100" type="password" id="password" name="password" placeholder="Password">
                </div>
                <div class="wrap-input100 validate-input input-container" data-validate="Enter phone">
                    <img src="Images/phone.png" class="input-img"></img>
                    <input class="input100" type="number" pattern=".{8,}" maxlength="2" id="phone" name="phone" placeholder="Phone">
                </div>
                <div class="wrap-input100 validate-input input-container" data-validate="Enter money">
                    <img src="Images/money.png" class="input-img"></img>
                    <input class="input100" type="number" id="money" name="money" placeholder="Money">
                </div>
                <button type="submit" id="register">Добавить</button>
            </div>`;
        const register = document.getElementById('register');
        register.addEventListener('click', (e) => {
            e.preventDefault();
            userModule.registration();
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
    showCreateModel() {
        document.getElementById('info').innerHTML = '';
        document.getElementById('info').style.opacity = '0';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div id="adding-shoe" class="shoe-add-container">
            <div id="img-side" class="img-side">
                <div class="img-card">
                    <img id="model-image" src="">
                </div>
            </div>
            <div id="shoe-info" class="shoe-info-side">
                <div class="top-content">
                    <span class="container-title">Добавление обуви</span>
                </div>
                <div class="mid-content">
                    <div class="pictures-select-container">
                        <label for="list pictures">Список изображений:</label>
                        <select name="listPictures" id="list-pictures">
                        
                        </select>
                    </div>
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
                        <button class="file-form-btn" id="add-file">Добавить файл</button>
                        <button class="login100-form-btn" id="add-model">Добавить</button>
                    </div>
                </div>
            </div>
        </div>`;
        const choosePicture = document.getElementsByTagName('select');
        for (let i = 0; i < choosePicture.length; i++) {
            choosePicture[i].addEventListener('change', (e) => {
                e.preventDefault();
                uploadModule.getPicture();
            });
        }
        const modelImage = document.getElementById('model-image');
        viewModule.checkIfImageExists(modelImage.src, (exists) => {
            if(exists) {
                console.log('Image exists. ')
                document.getElementById('adding-shoe').style.padding = '10px 25px 17px 15px';
                document.getElementById('img-side').style.width = '55%';
                document.getElementById('img-side').style.display = 'flex';
                document.getElementById('adding-shoe').style.marginTop = '120px';
                document.getElementById('adding-shoe').style.width = '90%';
            }else {
                console.error('Image does not exists')
                document.getElementById('adding-shoe').style.padding = '25px 45px 25px 25px';
                document.getElementById('img-side').style.display = 'none';
                document.getElementById('adding-shoe').style.marginTop = '120px';
                document.getElementById('adding-shoe').style.width = '55%';
            }
        });
        const addFile = document.getElementById('add-file');
        addFile.addEventListener('click', (e) => {
            e.preventDefault();
            viewModule.showUploadImage();
        });
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
        document.getElementById('info').style.opacity = '0';
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
                <select name="listPictures" id="list-pictures">
                
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
        const chooseModel = document.getElementById('list-models');
        chooseModel.addEventListener('change', (e) => {
            e.preventDefault();
            if(chooseModel.value !== '') {
                shoeModule.insertModelInfo();
            }
        });
    }
    showEditUser() {
        document.getElementById('info').innerHTML = '';
        document.getElementById('info').style.opacity = '0';
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
                if(chooseUser[i].value !== '') {
                    userModule.insertUserInfo();
                }
            });
        }
    }
    showEditMyself() {
        document.getElementById('info').innerHTML = '';
        document.getElementById('info').style.opacity = '0';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="myself-edit-container">
            <div class="top-content">
                <span class="myself-edit-title">Изменение данных</span>
            </div>
            <div class="mid-content">
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
            myselfModule.editMyself();
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
    showPurchaseForm() {
        document.getElementById('info').innerHTML = '';
        document.getElementById('info').style.opacity = '0';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div id="purchContainer" class="purchase-container">
            <div class="top-content">
                <span class="purchase-title">Покупка обуви</span>
            </div>
            <div class="mid-content">
                <label for="list models">Список моделей:</label>
                <select name="list models" id="purchase-list-models">

                </select>
                <div id="modelImage-container" class="buy-image">
                    <img id="modelImage" src="">
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" id="submit-purchase">Купить</button>
                </div>
            </div>
        </div>`;
        const purchaseModel = document.getElementById('purchase-list-models');
        purchaseModel.addEventListener('change', (e) => {
            if(purchaseModel.value !== '') {
                purchaseModule.insertPurchasePicture();   
            }
        });
        const purchase = document.getElementById('submit-purchase');
        purchase.addEventListener('click', (e) => {
            purchaseModule.buyModel();
            purchaseModule.getModels();
        });
    }
    showAdminPanel() {
        document.getElementById('info').innerHTML = '';
        document.getElementById('info').style.opacity = '0';
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
        document.getElementById('info').style.opacity = '0';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div id="gainCont" class="gain-container">
            <button id="allGainBtn">
                Показать заработок за всё время
            </button>
            <div id="collapseExample">
                <p id="allGainTxt">&nbsp;</p>
            </div>
            <h3 id="monthHeading">Прибыль магазина за определенный месяц</h3>
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
    showUploadImage() {
        document.getElementById('info').innerHTML = '';
        document.getElementById('info').style.opacity = '0';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div id="adding-shoe-upload" class="shoe-add-container">
            <div class="shoe-info-side">
                <div id="topContent" class="top-content">
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
                        <button class="file-form-btn" id="add-file">Добавить файл</button>
                        <button class="login100-form-btn" id="add-model">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
        
        <form id="upload-form">
            <div id="upload-content">
                <div class="top-content">
                    <div class="img-container">
                        <img src="Images/upload.png" id="backBtn" alt="upload">
                    </div>
                    <div class="after-img">
                        <p>Загрузка изображений</p>
                    </div>
                </div>
                <div class="mid-content">
                    <label for="forImg">Выберите файл</label>
                    <label name="forImg" class="download-img">
                        <input type="file" id="inputTag" name="inputTag"> <br>
                    </label>
                    <div id="selected-file" class="selected-file">
                        <input id="imagePathName" name="imagePathName" readonly/>
                    </div>
                    <div class="add-file-container">
                        <button type="submit" id="submit-file">Загрузить файл</button>
                    </div>
                </div>
            </div>
        </form>`
        const body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = 'rgba(0, 0, 0, 0.582)'
        const backBtn = document.getElementById('backBtn');
        backBtn.addEventListener('click', (e) => {
            viewModule.showCreateModel();
            uploadModule.insertListPictures();
            body[0].style.backgroundColor = 'white'
        });
        document.getElementById('adding-shoe-upload').style.padding = '25px 45px 25px 25px';
        document.getElementById('adding-shoe-upload').style.pointerEvents = 'none';
        document.getElementById('adding-shoe-upload').style.opacity = '0.6'
        const topContent = document.getElementById('topContent');
        topContent.style.paddingBottom = '50px';
        topContent.style.paddingTop = '30px';

        const addingShoe = document.getElementById('adding-shoe-upload');
        const addFile = document.getElementById('add-file');
        const addModel = document.getElementById('add-model');
        addingShoe.style.opacity = '0.5';
        addFile.style.cursor = 'not-allowed';
        addModel.style.cursor = 'not-allowed';
        // insert file name into input
        const inputTag = document.getElementById('inputTag');
        inputTag.addEventListener('change', (e) =>{
            let inputImage = document.querySelector("input[type=file]").files[0];
            const imagePathName = document.getElementById('imagePathName');
            const uploadContent = document.getElementById('upload-content');
            const selectedFile = document.getElementById('selected-file');
            imagePathName.style.display = 'unset';
            imagePathName.value = inputImage.name;
            uploadContent.style.height = '660px';
            uploadContent.style.marginTop = '95px';
            selectedFile.style.marginTop = '30px';

        });
        const submitFile = document.getElementById('upload-form');
        submitFile.addEventListener('submit', (e) => {
            e.preventDefault();
            body[0].style.backgroundColor = 'white'
            uploadModule.uploadPicture();
            viewModule.showCreateModel();
        });
    }
}
const viewModule = new ViewModule();
export {viewModule};