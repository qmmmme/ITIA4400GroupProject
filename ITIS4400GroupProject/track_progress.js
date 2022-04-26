var weightArr = [];
var gallery = [];
var x = 0;
var messageBox  = document.getElementById("display");

for(var i = 0; i < 8; i++){
    gallery[i] = document.getElementById(`output${i}`);
}

//load file code from: https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript 
var loadFile = function(event) {
	    gallery[x].src = URL.createObjectURL(event.target.files[0]);
    x++;
    if(x == 8){
        x = 0;
    }
};

function addWeight(weight_measure){
    weightArr.splice(0,0, document.getElementById("weight_measure").value);
    document.getElementById("weight_measure").value = "";
    console.log(weightArr);
    console.log(document.getElementById("weight_measure").value);
    
}

function displayW(){
    document.getElementById("display").innerHTML = ""; 
    
    for(var i = 0; i<10; i++){
        messageBox.innerHTML += "<li>" + weightArr[i] +  " lbs" + "</li>"
       
    }

}


