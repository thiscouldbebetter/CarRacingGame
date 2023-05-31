
class NumberHelper
{
	static wrapNumberToRangeMax(numberToTrim, max)
	{
		while (numberToTrim < 0)
		{
			numberToTrim += max;
		}
		while (numberToTrim >= max)
		{
			numberToTrim -= max;
		}
		return numberToTrim;
	}
}
