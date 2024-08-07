// Clear when click on C button
function clr(){
    document.getElementById("result").value="";
}

// when press on button its values get in result
function getResult(val){
    document.getElementById("result").value+=val;
}

// when press on backspace its clear or slice one-one values
function clrSlice(){
    var bck = document.getElementById("result").value;
    var res = bck.slice(0, -1);
    document.getElementById("result").value=res;
}

// get all arithmetic result and get final result eval(), all arithmetic operators evaluate here.
function getFinalResult(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value=+y;
}

// Create a function for Squreroot and Math function calculat for Squreroot
function sqrtResult(){
    var number = parseInt(document.getElementById("result").value);
    var res = Math.sqrt(number);
    document.getElementById("result").value=res;
}

// criate a function for squre and math function for calculat squre
function sqrResult(){
    var number = parseInt(document.getElementById("result").value);
    var res = Math.pow(number, 2);
    document.getElementById("result").value=res;
}