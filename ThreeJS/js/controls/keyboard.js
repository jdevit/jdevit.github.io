

const update = function () {
    if(keyboard[87]) {  // W key
        camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
        camera.position.z += Math.cos(camera.rotation.y) * player.speed;
    }
    if(keyboard[83]) {  // S key
        camera.position.x += Math.sin(camera.rotation.y) * player.speed;
        camera.position.z -= Math.cos(camera.rotation.y) * player.speed;
    }
    if(keyboard[65]) {  // A key
        camera.position.x -= Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
        camera.position.z -= Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
    }
    if(keyboard[68]) {  // D key
        camera.position.x -= Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
        camera.position.z -= Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
    }

    if(keyboard[16]) {  // Shift key - Float down
        if (camera.position.y > 0.5){
            camera.position.y -= Math.sin(Math.PI/2) * player.speed;
        }
    }
    if(keyboard[32]) {  // Space key - Float up
        if (camera.position.y < mainRoom.dimensions.height-0.5) {
            camera.position.y += Math.sin(Math.PI/2) * player.speed;
        }
    }

    if(keyboard[82]) { // R key - Reset camera height
        camera.position.y = player.height;

    }
    
    if(keyboard[37]) {  // Left arrow key
        camera.rotation.y -= player.turnSpeed;
    }
    if(keyboard[39]) {  // Right arrow key
        camera.rotation.y += player.turnSpeed;
    }
    // if(keyboard[38]) {  // Up arrow key
    //     camera.rotation.x -= player.turnSpeed;
    // }
    // if(keyboard[40]) {  // Down arrow key
    //     camera.rotation.x += player.turnSpeed;
    // }


    // Video controls
    if(keyboard[80]) {  // P key - Toggle video play
        if (funcDelayP) {
            let currentVideo = videos[currentVideoIndex].video;
            if (currentVideo.paused) { currentVideo.play() }
            else{ currentVideo.pause() }
            funcDelayP = false;

            // Delay amount of times key pressed
            setTimeout(function() {  funcDelayP = true; }, 400);  // Delay in milliseconds
        }
    }
    if(keyboard[77]) {  // M key - Toggle video mute
        if (funcDelayP) {
            let currentVideo = videos[currentVideoIndex].video;
            currentVideo.muted = !currentVideo.muted;
            funcDelayP = false;
            
            // Delay amount of times key pressed
            setTimeout(function() {  funcDelayP = true; }, 400);  // Delay in milliseconds
        }
    }
    if(keyboard[79]) {  // O key - Stop video
        if (funcDelayP) {
            let currentVideo = videos[currentVideoIndex].video;
            currentVideo.currentTime = 0;
            currentVideo.pause();
            funcDelayP = false;
            
            // Delay amount of times key pressed
            setTimeout(function() {  funcDelayP = true; }, 400);  // Delay in milliseconds
        }
    }
    if(keyboard[76]) {  // L key - Select Next video
        if (funcDelayP) {
            let currentVideo = videos[currentVideoIndex].video;
            // currentVideo.pause();
            if (currentVideoIndex < videos.length-1) {
                currentVideoIndex++;
            }
            else {
                currentVideoIndex = 0;
            }
            // videos[currentVideoIndex].video.play();  // Autoplay new video
            funcDelayP = false;
            
            // Delay amount of times key pressed
            setTimeout(function() {  funcDelayP = true; }, 400);  // Delay in milliseconds
        }
    }
    if(keyboard[75]) {  // K key - Select Previous video
        if (funcDelayP) {
            let currentVideo = videos[currentVideoIndex].video;
            // currentVideo.pause();
            if (currentVideoIndex > 0) {
                currentVideoIndex--;
            }
            else {
                currentVideoIndex = videos.length-1;
            }
            // videos[currentVideoIndex].video.play();  // Autoplay new video
            funcDelayP = false;
            
            // Delay amount of times key pressed
            setTimeout(function() {  funcDelayP = true; }, 400);  // Delay in milliseconds
        }
    }

    // withinRoom();

}

// const withinRoom = function () {
//     console.log(camera.position.z);
//     if (camera.position.z > wallWidth/2 ) {  // Prevent North
//         camera.position.z = (wallWidth/2)-0.5;
//     }
//     if (camera.position.z < -wallWidth/2 ) {  // Prevent South
//         camera.position.z = -(wallWidth/2)-0.5;
//     }
//     if (camera.position.x < -wallWidth/2 ) {  // Prevent West
//         camera.position.x = -(wallWidth/2)-0.5;
//     }
//     if (camera.position.x < -wallWidth/2 ) {  // Prevent East
//         camera.position.x = (wallWidth/2)-0.5;
//     }
// }

function keyDown(event) {
    keyboard[event.keyCode] = true;
}
function keyUp (event) {
    keyboard[event.keyCode] = false;
    
}



window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);