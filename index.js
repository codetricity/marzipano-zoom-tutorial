var panoElement = document.getElementById("pano")

var viewerOpts = {
    controls: {
        mouseViewMode: 'drag'
    }
}

var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

 // Setup initial scene
 var source = Marzipano.ImageUrlSource.fromString(
    "stanford11k.jpeg"
);
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
var view = new Marzipano.RectilinearView({ yaw: 0, pitch: 0, fov: Math.PI / 2 });
var scene = viewer.createScene({ source: source, geometry: geometry, view: view });
scene.switchTo();

var velocity = 0.7;
var friction = 3;

var controls = viewer.controls();


 // Select the buttons
 var zoomInButton = document.getElementById('zoomIn');
 var zoomOutButton = document.getElementById('zoomOut');

 controls.registerMethod('zoomIn', 
    new Marzipano.ElementPressControlMethod(zoomInButton, 'zoom', -velocity, friction), true
 )

 controls.registerMethod('zoomOut',
    new Marzipano.ElementPressControlMethod(zoomOutButton, 'zoom', velocity, friction), true
 )
 