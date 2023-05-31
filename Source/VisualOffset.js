
class VisualOffset
{
	constructor(offset, child)
	{
		this.offset = offset;
		this.child = child;
	}

	drawToDisplayForEntity(display, entity)
	{
		var pos = entity.disposition.pos;
		pos.add(this.offset);
		this.child.drawToDisplayForEntity(display, entity);
		pos.subtract(this.offset);
	}
}
