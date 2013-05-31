public static var enemyTypes: String[];
public static var levelTimeLeft: float;
public static var levelTimeLength: float;
public static var topCamera: boolean;
var checkLevelStatus:boolean = true;
// Use this for initialization
function Start () {
SetLevel("Plains");
}
// Update is called once per frame
function Update () {
	if(checkLevelStatus)
	{
		if (levelTimeLeft <= 0)
		{
			GameManager.bossArea = true;
			checkLevelStatus = false;
		}
		levelTimeLeft -= Time.deltaTime;
	}
}
function SetLevel(levelName: String) {
	switch (levelName)
	{
	case "Plains":
		enemyTypes = ["Balloon", "Helicopter"];
		break;
	case "Snowy":
		enemyTypes = ["Helicopter", "Plane", "Jet"];
		break;
	case "Mountain":
		enemyTypes = ["Helicopter", "Plane", "Jet", "Zeppelin"];
		break;
	case "Ocean":
		enemyTypes = ["Balloon", "Helicopter", "Plane", "Jet", "Airship", "Zeppelin"];
		break;
	case "Sanctuary":
		enemyTypes = ["Jet","Airship","Zeppelin","Bomber"];
		break;
	}
	levelTimeLength = 100;
	levelTimeLeft = levelTimeLength;
}



