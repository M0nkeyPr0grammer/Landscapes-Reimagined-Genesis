// Create Foundry Tweaks
ServerEvents.recipes(event => {

    // Create Copper Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_copper',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:copper_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_copper');

    // Create Iron Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_iron',
                nbt: {},
                amount: 72900 
            }
        ],
        results: [
            {
                item: 'minecraft:iron_block', 
                amount: 1 
            }
        ]
    }).id('kubejs:compacting/molten_iron');

    // Create Gold Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_gold',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:gold_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_gold');

    // Create Coal Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_carbon',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:coal_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_carbon');

    // Create Diamond Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_diamond',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:diamond_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_diamond');

    // Create Zinc Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_zinc',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'create:zinc_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_zinc');

    // Create Brass Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_brass',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'create:brass_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_brass');

    // Create Emerald Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_emerald',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:emerald_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_emerald');

    // Create Redstone Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_redstone',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:redstone_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_redstone');

    // Create Lapis Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_lapis',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:lapis_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_lapis');

    // Create Ancient Debris Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_ancient_debris',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:ancient_debris',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_ancient_debris');

    // Create Netherite Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_netherite',
                nbt: {},
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:netherite_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_netherite');

})