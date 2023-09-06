


function getColors() {
    let request = new XMLHttpRequest ();

    request.open('GET', 'https://reqres.in/api/unknown');

    request.addEventListener('load', function(){
        let incomingInfoText = this.responseText;
        let incomingInfoJs = JSON.parse(incomingInfoText);
        console.log(incomingInfoJs);

        let ul = document.createElement('ul');
        incomingInfoJs.data.forEach(item => {
            let li = document.createElement('li');
            li.innerText = `${item.name} ${item.color}`;
            ul.appendChild(li);
        });

        document.getElementById('api-wraper').appendChild(ul);
    })
    request.send(); 
}
getColors();