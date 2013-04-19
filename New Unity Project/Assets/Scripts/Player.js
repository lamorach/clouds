#pragma strict
var bullet : GameObject;
var speed : float = 5;
var cooldownTimer: float=1;
private var prevX : float;
private var prevY : float;
private var timer=0;
var c : CharacterController;

function Start () {
    c = GetComponent(CharacterController);
}

function Update () 
{
var translationX : float = Input.GetAxis ("Horizontal") * speed;
var translationY : float = Input.GetAxis ("Vertical") * speed;
translationX *= Time.deltaTime;
translationY *= Time.deltaTime;
rigidbody.transform.Translate(translationX,translationY,0);
transform.Translate(translationX,translationY,0);
prevX = translationX;
prevY = translationY;

if (Input.GetButton("Fire1") && cooldownTimer<=0)
{
	cooldownTimer=.3;
	var newBullet = bullet;
	newBullet.GetComponent(Shot).alive = true;
	newBullet.GetComponent(Shot).original = false;
	newBullet.GetComponent(Shot).speed = bullet.GetComponent(Shot).speed;
	GameObject.Instantiate(newBullet,transform.position,bullet.transform.rotation);
	
}
if(cooldownTimer>0)
{
	cooldownTimer-=Time.deltaTime;
	
}
}

function OnCollisionEnter (collision : Collision) 
{

}	

function OnCollisionStay()
{

}