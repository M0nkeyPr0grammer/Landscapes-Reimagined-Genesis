StartupEvents.registry('fluid',event => {
    event.create('kubejs:liquid_dragons_breath')
        .color(0xc34781)
        .displayName('Liquid Dragons Breath')
        .bucketColor(0xc34781)
        .thickTexture(0xc34781)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here

// Creates Molten Netherite Iron
    event.create('kubejs:molten_netherite_iron')
        .color(0x727272)
        .displayName('Molten Netherite Iron')
        .bucketColor(0x727272)
        .thickTexture(0x727272)
        .viscosity(6000) // Similar to Lava
        .temperature(1300) // Similar to Lava
        .bucketItem; // Specify the bucket item here

// Creates Molten Netherite Gold
    event.create('kubejs:molten_netherite_gold')
        .color(0xcd740b)
        .displayName('Netherite Gold')
        .bucketColor(0xcd740b)
        .thickTexture(0xcd740b)
        .viscosity(6000) // Similar to Lava
        .temperature(1300) // Similar to Lava
        .bucketItem; // Specify the bucket item here

// Creates Molten Netherite Emerald
    event.create('kubejs:molten_netherite_emerald')
        .color(0x007b18)
        .displayName('Molten Netherite Emerald')
        .bucketColor(0x007b18)
        .thickTexture(0x007b18)
        .viscosity(6000) // Similar to Lava
        .temperature(1300) // Similar to Lava
        .bucketItem; // Specify the bucket item here

// Creates Molten Netherite Diamond
    event.create('kubejs:molten_netherite_diamond')
        .color(0x1aaaa7)
        .displayName('Molten Netherite Diamond')
        .bucketColor(0x1aaaa7)
        .thickTexture(0x1aaaa7)
        .viscosity(6000) // Similar to Lava
        .temperature(1300) // Similar to Lava
        .bucketItem; // Specify the bucket item here
});