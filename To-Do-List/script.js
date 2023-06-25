


//umumi silmke ucun funcrion
function allDelete(){
    var deleteValue1 = document.querySelector("ul");
    if(deleteValue1 == null ){
        alert("Silinecek hecne yoxdu");
    }else{  
        var deleteList = document.querySelectorAll('#myList li');
        for(var i=0; li=deleteList[i]; i++) {
         li.parentNode.removeChild(li);
    }
    }
}
// elave etmek ucun function
var saygac=0;
function addList() {
    const listValue = document.querySelector('input').value;
    console.log(listValue.length);
    if(listValue == null  ||listValue == "" ){
        alert("Bir sey elvae edin");
    }else{
        const li = document.createElement("li");
        const iconHtml =`${listValue}     <i class="fa-solid fa-xmark"></i>`;
        
        if (saygac%2==0) {
            li.classList.add("all-ul-style","all-ul-style_black");
        }else{
            li.classList.add("all-ul-style","all-ul-style_white");
        }
        li.innerHTML =iconHtml;
        const myList =document.getElementById("myList");
        myList.appendChild(li);
    }
    saygac++;
    //tek silmek ucun
    var onlyDelete = document.querySelectorAll("i");
    for(var i=0; i<onlyDelete.length; i++){
        onlyDelete[i].onclick = function(){
            this.parentNode.remove();  
        }
    }
}



