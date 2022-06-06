import {loginModule} from './LoginModule.js';
import {shoeModule} from './ShoeModule.js';
import {viewModule} from './ViewModule.js';
import {userModule} from './UserModule.js';
import {purchaseModule} from './PurchaseModule.js';
import {adminModule} from './AdminModule.js';
import {myselfModule} from './MyselfModule.js';
import {uploadModule} from './UploadModule.js';
export {checkRole};

if(sessionStorage.getItem('user') !== null) {
    const userBank = document.getElementById('user-bank');
    userBank.innerHTML = JSON.parse(sessionStorage.getItem('user')).money + "$";
}

const buyModel = document.getElementById('buy-model');
const modelCont = document.getElementById('model-panel');
const userCont = document.getElementById('user-panel');
const modelPanel = document.getElementById('myDropdown1');
const userPanel = document.getElementById('myDropdown2');
const createModel = document.getElementById('create-model');
const createUser = document.getElementById('create-user');
const editModel = document.getElementById('edit-model');
const editUser = document.getElementById('edit-user');
const editMyself = document.getElementById('edit-myself');
const adminPanel = document.getElementById('admin-panel');
const gainPanel = document.getElementById('gain-panel');

const info = document.getElementById('info');
const btnLogin = document.getElementById('logIn');
const btnLogout = document.getElementById('logOut');

window.addEventListener('load', (e) => {
    if(sessionStorage.getItem('user') !== null) {
        checkRole();
        btnLogout.style.display = "unset";
        btnLogin.style.display = "none";
    }
});
hideMenu();
function hideMenu() {
    buyModel.style.display = "none";
    modelCont.style.display = "none";
    modelPanel.classList.remove('show');
    userCont.style.display = "none";
    userPanel.classList.remove('show');
    adminPanel.style.display = "none";
    gainPanel.style.display = "none";
    editMyself.style.display = "none";
}
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
    info.style.opacity = '1';
    hideMenu();
    viewModule.showLoginForm();
});
function checkRole() {
    let role = null;
    if(sessionStorage.getItem('user') === null) {
        if(!buyModel.style.display === "none") {
            buyModel.style.display = "none";
        }
        if(!modelPanel.classList.contains('show')) {
            modelCont.style.display = "none";
            modelPanel.classList.remove('show');
        }
        if(!userPanel.classList.contains('show')) {
            userCont.style.display = "none";
            userPanel.classList.remove('show');
        }
        if(!gainPanel.style.display === "none") {
            gainPanel.style.display = "none";
        }
        return;
    }
    // console.log(JSON.parse(sessionStorage.getItem('user')));
    if(JSON.parse(sessionStorage.getItem('user')).role === "ADMINISTRATOR") {
        if(buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(!modelPanel.classList.contains('show')) {
            modelCont.style.display = "unset";
        }
        if(!userPanel.classList.contains('show')) {
            userCont.style.display = "unset";
        }
        if(adminPanel.style.display === "none") {
            adminPanel.style.display = "unset";
        }
        if(gainPanel.style.display === "none") {
            gainPanel.style.display = "unset";
        }
        if(editMyself.style.display === "none") {
            editMyself.style.display = "unset";
        }
        return;
    }
    if(JSON.parse(sessionStorage.getItem('user')).role === "SECONDADMIN") {
        if(buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(!modelPanel.classList.contains('show')) {
            modelCont.style.display = "unset";
        }
        if(!userPanel.classList.contains('show')) {
            userCont.style.display = "unset";
        }
        if(adminPanel.style.display === "none") {
            adminPanel.style.display = "unset";
        }
        if(gainPanel.style.display === "none") {
            gainPanel.style.display = "unset";
        }
        if(editMyself.style.display === "none") {
            editMyself.style.display = "unset";
        }
        return;
    }
    if(JSON.parse(sessionStorage.getItem('user')).role === "MANAGER") {
        if(buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(!modelPanel.classList.contains('show')) {
            modelCont.style.display = "unset";
        }
        if(!userPanel.classList.contains('show')) {
            userCont.style.display = "unset";
            editUser.style.display = "none";
        }
        if(adminPanel.style.display === "none") {
            adminPanel.style.display = "none";
        }
        if(gainPanel.style.display === "none") {
            gainPanel.style.display = "none";
        }
        if(editMyself.style.display === "none") {
            editMyself.style.display = "unset";
        }
        return;
    }
    if(JSON.parse(sessionStorage.getItem('user')).role === "USER") {
        if(buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(!modelPanel.classList.contains('show')) {
            modelCont.style.display = "none";
        }
        if(!userPanel.classList.contains('show')) {
            userCont.style.display = "none";
        }
        if(adminPanel.style.display === "none") {
            adminPanel.style.display = "none";
        }
        if(gainPanel.style.display === "none") {
            gainPanel.style.display = "none";
        }
        if(editMyself.style.display === "none") {
            editMyself.style.display = "unset";
        }
        return;
    }
}
createModel.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showCreateModel();
    uploadModule.insertListPictures();
});
createUser.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showCreateUser();
});
editModel.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showEditModel();
    shoeModule.getListModels();
});
editUser.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showEditUser(); 
    userModule.getListUsers();
});
editMyself.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showEditMyself(); 
    myselfModule.insertMyselfInfo();
});
buyModel.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showPurchaseForm();
    purchaseModule.getModels();
});
adminPanel.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showAdminPanel();
    adminModule.getUsers();
})
gainPanel.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showGain();
});