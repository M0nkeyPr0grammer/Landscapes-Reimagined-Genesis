StartupEvents.registry('fluid',event => {
    event.create('kubejs:liquid_dragons_breath')
        .color(0xdb9bc3)
        .displayName('Liquid Dragons Breath')
        .bucketColor(0xdb9bc3)
        .thickTexture(0xdb9bc3)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here
});