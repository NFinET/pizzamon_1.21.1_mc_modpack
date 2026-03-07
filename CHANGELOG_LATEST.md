v2.3.0-release Mod Updates

- CobbledGacha updated v2.1.1 => 3.0.2
- CobblemonTrialsEdition updated v1.2.0 => v1.2.2


v2.3.0-release Config Changes

- CobbleDollars
  - Payday Game Corner Coins (a re-named item from CobbledGacha) can now be purchased and cashed out at default CobbleDollars merchants for 1,000 pokedollars when buying, and 800 when selling. These coins are used with the new custom Payday Slot Machine in CobbledGacha.


v2.3.0-release Data & Resource Pack Changes

- Data Packs
  - Pizzamon_BCA_CobbleTowns1.1.3_CobbleDollars_v2 updated for parity with the new Game Corner Coins for CobbleDollars in the base config
  - Pizzamon_CobbledGacha_Data updated for CobbledGacha v3, with new loot tables and settings for balance reasons and to implement the new custom Payday Slot Machine

- Resource Packs
  - Pizzamon_CobbledGacha_Resource updated for CobbledGacha v3, and now adds a completely custom modelled and textured Payday Slot Machine and accompanying capsules (All Payday Slot Machine models and textures made by NFinET_Owa)


v2.3.0-release Recipe Changes

- CobbledGacha's main machines are now available (their recipes are no longer negated)
- Two of CobbledGacha's coins have custom recipes to balance the availability of resources better for this modpack due to mods like BotanyPots and Pasture Loot


v2.3.0-release Scripting Changes (KubeJS)

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
  