import TypeFlow from './TypeFlow';

export default class TimeTypeFlow extends TypeFlow {
	inputFormat() {
		return 'HH:mm';
	}

	open() {
		this.component.showTimePicker();
	}
}
