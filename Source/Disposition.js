
class Disposition
{
	constructor(pos, headingInTurns)
	{
		this.pos = pos;
		this.headingInTurns = headingInTurns;

		this.vel = Coords.create();
		this.accel = Coords.create();

		this._forward = Coords.create();
	}

	static create()
	{
		return new Disposition(Coords.create(), 0);
	}

	static fromPos(pos)
	{
		return new Disposition(pos, 0);
	}

	forward()
	{
		var headingInRadians = this.headingInRadians();
		return this._forward.overwriteWithDimensions
		(
			Math.cos(headingInRadians),
			Math.sin(headingInRadians),
			0
		);
	}

	headingInRadians()
	{
		return this.headingInTurns * Math.PI * 2;
	}

	updateForTimerTick()
	{
		this.vel.add(this.accel);
		this.accel.clear();

		this.pos.add(this.vel);
	}

	// Clonable.

	clone()
	{
		return new Disposition(this.pos.clone(), this.headingInTurns);
	}

	overwriteWith(other)
	{
		this.pos.overwriteWith(other.pos);
		this.headingInTurns = other.headingInTurns;
		return this;
	}
}
