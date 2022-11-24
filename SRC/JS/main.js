var scene=NULL,
camera=NULL,
renderer=NULL,
controls=NULL,
light=NULL,
general = '../../SRC/MODELS/JORDAN1/';

function start() {
    initScene();
    animate();
}

function initScene() {
    initElement();// Scene, Camera and Render
    createLight(); 
        // Create light
}

function initElement() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("Screen3D") });    

    scene.background = new THREE.Color(0xDDDEDE);
    scene.fog = new THREE.Fog(0xffffff, 0, 750);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    const gridHelper = new THREE.GridHelper(100,100,0x000000,0xffffff);
    scene.add(gridHelper)
    renderer.setSize(window.innerWidth, window.innerHeight - 4);
    renderer.setSize(600,600)

    camera.position.set(0,0,1)

    createFistModel(general,'Jordan1.mtl', 'Jordan1.obj');  
}

function createFistModel(generalPath, pathMtl, pathObj) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(generalPath);
    mtlLoader.setPath(generalPath);
    mtlLoader.load(pathMtl, function (materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(generalPath);
        objLoader.load(pathObj, function (object) {
            modelLoad = object;
            figuresGeo.push(modelLoad);
            scene.add(object);
            object.scale.set(5, 5, 5);
            object.position.y = 10;
            object.position.x = 0;
        });
    });
}

function createLight() {
    var light2 = new THREE.AmbientLight(0xffffff);
    light2.position.set(10, 10, 10);
    scene.add(light2);
    light = new THREE.DirectionalLight(0xffffff, 0, 1000);
    scene.add(light);
}

function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

start();