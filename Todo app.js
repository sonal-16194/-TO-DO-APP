let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(event) {
    
    let item=document.createElement("li");
    item.innerText =input.value;
    ul.appendChild(item);
    console.log(input.value);
    input.value="";
    saveData();

    let delBtn =document.createElement("button");
    delBtn.innerText ="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    saveData();
        
});


ul.addEventListener("click",function(event){
     if(event.target.nodeName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }

    else if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted")
        saveData();
    }
    
},false);

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
function getData(){
    ul.innerHTML=localStorage.getItem("data");
}
getData();









