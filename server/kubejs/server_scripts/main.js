// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// Item tag listener begin
ServerEvents.tags('item', event => {
	// Add all Every Compat block variant to the JEI/EMI hidden items list, this culls several THOUSAND entries from JEMI and makes it load faster!
	event.add('c:hidden_from_recipe_viewers', [
		'@everycomp',
		'@stonezone'
	])
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
	// Add a custom tag to all of the Pokeblocks Pokedolls, then remove that tag from the SHINY dolls, and give the shiny dolls their own tag instead. This was the easiest way since they both begin with Pokedoll.
	// These tags are later used by a custom datapack module for Apothic Enchanting, to give pokedolls Apothic Enchanting statistics. This is done twice so it gets added to both the item and block versions.
	event.add('c:pokedoll', [
		'/pokeblocks:pokedoll.*/',
		'/pokeblocks:gigantic_pokedoll.*/'
	])
	event.remove('c:pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
		'/pokeblocks:gigantic_pokedoll_shiny.*/'
	])
	event.add('c:shiny_pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
		'/pokeblocks:gigantic_pokedoll_shiny.*/'
	])
})
// Item tag listener ends
// Block tag listener begin
ServerEvents.tags('block', event => {
	// Add a custom tag to all of the Pokeblocks Pokedolls, then remove that tag from the SHINY dolls, and give the shiny dolls their own tag instead. This was the easiest way since they both begin with Pokedoll.
	// These tags are later used by a custom datapack module for Apothic Enchanting, to give pokedolls Apothic Enchanting statistics. This is done twice so it gets added to both the item and block versions.
	event.add('c:pokedoll', [
		'/pokeblocks:pokedoll.*/',
		'/pokeblocks:gigantic_pokedoll.*/'
	])
	event.remove('c:pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
		'/pokeblocks:gigantic_pokedoll_shiny.*/'
	])
	event.add('c:shiny_pokedoll', [
		'/pokeblocks:pokedoll_shiny.*/',
		'/pokeblocks:gigantic_pokedoll_shiny.*/'
	])
})
// Block tag listener ends