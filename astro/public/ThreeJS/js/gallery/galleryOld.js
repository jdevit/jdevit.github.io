// Deprecated methods to add gallery objects

const addPainting = function (url, placardText, wall) {
    let painting = createPainting( url );
    let placard;
    if (placardText) {
        placard = createPlacard( placardText );
    }
    else { placard = null; }

    wall.gallery.push(painting);
    wall.galleryText.push(placard);

}

const addMovie = function (url, placardText, wall) {
    let movie = createMovie( url );
    let placard;
    if (placardText) {
        placard = createPlacard( placardText );
    }
    else { placard = null; }

    wall.gallery.push(movie);
    wall.galleryText.push(placard);

}


// Render to gallery
const addFromGalleryToWalls = function () {

    console.log("Adding paintings to walls")
    // North wall
    for (let i = 0; i < mainRoom.wallNorth.gallery.length; i++) {
        let piece = mainRoom.wallNorth.gallery[i];
        let positionX = -(mainRoom.width/2) + ((mainRoom.width/(mainRoom.wallNorth.gallery.length+1)) * (i+1));
        // var positionY = (player.height/2) + (piece.geometry.parameters.height/2);
        let positionY = (player.height);

        piece.rotation.y += Math.PI;
        piece.position.x += positionX;
        piece.position.y += positionY;
        piece.position.z += (mainRoom.width/2)-0.01;
        scene.add( piece );

        let placard = mainRoom.wallNorth.galleryText[i];
        if (placard) {
            placard.rotation.y += piece.rotation.y;
            placard.position.x += piece.position.x;
            // placard.position.y += positionY + (piece.geometry.parameters.height/2) + (placard.geometry.parameters.height/2);
            placard.position.y += placard.geometry.parameters.height/2;
            placard.position.z += piece.position.z;
            scene.add( placard );
        }

    }
    // South wall
    for (let i = 0; i < mainRoom.wallSouth.gallery.length; i++) {
        let piece = mainRoom.wallSouth.gallery[i];
        let positionX = -(mainRoom.width/2) + ((mainRoom.width/(mainRoom.wallSouth.gallery.length+1)) * (i+1));
        // var positionY = (player.height/2) + (piece.geometry.parameters.height/2);
        let positionY = (player.height);

        piece.position.x += positionX;
        piece.position.y += positionY;
        piece.position.z -= (mainRoom.width/2)-0.01;
        scene.add( piece );

        let placard = mainRoom.wallSouth.galleryText[i];
        if (placard) {
            placard.rotation.y += piece.rotation.y;
            placard.position.x += piece.position.x;
            // placard.position.y += positionY + (piece.geometry.parameters.height/2) + (placard.geometry.parameters.height/2);
            placard.position.y += placard.geometry.parameters.height/2;
            placard.position.z -= piece.position.z;
            scene.add( placard );
        }
    }
    // West wall
    for (let i = 0; i < mainRoom.wallWest.gallery.length; i++) {
        let piece = mainRoom.wallWest.gallery[i];
        let positionZ = -(mainRoom.width/2) + ((mainRoom.width/(mainRoom.wallWest.gallery.length+1)) * (i+1));
        // var positionY = (player.height/2) + (piece.geometry.parameters.height/2);
        let positionY = (player.height);

        piece.rotation.y += Math.PI/2;
        piece.position.x += (mainRoom.width/2)-0.01;
        piece.position.y += positionY;
        piece.position.z += positionZ;
        scene.add( piece );

        let placard = mainRoom.wallWest.galleryText[i];
        if (placard) {
            placard.rotation.y += piece.rotation.y;
            placard.position.x += piece.position.x;
            // placard.position.y += positionY + (piece.geometry.parameters.height/2) + (placard.geometry.parameters.height/2);
            placard.position.y += placard.geometry.parameters.height/2;
            placard.position.z += positionZ;
            scene.add( placard );
        }
    }
    // East wall
    for (let i = 0; i < mainRoom.wallEast.gallery.length; i++) {
        let piece = mainRoom.wallEast.gallery[i];
        let positionZ = -(mainRoom.width/2) + ((mainRoom.width/(mainRoom.wallEast.gallery.length+1)) * (i+1));
        // var positionY = (player.height/2) + (piece.geometry.parameters.height/2);
        let positionY = (player.height);

        piece.rotation.y -= Math.PI/2;
        piece.position.x -= (mainRoom.width/2)-0.01;
        piece.position.y += positionY;
        piece.position.z += positionZ;
        scene.add( piece );

        let placard = mainRoom.wallEast.galleryText[i];
        if (placard) {
            placard.rotation.y += piece.rotation.y;
            placard.position.x += piece.position.x;
            // placard.position.y += positionY + (piece.geometry.parameters.height/2) + (placard.geometry.parameters.height/2);
            placard.position.y += placard.geometry.parameters.height/2;
            placard.position.z += positionZ;
            scene.add( placard );
        }
    }

    // Viewing room
    // North wall
    for (let i = 0; i < viewingRoom.wallNorth.gallery.length; i++) {
        let piece = viewingRoom.wallNorth.gallery[i];
        console.log(piece)
        let positionX = -(mainRoom.width/2) + ((mainRoom.width/(viewingRoom.wallNorth.gallery.length+1)) * (i+1));
        // var positionY = (player.height/2) + (piece.geometry.parameters.height/2);
        let positionY = (player.height);

        piece.rotation.y += Math.PI;
        piece.position.x += positionX;
        piece.position.y += positionY;
        piece.position.z += mainRoom.width - 0.1;
        scene.add( piece );

        let placard = viewingRoom.wallNorth.galleryText[i];
        if (placard) {
            placard.rotation.y += piece.rotation.y;
            placard.position.x += piece.position.x;
            // placard.position.y += positionY + (piece.geometry.parameters.height/2) + (placard.geometry.parameters.height/2);
            placard.position.y += placard.geometry.parameters.height/2;
            placard.position.z += piece.position.z;
            scene.add( placard );
        }

        
    }

} 


// Room

const addRoom = function () {

    // Main Room //

    // createRoom();

    // Meshfloor
    let mainFloor = createFloor();
    // meshFloor.receiveShadow = true;
    scene.add( mainFloor );

    // Mesh ceiling
    mainCeiling = createFloor();
    mainCeiling.rotation.x += Math.PI;
    mainCeiling.position.y += mainRoom.height;
    scene.add( mainCeiling );
    
    // // WALL 1 (North - Front)
    // let wall1 = createWall();
    // wall1.rotation.y -= Math.PI;
    // wall1.position.z += mainRoom.width/2;
    // scene.add( wall1 );
    // WALL 2 (South - Back)
    let wall2 = createWall();
    wall2.position.z -= mainRoom.width/2;
    scene.add( wall2 );
    // WALL 3 (West - Left)
    let wall3 = createWall();
    wall3.rotation.y -= Math.PI/2;
    wall3.position.x += mainRoom.width/2;
    scene.add( wall3 );
    // WALL 4 (East - Right)
    let wall4 = createWall();
    wall4.rotation.y += Math.PI/2;
    wall4.position.x -= mainRoom.width/2;
    scene.add( wall4 );


    // Viewing room //
    // Floor
    viewingRoomFloor = createFloor(mainRoom.width, mainRoom.width/2);
    viewingRoomFloor.position.z += viewingRoom.centerPoint.x;
    scene.add(viewingRoomFloor);
    // Ceiling
    viewingRoomCeiling = createFloor(mainRoom.width, mainRoom.width/2);
    viewingRoomCeiling.position.y += mainRoom.height;
    viewingRoomCeiling.rotation.x += Math.PI;
    viewingRoomCeiling.position.z += viewingRoom.centerPoint.x;
    scene.add(viewingRoomCeiling);
    // West wall
    let viewingRoomWestWall = createWall(mainRoom.width/2, mainRoom.height, 1,1,false);
    viewingRoomWestWall.rotation.y -= Math.PI/2;
    viewingRoomWestWall.position.z += viewingRoom.centerPoint.x;
    viewingRoomWestWall.position.x += mainRoom.width/2;
    scene.add( viewingRoomWestWall )
    // East wall
    let viewingRoomEastWall = createWall(mainRoom.width/2, mainRoom.height,1,1,false);
    viewingRoomEastWall.rotation.y += Math.PI/2;
    viewingRoomEastWall.position.z += viewingRoom.centerPoint.x;
    viewingRoomEastWall.position.x -= mainRoom.width/2;
    scene.add( viewingRoomEastWall );
    // North wall
    let viewingRoomNorthWall = createWall(mainRoom.width, mainRoom.height,1,1,false);
    viewingRoomNorthWall.rotation.y += Math.PI;
    viewingRoomNorthWall.position.z += mainRoom.width;
    scene.add( viewingRoomNorthWall );
    // South wall
    let viewingRoomSouthWall = createBox(10, mainRoom.height, 0.5, 0xffffff);
    viewingRoomSouthWall.position.z += mainRoom.width/2;
    scene.add( viewingRoomSouthWall );

    // Display room (East)
    // let displayRoom

}

// Lights

const addLights = function () {
    // Ambient light
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    
    // Light
    ceilingLight = createLight();
    ceilingLight.position.set(0, 3, 0);  // x,y,z


    scene.add(ceilingLight);

}
