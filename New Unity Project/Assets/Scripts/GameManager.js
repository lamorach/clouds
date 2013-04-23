#pragma strict

	var power= new GameObject[6];
	var spawnPowerUps:float=20;
	public static var currentPower: int=0;
	// Use this for initialization
	function Start () 
	{
	
	}
	
	// Update is called once per frame
	function Update () 
	{
		if(spawnPowerUps<=0)
		{
			
			var randomNumX: int=Random.Range(18468,18473);
			var randomNumY: int=Random.Range(9300,9306);
			var randomPower: int=Random.Range(0,6);
			spawnPowerUps=20;
			var powerUp =GameObject.Instantiate(power[randomPower],new Vector3(randomNumX,randomNumY,2998),power[randomPower].transform.rotation);
			powerUp.GetComponent(PowerUp).Initialize();
		}	
		if(spawnPowerUps>0)
		{
			spawnPowerUps-=Time.deltaTime;
		}
	
	}

