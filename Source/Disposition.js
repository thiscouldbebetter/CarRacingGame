
class Disposition
{
	constructor(pos, headingInTurns)
	{
		this.pos = pos;
		this.headingInTurns = headingInTurns;
	}

	static fromPos(pos)
	{
		return new Disposition(pos, 0);
	}
}
