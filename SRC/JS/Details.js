var scene,
    camera,
    renderer,
    controls,
    light;


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

    scene.background = new THREE.Color(0xBFE5F7);
    scene.fog = new THREE.Fog(0xffffff, 0, 750);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    const gridHelper = new THREE.GridHelper(0,0,0xDDDEDE,0xDDDEDE);
    scene.add(gridHelper)
    renderer.setSize(window.innerWidth, window.innerHeight - 4);
    renderer.setSize(600,300)

    camera.position.set(5,5,1)

    var general = '../SRC/MODELS/Puma/';
    var mtlpath = 'Puma.mtl';
    var objpath = 'Puma.obj';

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(general );
    mtlLoader.setPath(general);
    mtlLoader.load(mtlpath, function (materials) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(general);
        objLoader.load(objpath, function (object) {
            modelLoad = object;
            scene.add(modelLoad);
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
    light = new THREE.DirectionalLight(0xffffff, 0, 1000);
    scene.add(light);
}

function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    modelLoad.rotation.y += 0.01;
}

start();