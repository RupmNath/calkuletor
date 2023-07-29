//clear
document.querySelector("#clr").addEventListener("click", () => {
    document.querySelector("#display").value = " ";
})

//backspace
const backSpace = () => {
    const num = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = num;
}
//zero 
const zero = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "0";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }
}

//one 
const one = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "1";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1";
    }
}

//two
const two = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "2";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2";
    }
}


//three
const three = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "3";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3";
    }
}


//four
const four = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "4";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4";
    }
}


//five
const five = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "5";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5";
    }
}


//six 
const six = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "6";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6";
    }
}


//seven
const seven = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "7";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7";
    }
}


//eight
const eight = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "8";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8";
    }
}

//nine
const nine = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "9";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }
}

//one 
const point = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = ".";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + ".";
    }
}
