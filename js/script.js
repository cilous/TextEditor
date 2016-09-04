'use strict'

function changeSize(){
  var x = document.getElementById("fontsize").value+"px";
  document.getElementById("area").style.fontSize = x;
}

function changeStlyeRegular(){
  document.getElementById("area").style.fontStyle = "normal";
  document.getElementById("area").style.fontWeight = "normal";
}

function changeStlyeItalic(){
  document.getElementById("area").style.fontStyle = "italic";
  document.getElementById("area").style.fontWeight = "normal";
}

function changeStlyeBold(){
  document.getElementById("area").style.fontStyle = "normal";
  document.getElementById("area").style.fontWeight = "bold";
}

function changeStlyeBoldItalic(){
  document.getElementById("area").style.fontStyle = "italic";
  document.getElementById("area").style.fontWeight = "bold";
}

function find(){
  var word = document.getElementById("sa").value;
  var text = document.getElementById("area").value;
  var result = "";
  var a = "";
  for(var i=0;i<text.length;i++){
    a=text.substr(i,word.length)
    if (a.indexOf(word) > -1){
        result=(a.indexOf(word)+i);
        document.getElementById("area").focus();
        document.getElementById("area").setSelectionRange(result,result+word.length);
        return false;
    }
  }
  alert("Not Found");
}

function replace(){
  var word = document.getElementById("fr").value;
  var text = document.getElementById("area").value;
  var rword = document.getElementById("rr").value;
  var result = "";
  var a = "";
  var temp = "";
  var temp2 = "";
  for(var i=0;i<text.length;i++){
    a=text.substr(i,word.length)
    if (a.indexOf(word) > -1){
        result=(a.indexOf(word)+i);
        temp = text.substr(0,result);
        var templength = temp.length;
        temp = temp+rword;
        if(result+1<text.length){
          temp2 = text.substr(result+word.length,text.length-templength);
          temp = temp+temp2;
        }
        document.getElementById("area").value = temp;
        document.getElementById("area").focus();
        document.getElementById("area").setSelectionRange(result,result+rword.length);
        return false;
    }
  }
}

function openfile(event){
  document.getElementById("area").value = "";
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    document.getElementById("area").value = text;
  };
  reader.readAsText(input.files[0]);
}

function saveTextAsFile() {
    var textToWrite = document.getElementById("area").value;
    var textFileAsBlob = new Blob([textToWrite], {
        type: "text/plain;charset=utf-8"
    });
    var fileNameToSaveAs = "yourtext.txt";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

function closefile(){
    document.getElementById("area").value = "";
    document.getElementById("my-file").value = "";
}
