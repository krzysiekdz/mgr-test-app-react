export default class ParseValueService {

	parseValue(value, min, max) {
		value = parseInt(value);

		if(value != value)
			return min;

		if(value >= min && value <= max) {
			return value;
		}

		return min;
	}
}