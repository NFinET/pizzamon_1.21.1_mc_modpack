// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')
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
})