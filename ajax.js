function request(){
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.open("GET", "https://brandonlind10.github.io/learning-server/content.txt");
    httpRequest.send();
    
    if(httpRequest.readyState === 4){
        if(httpRequest.status === 200){
            console.log(httpRequest.responseText);
        }
    }
    
}

request();