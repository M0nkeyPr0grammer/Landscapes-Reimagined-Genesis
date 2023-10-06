// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Remove recipes here
	event.remove({ id: 'wunderreich:wunder_kiste' }) // Removes Wunder_Kistes
	event.remove({ id: 'betterend:guidebook' }) // Removes guide book
	event.remove({ id: 'betternether:betternether_book' }) // Removes guide book
	event.remove({ id: 'seasonsextras:seasonal_compendium' }) // Removes Guide Book

	// Creates Deeper and Darker Patchouli Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'),
		[
			'minecraft:book',
			'minecraft:sculk'
		]
	)

	// Creates Better Furnaces Reforged Patchouli Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:betterfurnacesreforged"}'),
		[
			'minecraft:book',
			'minecraft:furnace'
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

	// Creates Creative Tank Recipe
	// Creative Tank
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

	// Creates Creative Blaze Cake Recipe
	// Creative Blaze Cake
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

	// Chromatic Compound
	// Chromatic Compound
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



})

	ServerEvents.tags('item', event => {
		// Get the #forge:cobblestone tag collection and add Diamond Ore to it
		// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	})
