// Armor and Tools Create Crushing Recipes

ServerEvents.recipes(event => {

	// Diamond Armor
		// Diamond Helmet
		event.recipes.create.crushing([
			Item.of( '2x minecraft:diamond' ),
		], 'minecraft:diamond_helmet')

		// Diamond Chestplate
		event.recipes.create.crushing([
			Item.of('4x minecraft:diamond' ),
		], 'minecraft:diamond_chestplate')

		// Diamond Leggings
		event.recipes.create.crushing([
			Item.of('3x minecraft:diamond' ),
		], 'minecraft:diamond_leggings')

		// Diamond Boots
		event.recipes.create.crushing([
			Item.of('2x minecraft:diamond' ),
		], 'minecraft:diamond_boots')

	// Gold Armor
		// Gold Helmet
		event.recipes.create.crushing([
			Item.of('2x minecraft:gold_ingot'),
		], 'minecraft:golden_helmet')

		// Gold Chestplate
		event.recipes.create.crushing([
			Item.of('4x minecraft:gold_ingot'),
		], 'minecraft:golden_chestplate')

		// Gold Leggings
		event.recipes.create.crushing([
			Item.of('3x minecraft:gold_ingot'),
		], 'minecraft:golden_leggings')

		// Gold Boots
		event.recipes.create.crushing([
			Item.of('2x minecraft:gold_ingot'),
		], 'minecraft:golden_boots')

	// Netherite Armor
		// Netherite Helmet
		event.recipes.create.crushing([
			Item.of('2x minecraft:netherite_scrap'),
			Item.of('2x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_helmet')

		// Netherite Chestplate
		event.recipes.create.crushing([
			Item.of('3x minecraft:netherite_scrap'),
			Item.of('3x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_chestplate')

		// Netherite Leggings
		event.recipes.create.crushing([
			Item.of('3x minecraft:netherite_scrap'),
			Item.of('3x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_leggings')

		// Netherite Boots
		event.recipes.create.crushing([
			Item.of('2x minecraft:netherite_scrap'),
			Item.of('2x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_boots')

	// Leather Armor
		// Leather Cap
		event.recipes.create.crushing([
			Item.of('3x minecraft:leather'),
		], 'minecraft:leather_helmet')

		// Leather Tunic
		event.recipes.create.crushing([
			Item.of('6x minecraft:leather'),
		], 'minecraft:leather_chestplate')

		// Leather Pants
		event.recipes.create.crushing([
			Item.of('5x minecraft:leather'),
		], 'minecraft:leather_leggings')

		// Leather Boots
		event.recipes.create.crushing([
			Item.of('3x minecraft:leather'),
		], 'minecraft:leather_boots')

	// Chainmail Armor
		// Chainmail Helmet
		event.recipes.create.crushing([
			Item.of('3x minecraft:iron_nugget'),
		], 'minecraft:chainmail_helmet')

		// Chainmail Chestplate
		event.recipes.create.crushing([
			Item.of('6x minecraft:iron_nugget'),
		], 'minecraft:chainmail_chestplate')

		// Chainmail Leggings
		event.recipes.create.crushing([
			Item.of('5x minecraft:iron_nugget'),
		], 'minecraft:chainmail_leggings')

		// Chainmail Boots
		event.recipes.create.crushing([
			Item.of('3x minecraft:iron_nugget'),
		], 'minecraft:chainmail_boots')

	// Iron Armor
		// Iron Helmet
		event.recipes.create.crushing([
			Item.of('3x minecraft:iron_ingot'),
		], 'minecraft:iron_helmet')

		// Iron Chestplate
		event.recipes.create.crushing([
			Item.of('6x minecraft:iron_ingot'),
		], 'minecraft:iron_chestplate')

		// Iron Leggings
		event.recipes.create.crushing([
			Item.of('5x minecraft:iron_ingot'),
		], 'minecraft:iron_leggings')

		// Iron Boots
		event.recipes.create.crushing([
			Item.of('3x minecraft:iron_ingot'),
		], 'minecraft:iron_boots')

	// Netherite Tools
		// Netherite Shovel
		event.recipes.create.crushing([
			Item.of('2x minecraft:netherite_scrap'),
			Item.of('6x elitia:diamond_fragment').withChance(.50),
		], 'minecraft:netherite_shovel')

		// Netherite Pickaxe
		event.recipes.create.crushing([
			Item.of('3x minecraft:netherite_scrap'),
			Item.of('2x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_pickaxe')

		// Netherite Axe
		event.recipes.create.crushing([
			Item.of('3x minecraft:netherite_scrap'),
			Item.of('2x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_axe')

		// Netherite Hoe
		event.recipes.create.crushing([
			Item.of('2x minecraft:netherite_scrap'),
			Item.of('1x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_hoe')

		// Netherite Sword
		event.recipes.create.crushing([
			Item.of('2x minecraft:netherite_scrap'),
			Item.of('1x minecraft:diamond').withChance(.50),
		], 'minecraft:netherite_sword')

	// Gold Tools
		// Golden Shovel
		event.recipes.create.crushing([
			Item.of('6x minecraft:gold_nugget'),
		], 'minecraft:golden_shovel')

		// Golden Pickaxe
		event.recipes.create.crushing([
			Item.of('2x minecraft:gold_ingot'),
		], 'minecraft:golden_pickaxe')

		// Golden Axe
		event.recipes.create.crushing([
			Item.of('2x minecraft:gold_ingot'),
		], 'minecraft:golden_axe')

		// Golden Hoe
		event.recipes.create.crushing([
			Item.of('1x minecraft:gold_ingot'),
		], 'minecraft:golden_hoe')

		// Golden Sword
		event.recipes.create.crushing([
			Item.of('1x minecraft:gold_ingot'),
		], 'minecraft:golden_sword')

	// Diamond Tools
		// Diamond Shovel
		event.recipes.create.crushing([
			Item.of('6x elitia:diamond_fragment'),
		], 'minecraft:diamond_shovel')

		// Diamond Pickaxe
		event.recipes.create.crushing([
			Item.of('2x minecraft:diamond'),
		], 'minecraft:diamond_pickaxe')

		// Diamond Axe
		event.recipes.create.crushing([
			Item.of('2x minecraft:diamond'),
		], 'minecraft:diamond_axe')

		// Diamond Hoe
		event.recipes.create.crushing([
			Item.of('1x minecraft:diamond'),
		], 'minecraft:diamond_hoe')

		// Diamond Sword
		event.recipes.create.crushing([
			Item.of('1x minecraft:diamond'),
		], 'minecraft:diamond_sword')

	// Iron Tools
		// Iron Shovel
		event.recipes.create.crushing([
			Item.of('6x minecraft:iron_nugget'),
		], 'minecraft:iron_shovel')

		// Iron Pickaxe
		event.recipes.create.crushing([
			Item.of('2x minecraft:iron_ingot'),
		], 'minecraft:iron_pickaxe')

		// Iron Axe
		event.recipes.create.crushing([
			Item.of('2x minecraft:iron_ingot'),
		], 'minecraft:iron_axe')

		// Iron Hoe
		event.recipes.create.crushing([
			Item.of('1x minecraft:iron_ingot'),
		], 'minecraft:iron_hoe')

		// Iron Sword
		event.recipes.create.crushing([
			Item.of('1x minecraft:iron_ingot'),
		], 'minecraft:iron_sword')

	// Stone Tools
		// Stone Shovel
		event.recipes.create.crushing([
			Item.of('1x #c:cobblestone'),
		], 'minecraft:stone_shovel')

		// Stone Pickaxe
		event.recipes.create.crushing([
			Item.of('2x #c:cobblestone'),
		], 'minecraft:stone_pickaxe')

		// Stone Axe
		event.recipes.create.crushing([
			Item.of('2x #c:cobblestone'),
		], 'minecraft:stone_axe')

		// Stone Hoe
		event.recipes.create.crushing([
			Item.of('1x #c:cobblestone'),
		], 'minecraft:stone_hoe')

		// Stone Sword
		event.recipes.create.crushing([
			Item.of('1x #c:cobblestone'),
		], 'minecraft:stone_sword')

	// Wooden Tools
		// Wooden Shovel
		event.recipes.create.crushing([
			Item.of('1x #minecraft:planks'),
		], 'minecraft:wooden_shovel')

		// Wooden Pickaxe
		event.recipes.create.crushing([
			Item.of('2x #minecraft:planks'),
		], 'minecraft:wooden_pickaxe')

		// Wooden Axe
		event.recipes.create.crushing([
			Item.of('2x #minecraft:planks'),
		], 'minecraft:wooden_axe')

		// Wooden Hoe
		event.recipes.create.crushing([
			Item.of('1x #minecraft:planks'),
		], 'minecraft:wooden_hoe')

		// Wooden Sword
		event.recipes.create.crushing([
			Item.of('1x #minecraft:planks'),
		], 'minecraft:wooden_sword')

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
})