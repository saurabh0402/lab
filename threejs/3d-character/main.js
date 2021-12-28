function degreeToRadian(degress) {
  return degress * (Math.PI / 180);
}

(() => {
  const canvas = document.querySelector('#planet');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  scene.add(camera);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = degreeToRadian(30);
  mesh.rotation.y = degreeToRadian(30);
  scene.add(mesh);

  const ambientLight = new THREE.AmbientLight(0x9eaeff, 0.2);
  scene.add(ambientLight);

  const lightDirectional = new THREE.DirectionalLight(0xffffff, 1);
  lightDirectional.position.set(5, 5, 5);
  scene.add(lightDirectional);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
})();