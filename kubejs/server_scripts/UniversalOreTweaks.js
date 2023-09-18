// Universal Ore Create Mod Compatibility Tweaks

ServerEvents.recipes(event => {

	// Creates Universal Coal Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_coal_ore' }
		],
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_coal_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_coal_ore' }
		],
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_coal_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_coal_ore' }
		],
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_coal_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_coal_ore' }
		],
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_coal_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_coal_ore' }
		],
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_coal_ore');


	// Creates Universal Iron Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_iron_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_iron_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_iron_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_iron_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_iron_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_iron_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_iron_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_iron_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_iron_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_iron_ore');


	// Creates Universal Copper Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_copper_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_copper_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_copper_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_copper_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_copper_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_copper_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_copper_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_copper_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_copper_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_copper_ore');


	// Creates Universal Gold Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_gold_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_gold_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_gold_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_gold_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_gold_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_gold_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_gold_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_gold_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_gold_ore' }
		],
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_gold_ore');

	// Blackstone Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:blackstone_gold_ore' }
		],
		results: [
			{ item: 'minecraft:gold_nugget', count: 18 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:blackstone', chance: 0.12 }
		]
	}).id('kubejs:crushing/blackstone_gold_ore');

	// Basalt Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:basalt_gold_ore' }
		],
		results: [
			{ item: 'minecraft:gold_nugget', count: 18 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:basalt', chance: 0.12 }
		]
	}).id('kubejs:crushing/basalt_gold_ore');


	// Creates Universal Redstone Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_redstone_ore' }
		],
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_redstone_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_redstone_ore' }
		],
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_redstone_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_redstone_ore' }
		],
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_redstone_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_redstone_ore' }
		],
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_redstone_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_redstone_ore' }
		],
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_redstone_ore');


	// Creates Universal Emerald Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_emerald_ore' }
		],
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_emerald_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_emerald_ore' }
		],
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_emerald_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_emerald_ore' }
		],
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_emerald_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_emerald_ore' }
		],
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_emerald_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_emerald_ore' }
		],
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_emerald_ore');


	// Creates Universal Lapis Lazuli Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_lapis_ore' }
		],
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_lapis_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_lapis_ore' }
		],
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_lapis_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_lapis_ore' }
		],
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_lapis_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_lapis_ore' }
		],
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_lapis_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_lapis_ore' }
		],
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_lapis_ore');


	// Creates Universal Diamond Ore Crushing Recipes

	// Granite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:granite_diamond_ore' }
		],
		results: [
			{ item: 'minecraft:diamond' },
			{ item: 'minecraft:diamond', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:granite', chance: 0.12 }
		]
	}).id('kubejs:crushing/granite_diamond_ore');

	// Diorite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:diorite_diamond_ore' }
		],
		results: [
			{ item: 'minecraft:diamond' },
			{ item: 'minecraft:diamond', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:diorite', chance: 0.12 }
		]
	}).id('kubejs:crushing/diorite_diamond_ore');

	// Andesite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:andesite_diamond_ore' }
		],
		results: [
			{ item: 'minecraft:diamond' },
			{ item: 'minecraft:diamond', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:andesite', chance: 0.12 }
		]
	}).id('kubejs:crushing/andesite_diamond_ore');

	// Tuff Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:tuff_diamond_ore' }
		],
		results: [
			{ item: 'minecraft:diamond' },
			{ item: 'minecraft:diamond', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:tuff', chance: 0.12 }
		]
	}).id('kubejs:crushing/tuff_diamond_ore');

	// Calcite Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:calcite_diamond_ore' }
		],
		results: [
			{ item: 'minecraft:diamond' },
			{ item: 'minecraft:diamond', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:calcite', chance: 0.12 }
		]
	}).id('kubejs:crushing/calcite_diamond_ore');


	// Creates Universal Quartz Ore Crushing Recipes

	// Blackstone Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:blackstone_quartz_ore' }
		],
		results: [
			{ item: 'minecraft:quartz', count: 2 },
			{ item: 'minecraft:quartz', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:blackstone', chance: 0.12 }
		]
	}).id('kubejs:crushing/blackstone_quartz_ore');

	// Basalt Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'universal_ores:basalt_quartz_ore' }
		],
		results: [
			{ item: 'minecraft:quartz', count: 2 },
			{ item: 'minecraft:quartz', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:basalt', chance: 0.12 }
		]
	}).id('kubejs:crushing/basalt_quartz_ore');


})
