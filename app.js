var btnTranslate= document.querySelector("#btn-translate")
var inputTxt=document.querySelector("#input-Txt")
var outputDiv=document.querySelector("#output")

const url = "https://api.funtranslations.com/translate/minion.json"




function getTranslatedURL(text){
    return url + "?" + "text=" + text
}

function clickEventHandler() {

    var inputText= inputTxt.value

    

fetch(getTranslatedURL(inputText))
.then(response => response.json())
.then(json =>{
    var translatedText= json.contents.translated;
    outputDiv.innerText =translatedText
  })
}
  
btnTranslate.addEventListener("click",clickEventHandler)