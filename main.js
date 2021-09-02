var start=2;

function set_time(){
    setInterval(image_show,3000); 
    //this method method will apply thime interval in milli seconds
}

function image_show(){
    var image_data;
    if(start==1){
        image_data="photo/3.png";
    }
    if(start==2){
        image_data="photo/4.png";
    }
    if(start==3){
        image_data="photo/5.png";
    }
    if(start==4){
        image_data="photo/6.png";
    }
    if(start==5){
        image_data="photo/7.png";
    }
    if(start==6){
        image_data="photo/8.png";
    }
    if(start==7){
        image_data="photo/9.png";
    }
    if(start>7){
        start=1;
        image_data="photo/3.png";
    }
    document.getElementById("modi").src=""+image_data;
    start++;
}
function more(){
    window.location.href="https://nitkkr.ac.in/newsand_notif_list.php?tbl=whats_new";
}
function noti(){
    window.location.href="https://nitkkr.ac.in/notifications.php?tbl=notifications";
}