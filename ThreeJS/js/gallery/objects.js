
// Objects
const createBox = function (width=1, height=1, depth=1, color=0x00ff00) {
    let cube = new THREE.Mesh( 
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshPhongMaterial( { color: color } )
    );
    cube.position.y += height/2;
    cube.receiveShadow = true;
    cube.castShadow = true;
    return cube;
}

const createPlane = function (width=10, height=10, widthSeg=10, heightSeg=10, wireframe=false){
    let plane = new THREE.Mesh(
        new THREE.PlaneGeometry(width, height, widthSeg, heightSeg),
        new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe:wireframe })
    );
    plane.receiveShadow = true;
    plane.castShadow = true;
    return plane;
}


const createPainting = function (url) {
    let boxGeometry = new THREE.BoxGeometry(1,1,0.2);
    let textureLoader = new THREE.TextureLoader();
    let texture = textureLoader.load( url, function (tex) {
        let ratio = texture.image.width/ texture.image.height;
        let width = 2.5;
        let height = width/ratio;
        painting.scale.x = width;
        painting.scale.y = height;
    } );

    let painting = new THREE.Mesh(
        boxGeometry,
        new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            map: texture,
            side: THREE.FrontSide,
        })
    );

    return painting;
}

const createMovie = function ( src ) {
    
    let video = document.createElement( 'video' );
    document.getElementById('videos-container').appendChild(video);

    // Video settings
    video.src = src;
    video.crossOrigin = "anonymous";
    video.playsInline = true;
    video.loop = true;
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.style.maxWidth = "240px";
    video.style.visibility = 'hidden';

    videoWidth = video.offsetWidth;
    videoHeight = video.offsetHeight;
    // video.muted = !video.muted;
    // video.muted = false;

	let videoImage = document.createElement( 'canvas' );
	videoImage.width = videoWidth;
	videoImage.height = videoHeight;

	let videoImageContext = videoImage.getContext( '2d' );
	// background color if no video present
    videoImageContext.fillStyle = 'white';
    videoImageContext.fillRect(10, 10, videoImage.width-20, videoImage.height-20);

	let videoTexture = new THREE.Texture( videoImage );
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;
    
    // Object plane
    let movieScreen = new THREE.Mesh(
        new THREE.PlaneGeometry( videoImage.width/30, videoImage.height/30, 1, 1),
        new THREE.MeshBasicMaterial( { 
            map: videoTexture, 
            side:THREE.DoubleSide 
        } )
    );
    
    let v = {
        video: video, 
        imageContext: videoImageContext, 
        texture: videoTexture,
        width: videoWidth,
        height: videoHeight
    }
    videos.push(v);

    return movieScreen;

}
 

function createLabel(text) {
    let canvas = document.createElement("canvas");
    // document.getElementById('images-container').appendChild(canvas);
    let context = canvas.getContext("2d");
    context.font = "24pt Source Serif Pro";
    context.fillStyle = '#4682b4';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.fillRect(10, 10, canvas.width-20, canvas.height-20);
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text,canvas.width/2,canvas.height/2);

    return canvas
}

function createPlacard(text) {
    let canvas = createLabel(text);
    let texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    let mesh = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.8, 0.1), 
        new THREE.MeshBasicMaterial({
            map : texture,
            side: THREE.FrontSide
        })
    );
    mesh.overdraw = true;
    // mesh.doubleSided = true;

    return mesh;
}


// Dimensions
const createWall = function (width=10, height=10, widthSeg=10, heightSeg=10, wireframe=false){
    let wall = createPlane(width=width, height=height, widthSeg=widthSeg, heightSeg=heightSeg, wireframe=wireframe);
    wall.position.y += height/2;
    return wall;
}

const createFloor = function (width=10, height=10, widthSeg=10, heightSeg=10, wireframe=false){
    let floor = createPlane(width=width, height=height, widthSeg=widthSeg, heightSeg=heightSeg, wireframe=wireframe);
    floor.rotation.x -= Math.PI / 2;
    return floor;
}


const createRoom = function (north=true, south=true, east=true, west=true) {
    // North
    if (north) {
        console.log("Creating north");
        let wall = createWall();
        wall.rotation.y -= Math.PI;
        wall.position.z += mainRoom.width/2;
    } else if (north == "entry") {
        console.log("Entry North");
    } else {
        console.log("North none");
    }
}


const createLight = function () {
    let light = new THREE.PointLight(0xffffff, 1, 25);
    
    light.castShadow = true;
    // light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50, 1, 1, 5000));
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    return light
}


