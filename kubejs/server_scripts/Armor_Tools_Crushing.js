// Armor and Tools Create Crushing Recipes

ServerEvents.recipes(event => {

	// Diamond Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_helmet').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond',
				count: 2
			}
		]
	}).id('kubejs:crushing/diamond_helmet');

	// Diamond Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_chestplate').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond',
				count: 4
			}
		]

	}).id('kubejs:crushing/diamond_chestplate');

	// Diamond Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_leggings').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond',
				count: 3
			}
		]
	}).id('kubejs:crushing/diamond_leggings');

	// Diamond Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_boots').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond' ,
				count: 2
			}
		]
	}).id('kubejs:crushing/diamond_boots');


	// Gold Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_helmet').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/golden_helmet');

	// Gold Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_chestplate').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 4
			}
		]
	}).id('kubejs:crushing/golden_chestplate');

	// Gold Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_leggings').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 3
			}
		]
	}).id('kubejs:crushing/golden_leggings');

	// Gold Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_boots').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot' ,
				count: 2
			}
		]
	}).id('kubejs:crushing/golden_boots');


	// Netherite Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_helmet').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 2
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 2
			}
		]
	}).id('kubejs:crushing/netherite_helmet');

	// Netherite Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_chestplate').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 3
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 3
			}
		]
	}).id('kubejs:crushing/netherite_chestplate');

	// Netherite Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_leggings').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 3
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 3
			}
		]
	}).id('kubejs:crushing/netherite_leggings');

	// Netherite Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_boots').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 2
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 2
			}
		]
	}).id('kubejs:crushing/netherite_boots');


	// Leather Cap
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_helmet').toJson()
		],
		results: [
			{
				item: 'minecraft:leather',
				count: 3
			}
		]
	}).id('kubejs:crushing/leather_helmet');

	// Leather Tunic
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_chestplate').toJson()
		],
		results: [
			{
				item: 'minecraft:leather',
				count: 6
			}
		]
	}).id('kubejs:crushing/leather_chestplate');

	// Leather Pants
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_leggings').toJson()
		],
		results: [
			{
				item: 'minecraft:leather',
				count: 5
			}
		]
	}).id('kubejs:crushing/leather_leggings');

	// Leather Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_boots').toJson()
		],
		results: [
			{
				item: 'minecraft:leather',
				count: 3
			}
		]
	}).id('kubejs:crushing/leather_boots');


	// Chainmail Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_helmet').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 3
			}
		]
	}).id('kubejs:crushing/chainmail_helmet');

	// Chainmail Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_chestplate').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 6
			}
		]
	}).id('kubejs:crushing/chainmail_chestplate');

	// Chainmail Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_leggings').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_nugget' ,
				count: 5
			}
		]
	}).id('kubejs:crushing/chainmail_leggings');

	// Chainmail Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_boots').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 3
			}
		]
	}).id('kubejs:crushing/chainmail_boots');


	// Iron Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_helmet').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 3
			}
		]
	}).id('kubejs:crushing/iron_helmet');

	// Iron Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_chestplate').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 6
			}
		]
	}).id('kubejs:crushing/iron_chestplate');

	// Iron Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_leggings').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 5
			}
		]
	}).id('kubejs:crushing/iron_leggings');

	// Iron Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_boots').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 3
			}
		]
	}).id('kubejs:crushing/iron_boots');


	// Netherite Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_shovel').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 2
			},
			{
				item: 'elitia:diamond_fragment',
				chance: 0.50,
				count: 6
			}
		]
	}).id('kubejs:crushing/netherite_shovel');

	// Netherite Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_pickaxe').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 3
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 2
			}
		]
	}).id('kubejs:crushing/netherite_pickaxe');

	// Netherite Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_axe').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 3
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 2
			}
		]
	}).id('kubejs:crushing/netherite_axe');

	// Netherite Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_hoe').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 2
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 1
			}
		]
	}).id('kubejs:crushing/netherite_hoe');

	// Netherite Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_sword').toJson()
		],
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 2
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 1
			}
		]
	}).id('kubejs:crushing/netherite_sword');


	// Golden Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_shovel').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_nugget',
				count: 6
			}
		]
	}).id('kubejs:crushing/golden_shovel');

	// Golden Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_pickaxe').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/golden_pickaxe');

	// Golden Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_axe').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/golden_axe');

	// Golden Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_hoe').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 1
			}
		]
	}).id('kubejs:crushing/golden_hoe');

	// Golden Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_sword').toJson()
		],
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 1
			}
		]
	}).id('kubejs:crushing/golden_sword');


	// Diamond Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_shovel').toJson()
		],
		results: [
			{
				item: 'elitia:diamond_fragment',
				count: 6
			}
		]
	}).id('kubejs:crushing/diamond_shovel');

	// Diamond Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_pickaxe').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond',
				count: 2
			}
		]
	}).id('kubejs:crushing/diamond_pickaxe');

	// Diamond Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_axe').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond',
				count: 2
			}
		]
	}).id('kubejs:crushing/diamond_axe');

	// Diamond Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_hoe').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond',
				count: 1
			}
		]
	}).id('kubejs:crushing/diamond_hoe');

	// Diamond Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_sword').toJson()
		],
		results: [
			{
				item: 'minecraft:diamond',
				count: 1
			}
		]
	}).id('kubejs:crushing/diamond_sword');


	// Iron Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_shovel').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 6
			}
		]
	}).id('kubejs:crushing/iron_shovel');

	// Iron Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_pickaxe').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/iron_pickaxe');

	// Iron Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_axe').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/iron_axe');

	// Iron Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_hoe').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 1
			}
		]
	}).id('kubejs:crushing/iron_hoe');

	// Iron Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_sword').toJson()
		],
		results: [
			{
				item: 'minecraft:iron_ingot' ,
				count: 1
			}
		]
	}).id('kubejs:crushing/iron_sword');


	// Stone Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_shovel').toJson()
		],
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 1
			}
		]
	}).id('kubejs:crushing/stone_shovel');

	// Stone Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_pickaxe').toJson()
		],
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 2
			}
		]
	}).id('kubejs:crushing/stone_pickaxe');

	// Stone Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_axe').toJson()
		],
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 2
			}
		]
	}).id('kubejs:crushing/stone_axe');

	// Stone Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_hoe').toJson()
		],
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 1
			}
		]
	}).id('kubejs:crushing/stone_hoe');

	// Stone Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_sword').toJson()
		],
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 1
			}
		]
	}).id('kubejs:crushing/stone_sword');


	// Wooden Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_shovel').toJson()
		],
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 1
			}
		]
	}).id('kubejs:crushing/wooden_shovel');

	// Wooden Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_pickaxe').toJson()
		],
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 2
			}
		]
	}).id('kubejs:crushing/wooden_pickaxe');

	// Wooden Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_axe').toJson()
		],
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 2
			}
		]
	}).id('kubejs:crushing/wooden_axe');

	// Wooden Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_hoe').toJson()
		],
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 1
			}
		]
	}).id('kubejs:crushing/wooden_hoe');

	// Wooden Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_sword').toJson()
		],
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 1
			}
		]
	}).id('kubejs:crushing/wooden_sword');


	// Chainmail Armor Recipe
	// Chainmail Helmet
	event.shaped(
		Item.of('minecraft:chainmail_helmet', 1),
		[
			'AAA',
			'A A'
		],
		{
			A: 'minecraft:chain'
		}
	)

	// Chainmail Chestplate
	event.shaped(
		Item.of('minecraft:chainmail_chestplate', 1),
		[
			'A A',
			'AAA',
			'AAA'
		],
		{
			A: 'minecraft:chain'
		}
	)

	// Chainmail Leggings
	event.shaped(
		Item.of('minecraft:chainmail_leggings', 1),
		[
			'AAA',
			'A A',
			'A A'
		],
		{
			A: 'minecraft:chain'
		}
	)

	// Chainmail Boots
	event.shaped(
		Item.of('minecraft:chainmail_boots', 1),
		[
			'A A',
			'A A'
		],
		{
			A: 'minecraft:chain'
		}
	)

	// Better Nether Tools and Armor

	// Ruby Helmet

	// Ruby Chestplate

	// Ruby Leggings

	// Ruby Boots

	// Ruby Sword

	// Ruby Pickaxe

	// Ruby Axe

	// Ruby Shovel

	// Ruby Hoe


	// Cincinnasite Helmet

	// Cincinnasite Chestplate

	// Cincinnasite Leggings

	// Cincinnasite Boots

	// Cincinnasite Sword

	// Cincinnasite Pickaxe

	// Cincinnasite Axe

	// Cincinnasite Shovel

	// Cincinnasite Hoe


	// Better End Tools and Armor

	// Thallasium Helmet

	// Thallasium Chestplate

	// Thallasium Leggings

	// Thallasium Boots


	// Terminite Helmet

	// Terminite Chestplate

	// Terminite Leggings

	// Terminite Boots


	// Iron Smith Hammer

	// Golden Smith Hammer

	// Diamond Smith Hammer

	// Netherite Smith Hammer

})