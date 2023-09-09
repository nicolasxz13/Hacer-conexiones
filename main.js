var connectionsRequest = 2;
var connections = 418;

function editprofile(){
    document.querySelector("#profilecontent h1").innerHTML = "Janna du";
}

function aceptconnectionrequest(element){
    if(connectionsRequest != 0 ){
        cancelconnectionsrequest(element);
        connections = connections + 1;
        document.querySelector("#connectionCount").innerHTML = connections;
    }
}
function cancelconnectionsrequest(element){
    if(connectionsRequest != 0){
        connectionsRequest = connectionsRequest - 1;
        element.parentNode.remove();
        document.querySelector("#requestconnection").innerHTML = connectionsRequest;
    }
}