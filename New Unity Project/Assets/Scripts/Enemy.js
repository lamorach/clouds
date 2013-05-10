#pragma strict
public var movementType : MovementType;
var bullet:GameObject;
public var hitPoints:float = 5;
public var enemy:String = "Balloon";
public var fire:boolean = false;
public var shotTexture:Texture;
public var shotCooldown:float = 0.5;
private var currentShotCooldown:float = 0;
public var xSpeed:float = 1;
public var yRange:float = 0;
public var ySpeed:float = 0;
public var dead:boolean=false;
public var stayPut:boolean=false;
var justSpawned:boolean;
private var randomTimeFactor : float; //this is for wavey movement, an offset for time so they aren't moving the same way
enum MovementType
{
	Straight,
	Wavey,
	Diagonal,
}

public var timer:float;

function Start () 
{


}
function Initialize()
	{
		xSpeed=1;
		justSpawned=true;
		stayPut=false;
		randomTimeFactor = Random.RandomRange(0, 10);
	}

function Update () 
{

	if(!stayPut && timer<2.5)
	{
		timer+=Time.deltaTime;
	}
	if(timer>=2.5)
	{
		justSpawned=false;
	}
	if (currentShotCooldown <= 0 && fire && !justSpawned)
	{
		currentShotCooldown += shotCooldown;
		var newBullet =	GameObject.Instantiate(bullet,transform.position,bullet.transform.rotation);
		newBullet.GetComponent(Shot).Initialize("Enemy Base");
		//Physics.IgnoreCollision(newBullet.collider, collider);
	}
	currentShotCooldown -= Time.deltaTime;
	var translateX : float =-1 * xSpeed * Time.deltaTime;
	if (movementType == MovementType.Wavey)
		Wavey();
	else if (movementType == MovementType.Diagonal)
		Diagonal();
	//TODO: set translate for the bob movement
	transform.Translate(translateX,0,0);
}

function Wavey()
{
// a simple sin function will control the y velocity of the wavey enemy,
	var yChange : float = Mathf.Sin(Time.time * 2 - randomTimeFactor) * 0.05;
	transform.Translate(0,yChange,0);
}

function Diagonal()
{
	transform.Translate(0,-1*xSpeed*Time.deltaTime,0);
}
function SetEnemy(enemyType: String )
{
	switch (enemyType)
	{
		case "Balloon":
		//Set the texture to Balloon
		fire = false;
		// 
		break;
		case "Helicopter":
		//Set the texture to Helicopter
		fire = true;
		shotCooldown = 10;
		//Set the shot texture
		break;
		case "Plane":
		//Set the texture to Plane
		fire = true;
		shotCooldown = 10;
		//Set the shot texture
		break;
		case "Jet":
		//Set the texture to Jet
		fire = true;
		shotCooldown = 10;
		//Set the shot texture
		break;
		case "Airship":
		//Set the texture to Airship
		fire = true;
		shotCooldown = 10;
		//Set the shot texture
		break;
		case "Zeppelin":
		//Set the texture to Zeppelin
		fire = true;
		shotCooldown = 10;
		//Set the shot texture
		break;
		case "Bomber":
		//Set the texture to Bomber
		fire = true;
		shotCooldown = 10;
		//Set the shot texture
		break;
		
	}
}

function OnCollisionEnter(collision : Collision)
{
var startDeath: boolean = false;

if(collision.gameObject.tag=="LaserPlayer")
{
	hitPoints-=.03;
	if (hitPoints <= 0)
	startDeath = true;
}
else if (collision.gameObject.tag=="PlayerShot")
{
	collision.gameObject.collider.enabled = false;
	hitPoints -= collision.gameObject.GetComponent(Shot).damage;
	if (hitPoints <= 0)
	startDeath = true;
}
else if(collision.gameObject.tag=="Player")
{
	startDeath = true;
}

	if(startDeath)
		{
			fire=false;
			rigidbody.constraints=~RigidbodyConstraints.FreezePositionX;
			xSpeed=-1;
			yield WaitForSeconds(.4);
			xSpeed=1;
			this.gameObject.collider.enabled=false;
			rigidbody.constraints=~RigidbodyConstraints.FreezePositionY;
			dead=true;
			
			
		}
}

function OnBecameInvisible() 
{
	if (dead || !justSpawned)
	{
		Destroy(gameObject);
	}
}


