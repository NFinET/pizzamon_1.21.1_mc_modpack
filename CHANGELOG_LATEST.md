# v2.3.0-release Modpack Update

## Mod Updates & Changes

- CobbledGacha updated v2.1.1 => 3.0.2
- CobblemonTrialsEdition updated v1.2.0 => v1.2.2
- CobblemonSpawnAlerts updated v1.11.5-beta => v1.13.2
- Embers Text API has been added as a new dependency of CobblemonSpawnAlerts v1.12+

## Config Changes

- CobbleDollars
  - Payday Game Corner Coins (a re-named item from CobbledGacha) can now be purchased and cashed out at default CobbleDollars merchants for 1,000 pokedollars when buying, and 800 when selling. These coins are used with the new custom Payday Slot Machine in CobbledGacha.
- CobblemonSpawnAlerts
  - Configs overhauled due to new version
  - Now allows calling out of ultra rare spawn buckets so the custom stuff for specific rare pokemon has been removed (including Unown, woops for not going to The End during testing)
  - (main.json) Alert all starters has been disabled due to Starters actually being a lot more common than originally anticipated. This change is clientside, and can be manually turned back on in the .json.
- Create 
  - (create-client.toml) Ambient volume cap of Create machines changed from 0.1 to 0.033 to make belts and certain cog-related blocks quieter overall
- Global Packs
  - Updated to add new Trials Edition custom data pack that injects new custom loot tables to Cobblemon Trials Edition loot tables

## Data & Resource Pack Changes

- Data Packs
  - Pizzamon_BCA_CobbleTowns1.1.3_CobbleDollars_v2 updated for parity with the new Game Corner Coins for CobbleDollars in the base config
  - Pizzamon_CobbledGacha_Data updated for CobbledGacha v3, with new loot tables and settings for balance reasons and to implement the new custom Payday Slot Machine
  - Pizzamon_TrialsEditionModule has been created and added as a workaround to modify and inject new loot into Cobblemon Trials Edition loot pools via KubeJS
- Resource Packs
  - Pizzamon_CobbledGacha_Resource updated for CobbledGacha v3, and now adds a completely custom modelled and textured Payday Slot Machine and accompanying capsules (All Payday Slot Machine models and textures made by NFinET_Owa, das me c:)

## Recipe Changes

- CobbledGacha's main machines are now available (their recipes are no longer negated)
- Two of CobbledGacha's coins have custom recipes to balance the availability of resources better for this modpack due to mods like BotanyPots and Pasture Loot
- Fine Silk from Silent Gear now has a crafting recipe due to it originally only dropping from Minecraft spiders
- To help with confusion, the chisels from Rechiseled and Chipped can both be swapped to the other variant by placing them in a crafting grid

## Scripting Changes (KubeJS)

- server_scripts/main.json
  - Wide variety of new custom item tags added to many items for ease of use with creating custom loot tables or convenient reference/grouping
- server_scripts/pizzamon_loot.json
  - New massive script adding tons of custom loot table definitions that are utilized or otherwise injected into other existing loot tables throughout the entire modpack to improve loot overall and better tie-in thematic mods where appropriate. Examples include:
    - "Cameraman", "Artist", "Gambler", and other trainer classes now drop appropriately themed items from other mods like Exposure, Joy of Painting, and CobbledGacha
    - "Pokemaniac" and "Pokefan" type trainer classes and similar adjacent classes now drop Fireworks Capsule items, PokeBlocks Pokedolls, and various cosmetic Pokemon items like certain hats and armors
    - Supplementaries cave urns now drop Tumblestones, with rare chances to drop Ancient Pokeballs, Type Gems, and Held Items
    - Cobblemon Raid Dens reward bags now have additional bonus rolls on custom loot pools to make them more rewarding
    - Several existing tables for Cobblemon Additions (BCA) town generation have had appropriate modded items added to their loot pools, such as ingots, ores, and foods from other mods
    - Many, many more; with more to come later
	