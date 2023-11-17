// Ad Astral Create and Create Foundry Compat Additions

// New Fluids
StartupEvents.registry('fluid', event => {
    event.create('kubejs:molten_calorite')
        .color(0xc41a39)
        .displayName('Calorite')
        .bucketColor(0xc41a39)
        .stillTexture('minecraft:block/lava_still')
        .flowingTexture('minecraft:block/lava_flow')
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here

    event.create('kubejs:molten_ostrum')
        .color(0x73515E)
        .displayName('Ostrum')
        .bucketColor(0x73515E)
        .stillTexture('minecraft:block/lava_still')
        .flowingTexture('minecraft:block/lava_flow')
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here

    event.create('kubejs:molten_desh')
        .color(0xec8742)
        .displayName('Desh')
        .bucketColor(0xec8742)
        .stillTexture('minecraft:block/lava_still')
        .flowingTexture('minecraft:block/lava_flow')
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here
});


// New Items
StartupEvents.registry('item', event => {
    event.create('crushed_desh_ore')
        .displayName('Crushed Desh Ore')
        .texture('kubejs:item/crushed_desh_ore');

    event.create('crushed_ostrum_ore')
        .displayName('Crushed Ostrum Ore')
        .texture('kubejs:item/crushed_ostrum_ore');

    event.create('crushed_calorite_ore')
        .displayName('Crushed Calorite Ore')
        .texture('kubejs:item/crushed_calorite_ore');
});
