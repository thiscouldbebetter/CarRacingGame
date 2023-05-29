
class ActivityDefn
{
	constructor(name, perform)
	{
		this.name = name;
		this._perform = perform;
	}

	static Instances()
	{
		if (ActivityDefn._instances == null)
		{
			ActivityDefn._instances = new ActivityDefn_Instances();
		}
		return ActivityDefn._instances;
	}

	static byName(name)
	{
		return ActivityDefn.Instances().byName(name);
	}

	perform(universe, world, actor)
	{
		this._perform(universe, world, actor, this);
	}
}

class ActivityDefn_Instances
{
	constructor()
	{
		this.DoNothing = new ActivityDefn
		(
			"DoNothing",
			(universe, world, actor) => {} // perform
		);

		this.UserInputAccept = new ActivityDefn
		(
			"UserInputAccept",
			// perform
			(universe, world, actor) =>
			{
				var inputTracker = universe.inputTracker;
				var keysPressed = inputTracker.keysPressed;
				for (var i = 0; i < keysPressed.length; i++)
				{
					var keyPressed = keysPressed[i];
					if (keyPressed.startsWith("Arrow") )
					{
						if (keyPressed == "ArrowUp")
						{
							var carDefn = actor.defn();
							var accelerationThisTick = carDefn.acceleration;
							var disp = actor.disposition;
							var forward = disp.forward();
							disp.accel.overwriteWith(forward).multiplyScalar(accelerationThisTick);
						}
					}
				}
			}
		);

		this._All =
		[
			this.DoNothing,
			this.UserInputAccept
		];
	}

	byName(name)
	{
		return this._All.find(x => x.name == name);
	}
}
