#pragma strict

static var buttons=0;
public var colliders= new GameObject[7];

function Start () 
{

}
///&=~ switch layer off
///=~ everything except
/// |= switch on
function Update () 
{
	switch(buttons)
	{
		case 1:
		StartGame();
		break;
		case 2:
		OptionsMenu();
		break;
		case 3:
		Application.Quit();
		break;
		default:
		break;
	}

}




function OptionsMenu()
{
	Camera.main.cullingMask&=~(1<<10);
	Camera.main.cullingMask|=(1<<9);
	for(var x=0;x<3;x++)
	{
		colliders[x].active=false;
	}
}

function StartGame()
{
	for(var x=0;x<3;x++)
	{
		colliders[x].active=false;
	}
	Camera.main.cullingMask&=~(1<<8);
	Camera.main.cullingMask&=~(1<<10);
	GameManager.isPaused=false;
}