
class VisualMultiple
{
	constructor(children)
	{
		this.children = children;
	}

	drawToDisplayForEntity(display, entity)
	{
		this.children.forEach(x => x.drawToDisplayForEntity(display, entity) );
	}
}
