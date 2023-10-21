// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Remove recipes here
	event.remove({ id: 'wunderreich:wunder_kiste' }) // Removes Wunder_Kistes
	event.remove({ id: 'betterend:guidebook' }) // Removes guide book
	event.remove({ id: 'betternether:betternether_book' }) // Removes guide book
	event.remove({ id: 'seasonsextras:seasonal_compendium' }) // Removes Guide Book
	event.remove({ id: 'chipped:benches/mechanist_workbench' }) // Removes Recipe, fixed below
	event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' }) // Removes Broken Recipe


	// Creates Deeper and Darker Patchouli Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'),
		[
			'minecraft:book',
			'minecraft:sculk'
		]
	)

	// Creates Tom's Simple Storage Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:toms_simple_storage"}'),
		[
			'minecraft:book',
			'minecraft:chest'
		]
	)

	// Creates Immersive Aircrafts Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:immersive_aircraft"}'),
		[
			'minecraft:book',
			'immersive_aircraft:hull'
		]
	)

	// Create a Quest Book Recipe
	event.shapeless(
		Item.of('heracles:quest_book'),
		[
			'minecraft:book',
			'minecraft:emerald'
		]
	)

	// Diamond Grit Sandpaper
	event.shapeless(
		Item.of('createaddition:diamond_grit_sandpaper'),
		[
			'minecraft:paper',
			'createaddition:diamond_grit'
		]
	)

	// Creates Simple Villagers Items
	event.shaped(
		Item.of('simplevillagers:trading_block', 1),
		[
			'AAA',
			'A A',
			'BCB'
		],
		{
			A: '#c:glass_panes',
			B: 'minecraft:iron_ingot',
			C: '#minecraft:planks'
		}
	)

	// Create Creative Tank
	event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			'AAAAA',
			'ABCBA',
			'AD DA',
			'ABEBA',
			'AAAAA'
		],
		key: {
			A: Ingredient.of('minecraft:dragon_breath').toJson(),
			B: Ingredient.of('create:fluid_tank').toJson(),
			C: Ingredient.of('create:hose_pulley').toJson(),
			D: Ingredient.of('create:creative_blaze_cake').toJson(),
			E: Ingredient.of('deeperdarker:heart_of_the_deep').toJson()
		},
		result: Ingredient.of('create:creative_fluid_tank').toJson(),
		acceptMirrored: false
	}).id('kubejs:create/creative_fluid_tank');

	// Create Creative Blaze Cake
	event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			'ADA',
			'CBC',
			'ACA'
		],
		key: {
			A: Ingredient.of('create:refined_radiance').toJson(),
			B: Ingredient.of('create:blaze_cake').toJson(),
			C: Ingredient.of('minecraft:nether_star').toJson(),
			D: Ingredient.of('minecraft:dragon_head').toJson()
		},
		result: Ingredient.of('create:creative_blaze_cake').toJson(),
		acceptMirrored: false
	}).id('kubejs:create/creative_blaze_cake');

	// Create Chromatic Compound
	event.custom({
		type: "create:mixing",
		ingredients: [
			Ingredient.of('minecraft:glowstone_dust').toJson(),
			Ingredient.of('create:powdered_obsidian').toJson(),
			Ingredient.of('create:polished_rose_quartz').toJson()
		],
		results: [
			Ingredient.of('create:chromatic_compound').toJson()
		],
		conditions: ["superheated"]
	}).id('kubejs:create/chromatic_compound');

	// Fixes Chipped Tinkering Table Recipe
	event.shaped(
		Item.of('chipped:tinkering_table', 1),
		[
			'A  ',
			'BCC',
			'DED'
		],
		{
			A: 'minecraft:redstone_torch',
			B: 'minecraft:piston',
			C: '#minecraft:wooden_slabs',
			D: '#c:stripped_logs',
			E: 'minecraft:tnt'
		}
	)

})

