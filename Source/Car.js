
class Car
{
	constructor(defnName, colorName, wheelAngleInTurns, disposition)
	{
		this.defnName = defnName;
		this.colorName = colorName;
		this.wheelAngleInTurns = wheelAngleInTurns;
		this.disposition = disposition;
	}

	static fromColorNameAndPos(colorName, pos)
	{
		var wheelAngle = 0;

		return new Car
		(
			"Default", colorName, wheelAngle, Disposition.fromPos(pos)
		);
	}

	defn()
	{
		return CarDefn.byName(this.defnName);
	}

	drawToDisplay(display)
	{
		var defn = this.defn();
		var defnSize = defn.size;
		display.drawRectangleOfSizeWithDispositionAndColor
		(
			defnSize, this.disposition, this.colorName
		);
	}

	initialize()
	{
		var defn = this.defn();
	}

	updateForTimerTick(universe)
	{
		this.drawToDisplay(universe.display);
	}
}
