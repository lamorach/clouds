var target : Transform;
var rotationObjects : GameObject[]; //Index 0 is referenced to be the player in some spots, don't change this, just add.
var distance = 10.0;
 
var xSpeed = 250.0;
var ySpeed = 120.0;
 
var yMinLimit = -20;
var yMaxLimit = 80;
 
var distanceMin = 10;
var distanceMax = 15;
 
private var x = 0.0;
private var y = 0.0;

private var objectX = 0.0;
private var objectY = 0.0;

var rotationCount = 0.0f;
var topViewRotate = true;
@script AddComponentMenu("Camera-Control/Mouse Orbit")
 
function Start () 
{
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
 
	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;
}
 
function LateUpdate () 
{
    if (target) {
    if (rotationCount <= 0) return;
    var rotationNumber = (topViewRotate) ? .3 : -.3;
    rotationCount-=Mathf.Abs(rotationNumber);
        //x += 1;
       y += rotationNumber;
		
		for (var i = 0; i < rotationObjects.Length; i++)
		rotationObjects[i].transform.Rotate(new Vector3(rotationNumber,0,0));
 
 		y = ClampAngle(y, yMinLimit, yMaxLimit);
 
		var rotation = Quaternion.Euler(y, x, 0);
 
		distance = Mathf.Clamp(distance, distanceMin, distanceMax);
 
		var hit : RaycastHit;
		if (Physics.Linecast (target.position, transform.position, hit)) {
				distance -=  hit.distance;
		}
 
        var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
 
        transform.rotation = rotation;
        transform.position = position;

	}
	if (rotationCount <= 0)
		rotationObjects[0].GetComponent("Player").controllable = true;
 
}
 
 
static function ClampAngle (angle : float, min : float, max : float) 
{
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}

function PerspectiveShift()
{
	topViewRotate = !topViewRotate;
	rotationCount = 90;
	rotationObjects[0].GetComponent("Player").SendMessage("PerspectiveShift", topViewRotate);
}