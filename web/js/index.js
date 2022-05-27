import {loginModule} from './LoginModule.js';
import {viewModule} from './ViewModule.js';
export {checkMenu};
var debug = true;
function isDebug(message){
    if(debug) console.log(message);
}

const buyModel = document.getElementById('buy-model');
buyModel.style.display = "none";
const createModel = document.getElementById('create-model');
createModel.style.display = "none";
const createUser = document.getElementById('create-user');
createUser.style.display = "none";
const editModel = document.getElementById('edit-model');
editModel.style.display = "none";
const editUser = document.getElementById('edit-user');
editUser.style.display = "none";

const btnLogin = document.getElementById("login");
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    viewModule.showLoginForm();
})
function checkMenu() {
    let role = null;
    if(sessionStorage.getItem('role') === null) {
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
    }
    console.log(JSON.parse(sessionStorage.getItem('user')));
    user = JSON.parse(sessionStorage.getItem('user'));
    if(user.role === 'ADMINISTRATOR') {
        if(!buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(!createModel.style.display === "none") {
            createModel.style.display = "unset";
        }
        if(!createUser.style.display === "none") {
            createUser.style.display = "unset";
        }
        if(!editModel.style.display === "none") {
            editModel.style.display = "unset";
        }
        if(!editUser.style.display === "none") {
            editUser.style.display = "unset";
        }
    }
    if(user.role === 'MANAGER') {
        if(!buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(!createModel.style.display === "none") {
            createModel.style.display = "unset";
        }
        if(!createUser.style.display === "none") {
            createUser.style.display = "unset";
        }
        if(!editModel.style.display === "none") {
            editModel.style.display = "unset";
        }
        if(!editUser.style.display === "none") {
            editUser.style.display = "none";
        }
    }
    if(user.role === 'USER') {
        if(!buyModel.style.display === "none") {
            buyModel.style.display = "unset";
        }
        if(!createModel.style.display === "none") {
            createModel.style.display = "none";
        }
        if(!createUser.style.display === "none") {
            createUser.style.display = "unset";
        }
        if(!editModel.style.display == "none") {
            editModel.style.display = "none";
        }
        if(!editUser.style.display == "none") {
            editUser.style.display = "none";
        }
    }
}checkMenu();