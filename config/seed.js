require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Helmets', sortOrder: 10},
    {name: 'Body Armor', sortOrder: 20},
    {name: 'Leg Armor', sortOrder: 30},
    {name: 'Foot Armor', sortOrder: 40},
    {name: 'Potions', sortOrder: 50},
    {name: 'Food', sortOrder: 60},
    {name: 'Bandages', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Bronze Full Helm', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Bronze_full_helm_detail.png/123px-Bronze_full_helm_detail.png?55f7d', category: categories[0], price: 50},
    {name: 'Iron Full Helm', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Iron_full_helm_detail.png/120px-Iron_full_helm_detail.png?cef13', category: categories[0], price: 75},
    {name: 'Steel Full Helm', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Steel_full_helm_detail.png/120px-Steel_full_helm_detail.png?d7513', category: categories[0], price: 100},
    {name: 'Rune Full Helm', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Rune_full_helm_detail.png/120px-Rune_full_helm_detail.png?3d62b', category: categories[0], price: 200},
    {name: 'Bronze Plate Body', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Bronze_platebody_detail.png/150px-Bronze_platebody_detail.png?3af70', category: categories[1], price: 100},
    {name: 'Iron Plate Body', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Iron_platebody_detail.png/150px-Iron_platebody_detail.png?3af70', category: categories[1], price: 150},
    {name: 'Steel Plate Body', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Steel_platebody_detail.png/120px-Steel_platebody_detail.png?3af70', category: categories[1], price: 200},
    {name: 'Rune Plate Body', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Rune_platebody_detail.png/130px-Rune_platebody_detail.png?3af70', category: categories[1], price: 500},
    {name: 'Bronze Plate Legs', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Bronze_platelegs_detail.png/90px-Bronze_platelegs_detail.png?3507e', category: categories[2], price: 100},
    {name: 'Iron Plate Legs', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Iron_platelegs_detail.png/90px-Iron_platelegs_detail.png?e2837', category: categories[2], price: 200},
    {name: 'Steel Plate Legs', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Steel_platelegs_detail.png/90px-Steel_platelegs_detail.png?f7676', category: categories[2], price: 300},
    {name: 'Rune Plate Legs', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Rune_platelegs_detail.png/90px-Rune_platelegs_detail.png?279d3', category: categories[2], price: 400},
    {name: 'Bronze Boots', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Bronze_boots_detail.png/140px-Bronze_boots_detail.png?1c991', category: categories[3], price: 50},
    {name: 'Iron Boots', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Iron_boots_detail.png/140px-Iron_boots_detail.png?6138c', category: categories[3], price: 150},
    {name: 'Steel Boots', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Steel_boots_detail.png/140px-Steel_boots_detail.png?79e3c', category: categories[3], price: 250},
    {name: 'Rune Boots', imageUrl: 'https://oldschool.runescape.wiki/images/thumb/Rune_boots_detail.png/140px-Rune_boots_detail.png?d576d', category: categories[3], price: 450},


  ]);

  console.log(items)

  process.exit();

})();