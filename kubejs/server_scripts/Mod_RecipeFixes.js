// Mod Recipe Fixes
ServerEvents.recipes(event => {

    // Removes Broken Recipes
    event.remove({ id: 'supplementaries:integration/ash_bricks_fd' })
    event.remove({ id: 'supplementaries:integration/lapis_bricks_fd' })

    // Removes Missing Item Related Recipes
    event.remove({ id: 'create:cutting/stripped_cherry_log' })
    event.remove({ id: 'create:cutting/stripped_cherry_wood' })
    event.remove({ id: 'create:cutting/cherry_log' })
    event.remove({ id: 'create:cutting/cherry_wood' })
    event.remove({ id: 'create:pressing/plains_path' })
    event.remove({ id: 'create:pressing/forest_path' })
    event.remove({ id: 'create:filling/plain_grass_block' })
    event.remove({ id: 'create:filling/forest_grass_block' })
    event.remove({ id: 'create:milling/white_trilium' })
    event.remove({ id: 'create:milling/wilting_trilium' })
    event.remove({ id: 'createaddition:compat/ae2/charged_certus_quartz' })

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

})