var picarray = ["Soccer.jpg.jpg", "Soccer2.JPG", "Piano.jpg"]
var counter = 0;
function forwardImage(){

    
    counter++;
    if(counter == 3){
        counter = 0
    }
    if(counter == 2){
        document.getElementById("caption").innerHTML = "A piano(I play the piano)"
    }
    if(counter == 0){
        document.getElementById("caption").innerHTML = "A picture of me playing soccer."
    }
    if (counter == 1){
        
        document.getElementById("caption").innerHTML = "A picture of me playing soccer."


    }
    document.getElementById("image").src = picarray[counter];



}
function backImage(){

    counter--;
    if(counter == -1){
        counter = 2
    }
    document.getElementById("image").src = picarray[counter];


}
document.getElementById("button1").addEventListener("click", backImage)
document.getElementById("button2").addEventListener("click", forwardImage)