priority(1);

// JEI Subtype Declarations

console.info('Hello, World! (You will see this line every time client resources reload)')

// Grouping of Items for JEI
onEvent('jei.subtypes', event => {

    const groups = [
        { id: "kubejs:jei_groups/buildingblocks", name: "Building Blocks", items: ['%building_blocks'] },
        { id: "kubejs:jei_groups/coloredblocks", name: "Colored Blocks", items: [ '%colored_blocks', 'bedspreads:decorated_bed'] },
        { id: "kubejs:jei_groups/naturalblocks", name: "Natural Blocks", items: [ '%natural_blocks'] },
        { id: "kubejs:jei_groups/functionalblocks", name: "Functional Blocks", items: [ '%functional_blocks'] },
        { id: "kubejs:jei_groups/redstoneblocks", name: "Redstone Blocks", items: [ '%redstone_blocks'] },
        { id: "kubejs:jei_groups/toolsutilities", name: "Tools & Utilities", items: [ '%tools_and_utilities', 'minecraft:bundle'] },
        { id: "kubejs:jei_groups/combat", name: "Combat", items: [ '%combat'] },
        { id: "kubejs:jei_groups/fooddrinks", name: "Food & Drinks", items: [ '%food_and_drinks'] },
        { id: "kubejs:jei_groups/ingredients", name: "Ingredients", items: [ '%ingredients'] },
        { id: "kubejs:jei_groups/spawneggs", name: "Spawn Eggs", items: [ '%spawn_eggs', 'minecraft:ender_dragon_spawn_egg', 'minecraft:wither_spawn_egg'] },
        { id: "kubejs:jei_groups/chipped", name: "Chipped", items: [ '@chipped'] },
        { id: "kubejs:jei_groups/deeperdarker", name: "Deeper and Darker", items: [ '@deeperdarker', 'farmersknives:warden_knife'] },
        { id: "kubeks:rei_grups/comforts", name: "Comforts", items: [ '@comforts'] },
        {
            id: "kubejs:jei_groups/delights", name: "Farmers Delight and Addons", items: [
                 '@expandeddelight',
                 '@farmersdelight',
                 '@farmersknives',
                 '@ubesdelight',
                 '@delightfulcreators'
            ]
        },

        { id: "kubejs:jei_groups/friendsandfoes", name: "Friends and Foes", items: [ '@friendsandfoes'] },
        { id: "kubejs:jei_groups/paintings", name: "Immersive Paintings", items: [ '@immersive_paintings'] },
        {
            id: "kubejs:jei_groups/reinforced", name: "Reinforced Barrels, Chests, and Shulker Boxes", items: [
                 '@reinfbarrel',
                 '@reinfchest',
                 '@reinfshulker']
        },
        { id: "kubejs:jei_groups/supplementaries", name: "Supplementaries", items: [ '@supplementaries'] },
        { id: "kubejs:jei_groups/villagers", name: "Villagers Plus", items: [ '@villagersplus'] },
        { id: "kubejs:jei_groups/deepslatecutting", name: "Deepslate Cutting", items: [ '@deepslatecutting'] },
        { id: "kubejs:jei_groups/drawers", name: "Extended Drawers", items: [ '@extended_drawers'] },
        { id: "kubejs:jei_groups/guides", name: "Patchouli Guides", items: [ '@patchouli'] },
        { id: "kubejs:jei_groups/aircrafts", name: "Immersive Aircrafts", items: [ '@immersive_aircraft'] },
        { id: "kubejs:jei_groups/slabs", name: "Enchanted Vertical Slabs", items: [ '@enchanted-vertical-slabs'] },
        { id: "kubejs:jei_groups/storage", name: "Tom's Simple Storage", items: [ '@toms_storage'] },
        { id: "kubejs:jei_groups/beautify", name: "Beautify", items: [ '@beautify'] },
        { id: "kubeks:rei_groups/bountiful", name: "Bountiful", items: [ '@bountiful'] },
        { id: "kubjes:rei_groups/ores", name: "Universal Ores", items: [ '@universal_ores'] },
        { id: "kubejs:jei_groups/simple_villagers", name: "Simple Villagers", items: [ '@simplevillagers'] },
        { id: "kubjs:rei_groups/adorn", name: "Adorn", items: [ '@adorn'] },
        {
            id: "kubejs:jei_groups/bagitems", name: "Traveler's Backpack Items", items: [
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
            id: "kubejs:jei_groups/create", name: "Create and Addons", items: [
                 '@create',
                 '@railways',
                 '@create_crystal_clear',
                 '@createaddition',
                 '@sliceanddice',
                 '@createutilities',
                 '@createchunkloading',
                'create:chromatic_compound',
                 '@createoreexcavation',
                 '@createfoundry',
                 '@extendedgears',
                 '@creategoggles',
                'create_jetpack:jetpack'
            ]
        },
        { id: "kubejs:jei_groups/betternether", name: "Better Nether", items: [ '@betternether'] },
        { id: "kubejs:jei_groups/betterarch", name: "Better Archeology", items: [ '@betterarcheology'] },
        { id: "kubejs:jei_groups/betterend", name: "Better End", items: [ '@betterend'] },
        { id: "kubejs:jei_groups/creeperoverhaul", name: "Creeper Overhaul", items: [ '@creeperoverhaul'] },
        { id: "kubejs:jei_groups/fishofthieves", name: "Fish of Thieves", items: [ '@fishofthieves'] },
        { id: "kubejs:jei_groups/regions", name: "Regions Unexplored", items: [ '@regions_unexplored'] },
        { id: "kubejs:jei_groups/waystones", name: "Waystones", items: [ '@waystones'] },
        { id: "kubejs:jei_groups/wunderreich", name: "Wunderreich", items: [ '@wunderreich'] },
        { id: "kubejs:jei_groups/wildlife", name: "Wildlife", items: [ '@wildlife'] },
        { id: "kubejs:jei_groups/lieonlion", name: "More Chest and Crafting Tables", items: [ '@lolmcv',  '@lolmct'] },
        { id: "kubejs:jei_groups/seasonsextras", name: "Fabric Seaons Extras", items: [ '@seasonsextras'] },
        { id: "kubejs:jei_groups/banners", name: "Archeology Banners", items: [ '@archaeologybanners'] },
        { id: "kubejs:jei_groups/archplus", name: "Archeology Plus", items: [ '@archeologyplus'] },
        { id: "kubejs:jei_groups/moretrims", name: "More Armor Trims", items: [ '@more_armor_trims'] },
        { id: "kubejs:jei_groups/discs", name: "Pure Discs", items: [ '@purediscstrailstales'] },
        { id: "kubejs:jei_groups/morediscs", name: "More Discs", items: [ '@morediscs'] },
        { id: "kubejs:jei_groups/spelunkery", name: "Spelunkery", items: [ '@spelunkery'] },
        { id: "kubejs:jei_groups/terrestria", name: "Terrestria", items: [ '@terrestria'] },
        { id: "kubejs:jei_groups/promenade", name: "Promenade", items: [ '@promenade'] },
        { id: "kubejs:jei_groups/ptools", name: "Pocket Tools", items: [ '@pockettools'] },
        { id: "kubejs:jei_groups/backpacks", name: "Traveler's Backpacks", items: [ '#trinkets:chest/back'] },
        {
            id: "kubejs:jei_groups/compasses", name: "Compasses", items: [
                'explorerscompass:explorerscompass',
                'naturescompass:naturescompass'
            ]
        },

        { id: "kubejs:jei_groups/netherite", name: "Advanced Netherite", items: [ '@advancednetherite'] },
        { id: "kubejs:jei_groups/fandiscs", name: "Fan Made Discs", items: [ '@all_the_fan_made_discs'] },
        { id: "kubejs:jei_groups/pots", name: "Botany Pots", items: [ '@botanypots'] },
        { id: "kubejs:jei_groups/enderman", name: "Enderman Overhaul", items: [ '@endermanoverhaul'] },
        {
            id: "kubejs:jei_groups/fuzs", name: "Fuzs Mods", items: [
                'echochest:echo_chest',
                'netherchested:nether_chest',
                'barteringstation:bartering_station',
                'tradingpost:trading_post',
                 '@magnumtorch'
            ]
        },
    ];

    for (const group of groups) {
        event.useNBT(group.id);
        group.items.forEach(item => event.useNBTKey(item, group.name));
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
        'wunderreich:whisperer', '{Damage:0}',
        'enderchests:ender_chest', '{owner:"all"}',
        'enderchests:ender_bag', '{owner:"all"}',
        'enderchests:ender_pouch', '{owner:"all"}',
        'endertanks:ender_tank', '{owner:"all"}',
        'endertanks:ender_bucket', '{owner:"all"}',
    ];

    useNbt.forEach(id => {
        event.useNBT(id);
    });

    // Groups Fluids in REI
    const fluidGroups = [
        { id: "kubejs:jei_groups/fluid_tagged_as_water", name: "Fluids", fluids: ['minecraft:water', 'minecraft:lava'] },
        {
            id: "kubejs:jei_groups/create_fluids", name: "Create Fluids", fluids: [
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
            ]
        },
        {
            id: "kubejs:jei_groups/travelers_fluids", name: "Travelers Backpack Fluids", fluids: [
                'travelersbackpack:potion_still', 'travelersbackpack:milk_still']
        },
        {
            id: "kubejs:jei_groups/delightfulcreators_fluids", name: "Delightful Creators Fluids", fluids: [
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
            ]
        }
    ];

    for (const group of fluidGroups) {
        event.useNBT(group.id);
        group.fluids.forEach(fluid => event.useNBTKey(fluid, group.name));
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


