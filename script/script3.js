function openVideoPopup() {
    document.getElementById('videoPopup').style.display = 'flex';
}

function closeVideoPopup() {
    document.getElementById('videoPopup').style.display = 'none';
    
   
    var iframe = document.getElementById('youtubeIframe');
    iframe.src = iframe.src; 
}


window.onclick = function(event) {
    var popup = document.getElementById('videoPopup');
    if (event.target == popup) {
        closeVideoPopup();
    }
}