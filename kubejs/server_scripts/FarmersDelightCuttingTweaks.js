ServerEvents.recipes(event => {

    // Allows Modded logs to work with Farmer's Delight Cutting Board
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "regions_unexplored:maple_log"
            }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes"
        },
        result: [
            {
                item: "regions_unexplored:stripped_maple_log"
            },
            {
                item: "farmersdelight:tree_bark"
            }
        ],
        sound: "minecraft:item.axe.strip"
    }).id("kubejs:cutting/bark");

})