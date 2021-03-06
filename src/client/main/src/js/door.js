import * as THREE from "three";

export const DOOR_SIZE = 4;

export class Door {
	constructor(row,column,direction,doorModel) {
		this.row = row;
		this.column = column;
		this.direction = direction;
		this.enable = true;
		this.model = doorModel;
		this.open = false;
	}

	setID(id) {
		this.id = id;
	}

	openIt() {
		this.open = true;
	}
	
	closeIt() {
		this.open = false;
	}
}
