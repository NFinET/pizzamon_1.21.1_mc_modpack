v2.2.2-release Config Changes

- Chat Plus
  - The intended Alerts tab should now properly be shipped with the default configs; any message that mentions the player's username will be caught here and show a notification badge; these messages will still tip over into other tabs.
  - The Alerts tab uses pattern matching regex of " .*(?<!<)(?i:%PLAYER%)(?!>| has made).* " where "%PLAYER%" is a placeholder dynamically replaced with the player's username. This pattern matches any message naming the player regardless of upper/lowercase while excluding their OWN messgaes and any Advancement messages broadcast to chat.
  - The input box will no longer save typed but not sent messages, this was intended for convenience, but muscle memory makes it bad

- Cobblemon Spawn Alerts
  - cobblemon-spawn-alerts/pokemon.json
    - Defaulted pokemon (non-categoried non-labeled pokemon) will no longer produce Hidden Ability alerts, since in the Cobblemon mod many pokemon have no Hidden Ability and (presumably) due to data validation concerns their normal ability is duplicated as their hidden ability.
	- Fixed a spacing error with the Hidden Ability note for the starter pokemon line group
  - cobblemon-spawn-alerts/message_templates.json
    - Fixed a spacing issue with the Coordinate display in hovered data from alerts
	- Fixed a formatting issue with Hidden Ability displaying due to incorrectly assuming it inherited the Ability message formatting
  - cobblemon-spawn-alerts/server.json
    - Disabled enable spawn command alerts (left toggled during testing by mistake) which may have caused some spawns to get missed under special circumstances
	
	
v2.2.2-release Miscellaneous Changes

- Restored a hidden folder in configs that was mistakenly deleted causing the Mojang Studios logo to get replaced with garbled UI atlas textures or not appear when launching the game
- Exported and added two files to the Github related to Silent's Gear for the material statistics and traits. Not all of these materials and traits are actually available in this pack. Edited versions may be available at a later time.