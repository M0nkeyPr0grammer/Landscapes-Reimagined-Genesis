ServerEvents.recipes(event => {
    event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'}) // Removes Old Steel Blasting Recipe

        // Creates new Steel Ingot recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:iron_ingot',
                    nbt: {},
                    amount: 1
                },
                {
                    item: 'betterend:thallasium_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    item: 'ad_astra:steel_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/steel_ingot');

        // Creates Oil Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'createfoundry:molten_carbon',
                    amount: 8100
                },
                {
                    fluid: 'createaddition:bioethanol',
                    amount: 8100
                }
            ],
            results: [
                {
                    fluid: 'ad_astra:oil',
                    amount: 8100
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/oil');
})