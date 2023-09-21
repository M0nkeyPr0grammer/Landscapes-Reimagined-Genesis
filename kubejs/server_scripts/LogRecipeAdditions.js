// Log Recipe Additions
ServerEvents.recipes(event => {
	
	// Alternate Chest Recipes
	var chest_types = [
		['lolmcv:oak_chest', 'minecraft:oak_log'],
		['lolmcv:acacia_chest', 'minecraft:acacia_log'],
		['lolmcv:birch_chest', 'minecraft:birch_log'],
		['lolmcv:spruce_chest', 'minecraft:spruce_log'],
		['lolmcv:dark_oak_chest', 'minecraft:dark_oak_log'],
		['lolmcv:jungle_chest', 'minecraft:jungle_log'],
		['lolmcv:mangrove_chest', 'minecraft:mangrove_log'],
		['lolmcv:bamboo_chest', 'minecraft:bamboo_block'],
		['lolmcv:cherry_chest', 'minecraft:cherry_log'],
		['lolmcv:warped_chest', 'minecraft:warped_stem'],
		['betternether:warped_chest', 'minecraft:warped_stem'],
		['lolmcv:crimson_chest', 'minecraft:crimson_stem'],
		['betternether:crimson_chest', 'minecraft:crimson_stem'],
		['betternether:stalagnate_chest', 'betternether:stalagnate_log'],
		['betternether:willow_chest', 'betternether:willow_log'],
		['betternether:wart_chest', 'betternether:wart_log'],
		['betternether:rubeus_chest', 'betternether:rubeus_log'],
		['betternether:mushroom_fir_chest', 'betternether:mushroom_fir_log'],
		['betternether:nether_mushroom_chest', 'betternether:nether_mushroom_stem'],
		['betternether:anchor_tree_chest', 'betternether:anchor_tree_log'],
		['betternether:nether_sakura_chest', 'betternether:nether_sakura_log'],
		['betterend:mossy_glowshroom_chest', 'betterend:mossy_glowshroom_log'],
		['betterend:pythadendron_chest', 'betterend:pythadendron_log'],
		['betterend:end_lotus_chest', 'betterend:end_lotus_log'],
		['betterend:lacugrove_chest', 'betterend:lacugrove_log'],
		['betterend:dragon_tree_chest', 'betterend:dragon_tree_log'],
		['betterend:helix_tree_chest', 'betterend:helix_tree_log'],
		['betterend:umbrella_tree_chest', 'betterend:umbrella_tree_log'],
		['betterend:lucernia_chest', 'betterend:lucernia_log'],
		['betterend:tenanea_chest', 'betterend:tenanea_log'],
		['betterend:jellyshroom_chest', 'betterend:jellyshroom_log'],
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
		['minecraft:warped_trapdoor', 'minecraft:warped_stem'],
		['minecraft:crimson_trapdoor', 'minecraft:crimson_stem'],
		['deeperdarker:echo_trapdoor', 'deeperdarker:echo_log'],
		['minecraft:bamboo_trapdoor', 'minecraft:bamboo_block'],
		['minecraft:cherry_trapdoor', 'minecraft:cherry_log'],
		['wilderwild:baobab_trapdoor', 'wilderwild:baobab_log'],
		['wilderwild:cypress_trapdoor', 'wilderwild:cypress_log'],
		['wilderwild:palm_trapdoor', 'wilderwild:palm_log'],
		['betternether:anchor_tree_trapdoor', 'betternether:anchor_tree_log'],
		['regions_unexplored:blackwood_trapdoor', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_trapdoor', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_trapdoor', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_trapdoor', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_trapdoor', 'regions_unexplored:dead_log'],
		['betterend:dragon_tree_trapdoor', 'betterend:dragon_tree_log'],
		['betterend:end_lotus_trapdoor', 'betterend:end_lotus_log'],
		['regions_unexplored:eucalyptus_trapdoor', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_trapdoor', 'regions_unexplored:green_bioshroom_stem'],
		['betterend:helix_tree_trapdoor', 'betterend:helix_tree_log'],
		['betterend:jellyshroom_trapdoor', 'betterend:jellyshroom_log'],
		['regions_unexplored:joshua_trapdoor', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_trapdoor', 'regions_unexplored:kapok_log'],
		['betterend:lacugrove_trapdoor', 'betterend:lacugrove_log'],
		['regions_unexplored:larch_trapdoor', 'regions_unexplored:larch_log'],
		['betterend:lucernia_trapdoor', 'betterend:lucernia_log'],
		['regions_unexplored:magnolia_trapdoor', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_trapdoor', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_trapdoor', 'regions_unexplored:mauve_log'],
		['betterend:mossy_glowshroom_trapdoor', 'betterend:mossy_glowshroom_log'],
		['betternether:mushroom_fir_trapdoor', 'betternether:mushroom_fir_log'],
		['betternether:nether_mushroom_trapdoor', 'betternether:nether_mushroom_stem'],
		['betternether:nether_sakura_trapdoor', 'betternether:nether_sakura_log'],
		['regions_unexplored:palm_trapdoor', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_trapdoor', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_trapdoor', 'regions_unexplored:pink_bioshroom_stem'],
		['betterend:pythadendron_trapdoor', 'betterend:pythadendron_log'],
		['regions_unexplored:redwood_trapdoor', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_trapdoor', 'betterarcheology:rotten_log'],
		['betternether:rubeus_trapdoor', 'betternether:rubeus_log'],
		['regions_unexplored:socotra_trapdoor', 'regions_unexplored:socotra_log'],
		['betternether:stalagnate_trapdoor', 'betternether:stalagnate_log'],
		['betterend:tenanea_trapdoor', 'betterend:tenanea_log'],
		['betterend:umbrella_tree_trapdoor', 'betterend:umbrella_tree_log'],
		['betternether:wart_trapdoor', 'betternether:wart_log'],
		['betternether:willow_trapdoor', 'betternether:willow_log'],
		['regions_unexplored:willow_trapdoor', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_trapdoor', 'regions_unexplored:yellow_bioshroom_stem'],
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
