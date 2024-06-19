ServerEvents.recipes(event => {

    event.remove({id: 'createaddition:crafting/capacitor_1'}), //Removes Capacitor recipe
    event.remove({id: 'createaddition:crafting/capacitor_2'}), // same as before
    event.remove({id: 'createdeco:zinc_bars_overlay'}),
    event.remove({id: 'createdeco:zinc_mesh_fence'}),
    event.remove({id: 'createdeco:zinc_catwalk_forge'}),
    event.remove({id: 'createdeco:zinc_catwalk_railing_forge'}),
    event.remove({id: 'createdeco:zinc_support_wedge'}),
    event.remove({id: 'createdeco:zinc_hull'}),
    event.remove({id: 'createdeco:zinc_sheet_metal'}),
    event.remove({id: 'createdeco:yellow_zinc_lamp'}),   
    event.remove({id: 'createdeco:red_zinc_lamp'}),
    event.remove({id: 'createdeco:green_zinc_lamp'}),
    event.remove({id: 'createdeco:blue_zinc_lamp'}),

   // Create Recipe for the Zinc Catwalk Railing


   // Creates Recipe for the Green Zinc Lamp using Tags
   event.shaped('createdeco:green_zinc_lamp',
   [
       'A',
       'B',
       'C'
   ],
   {
       'A':'#c:zinc_nuggets',
       'B':'#c:glow_berries',
       'C':'#c:zinc_plates'
   }
);

   // Creates Recipe for the Red Zinc Lamp using Tags
   event.shaped('createdeco:red_zinc_lamp',
   [
       'A',
       'B',
       'C'
   ],
   {
       'A':'#c:zinc_nuggets',
       'B':'minecraft:redstone_torch',
       'C':'#c:zinc_plates'
   }
);

// Creates Recipe for the Blue Zinc Lamp using Tags
event.shaped('createdeco:blue_zinc_lamp',
[
    'A',
    'B',
    'C'
],
{
    'A':'#c:zinc_nuggets',
    'B':'minecraft:soul_torch',
    'C':'#c:zinc_plates'
}
);
// Creates Recipe for the Yellow Zinc Lamp using Tags
    event.shaped('createdeco:yellow_zinc_lamp',
    [
        'A',
        'B',
        'C'
    ],
    {
        'A':'#c:zinc_nuggets',
        'B':'minecraft:torch',
        'C':'#c:zinc_plates'
    }
);

// Creates Recipe for Zinc Sheet Metal Block using Tags
    event.shaped('4x createdeco:zinc_sheet_metal',
    [
        'AA',
        'AA'
    ],
    {
        'A': '#c:zinc_plates'
    }
);

// Creates recipe for Capacitors using tags instead of item
    event.shaped('createaddition:capacitor',
    [
        'A',
        'B',
        'C'
    ],
    {
        'A': '#c:copper_plates',
        'B': '#c:zinc_plates',
        'C': 'minecraft:redstone_torch'
    }
);



    })