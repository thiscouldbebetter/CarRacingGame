
class Activity
{
	constructor(defnName)
	{
		this.defnName = defnName;
	}

	defn()
	{
		return ActivityDefn.byName(this.defnName);
	}

	perform(universe, world, actor)
	{
		var defn = this.defn();
		defn.perform(universe, world, actor, this);
	}
}
