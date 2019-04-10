
let messageEl = document.getElementsByClassName("message")[0];

function request(){
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.open("GET", "https://brandonlind10.github.io/learning-server/content.txt");
    httpRequest.send();
    httpRequest.onreadystatechange= stateChange;
    
    function stateChange(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                let response= JSON.parse(httpRequest.responeText);
                console.log();
                messageEl.textContent= response;
            }
            else {
                console.log("something went wrong " + httpRequest.status);
            }
        }
        else{
            console.log("something went wrong");
        }
        console.log("ran");
    }
}

request();