// Hiding and Adding of Items in REI

// Hiding Items in REI
REIEvents.hide('item', event => {
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
        Item.of('minecraft:white_banner', '{BlockEntityTag:{Patterns:[{Color:9,Pattern:"mr"},{Color:8,Pattern:"bs"},{Color:7,Pattern:"cs"},{Color:8,Pattern:"bo"},{Color:15,Pattern:"ms"},{Color:8,Pattern:"hh"},{Color:8,Pattern:"mc"},{Color:15,Pattern:"bo"}],id:"minecraft:banner"},HideFlags:32,display:{Name:\'{"color":"gold","translate":"block.minecraft.ominous_banner"}\'}}'),
        'farmersknives:ruby_knife',
        'farmersknives:steel_knife_et',
        // Wunderreich Removals
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"cyan"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"light_gray"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"gray"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"pink"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"lime"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"yellow"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"light_blue"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"magenta"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"orange"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"black"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"red"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"green"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"brown"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"blue"}}'),
        Item.of('wunderreich:wunder_kiste', '{BlockStateTag:{domain:"purple"}}'),

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
        Item.of('minecraft:light', '{BlockStateTag:{level:"14"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"13"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"12"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"11"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"10"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"9"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"8"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"7"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"6"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"5"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"4"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"3"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"2"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"1"}}'),
        Item.of('minecraft:light', '{BlockStateTag:{level:"0"}}'),
        Item.of('minecraft:painting', '{EntityTag:{variant:"minecraft:earth"}}'),
        Item.of('minecraft:painting', '{EntityTag:{variant:"minecraft:wind"}}'),
        Item.of('minecraft:painting', '{EntityTag:{variant:"minecraft:water"}}'),
        Item.of('minecraft:painting', '{EntityTag:{variant:"minecraft:fire"}}'),
        'simplevillagers:trading_block',
        Item.of('simplevillagers:iron_farm_block')
    ];

    itemsToHide.forEach(item => event.hide(item));
}); 

// Adding of Items for REI
REIEvents.add('item', event => {
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'))
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:betterfurnacesreforged"}'))
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:toms_simple_storage"}'))
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:immersive_aircraft"}'))
})