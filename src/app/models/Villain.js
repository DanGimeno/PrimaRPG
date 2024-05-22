// app/models/Villain.js

class Villain {
  constructor(name, hp, strength, defense) {
    this.name = name;
    this.hp = hp;
    this.strength = strength;
    this.defense = defense;
  }

  attack(target) {
    const damage = this.strength - target.defense;
    target.takeDamage(damage);
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp < 0) this.hp = 0;
  }
}

class Slime extends Villain {
  constructor() {
    super("Slime", 50, 10, 5);
  }
}

export { Villain, Slime };
