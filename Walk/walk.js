let minutesInputElement = document.getElementById("minutesInput");
let convertButtonElement = document.getElementById("convertBtn");
let errorMsgElement = document.getElementById("errorMsg");
let saveItemsContainer = document.getElementById("saveItemsContainer");
let saveButton = document.getElementById("saveButton");
let addButton = document.getElementById("addButton");

var date = new Date();
var current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

function convertToSeconds() {
    let minutesInputElementValue = minutesInputElement.value;
    if (minutesInputElementValue < 15) {
        errorMsgElement.textContent = "Walk still more minutes to keep your body healthy!🚶";
        errorMsgElement.style.color = "#1ce0eb";
    } else if (15 <= minutesInputElementValue && minutesInputElementValue <= 30) {
        errorMsgElement.textContent = "Congratulations👏🥳, You have completed your daily walking goal!";
        errorMsgElement.style.color = "yellow";
    } else if (minutesInputElementValue > 30) {
        errorMsgElement.textContent = "Good job, today you have walked more than enough, its time to take rest!❤️";
        errorMsgElement.style.color = "yellow";
    } else {
        errorMsgElement.textContent = "Enter minutes in input area!❌";
    }
}

convertButtonElement.addEventListener("click", function() {
    if (minutesInputElement.value === "") {
        errorMsgElement.textContent = "*Please enter a valid number of minutes.";
        errorMsgElement.style.color = "red";
    } else {
        errorMsgElement.textContent = "";
        convertToSeconds();
    }
})

function getTodoListFromLocalStorage() {
    let stringifiedSaveList = localStorage.getItem("saveList");
    let parsedSaveList = JSON.parse(stringifiedSaveList);
    if (parsedSaveList === null) {
        return [];
    } else {
        return parsedSaveList;
    }
}

let saveList = getTodoListFromLocalStorage();
let savesCount = saveList.length;

saveButton.onclick = function() {
    localStorage.setItem("saveList", JSON.stringify(saveList));
}

function onAddSave() {
    let minutesInputElementValue = minutesInputElement.value;
    if (minutesInputElementValue === "") {
        alert("Enter Valid Input");
        return;
    }
    savesCount = savesCount + 1;
    let newSave = {
        text: minutesInputElementValue,
        uniqueNo: savesCount
    };
    saveList.push(newSave);
    createAndAppendSave(newSave);
    minutesInputElement.value = "";
}

addButton.onclick = function() {
    onAddSave();
};

function onDeleteSave(saveId) {
    let saveElement = document.getElementById(saveId);
    saveItemsContainer.removeChild(saveElement);
    let deleteElementIndex = saveList.findIndex(function(eachSave) {
        let eachSaveId = "save" + eachSave.uniqueNo;
        if (eachSaveId === saveId) {
            return true;
        } else {
            return false;
        }
    });
    saveList.splice(deleteElementIndex, 1);
}

function createAndAppendSave(save) {
    let saveId = "save" + save.uniqueNo;
    let saveElement = document.createElement("li");
    saveElement.id = saveId;
    saveElement.classList.add("save-item-container", "d-flex", "flex-row");
    saveItemsContainer.appendChild(saveElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    saveElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = save.text + " Minutes🚶 on " + current_date;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteSave(saveId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let save of saveList) {
    createAndAppendSave(save);
}