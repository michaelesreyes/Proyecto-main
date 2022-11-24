var scene,
    camera,
    renderer,
    controls,
    light,
    sceneA,
    cameraA,
    rendererA,
    controlsA,
    lightA,
    sceneP,
    cameraP,
    rendererP,
    controlsP,
    lightP;


function start() {
    initScene();
    animate();
}

function initScene() {
    initJordanElement();
    initAdidasElement();
    initPumaElement();// Scene, Camera and Render
    createLight(); // Create light
}

function initJordanElement() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-jordan') });    

    scene.background = new THREE.Color(0xBFE5F7);
    scene.fog = new THREE.Fog(0xffffff, 0, 750);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    const gridHelper = new THREE.GridHelper(0,0,0xBFE5F7,0xBFE5F7);
    scene.add(gridHelper)
    renderer.setSize(window.innerWidth, window.innerHeight - 4);
    renderer.setSize(250,300)

    camera.position.set(10,10,1)

    var general = '../SRC/MODELS/JORDAN 1/';
    var mtlpath = 'Jordan1.mtl';
    var objpath = 'Jordan1.obj';

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(general);
    mtlLoader.setPath(general);
    mtlLoader.load(mtlpath, function (materials) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(general);
        objLoader.load(objpath, function (object) {
            modelLoad = object;
            scene.add(modelLoad);
            object.scale.set(0.7, 0.7, 0.7);
            object.position.y = 0;
            object.position.x = 0;
        });
    });
}

function initAdidasElement() {
    sceneA = new THREE.Scene();
    cameraA = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererA = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-adidas') });    

    sceneA.background = new THREE.Color(0xBFE5F7);
    sceneA.fog = new THREE.Fog(0xffffff, 0, 750);
    
    controlsA = new THREE.OrbitControls(cameraA, rendererA.domElement);

    var lightA = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    lightA.position.set(0.5, 1, 0.75);
    sceneA.add(lightA);
    const gridHelperA = new THREE.GridHelper(0,0,0xBFE5F7,0xBFE5F7);
    sceneA.add(gridHelperA)
    rendererA.setSize(window.innerWidth, window.innerHeight - 4);
    rendererA.setSize(250,300)

    cameraA.position.set(5,5,1)

    var generalA = '../SRC/MODELS/Adidas/';
    var mtlpathA = 'adidas.mtl';
    var objpathA = 'adidas.obj';

    var mtlLoaderA = new THREE.MTLLoader();
    mtlLoaderA.setTexturePath(generalA);
    mtlLoaderA.setPath(generalA);
    mtlLoaderA.load(mtlpathA, function (materials) {
        materials.preload();

        var objLoaderA = new THREE.OBJLoader();
        objLoaderA.setMaterials(materials);
        objLoaderA.setPath(generalA);
        objLoaderA.load(objpathA, function (object) {
            modelLoad2 = object;
            sceneA.add(modelLoad2);
            object.scale.set(35, 35, 35);
            object.position.y = 0;
            object.position.x = 0;
        });
    });
}

function initPumaElement() {
    sceneP = new THREE.Scene();
    cameraP = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererP = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-puma') });    

    sceneP.background = new THREE.Color(0xBFE5F7);
    sceneP.fog = new THREE.Fog(0xffffff, 0, 750);
    
    controlsP = new THREE.OrbitControls(cameraP, rendererP.domElement);

    var lightP = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    lightP.position.set(0.5, 1, 0.75);
    sceneP.add(lightP);
    const gridHelperP = new THREE.GridHelper(0,0,0xBFE5F7,0xBFE5F7);
    sceneP.add(gridHelperP)
    rendererP.setSize(window.innerWidth, window.innerHeight - 4);
    rendererP.setSize(250,300)

    cameraP.position.set(5,5,1)

    var generalP = '../SRC/MODELS/Puma/';
    var mtlpathP = 'puma.mtl';
    var objpathP = 'puma.obj';

    var mtlLoaderP = new THREE.MTLLoader();
    mtlLoaderP.setTexturePath(generalP);
    mtlLoaderP.setPath(generalP);
    mtlLoaderP.load(mtlpathP, function (materials) {
        materials.preload();

        var objLoaderP = new THREE.OBJLoader();
        objLoaderP.setMaterials(materials);
        objLoaderP.setPath(generalP);
        objLoaderP.load(objpathP, function (object) {
            modelLoad3 = object;
            sceneP.add(modelLoad3);
            object.scale.set(1, 1, 1);
            object.position.y = 0;
            object.position.x = 0;
        });
    });
}




function createLight() {
    var light2 = new THREE.AmbientLight(0xffffff);
    light2.position.set(10, 10, 10);
    scene.add(light2);
    sceneA.add(light2);
    light = new THREE.DirectionalLight(0xffffff, 0, 1000);
    scene.add(light);
    sceneA.add(light);    
}

function animate() {
    controls.update();
    controlsA.update();
    controlsP.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    rendererA.render(sceneA, cameraA);
    rendererP.render(sceneP, cameraP);

    modelLoad.rotation.y += 0.01;
    modelLoad2.rotation.y += 0.01;
    modelLoad3.rotation.y += 0.01;
}

start();