var scene, camera, mesh, renderer;

// Rooms
var mainRoom;
var viewingRoom;
var galleryRoom;

var videos = []
var currentVideoIndex = 0;

// var gameSize = { height: window.innerHeight, width: window.innerWidth };
var gameSize = { height: 480, width: 720 };

var keyboard = {};
var player = { height: 2.5, speed: 0.3, turnSpeed: Math.PI*0.03 };

var funcDelayP = true;

const init = function () {
    // Camera and scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 60, gameSize.width / gameSize.height, 0.1, 1000 );

    // Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.domElement.id = 'main-canvas';
    renderer.setSize( gameSize.width, gameSize.height );
    document.getElementById('main-canvas-container').appendChild( renderer.domElement );
    // Shadow
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Add rooms (gallery.js)
    addRooms();

    addPaintings();
    
    // Cube
    // let cube = createBox()
    // scene.add( cube );

    // // Painting
    // addPainting('https://i.imgur.com/9wG6CYG.jpg', null, mainRoom.wallWest);
    // // Video
    // addMovie('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'Big Buck Bunny mp4', viewingRoom.wallNorth);
    // // Add gallery pieces to walls
    // addFromGalleryToWalls();
    
    // Set camera position
    camera.position.set(0, player.height, -8);  // Set position
    camera.lookAt(new THREE.Vector3(0, player.height, 0));  // Look at

    // Animate
    animate();
}



// Animate
const animate = function () {
    requestAnimationFrame( animate );

    render();
    update();
};

const render = function () {

    // Update text showing id of selected video
    if (videos.length != 0) {
        document.getElementById('selectedVidId').textContent = currentVideoIndex+1;
        document.getElementById('selectedVidPlaying').textContent = videos[currentVideoIndex].video.paused ? '(Paused)' : '(Playing)'; 
        document.getElementById('selectedVidMuted').textContent = videos[currentVideoIndex].video.muted ? '(Muted)' : '(Sound on)'; 

        // Videos
        for (let i = 0; i < videos.length; i++) {
            var video = videos[i].video;
            var videoImageContext = videos[i].imageContext;
            var videoTexture = videos[i].texture;
            var videoWidth = videos[i].width;
            var videoHeight = videos[i].height;
    
            if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
            {
                videoImageContext.drawImage( video, 0, 0, videoWidth, videoHeight );
                if ( videoTexture ) 
                videoTexture.needsUpdate = true;
            }
        
        }
    }

    renderer.render( scene, camera );
}



window.onload = init();