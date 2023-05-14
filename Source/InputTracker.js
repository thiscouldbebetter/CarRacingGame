
class InputTracker
{
	constructor()
	{
		this.keysPressed = [];
	}

	initialize()
	{
		var d = document;
		var inputHelper = this;
		d.body.onkeydown = (e) => inputHelper.eventHandleKeyDown(e);
		d.body.onkeyup = (e) => inputHelper.eventHandleKeyUp(e);
	}

	keyIsPressed(keyToCheck)
	{
		return this.keysPressed.some(x => x == keyToCheck);
	}

	// Event handlers.

	eventHandleKeyDown(event)
	{
		var key = event.key;
		var indexOfKey = this.keysPressed.indexOf(key);
		if (indexOfKey == -1)
		{
			this.keysPressed.push(key);
		}
	}

	eventHandleKeyUp(event)
	{
		var key = event.key;
		var indexOfKey = this.keysPressed.indexOf(key);
		if (indexOfKey >= 0)
		{
			this.keysPressed.splice(indexOfKey, 1);
		}
	}
}
