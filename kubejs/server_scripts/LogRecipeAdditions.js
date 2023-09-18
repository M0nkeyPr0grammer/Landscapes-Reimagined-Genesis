// Log Recipe Additions
ServerEvents.recipes(event => {
	/*
	// Alternate Chest Recipes
	var chest_types = [
		['charm:oak_chest', 'minecraft:oak_log'],
		['charm:acacia_chest', 'minecraft:acacia_log'],
		['charm:birch_chest', 'minecraft:birch_log'],
		['charm:spruce_chest', 'minecraft:spruce_log'], 
		['charm:dark_oak_chest', 'minecraft:dark_oak_log'],
		['charm:jungle_chest', 'minecraft:jungle_log'],
		['charm:mangrove_chest', 'minecraft:mangrove_log'],
		['charm:ebony_chest', 'charm:ebony_log'],
		['charm:azalea_chest', 'charm:azalea_log'],
		['charm:warped_chest', 'minecraft:warped_stem'],
		['charm:crimson_chest', 'minecraft:crimson_stem']
	]

	chest_types.forEach(chest_type => {
		event.shaped(
			Item.of(chest_type[0], 4),
			[
				'AAA',
				'A A',
				'AAA'
			],
			{
				A: chest_type[1]
			}
		)
	}); 
	*/
	// Alternate Stick Recipe
	event.shaped(
		Item.of('minecraft:stick', 16),
		[
			'#minecraft:logs',
			'#minecraft:logs'
		]
	)

	// Alternate Trapdoor Recipes
	var trapdoor_types = [
		['minecraft:oak_trapdoor', 'minecraft:oak_log'],
		['minecraft:acacia_trapdoor', 'minecraft:acacia_log'],
		['minecraft:birch_trapdoor', 'minecraft:birch_log'],
		['minecraft:spruce_trapdoor', 'minecraft:spruce_log'],
		['minecraft:dark_oak_trapdoor', 'minecraft:dark_oak_log'],
		['minecraft:jungle_trapdoor', 'minecraft:jungle_log'],
		['minecraft:mangrove_trapdoor', 'minecraft:mangrove_log'],
		/*['charm:ebony_trapdoor', 'charm:ebony_log'],
		['charm:azalea_trapdoor', 'charm:azalea_log'], */
		['minecraft:warped_trapdoor', 'minecraft:warped_stem'],
		['minecraft:crimson_trapdoor', 'minecraft:crimson_stem'],
		['deeperdarker:echo_trapdoor', 'deeperdarker:echo_log']
	]

	trapdoor_types.forEach(trapdoor_type => {
		event.shaped(
			Item.of(trapdoor_type[0], 8),
			[
				'AAA',
				'AAA'
			],
			{
				A: trapdoor_type[1]
			}
		)
	});

	// Alternate Slab Recipes
	var slab_types = [
		['minecraft:oak_slab', 'minecraft:oak_log'],
		['minecraft:acacia_slab', 'minecraft:acacia_log'],
		['minecraft:birch_slab', 'minecraft:birch_log'],
		['minecraft:spruce_slab', 'minecraft:spruce_log'],
		['minecraft:dark_oak_slab', 'minecraft:dark_oak_log'],
		['minecraft:jungle_slab', 'minecraft:jungle_log'],
		['minecraft:mangrove_slab', 'minecraft:mangrove_log'],
		/*['charm:ebony_slab', 'charm:ebony_log'],
		['charm:azalea_slab', 'charm:azalea_log'], */
		['minecraft:warped_slab', 'minecraft:warped_stem'],
		['minecraft:crimson_slab', 'minecraft:crimson_stem'],
		['deeperdarker:echo_slab', 'deeperdarker:echo_log']
	]

	slab_types.forEach(slab_type => {
		event.shaped(
			Item.of(slab_type[0], 24),
			[
				'AAA'
			],
			{
				A: slab_type[1]
			}
		)
	});

	// Alternate Door Recipes
	var door_types = [
		['minecraft:oak_door', 'minecraft:oak_log'],
		['minecraft:acacia_door', 'minecraft:acacia_log'],
		['minecraft:birch_door', 'minecraft:birch_log'],
		['minecraft:spruce_door', 'minecraft:spruce_log'],
		['minecraft:dark_oak_door', 'minecraft:dark_oak_log'],
		['minecraft:jungle_door', 'minecraft:jungle_log'],
		['minecraft:mangrove_door', 'minecraft:mangrove_log'],
		/*['charm:ebony_door', 'charm:ebony_log'],
		['charm:azalea_door', 'charm:azalea_log'],*/
		['minecraft:warped_door', 'minecraft:warped_stem'],
		['minecraft:crimson_door', 'minecraft:crimson_stem'],
		['deeperdarker:echo_door', 'deeperdarker:echo_log']
	]

	door_types.forEach(door_type => {
		event.shaped(
			Item.of(door_type[0], 12),
			[
				'AA ',
				'AA ',
				'AA '
			],
			{
				A: door_type[1]
			}
		)
	});

	// Alternate Vertical Slab Recipes
	var vertslab_types = [
		['enchanted-vertical-slabs:vertical_oak_slab', 'minecraft:oak_log'],
		['enchanted-vertical-slabs:vertical_acacia_slab', 'minecraft:acacia_log'],
		['enchanted-vertical-slabs:vertical_birch_slab', 'minecraft:birch_log'],
		['enchanted-vertical-slabs:vertical_spruce_slab', 'minecraft:spruce_log'],
		['enchanted-vertical-slabs:vertical_dark_oak_slab', 'minecraft:dark_oak_log'],
		['enchanted-vertical-slabs:vertical_jungle_slab', 'minecraft:jungle_log'],
		['enchanted-vertical-slabs:vertical_mangrove_slab', 'minecraft:mangrove_log'],
		['enchanted-vertical-slabs:vertical_warped_slab', 'minecraft:warped_stem'],
		['enchanted-vertical-slabs:vertical_crimson_slab', 'minecraft:crimson_stem']
	]

	vertslab_types.forEach(vertslab_type => {
		event.shaped(
			Item.of(vertslab_type[0], 24),
			[
				'A  ',
				'A  ',
				'A  '
			],
			{
				A: vertslab_type[1]
			}
		)
	});

});
