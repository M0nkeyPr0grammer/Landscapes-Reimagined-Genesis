// Farmer's Knives Additions
ServerEvents.recipes(event => {

	// Creates Warden Knife
	event.smithing(
		Item.of('farmersknives:warden_knife', '{Damage:0}'),
		'deeperdarker:warden_upgrade_smithing_template',
		Item.of('farmersdelight:netherite_knife', '{Damage:0}'),
		'deeperdarker:reinforced_echo_shard',
	)

})
