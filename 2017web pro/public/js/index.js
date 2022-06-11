var add = document.getElementById("add");
var addform = document.getElementById("addform");
var back = document.getElementById("back");
var sub = document.getElementById("sub");

var todo = document.getElementById("todo");
var notdo = document.getElementById("notdo");


var dolist = [];
var todolist = [];
var arr = [];
var doliststr='';
var todoliststr='';

add.onclick = ()=>{
    addform.style.display = "block";
}
back.onclick = ()=>{
    addform.style.display = "none";
}
sub.onclick = ()=>{
    todoliststr= '';
    arr = [];
    var taskname = document.getElementById("taskname").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var rating = document.getElementById("rating").value;
    var esimated = document.getElementById("esimated").value;

    arr['taskname'] = taskname;
    arr['due'] = day + "/" + month + "/" + year;
    arr['rating']=rating;
    arr['esimated']=esimated;
    todolist.push(arr);
    addform.style.display = "none";
    console.log(todolist);
    for(var i=0;i<todolist.length;i++){
        todoliststr += "<li>"
        + "<div class='taskname'>" + todolist[i]['taskname'] + "</div>"
        + "<div class='due'>" + todolist[i]['due'] + "</div>"
        + "<div class='rating'>" + todolist[i]['rating'] + "</div>"
        + "<div class='esimated'>" + todolist[i]['esimated'] + "</div>"
        
        + "<div class='delete' onclick='del("+ i +")'>delete</div>"
        + "<div class='finish' onclick='finish("+ i +")'>Done</div>"
        + "</li>";
    }
    //console.log(todoliststr);
    todo.innerHTML = todoliststr;
    
}

function del(a){
    console.log(todolist[a]);
    todoliststr= '';
    todolist.splice(a,1);
    for(var i=0;i<todolist.length;i++){
        todoliststr += "<li>"
        + "<div class='taskname'>" + todolist[i]['taskname'] + "</div>"
        + "<div class='due'>" + todolist[i]['due'] + "</div>"
        + "<div class='rating'>" + todolist[i]['rating'] + "</div>"
        + "<div class='esimated'>" + todolist[i]['esimated'] + "</div>"
        
        + "<div class='delete' onclick='del("+ i +")'>delete</div>"
        + "<div class='finish' onclick='finish("+ i +")'>Done</div>"
        + "</li>";
    }
    todo.innerHTML = todoliststr;
}


function finish(a){
    doliststr= '';
    dolist.push(todolist[a]);
    console.log(dolist);
    
    for(var j=0;j<dolist.length;j++){
        doliststr += "<li>"
        + "<div class='taskname'>" + dolist[j]['taskname'] + "</div>"
        + "<div class='due'>" + dolist[j]['due'] + "</div>"
        + "<div class='rating'>" + dolist[j]['rating'] + "</div>"
        + "<div class='esimated'>" + dolist[j]['esimated'] + "</div>"
        
        + "<div class='delete' onclick='dela("+ j +")'>delete</div>"
        + "<div class='finish'>restore</div>"
        + "</li>";
    }
    notdo.innerHTML = doliststr;

    todoliststr= '';
    todolist.splice(a,1);
    for(var i=0;i<todolist.length;i++){
        todoliststr += "<li>"
        + "<div class='taskname'>" + todolist[i]['taskname'] + "</div>"
        + "<div class='due'>" + todolist[i]['due'] + "</div>"
        + "<div class='rating'>" + todolist[i]['rating'] + "</div>"
        + "<div class='esimated'>" + todolist[i]['esimated'] + "</div>"
        
        + "<div class='delete' onclick='del("+ i +")'>delete</div>"
        + "<div class='finish' onclick='finish("+ i +")'>Done</div>"
        + "</li>";
    }
    todo.innerHTML = todoliststr;
}

function dela(a){
    
    doliststr= '';
    dolist.splice(a,1);
    for(var i=0;i<dolist.length;i++){
        doliststr += "<li>"
        + "<div class='taskname'>" + dolist[i]['taskname'] + "</div>"
        + "<div class='due'>" + dolist[i]['due'] + "</div>"
        + "<div class='rating'>" + dolist[i]['rating'] + "</div>"
        + "<div class='esimated'>" + dolist[i]['esimated'] + "</div>"
        
        + "<div class='delete' onclick='dela("+ i +")'>delete</div>"
        + "<div class='finish'>restore</div>"
        + "</li>";
    }
    notdo.innerHTML = doliststr;
}



