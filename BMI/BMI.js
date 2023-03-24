function changeLabels() {
    // Get gender value
    var gender = document.getElementById("gender").value;

    // Change weight and height labels based on gender
    var weightLabel = document.getElementById("weightLabel");
    var heightLabel = document.getElementById("heightLabel");
    if (gender === "male") {
        weightLabel.innerHTML = "Weight (kg):";
        heightLabel.innerHTML = "Height (cm):";
    } else if (gender === "female") {
        weightLabel.innerHTML = "Weight (kg):";
        heightLabel.innerHTML = "Height (cm):";
    }
}

function calculateBMI() {
    // Get input values
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    if (age === "" || weight === "" || height === "") {
        alert("Fill all inputs");
    } else {
        // Calculate BMI
        var bmi;
        if (gender === "male") {
            bmi = 1.0 * weight / ((height / 100) ** 2);
        } else if (gender === "female") {
            bmi = 0.9 * weight / ((height / 100) ** 2);
        }

        // Display result
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(1);

        // Determine BMI category and add class to resultDiv
        if (bmi < 18.5) {
            resultDiv.innerHTML += " - Underweight";
            resultDiv.className = "underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            resultDiv.innerHTML += " - Normal weight";
            resultDiv.className = "normal";
        } else if (bmi >= 25 && bmi < 30) {
            resultDiv.innerHTML += " - Overweight";
            resultDiv.className = "overweight";
        } else if (bmi >= 30) {
            resultDiv.innerHTML += " - Obese";
            resultDiv.className = "obese";
        }
    }
}