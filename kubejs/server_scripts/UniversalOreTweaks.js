// Universal Ore Create Mod Compatibility Tweaks

ServerEvents.recipes(event => {

	// Creates Universal Coal Ore Crushing Recipes
	// Granite Ore
	event.recipes.create.crushing([
		'minecraft:coal',
		Item.of('minecraft:coal').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_coal_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'minecraft:coal',
		Item.of('minecraft:coal').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_coal_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'minecraft:coal',
		Item.of('minecraft:coal').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_coal_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'minecraft:coal',
		Item.of('minecraft:coal').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_coal_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'minecraft:coal',
		Item.of('minecraft:coal').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_coal_ore')

	// Creates Universal Iron Ore Crushing Recipes

	// Granite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_iron',
		Item.of('create:crushed_raw_iron').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_iron_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_iron',
		Item.of('create:crushed_raw_iron').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_iron_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_iron',
		Item.of('create:crushed_raw_iron').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_iron_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'create:crushed_raw_iron',
		Item.of('create:crushed_raw_iron').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_iron_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_iron',
		Item.of('create:crushed_raw_iron').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_iron_ore')

	// Creates Universal Copper Ore Crushing Recipes

	// Granite Ore
	event.recipes.create.crushing([
		'5x create:crushed_raw_copper',
		Item.of('create:crushed_raw_copper').withChance(.25),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_copper_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'5x create:crushed_raw_copper',
		Item.of('create:crushed_raw_copper').withChance(.25),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_copper_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'5x create:crushed_raw_copper',
		Item.of('create:crushed_raw_copper').withChance(.25),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_copper_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'5x create:crushed_raw_copper',
		Item.of('create:crushed_raw_copper').withChance(.25),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_copper_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'5x create:crushed_raw_copper',
		Item.of('create:crushed_raw_copper').withChance(.25),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_copper_ore')

	// Creates Universal Gold Ore Crushing Recipes

	// Granite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_gold',
		Item.of('create:crushed_raw_gold').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_gold_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_gold',
		Item.of('create:crushed_raw_gold').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_gold_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_gold',
		Item.of('create:crushed_raw_gold').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_gold_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'create:crushed_raw_gold',
		Item.of('create:crushed_raw_gold').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_gold_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'create:crushed_raw_gold',
		Item.of('create:crushed_raw_gold').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_gold_ore')

	// Blackstone Ore
	event.recipes.create.crushing([
		'18x minecraft:gold_nugget',
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:blackstone').withChance(.12)
	], 'universal_ores:blackstone_gold_ore')

	// Basalt Ore
	event.recipes.create.crushing([
		'18x minecraft:gold_nugget',
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:basalt').withChance(.12)
	], 'universal_ores:basalt_gold_ore')

	// Creates Universal Redstone Ore Crushing Recipes

	// Granite Ore
	event.recipes.create.crushing([
		'6x minecraft:redstone',
		Item.of('minecraft:redstone').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_redstone_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'6x minecraft:redstone',
		Item.of('minecraft:redstone').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_redstone_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'6x minecraft:redstone',
		Item.of('minecraft:redstone').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_redstone_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'6x minecraft:redstone',
		Item.of('minecraft:redstone').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_redstone_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'6x minecraft:redstone',
		Item.of('minecraft:redstone').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_redstone_ore')

	// Creates Universal Emerald Ore Crushing Recipes

	// Granite Ore
	event.recipes.create.crushing([
		'minecraft:emerald',
		Item.of('minecraft:emerald').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_emerald_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'minecraft:emerald',
		Item.of('minecraft:emerald').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_emerald_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'minecraft:emerald',
		Item.of('minecraft:emerald').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_emerald_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'minecraft:emerald',
		Item.of('minecraft:emerald').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_emerald_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'minecraft:emerald',
		Item.of('minecraft:emerald').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_emerald_ore')

	// Creates Universal Lapis Lazuli Ore Crushing Recipes

	// Granite Ore
	event.recipes.create.crushing([
		'10x minecraft:lapis_lazuli',
		Item.of('minecraft:lapis_lazuli').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_lapis_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'10x minecraft:lapis_lazuli',
		Item.of('minecraft:lapis_lazuli').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_lapis_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'10x minecraft:lapis_lazuli',
		Item.of('minecraft:lapis_lazuli').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_lapis_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'10x minecraft:lapis_lazuli',
		Item.of('minecraft:lapis_lazuli').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_lapis_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'10x minecraft:lapis_lazuli',
		Item.of('minecraft:lapis_lazuli').withChance(.50),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_lapis_ore')

	// Creates Universal Diamond Ore Crushing Recipes

	// Granite Ore
	event.recipes.create.crushing([
		'minecraft:diamond',
		Item.of('minecraft:diamond').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:granite').withChance(.12)
	], 'universal_ores:granite_diamond_ore')

	// Diorite Ore
	event.recipes.create.crushing([
		'minecraft:diamond',
		Item.of('minecraft:diamond').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:diorite').withChance(.12)
	], 'universal_ores:diorite_diamond_ore')

	// Andesite Ore
	event.recipes.create.crushing([
		'minecraft:diamond',
		Item.of('minecraft:diamond').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:andesite').withChance(.12)
	], 'universal_ores:andesite_diamond_ore')

	// Tuff Ore
	event.recipes.create.crushing([
		'minecraft:diamond',
		Item.of('minecraft:diamond').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:tuff').withChance(.12)
	], 'universal_ores:tuff_diamond_ore')

	// Calcite Ore
	event.recipes.create.crushing([
		'minecraft:diamond',
		Item.of('minecraft:diamond').withChance(.75),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:calcite').withChance(.12)
	], 'universal_ores:calcite_diamond_ore')

	// Creates Universal Quartz Ore Crushing Recipes

	// Blackstone Ore
	event.recipes.create.crushing([
		'2x minecraft:quartz',
		Item.of('minecraft:quartz').withChance(.25),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:blackstone').withChance(.12)
	], 'universal_ores:blackstone_quartz_ore')

	// Basalt Ore
	event.recipes.create.crushing([
		'2x minecraft:quartz',
		Item.of('minecraft:quartz').withChance(.25),
		Item.of('create:experience_nugget').withChance(.75),
		Item.of('minecraft:basalt').withChance(.12)
	], 'universal_ores:basalt_quartz_ore')

})
