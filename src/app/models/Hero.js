// app/models/Hero.js

import Equipment from "./Equipment";

class Hero {
  constructor(name, hp, mp, strength, dexterity, defense) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.strength = strength;
    this.dexterity = dexterity;
    this.defense = defense;
    this.inventory = [];
    this.money = 0;
    this.equipment = new Equipment();
  }

  get weightLimit() {
    return this.strength * 2;
  }

  get currentWeight() {
    return this.inventory.reduce((total, item) => total + item.weight, 0);
  }

  get isOverweight() {
    return this.currentWeight > this.weightLimit;
  }

  get effectiveStats() {
    const baseStats = {
      hp: this.hp,
      mp: this.mp,
      strength: this.strength,
      dexterity: this.dexterity,
      defense: this.defense,
    };

    if (this.isOverweight) {
      for (let stat in baseStats) {
        baseStats[stat] *= 0.8;
      }
    }

    const bonuses = this.equipment.bonuses;
    baseStats.strength += bonuses.attack;
    baseStats.defense += bonuses.defense;

    return baseStats;
  }

  addItem(item) {
    this.inventory.push(item);
  }

  removeItem(itemName) {
    this.inventory = this.inventory.filter((item) => item.name !== itemName);
  }

  addMoney(amount) {
    this.money += amount;
  }

  spendMoney(amount) {
    if (this.money >= amount) {
      this.money -= amount;
    } else {
      throw new Error("Not enough money");
    }
  }

  equipItem(item) {
    this.equipment.equip(item);
  }

  unequipItem(type) {
    const item = this.equipment.unequip(type);
    if (item) {
      this.addItem(item);
    }
  }

  attack(target) {
    const damage = this.effectiveStats.strength - target.defense;
    target.takeDamage(damage);
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp < 0) this.hp = 0;
  }
}

class Warrior extends Hero {
  constructor(name) {
    super(name, 100, 50, 20, 10, 15);
  }
}

class Mage extends Hero {
  constructor(name) {
    super(name, 60, 100, 10, 20, 10);
  }
}

class Archer extends Hero {
  constructor(name) {
    super(name, 80, 60, 15, 20, 12);
  }
}

export { Hero, Warrior, Mage, Archer };
