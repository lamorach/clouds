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
function Start () {

}

function Update () 
{
	if (currentShotCooldown <= 0 && fire)
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
switch (collision.gameObject.tag)
{
	case "Player":
	startDeath = true;
	break;
	case "PlayerShot":
	collision.gameObject.collider.enabled = false;
	hitPoints -= collision.gameObject.GetComponent(Shot).damage;
	if (hitPoints <= 0)
	startDeath = true;
	break;
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
	if (dead)
	{
		Destroy(gameObject);
	}
}
