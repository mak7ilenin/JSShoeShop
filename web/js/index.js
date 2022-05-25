var debug = true;
function isDebug(message){
    if(debug) console.log(message);
}
const buyModel = document.getElementById('buy-model');
const createModel = document.getElementById('create-model');
const createUser = document.getElementById('create-user');
const editModel = document.getElementById('edit-model');
const editUser = document.getElementById('edit-user');
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
}