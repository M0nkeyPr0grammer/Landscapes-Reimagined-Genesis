// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
	event.remove({ id: 'deeperdarker:echo_boat' }) // Removes Echo boat recipes
	event.remove({ id: 'deeperdarker:echo_chest_boat' }) // Removes Echo chest boat recipes

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
		Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:Toms_Simple_Storage"}'),
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

	// Creates Creative Blaze Cake Recipe
	event.recipes.create.mechanical_crafting(Item.of('create:creative_blaze_cake'), [
		'ADA',
		'CBC',
		'ACA'
	], {
		A: 'create:refined_radiance',
		B: 'create:blaze_cake',
		C: 'minecraft:nether_star',
		D: 'minecraft:dragon_head'
	})

	// Creates Chromatic Compound Recipe
	event.recipes.create.mixing('create:chromatic_compound', [
		'minecraft:glowstone_dust',
		'create:powdered_obsidian',
		'create:polished_rose_quartz'
	]).superheated()

})

	ServerEvents.tags('item', event => {
		// Get the #forge:cobblestone tag collection and add Diamond Ore to it
		// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	})
