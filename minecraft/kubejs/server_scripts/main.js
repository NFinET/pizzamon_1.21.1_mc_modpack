// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// Item tag listener begin
ServerEvents.tags('item', event => {
	// Add all Every Compat block variant to the JEI/EMI hidden items list, this culls several THOUSAND entries from JEMI and makes it load faster!
	/* 
	event.add('c:hidden_from_recipe_viewers', [
		'@everycomp',
		'@stonezone'
	]) 
	*/
	// Hide all the Neptunium items from Aquaculture from JEI/EMI
	event.add('c:hidden_from_recipe_viewers', [
		'/aquaculture:neptun.*/',
		'aquaculturedelight:neptunium_knife'
	])
	// Add the "dough" tag to a bunch of doughs from different mods. This allows later using craft tweaker to use that tag to modify the Create slimeball recipe that uses dough to use any of them.
	event.add('c:dough', [
		'refurbished_furniture:dough',
		'farmersdelight:wheat_dough',
		'mynethersdelight:ghast_dough',
		'veggiesdelight:sweet_potato_dough',
		'culturaldelights:corn_dough',
		'createfood:butter_dough',
		'createfood:salt_dough',
		'createfood:sugar_dough',
		'create:dough'
	])
	// Adds a tag to reference all Fireworks Capsule stickers for making loot tables with LootJS
	event.add('c:capsule_stickers', [
		'/fireworkcapsules:.*_sticker/'
	])
	// Add a custom tag to all of the Pokeblocks Pokedolls, then remove that tag from the SHINY dolls, and give the shiny dolls their own tag instead. This was the easiest way since they both begin with Pokedoll.
	// These tags are later used by a custom datapack module for Apothic Enchanting, to give pokedolls Apothic Enchanting statistics, and to make additional loot tables. This is done twice so it gets added to both the item and block versions.
	event.add('c:pokedoll', [
		'/pokeblocks:pokedoll.*/',
	])
	event.add('c:gigantic_pokedoll', [
		'/pokeblocks:gigantic_pokedoll.*/'
	])
	event.remove('c:pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
	])
	event.remove('c:gigantic_pokedoll', [
		'/pokeblocks:gigantic_pokedoll_shiny.*/',
	])
	event.add('c:shiny_pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
	])
	event.add('c:gigantic_shiny_pokedoll', [
		'/pokeblocks:gigantic_pokedoll_shiny.*/'
	])
	// Add tags to groups of foods from Cobblecuisine for LootJS purposes
	event.add('pizzamon:cuisine/low_shakes', ['/cobblecuisine:low_.*_shake/'])
	event.add('pizzamon:cuisine/medium_shakes', ['/cobblecuisine:medium_.*_shake/'])
	event.add('pizzamon:cuisine/high_shakes', ['/cobblecuisine:high_.*_shake/'])
	event.add('pizzamon:cuisine/ev_shakes', ['#pizzamon:cuisine/low_shakes', '#pizzamon:cuisine/medium_shakes', '#pizzamon:cuisine/high_shakes'])
	event.add('pizzamon:cuisine/deluxe_shakes', ['/cobblecuisine:deluxe_.*_shake/'])
	event.add('pizzamon:cuisine/nature_salads', ['/cobblecuisine:.*_salad/'])
	event.add('pizzamon:cuisine/tera_sandwiches', ['/cobblecuisine:.*_sandwich/'])
	event.add('pizzamon:cuisine/pokepuffs', ['/cobblecuisine:.*_pokepuff/'])
	event.add('pizzamon:cuisine/egg_group_cakes', ['/cobblecuisine:.*_cake/'])
	event.add('pizzamon:cuisine/malasada', ['/cobblecuisine:.*_malasada/'])
	event.add('pizzamon:cuisine/type_curries', ['/cobblecuisine:.*_curry/'])
	event.add('pizzamon:cuisine/roasted_berries', ['/cobblecuisine:roasted_.*_berry/'])
	event.add('pizzamon:cuisine/size_desserts', ['cobblecuisine:fruity_flan', 'cobblecuisine:eclair'])
	event.add('pizzamon:cuisine/friendship_up', ['#cobblecuisine:beans', '#pizzamon:cuisine/malasada', '#pizzamon:cuisine/pokepuffs'])
	event.add('pizzamon:cuisine/iv_power_drinks', ['cobblecuisine:miltank_mix_au_lait', 'cobblecuisine:protein_smoothie', 'cobblecuisine:coffee',
	'cobblecuisine:fruit_punch', 'cobblecuisine:lilligant_floral_tea', 'cobblecuisine:lemon_soda',])
	event.add('pizzamon:cuisine/special', ['/cobblecuisine:candied_.*_berry/', 'cobblecuisine:dubious_food', 'cobblecuisine:ceviche', '#pizzamon:cuisine/deluxe_shakes'])
	event.add('pizzamon:cuisine/spawn_power_foods', [
		'#pizzamon:cuisine/nature_salads',
		'#pizzamon:cuisine/tera_sandwiches',
		'#pizzamon:cuisine/egg_group_cakes',
		'#pizzamon:cuisine/type_curries',
		'#pizzamon:cuisine/iv_power_drinks'
	])
	// Add tags to items related to locating or spawning legendaries and their structures
	event.add('pizzamon:legendary/urns', [
		'/legendarymonuments:.*urn_of_.*/'
	])
	event.remove('pizzamon:legendary/urns', [
		'/legendarymonuments:.*urn_of_.*_block/'
	])
	event.add('pizzamon:legendary/item_summon', [
		'#pizzamon:legendary/urns',
		'/legendarymonuments:.*_whistle/',
		'/legendarymonuments:proof_of_.*/',
		'mega_showdown:likos_pendant',
		'mega_showdown:zygarde_cube',
		'legendarymonuments:meltan_box',
		'legendarymonuments:cosmic_bag',
		'legendarymonuments:curry_of_justice'
	])
	event.add('pizzamon:legendary/locate', [
		'/legendarymonuments:.*_seal/',
		'legendarymonuments:clear_bell'
	])
	event.add('pizzamon:legendary/component', [
		'/legendarymonuments:regi.*_tablet/',
		'/legendarymonuments:special_.*s/',
		'/legendarymonuments:.*_globe/',
		'legendarymonuments:arctic_stone',
		'legendarymonuments:zap_stone',
		'legendarymonuments:molten_stone',
		'legendarymonuments:poketreat_box',
		'legendarymonuments:dyna_apple',
		'legendarymonuments:celestica_flute',
		'legendarymonuments:red_feather',
		'legendarymonuments:blue_feather',
		'legendarymonuments:yellow_feather',
		'legendarymonuments:mesprit_plume',
		'legendarymonuments:azelf_fang',
		'legendarymonuments:uxie_claw'
	])
	event.add('pizzamon:legendary/structure_summon', [
		'/mega_showdown:rusted_.*/',
		'/legendarymonuments:.*_treat/',
		'/legendarymonuments:.*_golem_key/',
		'mega_showdown:prison_bottle',
		'mega_showdown:griseous_orb',
		'legendarymonuments:vortex_stone',
		'legendarymonuments:magma_stone',
		'legendarymonuments:lightstone',
		'legendarymonuments:darkstone',
		'legendarymonuments:rainbow_feather',
		'legendarymonuments:red_chain',
		'legendarymonuments:gs_ball',
		'legendarymonuments:old_sea_map',
		'legendarymonuments:liberty_pass',
		'legendarymonuments:idealsbottle',
		'legendarymonuments:truthbottle'
	])
	event.add('pizzamon:legendary/form_change', [
		'/mega_showdown:rusted_.*/',
		'/mega_showdown:.*_mask/',
		'mega_showdown:rotom_catalogue',
		'mega_showdown:prison_bottle',
		'mega_showdown:griseous_orb',
		'mega_showdown:red_orb',
		'mega_showdown:blue_orb',
		'mega_showdown:adamant_crystal',
		'mega_showdown:lustrous_globe',
		'mega_showdown:star_core',
		'mega_showdown:reveal_glass',
		'mega_showdown:deoxys_meteorite'
	])
	event.add('pizzamon:legendary/memories', [
		'/mega_showdown:.*_memory/'
	])
	event.add('pizzamon:legendary/drives', [
		'/mega_showdown:.*_drive/'
	])
	event.add('pizzamon:legendary/type_change', [
		'#mega_showdown:plates',
		'#pizzamon:legendary/memories',
		'#pizzamon:legendary/drives'
	])
	event.add('pizzamon:legendary/misc', [
		'#pizzamon:legendary/locate',
		'#pizzamon:legendary/form_change',
		'#pizzamon:legendary/type_change',
		'#pizzamon:legendary/fusion',
		'#pizzamon:legendary/component'		
	])
	event.add('pizzamon:legendary/fusion', [
		'/mega_showdown:n_.*rizer/',
		'mega_showdown:dna_splicer',
		'mega_showdown:reins_of_unity'
	])
	event.add('pizzamon:legendary/summon', [
		'#pizzamon:legendary/item_summon',
		'#pizzamon:legendary/structure_summon'
	])
	// Add tag to group all megastones
	event.add('pizzamon:mega_stones', [
		'#mega_showdown:mega_stone',
		'/zamega:.*ite/',
		'/zamega:.*itex/',
		'/zamega:.*itey/',
		'/zamega:.*itez/'
	])
	// Add tag to group all Z-crystals into two groups, Type and Species
	event.add('pizzamon:z_crystal/species', [
		'/mega_showdown:.*_z$/',
	])
	event.add('pizzamon:z_crystal/type', [
		'mega_showdown:normalium_z', 'mega_showdown:buginium_z', 'mega_showdown:darkinium_z', 'mega_showdown:dragonium_z', 'mega_showdown:electrium_z', 'mega_showdown:fairium_z', 
		'mega_showdown:fightinium_z', 'mega_showdown:firium_z', 'mega_showdown:flyinium_z', 'mega_showdown:ghostium_z', 'mega_showdown:grassium_z', 'mega_showdown:groundium_z', 
		'mega_showdown:icium_z', 'mega_showdown:poisonium_z', 'mega_showdown:psychium_z', 'mega_showdown:rockium_z', 'mega_showdown:steelium_z', 'mega_showdown:waterium_z'
	])
	event.remove('pizzamon:z_crystal/species', [
		'mega_showdown:normalium_z', 'mega_showdown:buginium_z', 'mega_showdown:darkinium_z', 'mega_showdown:dragonium_z', 'mega_showdown:electrium_z', 'mega_showdown:fairium_z', 
		'mega_showdown:fightinium_z', 'mega_showdown:firium_z', 'mega_showdown:flyinium_z', 'mega_showdown:ghostium_z', 'mega_showdown:grassium_z', 'mega_showdown:groundium_z', 
		'mega_showdown:icium_z', 'mega_showdown:poisonium_z', 'mega_showdown:psychium_z', 'mega_showdown:rockium_z', 'mega_showdown:steelium_z', 'mega_showdown:waterium_z',
		'mega_showdown:blank_z'
	])

	// Add tags to nightlights
	event.add('nightlights:octopus', [
		'/nightlights:octopus.*/',
	])
	event.add('nightlights:mushroom', [
		'/nightlights:mushroom.*/',
	])
	event.add('nightlights:frog', [
		'/nightlights:frog.*/',
	])

	// Add tags to Deco Decals
	event.add('pizzamon:decals', [
		'/createdeco:decal_.*/',
	])

	// Add tags to Furnies statue because default tag is broken?
	event.add('pizzamon:statues', [
		'/cobblefurnies:statue_.*/',
	])

	// Add tags to Apothic "type" tomes
	event.add('pizzamon:type_tomes', [
		'/apothic_enchanting:.*tome/',
	])
	event.remove('pizzamon:type_tomes', [
		'apothic_enchanting:scrap_tome', 'apothic_enchanting:improved_scrap_tome', 'apothic_enchanting:extraction_tome'
	])

	// Add tags to Plush-O-Matic yarns
	event.add('pizzamon:plush_yarns', [
		'/cobbledgacha:.*yarn/',
	])


})
// Item tag listener ends


// Block tag listener begin
ServerEvents.tags('block', event => {
	// Add a custom tag to all of the Pokeblocks Pokedolls, then remove that tag from the SHINY dolls, and give the shiny dolls their own tag instead. This was the easiest way since they both begin with Pokedoll.
	// These tags are later used by a custom datapack module for Apothic Enchanting, to give pokedolls Apothic Enchanting statistics, and to make additional loot tables. This is done twice so it gets added to both the item and block versions.
	event.add('c:pokedoll', [
		'/pokeblocks:pokedoll.*/',
	])
	event.add('c:gigantic_pokedoll', [
		'/pokeblocks:gigantic_pokedoll.*/'
	])
	event.remove('c:pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
	])
	event.remove('c:gigantic_pokedoll', [
		'/pokeblocks:gigantic_pokedoll_shiny.*/',
	])
	event.add('c:shiny_pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
	])
	event.add('c:gigantic_shiny_pokedoll', [
		'/pokeblocks:gigantic_pokedoll_shiny.*/'
	])
})
// Block tag listener ends


// Biome tagging, fixes some Cobblemon tags not being added to appropriate Biomes We've Gone biomes + done as a sanity check just in case, no harm if it does nothing
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_flower_forest", [
		'#c:is_flower_forest',
		'biomeswevesgone:sakura_grove'
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_spooky", [
		'#c:is_spooky',
		'biomeswevegone:ebony_woods',
		'biomeswevegone:weeping_witch_forest',
		'biomeswevegone:pale_bog',
		'biomeswevegone:overgrowth_woodlands'
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_shrubland", [
		'#c:is_shrubland',
		'/.*:.*shrubland.*/'
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_magical", [
		'#c:is_magical',
		'biomeswevegone:weeping_witch_forest',
		'biomeswevegone:skyris_vale',
		'biomeswevegone:overgrowth_woodlands',
		'biomeswevegone:pale_bog',
		"biomeswevegone:rainbow_beach"
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_cherry_blossom", [
		'#c:is_cherry_blossom',
		'biomeswevesgone:sakura_grove'
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_floral", [
		'#c:is_floral',
		'biomeswevegone:rose_fields'
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_badlands", [
		'#c:is_badlands',
		'/biomeswevegone:.*badlands.*/'
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_forest", [
		'#c:is_forest'
	])
})
ServerEvents.tags('worldgen/biome', event => {
	event.add("cobblemon:is_lush", [
		'#c:is_lush',
		'biomeswevegone:lush_stacks'
	])
})