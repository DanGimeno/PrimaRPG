// app/models/Equipment.js

class Equipment {
  constructor() {
    this.head = null;
    this.chest = null;
    this.arms = null;
    this.legs = null;
    this.weapon = null;
    this.shield = null;
  }

  equip(item) {
    if (this[item.slot] !== undefined) {
      const previousItem = this[item.slot];
      this[item.slot] = item;
      return previousItem;
    } else {
      throw new Error(`Invalid equipment slot: ${item.slot}`);
    }
  }

  unequip(slot) {
    if (this[slot]) {
      const item = this[slot];
      this[slot] = null;
      return item;
    }
    return null;
  }

  get bonuses() {
    const bonus = { attack: 0, defense: 0 };
    for (const slot in this) {
      if (this[slot] && (this[slot].stats.attack || this[slot].stats.defense)) {
        bonus.attack += this[slot].stats.attack || 0;
        bonus.defense += this[slot].stats.defense || 0;
      }
    }
    return bonus;
  }
}

export default Equipment;
