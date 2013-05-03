#pragma strict
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
public var timer:float;

function Start () 
{


}
function Initialize()
	{
		xSpeed=1;
		justSpawned=true;
		stayPut=false;
		
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
	//TODO: set translate for the bob movement
	transform.Translate(translateX,0,0);
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



