#pragma strict
var bullet:GameObject;
public var hitPoints:float = 1;
public var enemy:String = "Balloon";
public var fire:boolean = false;
public var shotTexture:Texture;
public var shotCooldown:float = 3;
private var currentShotCooldown:float = 0;
public var xSpeed:float = 1;
public var yRange:float = 0;
public var ySpeed:float = 0;
function Start () {

}

function Update () {
	if (currentShotCooldown <= 0)
	{
	currentShotCooldown += shotCooldown;
	var newBullet = bullet;
	newBullet.GetComponent(Shot).alive = true;
	newBullet.GetComponent(Shot).playerShot = false;
	GameObject.Instantiate(newBullet,transform.position,bullet.transform.rotation);
	}
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