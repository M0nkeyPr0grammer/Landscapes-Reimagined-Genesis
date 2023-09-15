// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')


// Hides items from REI
REIEvents.hide('item', event => {
    const itemsToHide = [
        'deeperdarker:echo_boat',
        'deeperdarker:echo_chest_boat',
        'create:creative_motor',
        'create:creative_fluid_tank',
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
        'enchanted-vertical-slabs:vertical_petrified_oak_slab'
    ];

    itemsToHide.forEach(item => event.hide(item));
});

REIEvents.add('item', event => {
    event.add('simplevillagers:trading_block')
})

// Groups Items in REI
REIEvents.groupEntries(event => {

    const groups = [
        { id: "kubejs:rei_groups/buildingblocks", name: "Building Blocks", items: [InputItem.of('%building_blocks')] },
        { id: "kubejs:rei_groups/decoration", name: "Decoration Blocks", items: [InputItem.of('%decorations'), 'bedspreads:decorated_bed'] },
        { id: "kubejs:rei_groups/redstone", name: "Redstone", items: [InputItem.of('%redstone')] },
        { id: "kubejs:rei_groups/transportation", name: "Transportation", items: [InputItem.of('%transportation')] },
        { id: "kubejs:rei_groups/misc", name: "Miscellaneous", items: [InputItem.of('%misc')] },
        { id: "kubejs:rei_groups/foodstuffs", name: "Foodstuffs", items: [InputItem.of('%food'), 'minecraft:suspicious_stew'] },
        { id: "kubejs:rei_groups/tools", name: "Tools", items: [InputItem.of('%tools'), 'minecraft:bundle'] },
        { id: "kubejs:rei_groups/combat", name: "Combat", items: [InputItem.of('%combat')] },
        { id: "kubejs:rei_groups/brewing", name: "Brewing", items: [InputItem.of('%brewing')] },
        { id: "kubejs:rei_groups/betterfurnacesreforged", name: "BetterFurnaces Reforged Items", items: [InputItem.of('@betterfurnacesreforged')] },
        { id: "kubejs:rei_groups/charm", name: "Charm", items: [InputItem.of('@charm')] },
        { id: "kubejs:rei_groups/chipped", name: "Chipped", items: [InputItem.of('@chipped')] },
        { id: "kubejs:rei_groups/deeperdarker", name: "Deeper and Darker", items: [InputItem.of('@deeperdarker'), 'farmersknives:warden_knife'] },
        { id: "kubeks:rei_grups/comforts", name: "Comforts", items: [InputItem.of('@comforts')] },
        { id: "kubejs:rei_groups/delights", name: "Farmers and Expanded Delights", items: [
                InputItem.of('@expandeddelight'),
                InputItem.of('@farmersdelight')] },
        { id: "kubejs:rei_groups/friendsandfoes", name: "Friends and Foes", items: [InputItem.of('@friendsandfoes')] },
        { id: "kubejs:rei_groups/paintings", name: "Immersive Paintings", items: [InputItem.of('@immersive_paintings')] },
        { id: "kubejs:rei_groups/reinforced", name: "Reinforced Barrels, Chests, and Shulker Boxes", items: [
            InputItem.of('@reinfbarrel'),
            InputItem.of('@reinfchest'),
            InputItem.of('@reinfshulker')] },
        { id: "kubejs:rei_groups/supplementaries", name: "Supplementaries", items: [InputItem.of('@supplementaries')] },
        { id: "kubejs:rei_groups/villagers", name: "Villagers Plus", items: [InputItem.of('@villagersplus')] },
        { id: "kubejs:rei_groups/deepslatecutting", name: "Deepslate Cutting", items: [InputItem.of('@deepslatecutting')] },
        { id: "kubejs:rei_groups/waystones", name: "Fabric Waystones", items: [InputItem.of('@fwaystones')] },
        { id: "kubejs:rei_groups/drawers", name: "Extended Drawers", items: [InputItem.of('@extended_drawers')] },
        { id: "kubejs:rei_groups/guides", name: "Patchouli Guides", items: [InputItem.of('@patchouli')] },
        { id: "kubejs:rei_groups/naturalist", name: "Naturalist", items: [InputItem.of('@naturalist')] },
        { id: "kubejs:rei_groups/critters", name: "Critters & Companions", items: [InputItem.of('@crittersandcompanions')] },
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
        { id: "kubejs:rei_groups/bagitems", name: "Traveler's Backpack Items", items: [
                '#travelersbackpack:sleeping_bags',
                'travelersbackpack:backpack_tank',
                'travelersbackpack:hose',
                'travelersbackpack:hose_nozzle',
                'travelersbackpack:blank_upgrade',
                'travelersbackpack:iron_tier_upgrade',
                'travelersbackpack:gold_tier_upgrade',
                'travelersbackpack:diamond_tier_upgrade',
                'travelersbackpack:netherite_tier_upgrade'] },
        { id: "kubejs:rei_groups/create", name: "Create and Addons", items: [
                InputItem.of('@create'),
                InputItem.of('@railways'),
                InputItem.of('@create_crystal_clear'),
                InputItem.of('@createaddition'),
                InputItem.of('@elitia'),
                InputItem.of('@sliceanddice'),
                InputItem.of('@creategoggles'),
                InputItem.of('@create_enchantment_industry'),
                InputItem.of('@createutilities'),
                InputItem.of('@createdeco'),
                InputItem.of('@createchunkloading'),
                'create:chromatic_compound'
            ] }
        /* Save this for later just incase its fixed
        { id: "kubejs:rei_groups/bags", name: "Traveler's Backpacks", items: ['#trinkets:chest/back'] },
        */
    ];

    for (const group of groups) {
        event.groupItems(group.id, group.name, group.items);
    }

    // Groups items with NBT data
    const useNbt = [
        'potion',
        'enchanted_book',
        'splash_potion',
        'tipped_arrow',
        'lingering_potion',
        'supplementaries:bamboo_spikes_tipped',
        'goat_horn',
        'patchouli:guide_book',
        'angling:roe'
    ];

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, getID(id), item)
    });

    // Groups Fluids in REI
    const fluidGroups = [
        { id: "kubejs:rei_groups/fluid_tagged_as_water", name: "Fluids", fluids: ['minecraft:water', 'minecraft:lava'] },
        { id: "kubejs:rei_groups/create_fluids", name: "Create Fluids", fluids: ['create:honey', 'create:chocolate', 'milk:still_milk', 'createaddition:bioethanol', 'createaddition:seed_oil', 'sliceanddice:fertilizer', 'create_enchantment_industry:ink'] },
        { id: "kubejs:rei_groups/travelers_fluids", name: "Travelers Backpack Fluids", fluids: ['travelersbackpack:potion_still', 'travelersbackpack:milk_still'] }
    ];

    for (const group of fluidGroups) {
        event.groupFluids(group.id, group.name, group.fluids);
    }

})

function getID(id) {
    if (id == 'splash_potion') {
        return "Splash Potions";
    } else if (id == 'lingering_potion') {
        return "Lingering Potions";
    } else if (id == 'potion') {
        return "Potions";
    } else if (id == 'enchanted_book') {
        return "Enchanted Books";
    } else if (id == 'tipped_arrow') {
        return "Tipped Arrows";
    } else if (id == 'supplementaries:bamboo_spikes_tipped') {
        return "Tipped Bamboo Spikes";
    } else if (id == 'goat_horn') {
        return "Goat Horn";
    }
    else if (id == 'patchouli:guide_book') {
        return "Guide Books";
    }
    else if (id == 'angling:roe') {
        return "Angling Roe Items";
    }
    return id;
};

