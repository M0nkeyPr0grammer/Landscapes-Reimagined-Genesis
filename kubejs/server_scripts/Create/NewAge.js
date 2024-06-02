ServerEvents.recipes(event => { 

    event.remove ({ id: 'spelunkery:iron_from_magnetite'})
    event.remove ({ id: 'spelunkery:iron_from_magnetite_blasting'})

    event.smelting(
        'create_new_age:magnetite_block',
        'spelunkery:raw_magnetite_block'
    )
    event.blasting(
        'create_new_age:magnetite_block',
        'spelunkery:raw_magnetite_block'
    )
    event.smelting(
        'kubejs:magnetite',
        'spelunkery:raw_magnetite'
    )
    event.blasting(
        'kubejs:magnetite',
        'spelunkery:raw_magnetite'
    )
    event.shapeless(
        Item.of('create_new_age:magnetite_block'),
        [
            '9x kubejs:magnetite'
        ]
    )
})