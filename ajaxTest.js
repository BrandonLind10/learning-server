
let messageEl = document.getElementsByClassName("message")[0];
let button = document.getElementsByClassName("request-button")[0];

function request(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange= stateChange;
    httpRequest.open("GET", "https://brandonlind10.github.io/learning-server/content.txt");
    httpRequest.send();

    
    //creates on ready state callback
    function stateChange(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                //parse response, updates html
                let response= httpRequest.responseText;
                alert(response);
                //
                messageEl.textContent= response;
            }
            else {
                console.log("something went wrong " + httpRequest.status);
            }
        }
        console.log(httpRequest.readyState);
        }
        console.log("ran");
    }


button.addEventListener("click", request);