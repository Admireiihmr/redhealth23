function loadVideo(id, videoId) {
    document.getElementById(id).parentElement.innerHTML = `
        <iframe width="400" height="200" src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>`;
}