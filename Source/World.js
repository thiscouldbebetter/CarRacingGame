
class World
{
	constructor(name, race)
	{
		this.name = name;
		this.race = race;
	}

	static demo()
	{
		var race = Race.demo();
		var world = new World("WorldDemo", race);
		return world;
	}

	initialize()
	{
		this.race.initialize();
	}

	updateForTimerTick(universe)
	{
		this.race.updateForTimerTick(universe, this);
	}
}
