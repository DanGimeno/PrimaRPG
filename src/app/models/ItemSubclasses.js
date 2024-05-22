// app/models/ItemSubclasses.js

import Item from "./Item";

// Consumibles
class Consumable extends Item {
  constructor(itemId, name, weight, value, sellable, effect, maxStack = 10) {
    super(itemId, name, weight, value, sellable, "consumable", maxStack);
    this.effect = effect; // Function to apply the effect
  }

  use(target) {
    this.effect(target);
  }
}

// Equipables
class EquipmentItem extends Item {
  constructor(itemId, name, weight, value, sellable, slot, stats) {
    super(itemId, name, weight, value, sellable, "equipment", 1);
    this.slot = slot; // 'head', 'chest', 'arms', 'legs', 'weapon', 'shield'
    this.stats = stats; // { attack: 0, defense: 0, etc. }
  }
}

// Contenedores
class Container extends Item {
  constructor(itemId, name, weight, value, sellable, capacity, maxStack = 1) {
    super(itemId, name, weight, value, sellable, "container", maxStack);
    this.capacity = capacity; // Number of items it can hold
    this.contents = [];
  }

  addItem(item) {
    if (this.contents.length < this.capacity) {
      this.contents.push(item);
    } else {
      throw new Error("Container is full");
    }
  }

  removeItem(itemName) {
    this.contents = this.contents.filter((item) => item.name !== itemName);
  }
}

// Llaves
class Key extends Item {
  constructor(itemId, name, weight, value, sellable, doorId, maxStack = 1) {
    super(itemId, name, weight, value, sellable, "key", maxStack);
    this.doorId = doorId; // Identifier for the door it unlocks
  }
}

// Pergaminos
class Scroll extends Item {
  constructor(itemId, name, weight, value, sellable, spell, maxStack = 5) {
    super(itemId, name, weight, value, sellable, "scroll", maxStack);
    this.spell = spell; // Spell contained in the scroll
  }

  cast(target) {
    this.spell(target);
  }
}

// Gemas y Piedras
class Gem extends Item {
  constructor(itemId, name, weight, value, sellable, quality, maxStack = 50) {
    super(itemId, name, weight, value, sellable, "gem", maxStack);
    this.quality = quality; // Quality of the gem
  }
}

// Materiales
class Material extends Item {
  constructor(itemId, name, weight, value, sellable, rarity, maxStack = 100) {
    super(itemId, name, weight, value, sellable, "material", maxStack);
    this.rarity = rarity; // Rarity of the material
  }
}

// Objetos de misión
class QuestItem extends Item {
  constructor(itemId, name, weight, value, sellable, questId, maxStack = 1) {
    super(itemId, name, weight, value, sellable, "questItem", maxStack);
    this.questId = questId; // Identifier for the quest it is related to
  }
}

export {
  Consumable,
  EquipmentItem,
  Container,
  Key,
  Scroll,
  Gem,
  Material,
  QuestItem,
};
