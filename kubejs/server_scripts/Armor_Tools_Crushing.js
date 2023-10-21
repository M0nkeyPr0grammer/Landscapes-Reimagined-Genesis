// Armor and Tools Create Crushing Recipes

ServerEvents.recipes(event => {

	// Diamond Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_helmet').toJson()
		],
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
	}).id('kubejs:crushing/netherite_helmet');

	// Netherite Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_chestplate').toJson()
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
		processingTime: 200,
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
	}).id('kubejs:crushing/netherite_boots');


	// Leather Cap
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_helmet').toJson()
		],
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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
		processingTime: 200,
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

		// Nether Ruby Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:nether_ruby_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:nether_ruby',
					count: 2
				}
			]
		}).id('kubejs:crushing/ruby_helmet');

		// Nether Ruby Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:nether_ruby_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:nether_ruby',
					count: 4
				}
			]

		}).id('kubejs:crushing/ruby_chestplate');

		// Nether Ruby Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:nether_ruby_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:nether_ruby',
					count: 3
				}
			]
		}).id('kubejs:crushing/ruby_leggings');

		// Nether Ruby Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:nether_ruby_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:nether_ruby',
					count: 2
				}
			]
		}).id('kubejs:crushing/ruby_boots');

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


		// Cincinnasite Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:cincinnasite_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:cincinnasite_ingot',
					count: 2
				}
			]
		}).id('kubejs:crushing/cincinnasite_helmet');

		// Cincinnasite Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:cincinnasite_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:cincinnasite_ingot',
					count: 4
				}
			]

		}).id('kubejs:crushing/cincinnasite_chestplate');

		// Cincinnasite Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:cincinnasite_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:cincinnasite_ingot',
					count: 3
				}
			]
		}).id('kubejs:crushing/cincinnasite_leggings');

		// Cincinnasite Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betternether:cincinnasite_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betternether:cincinnasite_ingot',
					count: 2
				}
			]
		}).id('kubejs:crushing/cincinnasite_boots');

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


	// Better End Tools and Armor

		// Thallasium Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:thallasium_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:thallasium_ingot',
					count: 2
				}
			]
		}).id('kubejs:crushing/thallasium_helmet');

		// Thallasium Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:thallasium_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:thallasium_ingot',
					count: 4
				}
			]

		}).id('kubejs:crushing/thallasium_chestplate');

		// Thallasium Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:thallasium_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:thallasium_ingot',
					count: 3
				}
			]
		}).id('kubejs:crushing/thallasium_leggings');

		// Thallasium Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:thallasium_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:thallasium_ingot',
					count: 2
				}
			]
		}).id('kubejs:crushing/thallasium_boots');


		// Terminite Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:terminite_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:terminite_ingot',
					count: 2
				}
			]
		}).id('kubejs:crushing/terminite_helmet');

		// Terminite Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:terminite_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:terminite_ingot',
					count: 4
				}
			]

		}).id('kubejs:crushing/terminite_chestplate');

		// Terminite Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:terminite_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:terminite_ingot',
					count: 3
				}
			]
		}).id('kubejs:crushing/terminite_leggings');

		// Terminite Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('betterend:terminite_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'betterend:terminite_ingot',
					count: 2
				}
			]
		}).id('kubejs:crushing/terminite_boots');


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