import {loginModule} from './LoginModule.js';
import {shoeModule} from './ShoeModule.js';
import {viewModule} from './ViewModule.js';
import {userModule} from './UserModule.js';
import {purchaseModule} from './PurchaseModule.js';
import {adminModule} from './AdminModule.js';
import {myselfModule} from './MyselfModule.js';
export {checkRole};

const buyModel = document.getElementById('buy-model');
const createModel = document.getElementById('create-model');
const createUser = document.getElementById('create-user');
const editModel = document.getElementById('edit-model');
const editUser = document.getElementById('edit-user');
const editMyself = document.getElementById('edit-myself');
const adminPanel = document.getElementById('admin-panel');
const gainPanel = document.getElementById('gain-panel');
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
    createModel.style.display = "none";
    createUser.style.display = "none";
    editModel.style.display = "none";
    editUser.style.display = "none";
    adminPanel.style.display = "none";
    gainPanel.style.display = "none";
    editMyself.style.display = "none";
}
// const dropdownContent = document.getElementsByClassName('dropdown-content');
//     dropdown[i].addEventListener('click', (e) => {
// const dropdown = document.getElementsByClassName('dropdown');
// for (let i = 0; i < dropdown.length; i++) {
//         e.preventDefault();
//         dropdownContent[i].style.display = 'block';
//     });
//     dropdown[i].addEventListener('focusout', (e) => {
//         e.preventDefault();
//         dropdownContent[i].style.display = 'none';
//     });
// }
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