// Handle case form submission
document.getElementById("case-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmation-message").innerText = "تم تقديم الدعوى بنجاح.";
});

// Handle assigning arbitrators
document.getElementById("assign-arbitrators-btn").addEventListener("click", function() {
    document.getElementById("arbitrators-list").innerHTML = "<p>تم تعيين المحكمين: محكم 1، محكم 2.</p>";
});

// Handle creating schedule
document.getElementById("create-schedule-btn").addEventListener("click", function() {
    document.getElementById("schedule").innerHTML = "<p>تم إنشاء جدول الجلسات بنجاح.</p>";
});

// Handle reviewing evidence
document.getElementById("review-evidence-btn").addEventListener("click", function() {
    document.getElementById("decision").innerText = "جاري مراجعة الأدلة...";
});

// Handle issuing decision
document.getElementById("issue-decision-btn").addEventListener("click", function() {
    document.getElementById("decision").innerText = "تم إصدار الحكم.";
});

// Handle tracking implementation
document.getElementById("track-implementation-btn").addEventListener("click", function() {
    document.getElementById("feedback-form").innerHTML = "<p>تم متابعة التنفيذ بنجاح.</p>";
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("contact-message").innerText = "شكراً لتواصلك معنا. سنرد عليك قريباً.";
});

// Three.js example
const container = document.getElementById('3d-container');
const width = container.clientWidth;
const height = container.clientHeight;

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

// Create geometry
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
