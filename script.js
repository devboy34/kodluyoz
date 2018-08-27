function mesaj(mesaj){
  alert(mesaj);
}

function codeAreaValue(){
    document.getElementById("htmlCodeArea").value='<html>\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Merhaba Dünya!</title>\n</head>\n<body>\n<h1>Merhaba Dünya!</h1>\n</body>\n</html>';
    document.getElementById("cssCodeArea").value="<style></style>";
    document.getElementById("jsCodeArea").value="<script></script>";
}

function appPlayAction(){
  newPage = window.open("","","","false");
  document.getElementById("playButton").style.display = "none";
  document.getElementById("stopButton").style.display = "block";
  newPage.document.write(document.getElementsByTagName('TEXTAREA')[0].value+document.getElementsByTagName('TEXTAREA')[1].value+document.getElementsByTagName('TEXTAREA')[2].value);
}

function appStopAction(){
  newPage.close();
  document.getElementById("stopButton").style.display = "none";
  document.getElementById("playButton").style.display = "block";
}

function codePreview(){
        document.getElementById("codeArea").style.display="none";
        document.getElementById("previewArea").style.width="100%";
        document.getElementById("previewArea").style.display="inline-block";
        document.getElementById("previewer").style.display="inline-block";
        document.previewer.document.write(document.getElementsByTagName('TEXTAREA')[0].value+document.getElementsByTagName('TEXTAREA')[1].value+document.getElementsByTagName('TEXTAREA')[2].value); document.previewer.document.close(); 
        document.previewer.focus();
        document.getElementById("codePreviewOff").style.display="block";
        document.getElementById("codePreview").style.display="none";
}

function codePreviewOff(){
    document.getElementById("codeArea").style.display="inline-block";
    document.getElementById("previewArea").style.display="none"; 
    document.getElementById("previewer").style.display="none";
    document.getElementById("codePreviewOff").style.display="none";
    document.getElementById("codePreview").style.display="block";
}

function groupCodeArea(){
    document.getElementById("htmlCodeArea").style.display="inline-block";
    document.getElementById("cssCodeArea").style.display="inline-block";
    document.getElementById("jsCodeArea").style.display="inline-block";
    document.getElementById("htmlCodeArea").style.width="33.33%";
    document.getElementById("cssCodeArea").style.width="33.33%";
    document.getElementById("jsCodeArea").style.width="33.33%";
}

function htmlCodeAreaView(){
    document.getElementById("htmlCodeArea").style.display="inline-block";
    document.getElementById("cssCodeArea").style.display="none";
    document.getElementById("jsCodeArea").style.display="none";
    document.getElementById("htmlCodeArea").style.width="100%";
}
function cssCodeAreaView(){
    document.getElementById("cssCodeArea").style.display="inline-block";
    document.getElementById("jsCodeArea").style.display="none";
    document.getElementById("htmlCodeArea").style.display="none";
    document.getElementById("cssCodeArea").style.width="100%";
}
function jsCodeAreaView(){
    document.getElementById("jsCodeArea").style.display="inline-block";
    document.getElementById("cssCodeArea").style.display="none";
    document.getElementById("htmlCodeArea").style.display="none";
    document.getElementById("jsCodeArea").style.width="100%";
}