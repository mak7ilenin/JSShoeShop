import {loginModule} from './LoginModule.js';
import { shoeModule } from './ShoeModule.js';
import {viewModule} from './ViewModule.js';
export {checkRole};

const buyModel = document.getElementById('buy-model');
const createModel = document.getElementById('create-model');
const createUser = document.getElementById('create-user');
const editModel = document.getElementById('edit-model');
const editUser = document.getElementById('edit-user');
hideMenu();
function hideMenu() {
    buyModel.style.display = "none";
    createModel.style.display = "none";
    createUser.style.display = "none";
    editModel.style.display = "none";
    editUser.style.display = "none";
}
const info = document.getElementById('info');
const btnLogin = document.getElementById('logIn');
const btnLogout = document.getElementById('logOut');
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showLoginForm();
});
btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    loginModule.logout();
    btnLogout.style.display = "none";
    btnLogin.style.display = "unset";
    info.innerHTML = "Вы вышли из аккаунта!";
    hideMenu();
});
function checkRole() {
    let role = null;
    if(sessionStorage.getItem('user') === null) {
        if(!buyModel.style.display === "none") {
            buyModel.style.display = "none";
        }
        if(!createModel.style.display === "none") {
            createModel.style.display = "none";
        }
        if(!createUser.style.display === "none") {
            createUser.style.display = "none";
        }
        if(!editModel.style.display === "none") {
            editModel.style.display = "none";
        }
        if(!editUser.style.display === "none") {
            editUser.style.display = "none";
        }
        return;
    }
    // console.log(JSON.parse(sessionStorage.getItem('user')));
    if(JSON.parse(sessionStorage.getItem('user')).role === "ADMINISTRATOR") {
        if(buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(createModel.style.display === "none") {
            createModel.style.display = "unset";
        }
        if(createUser.style.display === "none") {
            createUser.style.display = "unset";
        }
        if(editModel.style.display === "none") {
            editModel.style.display = "unset";
        }
        if(editUser.style.display === "none") {
            editUser.style.display = "unset";
        }
        return;
    }
    if(JSON.parse(sessionStorage.getItem('user')).role === "MANAGER") {
        if(buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(createModel.style.display === "none") {
            createModel.style.display = "unset";
        }
        if(createUser.style.display === "none") {
            createUser.style.display = "unset";
        }
        if(editModel.style.display === "none") {
            editModel.style.display = "unset";
        }
        if(editUser.style.display === "none") {
            editUser.style.display = "none";
        }
        return;
    }
    if(JSON.parse(sessionStorage.getItem('user')).role === "USER") {
        if(buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(createModel.style.display === "none") {
            createModel.style.display = "none";
        }
        if(createUser.style.display === "none") {
            createUser.style.display = "unset";
        }
        if(editModel. style.display === "none") {
            editModel.style.display = "none";
        }
        if(editUser.style.display === "none") {
            editUser.style.display = "none";
        }
        return;
    }
}
createModel.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showCreateModel();
});
editModel.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showEditModel();
    shoeModule.getListModels();
});