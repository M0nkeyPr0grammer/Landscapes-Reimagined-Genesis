// JEI Integration

// Hide Items
onEvent('jei.hide.items', event => {
    const itemsToHide = [
        'create:creative_motor',
        'create:creative_crate',
        'create:handheld_worldshaper',
        'createaddition:creative_energy',
        'extended_drawers:creative_upgrade',
        'toms_storage:ts.painted_trim',
        '@lootr',
        'kubejs:rei_groups/creativeitems',
        'minecraft:spawner',
        'minecraft:dragon_egg',
        'minecraft:command_block',
        'minecraft:barrier',
        'minecraft:light',
        'minecraft:repeating_command_block',
        'minecraft:chain_command_block',
        'minecraft:structure_block',
        'minecraft:structure_void',
        'minecraft:jigsaw',
        'minecraft:command_block_minecart',
        'minecraft:written_book',
        'minecraft:command_block_minecart',
        'minecraft:knowledge_book',
        'minecraft:debug_stick',
        'minecraft:filled_map',
        'create:copper_backtank_placeable',
        'create:netherite_backtank_placeable',
        'creategoggles:chainmail_backtank_placeable',
        'creategoggles:diamond_backtank_placeable',
        'creategoggles:golden_backtank_placeable',
        'creategoggles:iron_backtank_placeable',
        'creategoggles:leather_backtank_placeable',
        'create_jetpack:jetpack_placeable',
        'minecraft:petrified_oak_slab',
        'enchanted-vertical-slabs:vertical_petrified_oak_slab',
        'porting_lib:area_selector',
        'moonlight:placeable_item',
        'farmersknives:ruby_knife',
        'farmersknives:steel_knife_et',
        // Wunderreich Removals
        'wunderreich:wunder_kiste',
        'frozenlib:camera',
        'frozenlib:loot_table_whacker',
        'seasonsextras:seasonal_compendium',
        // Spelunkery Removals
        'spelunkery:granite_lead_ore',
        'spelunkery:andesite_lead_ore',
        'spelunkery:diorite_lead_ore',
        'spelunkery:tuff_lead_ore',
        'spelunkery:granite_silver_ore',
        'spelunkery:andesite_silver_ore',
        'spelunkery:diorite_silver_ore',
        'spelunkery:tuff_silver_ore',
        'spelunkery:granite_jade_ore',
        'spelunkery:andesite_jade_ore',
        'spelunkery:diorite_jade_ore',
        'spelunkery:tuff_jade_ore',
        'spelunkery:jade_shard',
        'spelunkery:raw_lead_nugget',
        'spelunkery:raw_silver_nugget',
        'spelunkery:rough_jade_shard',
        'spelunkery:saltpeter',
        'spelunkery:sulfur',
        'spelunkery:sulfur_geyser',
        // New Item Removals
        'minecraft:light',
        'minecraft:painting',
        'simplevillagers:trading_block',
        'simplevillagers:iron_farm_block'
    ];

    itemsToHide.forEach(item => event.hide(item));
});

// Add Items
onEvent('jei.add.items', event => {
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'));
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:betterfurnacesreforged"}'));
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:toms_simple_storage"}'));
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:immersive_aircraft"}'));
});

