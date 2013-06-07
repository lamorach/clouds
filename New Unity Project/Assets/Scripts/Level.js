public static var enemyTypes: String[];
public var levelTimeLeft: float;
public static var levelTimeLength: float;
public static var topCamera: boolean;
var checkLevelStatus:boolean = true;
var bosses = new GameObject[6];
// Use this for initialization
function Start () {
SetLevel("Plains");
}
// Update is called once per frame
function Update () {
if(GameManager.isPaused==false)
{
	if(checkLevelStatus)
	{
if (levelTimeLeft <= 0)
		{
			GameManager.bossArea = true;
			checkLevelStatus = false;
			SetLevel("Boss1");
					var boss =GameObject.Instantiate(bosses[0],new Vector3(18475,9311.613,2998.23),bosses[0].transform.rotation);
		boss.GetComponent(BomberBoss).currentPhase = 1;
		}
		levelTimeLeft -= Time.deltaTime;
	}
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
	levelTimeLength = 10;
	levelTimeLeft = levelTimeLength;
}



