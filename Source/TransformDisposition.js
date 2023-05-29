
class TransformDisposition
{
	constructor()
	{
		this.disposition = Disposition.create();
	}

	transformCoords(coordsToTransform)
	{
		// todo - Rotation.
		coordsToTransform.add(this.disposition.pos);
	}
}
