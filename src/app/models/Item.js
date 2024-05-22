// app/models/Item.js
import { v4 as uuidv4 } from "uuid"; // Necesita instalar uuid: npm install uuid

class Item {
  constructor(itemId, name, weight, value, sellable, type, maxStack = 1) {
    this.id = uuidv4();
    this.itemId = itemId; // General ID for the item type
    this.name = name;
    this.weight = weight;
    this.value = value;
    this.sellable = sellable;
    this.type = type; // general type like 'equipment', 'consumable', 'container', etc.
    this.maxStack = maxStack;
  }

  equals(otherItem) {
    return this.itemId === otherItem.itemId;
  }
}

export default Item;
