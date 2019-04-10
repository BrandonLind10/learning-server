
let messageEl = document.getElementsByClassName("message")[0];

function request(){
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.open("GET", "content.txt");
    httpRequest.send();
    httpRequest.onreadystatechange= stateChange;
    
    function stateChange(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                let response= JSON.parse(httpRequest.responeText);
                console.log();
                messageEl.textContent= response;
            }
        }
        console.log("ran");
    }
}

request();