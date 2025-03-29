document.querySelector('button').addEventListener('click', allOfThem)

function allOfThem (){
fetch ("https://data.nasa.gov/resource/gvk9-iz74.json")
.then (res => res.json())
.then (data => {
    console.log(data);
    //console.log(data[0].location.latitude)
    //console.log(data[0].location.longitude)
    data.forEach(theObjects => {
    console.log(theObjects.facility)
    console.log(theObjects.city)
    console.log(theObjects.state)
    console.log(theObjects.location.latitude);
    console.log(theObjects.location.longitude);
    var ul = document.querySelector("#ul")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(theObjects.facility))
    li.appendChild(document.createTextNode(theObjects.city))
    li.appendChild(document.createTextNode(theObjects.state))
    ul.appendChild(li)
    fetch  (`http://api.weatherapi.com/v1/forecast.json?key=af481407760e43718b5232620252803&q=${theObjects.location.latitude}, ${theObjects.location.longitude}&days=1&aqi=no&alerts=no`)
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(data.current);
    console.log(data.current.temp_f)
    li.appendChild(document.createTextNode(data.current.temp_f))

    
})
.catch(err => {
    console.log(`err ${err}`);
    
})
    
    
})
    
})
.catch(err => {
    console.log(`error ${err}`);
    
})
}


/*Note to self: reference on how to appened an li to ul from to-do list notes 

function addItem() {
    let userInput = document.querySelector('input').value
    var ul = document.querySelector("#ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput));
    ul.appendChild(li);
    document.getElementById("my-form").reset();
  
  }*/
////li.appendChild(document.createTextNode('br'))--Note to self: not able to figure out how to put space between the words , have to follow up, some reading suggest can be fixed with styling, to follow up. 
/*fetch  ("http://api.weatherapi.com/v1/forecast.json?key=af481407760e43718b5232620252803&q=48.8567, 2.3508&days=1&aqi=no&alerts=no")
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(data.current);
    console.log(data.current.temp_f)
    li.appendChild(document.createTextNode(data.current.temp_f))

    
})
.catch(err => {
    console.log(`err ${err}`);
    
})*/
