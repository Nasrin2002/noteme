var popupoverlay = document.querySelector('.popup-overlay')
var popupbox = document.querySelector('.popup-box')
var addpopupbutton = document.getElementById("add-popup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var  cancelpopup = document.getElementById('cancel-popup')
var  addmemory = document.getElementById('add-mem')
cancelpopup.addEventListener('click',function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var memorytitleinput = document.getElementById('memory-title-input')
var memorydateinput = document.getElementById('memory-date-input')
var memoryplaceinput = document.getElementById('memory-place-input')
var memorydescriptioninput = document.getElementById('memory-Description-input')
var container = document.querySelector('.container')

addmemory.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute('class','book-container')
    div.innerHTML=`
    <h2>${memorytitleinput.value}</h2>
    <h4>${memorydateinput.value}</h4>
    <h4>${memoryplaceinput.value}</h4>
    <p>${memorydescriptioninput.value}</p>
    <button onclick="deletememory(event)">Delete</delete>
`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletememory(event){
    event.target.parentElement.remove()
}