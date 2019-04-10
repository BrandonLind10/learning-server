
let messageEl = document.getElementsByClassName("message")[0];

function request(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange= stateChange;
    httpRequest.open("GET", "https://brandonlind10.github.io/learning-server/content.txt");
    httpRequest.send();

    
    function stateChange(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                let response= JSON.parse(httpRequest.responseText);
                alert(response);
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