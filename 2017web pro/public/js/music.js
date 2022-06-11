var music = document.getElementById("music");
var musiclist = document.getElementById("musiclist");
var musiclistmenu = document.getElementById("musiclistmenu");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var music1 = document.getElementById("music1");
var music2 = document.getElementById("music2");
music.onclick = ()=>{
    musiclist.style.display="block";
    musiclistmenu.style.display="block";
    music1.play();
    m1.style.color = 'red';
}
m1.onclick = ()=>{
    music1.play(); 
    m1.style.color = 'red';
    music2.pause(); 
    m2.style.color = 'black';
}
m2.onclick = ()=>{
    music2.play(); 
    m2.style.color = 'red';
    music1.pause(); 
    m1.style.color = 'black';
}
musiclistmenu.onclick = ()=>{
    music1.pause(); 
    m1.style.color = 'black';
    music2.pause(); 
    m2.style.color = 'black';
    musiclist.style.display="none";
    musiclistmenu.style.display="none";
}

