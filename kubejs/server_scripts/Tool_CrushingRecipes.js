// Tool Crushing Recipes
ServerEvents.recipes(event => {

	// Netherite Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_shovel').toJson()
		],
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 1
			}
		]
	}).id('kubejs:crushing/wooden_sword');

	// Nether Ruby Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:nether_ruby_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:nether_ruby',
				count: 1
			}
		]
	}).id('kubejs:crushing/nether_ruby_shovel');

	// Nether Ruby Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:nether_ruby_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:nether_ruby',
				count: 2
			}
		]
	}).id('kubejs:crushing/nether_ruby_pickaxe');

	// Nether Ruby Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:nether_ruby_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:nether_ruby',
				count: 2
			}
		]
	}).id('kubejs:crushing/nether_ruby_axe');

	// Nether Ruby Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:nether_ruby_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:nether_ruby',
				count: 1
			}
		]
	}).id('kubejs:crushing/nether_ruby_hoe');

	// Nether Ruby Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:nether_ruby_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:nether_ruby',
				count: 1
			}
		]
	}).id('kubejs:crushing/nether_ruby_sword');

	// Cincinnasite Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:cincinnasite_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:cincinnasite_ingot',
				count: 1
			}
		]
	}).id('kubejs:crushing/cincinnasite_shovel');

	// Cincinnasite Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:cincinnasite_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:cincinnasite_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/cincinnasite_pickaxe');

	// Cincinnasite Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:cincinnasite_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:cincinnasite_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/cincinnasite_axe');

	// Cincinnasite Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:cincinnasite_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:cincinnasite_ingot',
				count: 1
			}
		]
	}).id('kubejs:crushing/cincinnasite_hoe');

	// Cincinnasite Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betternether:cincinnasite_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'betternether:cincinnasite_ingot',
				count: 1
			}
		]
	}).id('kubejs:crushing/cincinnasite_sword');

	// Iron Smith Hammer
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betterend:iron_hammer').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/iron_hammer');

	// Golden Smith Hammer
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betterend:golden_hammer').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 2
			}
		]
	}).id('kubejs:crushing/golden_hammer');

	// Diamond Smith Hammer
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betterend:diamond_hammer').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 2
			}
		]
	}).id('kubejs:crushing/diamond_hammer');

	// Netherite Smith Hammer
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('betterend:netherite_hammer').toJson()
		],
		processingTime: 200,
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
	}).id('kubejs:crushing/netherite_hammer');


})