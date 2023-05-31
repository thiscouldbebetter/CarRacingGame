
class TransformScale
{
	constructor(scaleFactor)
	{
		this.scaleFactor = scaleFactor;
	}

	transformCoords(coordsToTransform)
	{
		coordsToTransform.multiplyScalar(this.scaleFactor);
	}
}
