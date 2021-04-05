var btnTranslate= document.querySelector("#btn-translate")
var inputTxt=document.querySelector("#input-Txt")
var outputDiv=document.querySelector("#output")



btnTranslate.addEventListener("click",clickEventHandler)

function clickEventHandler() {
 outputDiv.innerText= "asfsdsdfsds" + inputTxt.value
}