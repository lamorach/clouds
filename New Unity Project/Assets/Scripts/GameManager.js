#pragma strict
var mainCamera : GameObject;
	var topCamera : boolean;
	var power= new GameObject[6];
	var enemy= new GameObject[6];
	var spawnEnemy:float=10;
	var spawnPowerUps:float=20;
	var changePerspectiveTimer:float= 100;
	public static var bossArea:boolean= false;
	public static var notInvin:boolean=false;
	public static var playerHp=8;
	public var hp=0;
	public static var currentPower: int=0;
	// Use this for initialization
	function Start () 
	{
	
	}
	
	// Update is called once per frame
	function Update () 
	{
		hp=playerHp;
		
	topCamera = mainCamera.GetComponent(CameraOrbit).topViewRotate;
	if(spawnPowerUps<=0)
	{
		SpawnPowerUp();
		
	}
	spawnPowerUps-=Time.deltaTime;
	if (bossArea)
		return;
	if(spawnEnemy<=0)
	{
		SpawnEnemy();
	}
	spawnEnemy-=Time.deltaTime;
	
	if (changePerspectiveTimer<=0)
	{
		ShiftPerspective();
	}
	changePerspectiveTimer-=Time.deltaTime;
	}
	
	function SpawnPowerUp(){
	var randomPower: int=Random.Range(0,6);
	var randomNumX: int=Random.Range(18468,18473);
	var randomNumY: int=(topCamera) ? 9303.613 : Random.Range(9300,9306);
	//var randomNumZ:  nt=(topCamera) ? Random.Range(2993,3003) : 2998.23;
		
	spawnPowerUps=20;
	var powerUp =GameObject.Instantiate(power[randomPower],new Vector3(randomNumX,randomNumY,2998.23),power[randomPower].transform.rotation);
	powerUp.GetComponent(PowerUp).Initialize();
}
	
function SpawnEnemy(){
	var randomEnemy: int=Random.Range(0,6);
		
	var randomNumX: int=Random.Range(18472,18475);
	var randomNumY: int=(topCamera) ? 9303.613 : Random.Range(9298,9308);
	//var randomNumZ: int=(topCamera) ? Random.Range(2994,3002) : 2998.23;
	spawnEnemy=10;
				
	var spawnedEnemy =GameObject.Instantiate(enemy[randomEnemy],new Vector3(randomNumX,randomNumY,2998.23),enemy[randomEnemy].transform.rotation);
	spawnedEnemy.GetComponent(Enemy).Initialize();
	}
function ShiftPerspective()
{
	mainCamera.GetComponent("CameraOrbit").SendMessage("PerspectiveShift");
	changePerspectiveTimer = 100;
}