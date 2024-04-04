ServerEvents.recipes(event => {
    // Removes Broken Recipes

    event.remove({ id: 'createdieselgenerators:crafting/engine_piston'});
    event.remove({ id: 'createdieselgenerators:mechanical_crafting/diesel_engine'});
    event.remove({ id: 'createdieselgenerators:mechanical_crafting/large_diesel_engine'});
    event.remove({ id: 'createdieselgenerators:mixing/biodiesel'});
    event.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable'});
    event.remove({ id: 'createdieselgenerators:compat/farmers_delight/basin_fermenting/fermentable'});
    event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})

    // Fixes Farmer's Delight Ethonal Fermenting Recipe
event.custom({
    type: "createdieselgenerators:basin_fermenting",
    ingredients: [
        {
            tag: 'createdieselgenerators:fd_fermentable'
        },
        {
            item: 'minecraft:bone_meal'
        }
    ],
    processingTime: 400,
    results: [
        {
            fluid: 'createdieselgenerators:ethanol',
            amount: 4050
        },
    ],
}).id('kubejs:fd_basin_fermenting/ethanol');

    // Fixes Ethonal Fermenting Recipe {Update Needed}
    event.custom({
        type: "createdieselgenerators:basin_fermenting",
        ingredients: [
            {
                tag: 'c:fermentable'
            },
            {
                item: 'minecraft:bone_meal'
            }
        ],
        processingTime: 400,
        results: [
            {
                fluid: 'createdieselgenerators:ethanol',
                amount: 4050
            },
        ],
    }).id('kubejs:basin_fermenting/ethanol');

    // Fixes Create Biodiesel Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createaddition:seed_oil',
                amount: 8100
            },
            {
                fluid: 'createdieselgenerators:ethanol',
                amount: 8100

            }
        ],
        results: [
            {
                fluid: 'createdieselgenerators:biodiesel',
                amount: 16200
            },
        ],
        heatRequirement: "heated"
    }).id('kubejs:mixing/biodiesel');
    
        // Fixes Create Diesel Engine Recipe
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'ABA',
            'ACA',
            ' D ',
            'EFE'
        ],
        key: {
            A: Ingredient.of('createdieselgenerators:engine_piston').toJson(),
            B: Ingredient.of('minecraft:flint_and_steel').toJson(),
            C: Ingredient.of('create:brass_block').toJson(),
            D: Ingredient.of('create:fluid_tank').toJson(),
            E: Ingredient.of('create:sturdy_sheet').toJson(),
            F: Ingredient.of('create:fluid_pipe').toJson()
        },
        result: Ingredient.of('createdieselgenerators:diesel_engine').toJson(),
        acceptMirrored: false
    }).id('kubejs:create/diesel_engine');

    // Fixes Create Modular Diesel Engine Recipe
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'ABA',
            ' C ',
            'DED'
        ],
        key: {
            A: Ingredient.of('create:andesite_alloy').toJson(),
            B: Ingredient.of('minecraft:flint_and_steel').toJson(),
            C: Ingredient.of('createdieselgenerators:diesel_engine').toJson(),
            D: Ingredient.of('create:sturdy_sheet').toJson(),
            E: Ingredient.of('create:precision_mechanism').toJson()
        },
        result: Ingredient.of('createdieselgenerators:large_diesel_engine').toJson(),
        acceptMirrored: false
    }).id('kubejs:create/modular_diesel_engine');
    
    // Fixes Create Diesel Engine Piston Recipe  Update Needed:
    event.shaped(
        Item.of('createdieselgenerators:engine_piston', 2),
        [
            'A ',
            ' B'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:shaft'
        }
    );
    
    // Fixes Slice and Dice Sprinkler Recipe
    event.shaped(
        Item.of('sliceanddice:sprinkler', 3),
        [
            ' A',
            ' B'
        ],
        {
            A: 'create:fluid_pipe',
            B: 'minecraft:iron_bars'
        }
    );


    

})