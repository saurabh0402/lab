function degreeToRadian(degress) {
  return degress * (Math.PI / 180);
}

class Figure {
  constructor(params, scene) {
    this.params = {
      x: 0,
      y: 0,
      z: 0,
      rx: 0,
      ry: 0,
      ...params,
    };

    this.group = new THREE.Group()
    scene.add(this.group);
  }

  createBody() {
    const geometry = new THREE.BoxGeometry(1, 1.5, 1);
    const body = new THREE.Mesh(geometry, this.params.material);
    this.group.add(body);
  }

  createHead() {
    const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const head = new THREE.Mesh(geometry, this.params.material);
    this.group.add(head);

    head.position.y = 1.65;
  }

  createHand(xDir = 1) {
    const geometry = new THREE.BoxGeometry(0.25, 1.5, 0.25);

    const hand = new THREE.Mesh(geometry, this.params.material);
    hand.position.y = -0.5;

    const handGroup = new THREE.Group();
    handGroup.position.x = 0.8 * xDir;
    handGroup.position.y = 0.6;
    handGroup.rotation.z = degreeToRadian(30 * xDir);

    handGroup.add(hand);
    this.group.add(handGroup);
  }

  init(material) {
    this.createBody();
    this.createHead();
    this.createHand();
    this.createHand(-1);
  }
}

(() => {
  const canvas = document.querySelector('#planet');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  scene.add(camera);

  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const character = new Figure({ material }, scene);
  character.init();

  const ambientLight = new THREE.AmbientLight(0x9eaeff, 0.2);
  scene.add(ambientLight);

  const lightDirectional = new THREE.DirectionalLight(0xffffff, 1);
  lightDirectional.position.set(5, 5, 5);
  scene.add(lightDirectional);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
})();