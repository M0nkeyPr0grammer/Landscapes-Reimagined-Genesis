// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')


// Hides items from REI
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
        'spelunkery:sulfur_geyser'

    ];

    itemsToHide.forEach(item => event.hide(item));
});

REIEvents.add('item', event => {
    event.add('simplevillagers:trading_block')
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'))
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:betterfurnacesreforged"}'))
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:toms_simple_storage"}'))
    event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:immersive_aircraft"}'))
})

// Groups Items in REI
REIEvents.groupEntries(event => {

    const groups = [
        { id: "kubejs:rei_groups/buildingblocks", name: "Building Blocks", items: [InputItem.of('%building_blocks')] },
        { id: "kubejs:rei_groups/coloredblocks", name: "Colored Blocks", items: [InputItem.of('%colored_blocks'), 'bedspreads:decorated_bed'] },
        { id: "kubejs:rei_groups/naturalblocks", name: "Natural Blocks", items: [InputItem.of('%natural_blocks')] },
        { id: "kubejs:rei_groups/functionalblocks", name: "Functional Blocks", items: [InputItem.of('%functional_blocks')] },
        { id: "kubejs:rei_groups/redstoneblocks", name: "Redstone Blocks", items: [InputItem.of('%redstone_blocks')] },
        { id: "kubejs:rei_groups/toolsutilities", name: "Tools & Utilities", items: [InputItem.of('%tools_and_utilities'), 'minecraft:bundle'] },
        { id: "kubejs:rei_groups/combat", name: "Combat", items: [InputItem.of('%combat')] },
        { id: "kubejs:rei_groups/fooddrinks", name: "Food & Drinks", items: [InputItem.of('%food_and_drinks')] },
        { id: "kubejs:rei_groups/ingredients", name: "Ingredients", items: [InputItem.of('%ingredients')] },
        { id: "kubejs:rei_groups/spawneggs", name: "Spawn Eggs", items: [InputItem.of('%spawn_eggs'), 'minecraft:ender_dragon_spawn_egg', 'minecraft:wither_spawn_egg'] },
        { id: "kubejs:rei_groups/chipped", name: "Chipped", items: [InputItem.of('@chipped')] },
        { id: "kubejs:rei_groups/deeperdarker", name: "Deeper and Darker", items: [InputItem.of('@deeperdarker'), 'farmersknives:warden_knife'] },
        { id: "kubeks:rei_grups/comforts", name: "Comforts", items: [InputItem.of('@comforts')] },
        {
            id: "kubejs:rei_groups/delights", name: "Farmers Delight and Addons", items: [
                InputItem.of('@expandeddelight'),
                InputItem.of('@farmersdelight'),
                InputItem.of('@farmersknives'),
                InputItem.of('@ubesdelight'),
                InputItem.of('@delightfulcreators') // New Addition
            ]
        },

        { id: "kubejs:rei_groups/friendsandfoes", name: "Friends and Foes", items: [InputItem.of('@friendsandfoes')] },
        { id: "kubejs:rei_groups/paintings", name: "Immersive Paintings", items: [InputItem.of('@immersive_paintings')] },
        {
            id: "kubejs:rei_groups/reinforced", name: "Reinforced Barrels, Chests, and Shulker Boxes", items: [
                InputItem.of('@reinfbarrel'),
                InputItem.of('@reinfchest'),
                InputItem.of('@reinfshulker')]
        },
        { id: "kubejs:rei_groups/supplementaries", name: "Supplementaries", items: [InputItem.of('@supplementaries')] },
        { id: "kubejs:rei_groups/villagers", name: "Villagers Plus", items: [InputItem.of('@villagersplus')] },
        { id: "kubejs:rei_groups/deepslatecutting", name: "Deepslate Cutting", items: [InputItem.of('@deepslatecutting')] },
        { id: "kubejs:rei_groups/drawers", name: "Extended Drawers", items: [InputItem.of('@extended_drawers')] },
        { id: "kubejs:rei_groups/guides", name: "Patchouli Guides", items: [InputItem.of('@patchouli')] },
        { id: "kubejs:rei_groups/angling", name: "Angling", items: [InputItem.of('@angling')] },
        { id: "kubejs:rei_groups/pipes", name: "Simple Copper Pipes", items: [InputItem.of('@lunade')] },
        { id: "kubejs:rei_groups/aircrafts", name: "Immersive Aircrafts", items: [InputItem.of('@immersive_aircraft')] },
        { id: "kubejs:rei_groups/slabs", name: "Enchanted Vertical Slabs", items: [InputItem.of('@enchanted-vertical-slabs')] },
        { id: "kubejs:rei_groups/storage", name: "Tom's Simple Storage", items: [InputItem.of('@toms_storage')] },
        { id: "kubejs:rei_groups/beautify", name: "Beautify", items: [InputItem.of('@beautify')] },
        { id: "kubeks:rei_groups/bountiful", name: "Bountiful", items: [InputItem.of('@bountiful')] },
        { id: "kubjes:rei_groups/ores", name: "Universal Ores", items: [InputItem.of('@universal_ores')] },
        { id: "kubejs:rei_groups/simple_villagers", name: "Simple Villagers", items: [InputItem.of('@simplevillagers')] },
        { id: "kubjs:rei_groups/adorn", name: "Adorn", items: [InputItem.of('@adorn')] },
        {
            id: "kubejs:rei_groups/bagitems", name: "Traveler's Backpack Items", items: [
                '#travelersbackpack:sleeping_bags',
                'travelersbackpack:backpack_tank',
                'travelersbackpack:hose',
                'travelersbackpack:hose_nozzle',
                'travelersbackpack:blank_upgrade',
                'travelersbackpack:iron_tier_upgrade',
                'travelersbackpack:gold_tier_upgrade',
                'travelersbackpack:diamond_tier_upgrade',
                'travelersbackpack:netherite_tier_upgrade']
        },
        {
            id: "kubejs:rei_groups/create", name: "Create and Addons", items: [
                InputItem.of('@create'),
                InputItem.of('@railways'),
                InputItem.of('@create_crystal_clear'),
                InputItem.of('@createaddition'),
                InputItem.of('@sliceanddice'),
                InputItem.of('@createutilities'),
                InputItem.of('@createchunkloading'),
                'create:chromatic_compound',
                InputItem.of('@createoreexcavation'),
                InputItem.of('@createfoundry'),
                InputItem.of('@extendedgears'),
                InputItem.of('@creategoggles')
            ]
        },
        { id: "kubejs:rei_groups/betternether", name: "Better Nether", items: [InputItem.of('@betternether')] },
        { id: "kubejs:rei_groups/betterarch", name: "Better Archeology", items: [InputItem.of('@betterarcheology')] },
        { id: "kubejs:rei_groups/betterend", name: "Better End", items: [InputItem.of('@betterend')] },
        { id: "kubejs:rei_groups/creeperoverhaul", name: "Creeper Overhaul", items: [InputItem.of('@creeperoverhaul')] },
        { id: "kubejs:rei_groups/fishofthieves", name: "Fish of Thieves", items: [InputItem.of('@fishofthieves')] },
        { id: "kubejs:rei_groups/regions", name: "Regions Unexplored", items: [InputItem.of('@regions_unexplored')] },
        { id: "kubejs:rei_groups/waystones", name: "Waystones", items: [InputItem.of('@waystones')] },
        { id: "kubejs:rei_groups/wunderreich", name: "Wunderreich", items: [InputItem.of('@wunderreich')] },
        { id: "kubejs:rei_groups/wildlife", name: "Wildlife", items: [InputItem.of('@wildlife')] },
        { id: "kubejs:rei_groups/lieonlion", name: "More Chest and Crafting Tables", items: [InputItem.of('@lolmcv'), InputItem.of('@lolmct')] },
        { id: "kubejs:rei_groups/seasonsextras", name: "Fabric Seaons Extras", items: [InputItem.of('@seasonsextras')] },
        { id: "kubejs:rei_groups/banners", name: "Archeology Banners", items: [InputItem.of('@archaeologybanners')] },
        { id: "kubejs:rei_groups/archplus", name: "Archeology Plus", items: [InputItem.of('@archeologyplus')] },
        { id: "kubejs:rei_groups/moretrims", name: "More Armor Trims", items: [InputItem.of('@more_armor_trims')] },
        { id: "kubejs:rei_groups/discs", name: "Pure Discs", items: [InputItem.of('@purediscstrailstales')] },
        { id: "kubejs:rei_groups/morediscs", name: "More Discs", items: [InputItem.of('@morediscs')] },
        { id: "kubejs:rei_groups/spelunkery", name: "Spelunkery", items: [InputItem.of('@spelunkery')] },
        { id: "kubejs:rei_groups/terrestria", name: "Terrestria", items: [InputItem.of('@terrestria')] },
        { id: "kubejs:rei_groups/promenade", name: "Promenade", items: [InputItem.of('@promenade')] },
        { id: "kubejs:rei_groups/ptools", name: "Pocket Tools", items: [InputItem.of('@pockettools')] },
        { id: "kubejs:rei_groups/backpacks", name: "Traveler's Backpacks", items: [InputItem.of('#trinkets:chest/back')] },
        {
            id: "kubejs:rei_groups/compasses", name: "Compasses", items: [
                'explorerscompass:explorerscompass',
                'naturescompass:naturescompass'
            ]
        },
        // v2.1 Additions
        { id: "kubejs:rei_groups/netherite", name: "Advanced Netherite", items: [InputItem.of('@advancednetherite')] },
        { id: "kubejs:rei_groups/fandiscs", name: "Fan Made Discs", items: [InputItem.of('@all_the_fan_made_discs')] },
        { id: "kubejs:rei_groups/pots", name: "Botany Pots", items: [InputItem.of('@botanypots')] },
        { id: "kubejs:rei_groups/enderman", name: "Enderman Overhaul", items: [InputItem.of('@endermanoverhaul')] },
        {
            id: "kubejs:rei_groups/fuzs", name: "Fuzs Mods", items: [
                'echochest:echo_chest',
                'netherchested:nether_chest',
                'barteringstation:bartering_station',
                'tradingpost:trading_post',
                InputItem.of('@magnumtorch')
            ]
        },
    ];

    for (const group of groups) {

        event.groupItems(group.id, group.name, group.items);

    }

    // Groups items with NBT data
    const useNbt = [
        'minecraft:suspicious_stew',
        'supplementaries:bamboo_spikes_tipped',
        'patchouli:guide_book',
        'railways:white_conductor_cap',
        'railways:orange_conductor_cap',
        'railways:magenta_conductor_cap',
        'railways:light_blue_conductor_cap',
        'railways:yellow_conductor_cap',
        'railways:lime_conductor_cap',
        'railways:pink_conductor_cap',
        'railways:gray_conductor_cap',
        'railways:light_gray_conductor_cap',
        'railways:cyan_conductor_cap',
        'railways:purple_conductor_cap',
        'railways:blue_conductor_cap',
        'railways:brown_conductor_cap',
        'railways:green_conductor_cap',
        'railways:red_conductor_cap',
        'railways:black_conductor_cap',
        Item.of('wunderreich:whisperer', '{Damage:0}'),
        Item.of('enderchests:ender_chest', '{owner:"all"}'),
        Item.of('enderchests:ender_bag', '{owner:"all"}'),
        Item.of('enderchests:ender_pouch', '{owner:"all"}'),
        Item.of('endertanks:ender_tank', '{owner:"all"}'),
        Item.of('endertanks:ender_bucket', '{owner:"all"}'),
    ];

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, getID(id), item)
    });

    // Groups Fluids in REI
    const fluidGroups = [
        { id: "kubejs:rei_groups/fluid_tagged_as_water", name: "Fluids", fluids: ['minecraft:water', 'minecraft:lava'] },
        { id: "kubejs:rei_groups/create_fluids", name: "Create Fluids", fluids: [
                'create:honey',
                'create:chocolate',
                'milk:still_milk',
                'createaddition:bioethanol',
                'createaddition:seed_oil',
                'sliceanddice:fertilizer',
                'create_enchantment_industry:ink',
                'createfoundry:molten_copper',
                'createfoundry:molten_iron',
                'createfoundry:molten_gold',
                'createfoundry:molten_carbon',
                'createfoundry:molten_diamond',
                'createfoundry:molten_zinc',
                'createfoundry:molten_brass',
                'createfoundry:molten_emerald',
                'createfoundry:molten_redstone',
                'createfoundry:molten_lapis',
                'createfoundry:molten_ancient_debris',
                'createfoundry:molten_netherite',
            ] },
        { id: "kubejs:rei_groups/travelers_fluids", name: "Travelers Backpack Fluids", fluids: [
                'travelersbackpack:potion_still', 'travelersbackpack:milk_still']
        },
        { id: "kubejs:rei_groups/delightfulcreators_fluids", name: "Delightful Creators Fluids", fluids: [
                'delightfulcreators:tomato_sauce',
                'delightfulcreators:hot_cocoa',
                'delightfulcreators:melon_juice',
                'delightfulcreators:apple_cider',
                'delightfulcreators:beetroot_soup',
                'delightfulcreators:chicken_soup',
                'delightfulcreators:noodle_soup',
                'delightfulcreators:pumpkin_soup',
                'delightfulcreators:vegetable_soup',
                'delightfulcreators:fish_stew',
                'delightfulcreators:beef_stew',
                'delightfulcreators:rabbit_stew',
                'delightfulcreators:mushroom_stew',
                'delightfulcreators:glow_berry_custard',
                'delightfulcreators:cooked_rice',
                'delightfulcreators:bone_broth',
                'delightfulcreators:baked_cod_stew',
                'delightfulcreators:ratatouille',
                'delightfulcreators:dog_food',
        ] }
    ];

    for (const group of fluidGroups) {
        event.groupFluids(group.id, group.name, group.fluids);
    }

})

function getID(id) {
    if (id == 'supplementaries:bamboo_spikes_tipped') {
        return "Tipped Bamboo Spikes";
    }
    else if (id == 'patchouli:guide_book') {
        return "Guide Books";
    }
    else if (id == 'angling:roe') {
        return "Angling Roe Items";
    }
    else if (id == 'minecraft:suspicious_stew') {
        return "Suspicious Stew";
    }
    else if (id == 'railways:white_conductor_cap') {
        return "White Conductor Caps";
    }
    else if (id == 'railways:orange_conductor_cap') {
        return "Orange Conductor Caps";
    }
    else if (id == 'railways:magenta_conductor_cap') {
        return "Magenta Conductor Caps";
    }
    else if (id == 'railways:light_blue_conductor_cap') {
        return "Light Blue Conductor Caps";
    }
    else if (id == 'railways:yellow_conductor_cap') {
        return "Yellow Conductor Caps";
    }
    else if (id == 'railways:lime_conductor_cap') {
        return "Lime Conductor Caps";
    }
    else if (id == 'railways:pink_conductor_cap') {
        return "Pink Conductor Caps";
    }
    else if (id == 'railways:gray_conductor_cap') {
        return "Gray Conductor Caps";
    }
    else if (id == 'railways:light_gray_conductor_cap') {
        return "Light Gray Conductor Caps";
    }
    else if (id == 'railways:cyan_conductor_cap') {
        return "Cyan Conductor Caps";
    }
    else if (id == 'railways:purple_conductor_cap') {
        return "Purple Conductor Caps";
    }
    else if (id == 'railways:blue_conductor_cap') {
        return "Blue Conductor Caps";
    }
    else if (id == 'railways:brown_conductor_cap') {
        return "Brown Conductor Caps";
    }
    else if (id == 'railways:green_conductor_cap') {
        return "Green Conductor Caps";
    }
    else if (id == 'railways:red_conductor_cap') {
        return "Red Conductor Caps";
    }
    else if (id == 'railways:black_conductor_cap') {
        return "Black Conductor Caps";
    }
    else if (id == '1 ender_chest') {
        return "Ender Chests";
    }
    else if (id == '1 ender_bag') {
        return "Ender Bags";
    }
    else if (id == '1 ender_tank') {
        return "Ender Tanks";
    }
    else if (id == '1 ender_bucket') {
        return "Ender Buckets";
    }
    else if (id == '1 ender_pouch') {
        return "Ender Pouches";
    }
    else if (id == '1 whisperer') {
        return "Whisperers";            // New Change
    }
    return id;
};

