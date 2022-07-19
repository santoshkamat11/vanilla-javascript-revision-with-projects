console.log("ajax tutorial");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickGetHandler);

function buttonClickGetHandler() {

    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();

}

let postBtn = document.getElementById('postBtn');
postBtn.addEventListener("click",buttonClickPostHandler);

function buttonClickPostHandler(){

    console.log('You have clicked the postBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        let message = document.getElementById('message');

        if(this.status === 200){
            let obj = JSON.parse(this.responseText).data;
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                console.log(`value of key is ${key}`);
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;

            message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Messge:</strong> Got employees successfully
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>`;
            
        }
        else{
            console.log("Some error occured")
            message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Messge:</strong> Some error occurred
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>`;
        }
        setTimeout(function () {
            message.innerHTML = ''
        }, 2000);
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}
