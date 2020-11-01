let url = "https://davids-restaurant.herokuapp.com/menu_items.json";

let data= null;


$("document").ready(function(){
    $.get(url,function(jsonObj,success){
        data = jsonObj.menu_items;
        console.log(data.length);
        console.log(jsonObj.menu_items[0])
        createoptions();
       
        
        let dropdown = document.getElementById("menu");

        dropdown.length=0;
        let defaultOption = document.createElement('option');
        defaultOption.text = 'Dishes :';

        dropdown.add(defaultOption);
        


        
const selectElement = document.querySelector('.menu');

selectElement.addEventListener('change', (event) => {
 indexx=dropdown.selectedIndex-1; showdetails(indexx); console.log(indexx);

});
        

        
        load();




function load(){



const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
     
    for (let i = 0; i < jsonObj.menu_items.length; i++) {
      option = document.createElement('option');
      option.text = jsonObj.menu_items[i].name;
      option.value = jsonObj.menu_items[i].name;
      dropdown.add(option);
    }
   } else {
    
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();


}
        
    });



function createoptions() {

    let i=0;
    if(data!=null){

        for(const jsonObj of data){
            console.log(i++, jsonObj.name);
            
            
        }
    }
}




function showdetails(index) {

    if(data!= null){

        let data2=data[index];
        
        document.querySelector("#short_name").textContent=data2.short_name;

        document.querySelector("#name").textContent=data2.name;
        document.querySelector("#description").textContent=data2.description;
        document.querySelector("#price_small").textContent=data2.price_small;
        document.querySelector("#price_large").textContent=data2.price_large;
        document.querySelector("#small_portion_name").textContent=data2.small_portion_name;
        document.querySelector("#large_portion_name").textContent=data2.large_portion_name;
        
    }

}

});

