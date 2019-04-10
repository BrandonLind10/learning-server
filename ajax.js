
let messageEl = document.getElementsByClassName("message")[0];

function request(){
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.open("GET", "https://brandonlind10.github.io/learning-server/content.txt");
    httpRequest.send();
    httpRequest.onreadystatechange= stateChange;
    
    function stateChange(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                console.log(httpRequest.responseText);
                messageEl.textContent= httpRequest.responseText;
            }
        }
        console.log("ran");
    }
}

request();