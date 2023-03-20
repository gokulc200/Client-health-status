let caloriesInputElement = document.getElementById("caloriesInput");
let convertButtonElement = document.getElementById("convertBtn");
let errorMsgElement = document.getElementById("errorMsg");
let saveItemsContainer = document.getElementById("saveItemsContainer");
let saveButton = document.getElementById("saveButton");
let addButton = document.getElementById("addButton");

var date = new Date();
var current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

function calculateCaloriesConsumed() {
    let caloriesInputElementValue = caloriesInputElement.value;
    if (caloriesInputElementValue < 1400) {
        errorMsgElement.textContent = "Consume still more calories to keep your body healthy!🚶";
        errorMsgElement.style.color = "#1ce0eb";
    } else if (1400 <= caloriesInputElementValue && caloriesInputElementValue <= 2000) {
        errorMsgElement.textContent = "Congratulations👏🥳, You have taken enough calories today and achieved your daily goal!❤️";
        errorMsgElement.style.color = "yellow";
    } else if (caloriesInputElementValue > 2000) {
        errorMsgElement.textContent = "Today you have taken calories more than enough, its time to reduce it!. Contact your doctor👨🏻‍⚕ for diet details!";
        errorMsgElement.style.color = "yellow";
    } else {
        errorMsgElement.textContent = "Enter minutes in input area!❌";
    }
}

convertButtonElement.addEventListener("click", function() {
    if (caloriesInputElement.value === "") {
        errorMsgElement.textContent = "*Please enter a valid number of minutes.";
        errorMsgElement.style.color = "red";
    } else {
        errorMsgElement.textContent = "";
        calculateCaloriesConsumed();
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
    let caloriesInputElementValue = caloriesInputElement.value;
    if (caloriesInputElementValue === "") {
        alert("Enter Valid Input");
        return;
    }
    savesCount = savesCount + 1;
    let newSave = {
        text: caloriesInputElementValue,
        uniqueNo: savesCount
    };
    saveList.push(newSave);
    createAndAppendSave(newSave);
    caloriesInputElement.value = "";
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
    labelElement.textContent = save.text + " Calories🧬 on " + current_date;
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