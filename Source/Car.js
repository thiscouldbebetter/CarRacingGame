
class Car
{
	constructor
	(
		defnName,
		colorName,
		wheelAngleInTurns,
		disposition,
		activityDefnName
	)
	{
		this.defnName = defnName;
		this.colorName = colorName;
		this.wheelAngleInTurns = wheelAngleInTurns;
		this.disposition = disposition;

		this.activity = new Activity(activityDefnName);

		this._bounds = new ShapeRectangle(this.disposition.pos, this.defn().size);
	}

	static fromColorNameAndPos(colorName, pos)
	{
		var wheelAngle = 0;

		return new Car
		(
			colorName, // defnName
			colorName,
			wheelAngle,
			Disposition.fromPos(pos),
			ActivityDefn.Instances().DoNothing.name
		);
	}

	bounds()
	{
		return this._bounds;
	}

	defn()
	{
		return CarDefn.byName(this.defnName);
	}

	drawToDisplay(display)
	{
		var defn = this.defn();
		var visual = defn.visual;
		visual.drawToDisplayForEntity(display, this);
	}

	initialize()
	{
		var defn = this.defn();
	}

	updateForTimerTick(universe, world, place)
	{
		this.drawToDisplay(universe.display);
		this.activity.perform(universe, world, this);
		var disp = this.disposition;
		disp.updateForTimerTick();
		var carDefn = this.defn();
		var vel = disp.vel;
		vel.trimToMagnitudeMax(carDefn.speedMax);

		var forwardInTurns = disp.headingInTurns;
		var wheelAngleAbsolute = NumberHelper.wrapNumberToRangeMax
		(
			forwardInTurns + this.wheelAngleInTurns, 1
		); 
		var wheelAngleAsCoords = new Coords().fromAngleInTurns(wheelAngleAbsolute);
		var speedAlongWheelAngle = vel.clone().dotProduct(wheelAngleAsCoords);

		var doesCollideWithObstacle = place.obstacles.some
		(
			obstacle =>
			{
				var carBounds = this.bounds();
				var obstacleBounds = obstacle.bounds();
				var doBoundsCollide = carBounds.overlapsWith(obstacleBounds);
				return doBoundsCollide;
			} 
		);
	}
}

