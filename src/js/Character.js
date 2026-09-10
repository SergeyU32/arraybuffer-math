export default class Character {
  constructor(type) {
    this.type = type;
    this.stoned = false;
    this.distance = 1;
    this._attack = 100;
  }

    get attack() {
    const distanceAttack = this._attack * (1 - (this.distance - 1) * 0.1);

    if (this.stoned) {
        return distanceAttack - Math.log2(this.distance) * 5;
    }

    return distanceAttack;
    }

  set attack(value) {
    this._attack = value;
  }
}