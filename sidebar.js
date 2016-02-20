function hideSidebar(left, right){

    if(left){
        var left = document.getElementById('leftBar');
        left.className="sidebarHidden";
    }

    if(right){
        var right = document.getElementById('rightBar');
        right.className="sidebarHidden";
    }
}

window.onload=hideSidebar(false, false);