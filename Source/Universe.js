
class Universe
{
	constructor(display, timerHelper, world)
	{
		this.display = display;
		this.timerHelper = timerHelper;
		this.world = world;
	}

	static demo()
	{
		var world = World.demo();

		var displaySize = world.race.track.size.clone();
		var display = new Display(displaySize);

		var timerHelper = new TimerHelper(25);

		var universe = new Universe
		(
			display, timerHelper, world
		);

		return universe;
	}

	initialize()
	{
		this.inputTracker = new InputTracker();

		this.display.initialize();
		this.world.initialize();
		this.timerHelper.initialize(this);
		this.inputTracker.initialize(this);
	}

	updateForTimerTick()
	{
		this.world.updateForTimerTick(this);
	}
}
