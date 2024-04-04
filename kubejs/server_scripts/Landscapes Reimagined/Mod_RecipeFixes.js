// Mod Recipe Fixes
ServerEvents.recipes(event => {

    // Removes Broken Recipes
    event.remove({ id: 'supplementaries:integration/ash_bricks_fd' });
    event.remove({ id: 'supplementaries:integration/lapis_bricks_fd' });
    event.remove({ id: 'sliceanddice:sprinkler'});

    // Removes Missing Item Related Recipes
    event.remove({ id: 'create:cutting/stripped_cherry_log' });
    event.remove({ id: 'create:cutting/stripped_cherry_wood' });
    event.remove({ id: 'create:cutting/cherry_log' });
    event.remove({ id: 'create:cutting/cherry_wood' });
    event.remove({ id: 'create:pressing/plains_path' });
    event.remove({ id: 'create:pressing/forest_path' });
    event.remove({ id: 'create:filling/plain_grass_block' });
    event.remove({ id: 'create:filling/forest_grass_block' });
    event.remove({ id: 'create:milling/white_trilium' });
    event.remove({ id: 'create:milling/wilting_trilium' });
    event.remove({ id: 'createaddition:compat/ae2/charged_certus_quartz' });

    // Removes Failed Compatibility Related Recipes
    event.remove({ id: 'railways:sequenced_assembly/track_tieless_narrow'});

// Replaces Recipe for Narrow Tieless Tracks
    event.custom({
        type:'create:sequenced_assembly',
        ingredient: {
            item: 'railways:track_tieless'
        },
        loops: 1,
        results: [
            {
                item: 'railways:track_tieless_narrow'
            }
        ],
        sequence: [
            {
                type:'create:cutting',
                ingredients: [
                    {
                        item: 'railways:track_incomplete_tieless_narrow'
                    },
                ],
                results: [
                    {
                        item: 'railways:track_incomplete_tieless_narrow'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'railways:track_incomplete_tieless_narrow'
                    },
                    [                
                        {
                        tag: 'railways:internal/nuggets/iron_nuggets'
                        },
                        {
                        tag: 'railways:internal/nuggets/zinc_nuggets'
                        }
                    ]
                ],
                results: [
                    {
                        item: 'railways:track_incomplete_tieless_narrow'
                    }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'railways:track_incomplete_tieless_narrow'
                    }
                ],
                results: [
                    {
                        item: 'railways:track_incomplete_tieless_narrow'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'railways:track_incomplete_tieless_narrow'
        }
    });


    // Fixes Supplementaries Ash Bricks Cutting Recipe
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: 'supplementaries:ash_bricks'
            }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/pickaxes"
        },
        result: [
            {
                item: 'supplementaries:ash_brick',
                count: 4
            }
        ],
        sound: "minecraft:pickaxe_dig"
    }).id("kubejs:cutting/ash_bricks");

    // Fixes Supplementaries Lapis Bricks Cutting Recipe
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: 'supplementaries:lapis_bricks'
            }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/pickaxes"
        },
        result: [
            {
                item: 'minecraft:lapis_lazuli',
                count: 4
            }
        ],
        sound: "minecraft:pickaxe_dig"
    }).id("kubejs:cutting/lapis_bricks");

});
