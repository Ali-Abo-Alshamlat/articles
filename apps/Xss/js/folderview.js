function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",0];
    if(thelocation=="Description") aboutLocation=["Description.html","/home/user/Description",1];
    if(thelocation=="task1") aboutLocation=["task1.html","/home/user/task1",2];
    if(thelocation=="task2") aboutLocation=["task2.html","/home/user/task2",3];
    if(thelocation=="task3") aboutLocation=["task3.html","/home/user/task3",4];
    if(thelocation=="task4") aboutLocation=["task4.html","/home/user/task4",5];
    if(thelocation=="task5") aboutLocation=["task5.html","/home/user/task5",6];
    if(thelocation=="task6") aboutLocation=["task6.html","/home/user/task6",7];
    if(thelocation=="task7") aboutLocation=["task7.html","/home/user/task7",8];
    if(thelocation=="task8") aboutLocation=["task8.html","/home/user/task8",9];
    if(thelocation=="task9") aboutLocation=["task9.html","/home/user/task9",10];
    if(thelocation=="task10") aboutLocation=["task10.html","/home/user/task10",11];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",7];
    parent.document.getElementsByClassName("content-iframe")[0].src=aboutLocation[0];

    try {
        doInactive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-active")[0]);
    } catch {}
    if(aboutLocation[2]!=-1) doActive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-inactive")[aboutLocation[2]]);
    parent.document.getElementById("url-bar").value=aboutLocation[1];
}

function openFile(theFile){
    if(theFile=="9XngoIpxcEo.jpg") aboutFile=["../../icons/unsplash/9XngoIpxcEo.jpg","picture"];
    if(theFile=="qDG7XKJLKbs.jpg") aboutFile=["../../icons/unsplash/qDG7XKJLKbs.jpg","picture"];
    if(theFile=="Tjbk79TARiE.jpg") aboutFile=["../../icons/unsplash/Tjbk79TARiE.jpg","picture"];

    if(aboutFile[1]=="picture"){
        parent.parent.start_app('eog',"file="+aboutFile[0]);
    }
}