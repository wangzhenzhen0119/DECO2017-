var add = document.getElementById("add");
var addform = document.getElementById("addform");
var back = document.getElementById("back");
var sub = document.getElementById("sub");

var linkcontent = document.getElementById("linkcontent");

var contentarr = [];
var arr = [];

var contentstr;

add.onclick = ()=>{
    addform.style.display = "block";
}
back.onclick = ()=>{
    addform.style.display = "none";
}
sub.onclick = ()=>{
    contentstr = "";
    arr = [];
    var cont = document.getElementById("cont").value;
    var link = document.getElementById("link").value;
    

    arr['cont'] = cont;
    arr['link'] = link;
    
    contentarr.push(arr);
    addform.style.display = "none";
    
    for(var i=0;i<contentarr.length;i++){
        contentstr += "<li>"
        + "<div class='taskname'>" + contentarr[i]['cont'] + "</div>"
        + "<div class='finish' ><a target='_blank' href='" + contentarr[i]['link'] + "'>" + contentarr[i]['link'] + "</a></div>"
        
        + "</li>";
    }
    linkcontent.innerHTML = contentstr;
    
}


