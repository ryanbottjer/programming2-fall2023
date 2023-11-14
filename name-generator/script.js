function generate() {
    let age = document.getElementById("age").value;
    let month = document.getElementById("month").value;
    let color = document.getElementById("color").value;
    let wholenameDiv = document.getElementById("wholename");

    let name = "";

    if (month === "" || color === ""){
        name = "You must enter something in each field.";
    }
    else if (age <= 0){
        name = "You can't be negative years old...";
    }
    else if (age > 100){
        name = "You're too old to be a superhero! Sorry :(";
    }
    else {
        if (age > 0 && age <= 15){
        name = name + "Agent ";
        }
        else if (age > 15 && age <=30){
        name = name + "Captain ";
        }
        else if (age > 30 && age <=50){
        name = name + "Doctor ";
        }
        else if (age > 50 && age <=75){
        name = name + "Inspector ";
        }
        else if (age > 75 && age <=100){
        name = name + "General ";
        }
        if (month === "jan" || month === "dec"){
        name = name + "Mighty ";
        }
        else if (month === "feb" || month === "nov"){
        name = name + "Atomic ";
        }
        else if (month === "mar" || month === "oct"){
        name = name + "Brave ";
        }
        else if (month === "apr" || month === "sep"){
        name = name + "Strong ";
        }
        else if (month === "may" || month === "aug"){
        name = name + "Stupendous ";
        }
        else if (month === "jun" || month === "jul"){
        name = name + "Blazing ";
        }
        if (color === "red" || color === "grey"){
        name = name + "Star";
        }
        else if (color === "orange" || color === "white"){
        name = name + "Wave";
        }
        else if (color === "yellow" || color === "black"){
        name = name + "Gold";
        }
        else if (color === "green" || color === "brown"){
        name = name + "Robot";
        }
        else if (color === "blue" || color === "purple" || color === "pink"){
        name = name + "Knight";
        }
    }
    wholenameDiv.innerText = name;
}