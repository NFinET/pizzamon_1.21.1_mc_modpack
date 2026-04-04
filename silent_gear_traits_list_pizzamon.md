# Traits

Generated in-game by `sgear_traits dump_md` command on 2026/04/04 15:55:34

This data may or may not be accurate depending on the mod pack you are playing and the mods or data packs installed.

## Data Sources

The following mods and data packs have added traits to the output. Running the dump command yourself may produce different results.

- Silent Gear (silentgear) 4.1.3

## Trait Effects

Traits can be assigned any number of effects. Each effect type has its own codec (JSON structure) and associated code that causes the trait it is assigned to to do specific things. Mods could potentially add new effect types. This is a list of all effect types registered in this modded instance:
- `silentgear:attach_data_components` - Applies a custom data component patch to gear items
- `silentgear:attribute` - Gives the gear item additional attribute modifiers
- `silentgear:block_filler` - Allows tools to replace specific blocks with another block
- `silentgear:block_mining_speed` - Changes mining speed on blocks in a given tag
- `silentgear:block_placer` - Allows tools to create and place a specific block with a durability cost
- `silentgear:bonus_drops` - Multiplies drops for given items
- `silentgear:cancel_effects` - Cancels certain effects applied to the player
- `silentgear:durability` - Adds a chance of either canceling durability loss or losing extra durability
- `silentgear:extra_damage` - Deals extra damage when attacking certain types of mobs
- `silentgear:fireproof` - Prevents items from being destroyed when dropped in fire or lava
- `silentgear:item_magnet` - Attracts certain items to the player
- `silentgear:negate_damage` - Armor reduces damage taken from certain sources
- `silentgear:number_property_modifier` - Applies modifiers to numerical properties based as durability lost
- `silentgear:self_repair` - Items randomly repair themselves over time
- `silentgear:synergy_multiplier` - Increases synergy on crafted parts
- `silentgear:target_effect` - Applies potion effects to an attacked entity
- `silentgear:wielder_effect` - Applies potion effects to the entity equipped with the item
- `silentgear:wind_blast` - Creates an explosion similar to a wind charge on attack

## List of Traits
### [Accelerate](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/accelerate.json)
- Gains harvest speed, attack speed, and ranged speed as damaged
- Found On:
  - Materials: **Azure Electrum** _(Main, Tool Rod)_, **Fine Silk Cloth** _(Grip)_
- Conditions: (Only on Tools)
- ID: `silentgear:accelerate`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Attack Speed: 0.01 * level * damage
    - Draw Speed: 0.01 * level * damage
    - Harvest Speed: 2.0 * level * damage

### [Adamant](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/adamant.json)
- Armor increases damage resistance, tools deal more damage to mobs with a base health of more than 10 hearts
- Found On:
  - Materials: **Nickel** _(Main)_, **Barrier** _(Main)_, **Invar** _(Main)_
- ID: `silentgear:adamant`
- Max Level: 5
- Effects:
  - `silentgear:wielder_effect`
    - Armor
      - Resistance: [1, 1, 1, 2] (by armor piece count)
  - `silentgear:extra_damage`

### [Ancient](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/ancient.json)
- Increases XP dropped by blocks and mobs
- Found On:
  - Materials: **Dimerald** _(Tool Rod)_, **Stone** _(Main)_, **End Stone** _(Main, Tool Rod)_, **Phantom Membrane** _(Grip)_
- Conditions: (Only on Tools)
- ID: `silentgear:ancient`
- Max Level: 5

### [Aquatic](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/aquatic.json)
- Full set of armor gives water breathing, deals more damage to aquatic mobs
- Found On:
  - Materials: **Lead** _(Main)_, **Prismarine** _(Coating)_
- ID: `silentgear:aquatic`
- Max Level: 5
- Effects:
  - `silentgear:wielder_effect`
    - Armor
      - Water Breathing: [1] (requires full set of armor)
  - `silentgear:extra_damage`

### [Bastion](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/bastion.json)
- Provides bonus armor
- Found On:
  - Materials: **Diamond** _(Jewelry Setting)_
- Conditions: ((Only on Armor OR Only on Curio))
- ID: `silentgear:bastion`
- Max Level: 5
- Effects:
  - `silentgear:attribute`
    - Key[gearType=All Gear Types, group=ANY]
      - minecraft:generic.armor: ADD_VALUE [1.0, 2.0, 3.0, 4.0, 5.0]

### [Bending](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/bending.json)
- Gear sometimes takes extra damage
- Found On:
  - Materials: **Gold** _(Tool Rod)_, **Netherrack** _(Tool Rod)_, **Rough Wood** _(Tool Rod)_, **Copper** _(Tool Rod)_, **Azure Silver** _(Tool Rod)_
- ID: `silentgear:bending`
- Max Level: 5
- Effects:
  - `silentgear:durability`
    - 1 damage with a 7% chance per level

### [Bounce](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/bounce.json)
- Boots negate fall damage, armor knocks back attackers
- Found On:
  - Materials: **Slime** _(Lining)_
- Conditions: (Only on Armor)
- ID: `silentgear:bounce`
- Max Level: 1
- Effects:
  - `silentgear:negate_damage`
    - Reduces "silentgear:bounce_protects" type damage by 20% per level per armor piece

### [Brilliant](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/brilliant.json)
- Shiny! Piglin like.
- Found On:
  - Materials: **Gold** _(Main, Coating)_, **Blaze Gold** _(Main, Coating)_
- ID: `silentgear:brilliant`
- Max Level: 1

### [Brittle](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/brittle.json)
- Gear sometimes takes extra damage
- Found On:
  - Materials: **Sandstone** _(Tool Rod)_, **Quartz** _(Tool Rod)_, **Dimerald** _(Main, Tool Rod)_, **Basalt** _(Main, Tool Rod)_, **Blackstone** _(Main, Tool Rod)_, **Obsidian** _(Tool Rod)_, **Stone** _(Tool Rod)_, **Diamond** _(Main, Tool Rod, Tip Upgrade)_, **Terracotta** _(Main, Tool Rod)_, **Flint** _(Tool Rod)_, **Emerald** _(Main, Tool Rod, Tip Upgrade)_
- ID: `silentgear:brittle`
- Max Level: 5
- Effects:
  - `silentgear:durability`
    - 1 damage with a 10% chance per level

### [Bulky](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/bulky.json)
- TODO, not tested
- Found On:
  - Materials: Nothing
- Conditions: (Only on Tools)
- ID: `silentgear:bulky`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Attack Speed: -0.075 * level * damage

### [Chilled](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/chilled.json)
- Deals more damage to Nether and fire-immune mobs
- Found On:
  - Materials: Nothing
- Conditions: (Only on Weapon)
- ID: `silentgear:chilled`
- Max Level: 5
- Effects:
  - `silentgear:extra_damage`

### [Chipping](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/chipping.json)
- Reduces armor or increases harvest speed as gear is damaged
- Found On:
  - Materials: **Quartz** _(Tip Upgrade)_, **Basalt** _(Main, Tool Rod)_, **Obsidian** _(Tool Rod)_, **Terracotta** _(Main)_, **Bone** _(Main)_
- ID: `silentgear:chipping`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Armor: -0.075 * level * damage * value
    - Harvest Speed: 0.25 * level * damage * value

### [Confetti!](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/confetti.json)
- I like big boom boom
- Found On:
  - Materials: Nothing
- Conditions: (Only on Weapon)
- ID: `silentgear:confetti`
- Max Level: 5

### [Crackler](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/crackler.json)
- Creates and places basalt at the cost of durability
- Found On:
  - Materials: Nothing
- Conditions: (Only on Tools)
- ID: `silentgear:crackler`
- Max Level: 1
- Effects:
  - `silentgear:block_placer`
    - Places: minecraft:basalt
    - Durability Cost: 3

### [Crude](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/crude.json)
- Reduces synergy
- Found On:
  - Materials: **Rough Wood** _(Tool Rod)_
- ID: `silentgear:crude`
- Max Level: 5
- Effects:
  - `silentgear:synergy_multiplier`
    - Please read [this page](https://github.com/SilentChaos512/Silent-Gear/wiki/Synergy) for more information on synergy
    - -0.04 synergy per level if greater than 0%

### [Crushing](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/crushing.json)
- Increases armor or decreases attack damage as gear is damaged
- Found On:
  - Materials: **Quartz** _(Main)_, **Obsidian** _(Main)_, **Stone** _(Tool Rod)_, **Terracotta** _(Tool Rod)_
- ID: `silentgear:crushing`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Attack Damage: -0.1667 * level * damage * value
    - Armor: 0.05 * level * damage * value

### [Cure Poison](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/cure_poison.json)
- Removes poison effect when equipped
- Found On:
  - Materials: Nothing
- ID: `silentgear:cure_poison`
- Max Level: 1
- Effects:
  - `silentgear:cancel_effects`
    - Cancels these effects: `minecraft:poison`

### [Cure Wither](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/cure_wither.json)
- Removes wither effect when equipped
- Found On:
  - Materials: Nothing
- ID: `silentgear:cure_wither`
- Max Level: 1
- Effects:
  - `silentgear:cancel_effects`
    - Cancels these effects: `minecraft:wither`

### [Cursed](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/cursed.json)
- Reduces luck, how unfortunate
- Found On:
  - Materials: **Amethyst** _(Jewelry Setting)_
- ID: `silentgear:cursed`
- Max Level: 7
- Effects:
  - `silentgear:attribute`
    - Key[gearType=All Gear Types, group=ANY]
      - minecraft:generic.luck: ADD_VALUE [-0.5, -1.0, -1.5, -2.0, -3.0, -4.0, -5.0]
- Extra Info:
  - Please see the extra info on the Lucky trait and this wiki page: https://minecraft.gamepedia.com/Luck

### [Eroded](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/eroded.json)
- Increases harvest speed and reduces attack damage as gear is damaged
- Found On:
  - Materials: **Crushed Shulker Shell** _(Main)_, **Netherrack** _(Main, Tool Rod)_, **Redstone Alloy** _(Main)_
- Conditions: (Only on Tools)
- ID: `silentgear:eroded`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Attack Damage: -0.15 * level * damage * value
    - Harvest Speed: 0.15 * level * damage * value

### [Fiery](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/fiery.json)
- Not implemented
- Found On:
  - Materials: **Crimson Iron** _(Tip Upgrade)_, **Blaze Gold** _(Tip Upgrade)_
- ID: `silentgear:fiery`
- Max Level: 2

### [Fireproof](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/fireproof.json)
- Cannot be destroyed when dropped in fire or lava
- Found On:
  - Materials: **Netherite** _(Coating)_
- ID: `silentgear:fireproof`
- Max Level: 1
- Effects:
  - `silentgear:fireproof`
    - The item cannot be destroyed by fire or lava
- Extra Info:
  - The item cannot be destroyed by fire or lava

### [Flame Ward](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/flame_ward.json)
- Gives fire resistance on armor (full set only)
- Found On:
  - Materials: **Crimson Steel** _(Main)_
- ID: `silentgear:flame_ward`
- Max Level: 1
- Effects:
  - `silentgear:fireproof`
    - The item cannot be destroyed by fire or lava
  - `silentgear:wielder_effect`
    - Armor
      - Fire Resistance: [1] (requires full set of armor)
- Extra Info:
  - The item cannot be destroyed by fire or lava

### [Flammable](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/flammable.json)
- Takes damage when on fire and can be used as fuel
- Found On:
  - Materials: **Bamboo** _(Main)_, **Paper** _(Main)_, **Wood** _(Main)_, **Leaves** _(Main)_
- ID: `silentgear:flammable`
- Max Level: 1

### [Flexible](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/flexible.json)
- Gear occasionally takes less damage
- Found On:
  - Materials: **Bamboo** _(Main, Tool Rod)_, **String** _(Binding)_, **Fluffy String** _(Binding)_, **Leather** _(Grip, Lining)_, **Azure Electrum** _(Tool Rod)_, **Blaze Rod** _(Tool Rod)_, **Wood** _(Tool Rod)_, **Wool** _(Grip, Lining)_, **Titanium** _(Tool Rod)_, **Crimson Iron** _(Tool Rod)_, **Fine Silk** _(Cord, Binding)_, **Netherrack** _(Main)_, **Sinew** _(Cord, Binding)_, **Fine Silk Cloth** _(Lining)_, **Bone** _(Tool Rod)_, **Iron** _(Tool Rod)_, **Crimson Steel** _(Tool Rod)_, **Bronze** _(Tool Rod)_, **Signalum** _(Main, Tool Rod)_, **Breeze Rod** _(Tool Rod)_, **Blaze Gold** _(Tool Rod)_, **Phantom Membrane** _(Lining)_, **Flax** _(Binding)_, **End Rod** _(Tool Rod)_
- ID: `silentgear:flexible`
- Max Level: 5
- Effects:
  - `silentgear:durability`
    - -1 damage with a 7% chance per level

### [Floatstoner](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/floatstoner.json)
- Creates and places end stone at the cost of durability
- Found On:
  - Materials: Nothing
- Conditions: (Only on Tools)
- ID: `silentgear:floatstoner`
- Max Level: 1
- Effects:
  - `silentgear:block_placer`
    - Places: minecraft:end_stone
    - Durability Cost: 3

### [Fortunate](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/fortunate.json)
- Blocks mined drop extra items like with Fortune (does not stack with enchantments)
- Found On:
  - Materials: **Azure Silver** _(Tip Upgrade)_
- ID: `silentgear:fortunate`
- Max Level: 3

### [Gold Digger](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/gold_digger.json)
- Sometimes increases nugget drops when mining
- Found On:
  - Materials: **Dimerald** _(Main)_, **Tyrian Steel** _(Tip Upgrade)_
- Conditions: (Only on Harvest Tools)
- ID: `silentgear:gold_digger`
- Max Level: 5
- Effects:
  - `silentgear:bonus_drops`
    - 15% chance per level of dropping 50% more of some items

### [Greedy](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/greedy.json)
- Increases the mining speed for ores
- Found On:
  - Materials: **Blaze Gold** _(Main)_
- ID: `silentgear:greedy`
- Max Level: 5
- Effects:
  - `silentgear:block_mining_speed`
  - `silentgear:item_magnet`
  Attracts some items towards the player

### [Hard](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/hard.json)
- Increases harvest speed or decreases ranged damage as item is damaged
- Found On:
  - Materials: **Blackstone** _(Main, Tool Rod)_, **Titanium** _(Main, Tool Rod)_, **Crimson Iron** _(Main)_, **Compressed Iron** _(Main)_, **Refined Obsidian** _(Main, Tool Rod)_, **Crimson Steel** _(Main)_
- Conditions: (Only on Tools)
- ID: `silentgear:hard`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Ranged Damage: -0.1 * level * damage * value
    - Harvest Speed: 0.05 * level * damage * value

### [Heat-Resistant](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/heat_resistant.json)
- Reduces fire damage
- Found On:
  - Materials: **Crimson Iron** _(Main)_
- Conditions: (Only on Armor)
- ID: `silentgear:heat_resistant`
- Max Level: 5
- Effects:
  - `silentgear:fireproof`
    - The item cannot be destroyed by fire or lava
  - `silentgear:negate_damage`
    - Reduces "minecraft:is_fire" type damage by 4% per level per armor piece

### [Heavy](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/heavy.json)
- Armor decreases movement speed
- Found On:
  - Materials: Nothing
- Conditions: (Only on Armor)
- ID: `silentgear:heavy`
- Max Level: 5
- Effects:
  - `silentgear:attribute`
    - Key[gearType=Armor, group=LEGS]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [-0.01, -0.02, -0.03, -0.04, -0.05]
    - Key[gearType=Armor, group=FEET]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [-0.01, -0.02, -0.03, -0.04, -0.05]
    - Key[gearType=Armor, group=CHEST]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [-0.01, -0.02, -0.03, -0.04, -0.05]
    - Key[gearType=Armor, group=HEAD]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [-0.01, -0.02, -0.03, -0.04, -0.05]

### [Holy](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/holy.json)
- Deals extra damage to the undead
- Found On:
  - Materials: **Lapis Lazuli** _(Tip Upgrade)_, **Barrier** _(Main)_
- Conditions: (Only on Weapon)
- ID: `silentgear:holy`
- Max Level: 5
- Effects:
  - `silentgear:extra_damage`

### [Ignite](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/ignite.json)
- Lights blocks on fire at a small durability cost
- Found On:
  - Materials: Nothing
- Conditions: (Only on Tools)
- ID: `silentgear:ignite`
- Max Level: 1
- Effects:
  - `silentgear:block_placer`
    - Places: minecraft:fire
    - Durability Cost: 1

### [Imperial](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/imperial.json)
- Sometimes increases gem drops when mining
- Found On:
  - Materials: **Redstone** _(Main)_, **Dimerald** _(Tip Upgrade)_, **Tyrian Steel** _(Tip Upgrade)_
- Conditions: (Only on Harvest Tools)
- ID: `silentgear:imperial`
- Max Level: 5
- Effects:
  - `silentgear:bonus_drops`
    - 15% chance per level of dropping 50% more of some items

### [Indestructible](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/indestructible.json)
- Prevents durability loss
- Found On:
  - Materials: Nothing
- ID: `silentgear:indestructible`
- Max Level: 1
- Extra Info:
  - The damage (durability lost) of the item will remain the same as when the trait was added
  - The item can still be repaired if desired

### [Jabberwocky](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/jabberwocky.json)
- ’Twas brillig, and the slithy toves / Did gyre and gimble in the wabe
- Found On:
  - Materials: Nothing
- Conditions: (Only on Harvest Tools)
- ID: `silentgear:jabberwocky`
- Max Level: 1
- Extra Info:
  - Something may happen if you mine certain blocks with this

### [Jagged](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/jagged.json)
- Increases attack damage or decreased ranged damage as item is damaged
- Found On:
  - Materials: **Quartz** _(Main, Tip Upgrade)_, **Blackstone** _(Main, Tool Rod)_, **Obsidian** _(Main)_, **Wood** _(Main)_, **Flint** _(Main, Tool Rod)_, **End Stone** _(Main)_
- Conditions: (Only on Tools)
- ID: `silentgear:jagged`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Attack Damage: 0.1667 * level * damage * value
    - Ranged Damage: -0.1667 * level * damage * value

### [Kitty Vision](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/kitty_vision.json)
- Gives night vision on helmets and curios
- Found On:
  - Materials: **Dimerald** _(Jewelry Setting)_
- Conditions: ((Only on Helmet OR Only on Curio))
- ID: `silentgear:kitty_vision`
- Max Level: 1
- Effects:
  - `silentgear:wielder_effect`
    - Helmet
      - Night Vision: [1] (by trait level)
    - Curio
      - Night Vision: [1] (by trait level)

### [Light](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/light.json)
- Armor increases movement speed
- Found On:
  - Materials: **Azure Electrum** _(Main)_, **Phantom Membrane** _(Lining)_, **Leaves** _(Main)_
- Conditions: (Only on Armor)
- ID: `silentgear:light`
- Max Level: 5
- Effects:
  - `silentgear:attribute`
    - Key[gearType=Armor, group=LEGS]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [0.01, 0.02, 0.03, 0.04, 0.05]
    - Key[gearType=Armor, group=FEET]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [0.01, 0.02, 0.03, 0.04, 0.05]
    - Key[gearType=Armor, group=CHEST]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [0.01, 0.02, 0.03, 0.04, 0.05]
    - Key[gearType=Armor, group=HEAD]
      - minecraft:generic.movement_speed: ADD_MULTIPLIED_BASE [0.01, 0.02, 0.03, 0.04, 0.05]

### [Lucky](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/lucky.json)
- Adds luck when held (this is not Fortune)
- Found On:
  - Materials: **Lapis Lazuli** _(Tip Upgrade, Jewelry Setting)_, **Fine Silk** _(Binding)_
- ID: `silentgear:lucky`
- Max Level: 7
- Effects:
  - `silentgear:attribute`
    - Key[gearType=All Gear Types, group=ANY]
      - minecraft:generic.luck: ADD_VALUE [0.5, 1.0, 1.5, 2.0, 3.0, 4.0, 5.0]
- Extra Info:
  - **Luck has nothing to do with the Fortune enchantment!** It affects loot from some loot tables, but not most. It does not increase drops from normal ores. Please read here for more information: https://minecraft.gamepedia.com/Luck

### [Lustrous](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/lustrous.json)
- Tools gain a large harvest speed boost when in light
- Found On:
  - Materials: **Glowstone** _(Tip Upgrade)_, **Bismuth** _(Main)_, **Diamond** _(Main, Tool Rod, Tip Upgrade)_, **Bismuth Brass** _(Main)_, **Signalum** _(Main, Tool Rod)_, **Refined Glowstone** _(Main, Tool Rod)_, **Bismuth Steel** _(Main)_, **Electrum** _(Tool Rod)_
- Conditions: (Only on Harvest Tools)
- ID: `silentgear:lustrous`
- Max Level: 5

### [Magmatic](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/magmatic.json)
- Auto-smelting
- Found On:
  - Materials: **Crimson Steel** _(Tip Upgrade)_
- Conditions: (Only on Harvest Tools)
- ID: `silentgear:magmatic`
- Max Level: 1
- Extra Info:
  - Smelted drops are not affected by fortune to prevent item duplication

### [Magnetic](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/magnetic.json)
- Pulls in nearby items
- Found On:
  - Materials: Nothing
  - Parts: **Magnetic Upgrade**
- ID: `silentgear:magnetic`
- Max Level: 5
- Effects:
  - `silentgear:item_magnet`
  Attracts all items towards the player
- Extra Info:
Higher levels increase range

### [Malleable](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/malleable.json)
- Gear sometimes takes less damage
- Found On:
  - Materials: **Gold** _(Main, Tip Upgrade)_, **Lead** _(Main)_, **Osmium** _(Main, Tool Rod)_, **Refined Iron** _(Main, Tool Rod)_, **Steel** _(Main, Tool Rod)_, **Azure Electrum** _(Main, Tip Upgrade)_, **Platinum** _(Main, Tool Rod)_, **Lumium** _(Main, Tool Rod)_, **Bismuth** _(Main, Tool Rod)_, **Enderium** _(Main, Tool Rod)_, **Titanium** _(Main)_, **Crimson Iron** _(Main)_, **Uranium** _(Main, Tool Rod)_, **High-Carbon Steel** _(Main)_, **Aluminum** _(Main, Tool Rod)_, **Compressed Iron** _(Main, Tool Rod)_, **Nickel** _(Main, Tool Rod)_, **Refined Obsidian** _(Main, Tool Rod)_, **Bismuth Brass** _(Main, Tool Rod)_, **Iron** _(Main, Tip Upgrade)_, **Crimson Steel** _(Main)_, **Aluminum Steel** _(Main, Tool Rod)_, **Brass** _(Main, Tool Rod)_, **Silver** _(Main, Tool Rod)_, **Bronze** _(Tip Upgrade)_, **Copper** _(Tip Upgrade)_, **Invar** _(Main, Tool Rod)_, **Refined Glowstone** _(Main, Tool Rod)_, **End Stone** _(Tool Rod)_, **Bismuth Steel** _(Main, Tool Rod)_, **Zinc** _(Main, Tool Rod)_, **Redstone Alloy** _(Main, Tool Rod)_, **Blaze Gold** _(Main)_, **Electrum** _(Main)_, **Azure Silver** _(Main, Tip Upgrade)_, **Tin** _(Main, Tool Rod)_
- ID: `silentgear:malleable`
- Max Level: 5
- Effects:
  - `silentgear:durability`
    - -1 damage with a 10% chance per level

### [Mighty](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/mighty.json)
- Gives strength and/or haste on tools based on trait level
- Found On:
  - Materials: **Quartz** _(Jewelry Setting)_
- Conditions: ((Only on Tools OR Only on Curio))
- ID: `silentgear:mighty`
- Max Level: 5
- Effects:
  - `silentgear:wielder_effect`
    - Tools
      - Strength: [0, 0, 1, 1, 2] (by trait level)
      - Haste: [1, 1, 1, 2, 3] (by trait level)
    - Curio
      - Haste: [1, 1, 2, 2, 3] (by trait level)

### [Moonwalker](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/moonwalker.json)
- I don't believe in gravity!
- Found On:
  - Materials: **Azure Silver** _(Main)_
- Conditions: ((Only on Boots OR Only on Curio))
- ID: `silentgear:moonwalker`
- Max Level: 5
- Effects:
  - `silentgear:attribute`
    - Key[gearType=All Gear Types, group=ANY]
      - minecraft:generic.gravity: ADD_MULTIPLIED_BASE [-0.15, -0.3, -0.45000002, -0.6, -0.75]

### [Multi-break](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/multi_break.json)
- TODO, not coded
- Found On:
  - Materials: Nothing
- ID: `silentgear:multi_break`
- Max Level: 5
- Extra Info:
  - This trait has never been coded ~~and has almost achieved meme status~~
  - Intended effect: mine multiple blocks like vein miner

### [Organic](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/organic.json)
- Gains enchantability, but loses magic damage as the item is damaged
- Found On:
  - Materials: Nothing
- ID: `silentgear:organic`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Enchantment Value: 0.1 * level * damage * value
    - Magic Damage: -0.15 * level * damage * value

### [Racker](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/racker.json)
- Places netherrack at the cost of durability
- Found On:
  - Materials: Nothing
- Conditions: (Only on Tools)
- ID: `silentgear:racker`
- Max Level: 1
- Effects:
  - `silentgear:block_placer`
    - Places: minecraft:netherrack
    - Durability Cost: 3

### [Reach](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/reach.json)
- Increases block reach distance
- Found On:
  - Materials: **Blaze Rod** _(Tool Rod)_, **Emerald** _(Jewelry Setting)_
- ID: `silentgear:reach`
- Max Level: 5
- Effects:
  - `silentgear:attribute`
    - Key[gearType=All Gear Types, group=ANY]
      - minecraft:player.block_interaction_range: ADD_VALUE [0.5, 1.0, 1.5, 2.0, 3.0]

### [Red Card](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/red_card.json)
- trait.silentgear.red_card.desc
- Found On:
  - Materials: Nothing
  - Parts: **Red Card**
- ID: `silentgear:red_card`
- Max Level: 1

### [Refractive](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/refractive.json)
- Place phantom lights when used
- Found On:
  - Materials: **Glowstone** _(Tip Upgrade)_, **Lumium** _(Main, Tool Rod)_, **Refined Glowstone** _(Tip Upgrade)_, **End Rod** _(Tool Rod)_
- Conditions: (Only on Tools)
- ID: `silentgear:refractive`
- Max Level: 1
- Effects:
  - `silentgear:block_placer`
    - Places: silentgear:phantom_light
    - Durability Cost: 5

### [Renew](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/renew.json)
- Slowly repairs the item over time
- Found On:
  - Materials: **Amethyst** _(Main)_, **Glowstone** _(Main)_, **Phantom Membrane** _(Main)_
- ID: `silentgear:renew`
- Max Level: 5
- Effects:
  - `silentgear:self_repair`
    - 1.8% chance per level of restoring 1 durability each second
    - Only works if equipped or in a player's inventory

### [Road Maker](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/road_maker.json)
- Turns dirt-like blocks into grass paths
- Found On:
  - Materials: Nothing
  - Parts: **Road Maker Upgrade**
- Conditions: (Only on Tools)
- ID: `silentgear:road_maker`
- Max Level: 1
- Effects:
  - `silentgear:block_filler`
    - Fills with: minecraft:dirt_path
    - Replaces
      - Block: minecraft:grass_block
      - Does not replace block entities
    - Fill Area
      - X: 3 (+1)
      - Y: 1 (+0)
      - Z: 3 (+1)
      - On sneak: PASS
    - Durability Cost: 0.5

### [Rustic](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/rustic.json)
- Increases synergy if it's 100% or less
- Found On:
  - Materials: **Paper** _(Main)_, **Terracotta** _(Main)_
- ID: `silentgear:rustic`
- Max Level: 5
- Effects:
  - `silentgear:synergy_multiplier`
    - Please read [this page](https://github.com/SilentChaos512/Silent-Gear/wiki/Synergy) for more information on synergy
    - +0.05 synergy per level if between 74% and 100%

### [Sharp](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/sharp.json)
- Gain harvest speed and attack damage as durability is lost
- Found On:
  - Materials: **Bronze** _(Main)_
- Conditions: (Only on Tools)
- ID: `silentgear:sharp`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Attack Damage: 0.125 * level * damage * value
    - Harvest Speed: 0.125 * level * damage * value

### [Silky](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/silky.json)
- Blocks mined drop themselves like with Silk Touch (does not stack with enchantments)
- Found On:
  - Materials: **Amethyst** _(Tip Upgrade)_, **Brass** _(Main)_
- ID: `silentgear:silky`
- Max Level: 1

### [Snow Walker](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/snow_walker.json)
- Walk on powder snow without sinking
- Found On:
  - Materials: **Leather** _(Main)_, **Wool** _(Main)_, **Fine Silk Cloth** _(Main)_
- ID: `silentgear:snow_walker`
- Max Level: 1
- Extra Info:
Allows the player to walk on powder snow without sinking. This will work on any armor or curio.

### [Soft](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/soft.json)
- Reduces harvest speed as tool is damaged
- Found On:
  - Materials: **Gold** _(Main, Tip Upgrade, Coating)_, **Lead** _(Tool Rod)_, **Platinum** _(Main, Tool Rod)_, **Aluminum** _(Main)_, **Silver** _(Main, Tool Rod)_, **Copper** _(Main, Tool Rod)_, **Zinc** _(Main, Tool Rod)_, **Blaze Gold** _(Tip Upgrade, Coating)_, **Electrum** _(Main)_, **Azure Silver** _(Main)_, **Tin** _(Main, Tool Rod)_
- Conditions: (Only on Tools)
- ID: `silentgear:soft`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Harvest Speed: -0.15 * level * damage * value

### [Spoon](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/spoon.json)
- Pickaxes can mine soil
- Found On:
  - Materials: Nothing
  - Parts: **Spoon Upgrade**
- Conditions: (Only on Pickaxe)
- ID: `silentgear:spoon`
- Max Level: 1

### [Stellar](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/stellar.json)
- Armor gives speed and jump boost, items slowly repair themselves
- Found On:
  - Materials: **Refined Iron** _(Main)_
- ID: `silentgear:stellar`
- Max Level: 5
- Effects:
  - `silentgear:self_repair`
    - 2.0% chance per level of restoring 1 durability each second
    - Only works if equipped or in a player's inventory
  - `silentgear:wielder_effect`
    - Armor
      - Speed: [0, 1, 2, 3] (by armor piece count)
      - Jump Boost: [1, 2, 3, 4] (by armor piece count)

### [Sturdy](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/sturdy.json)
- Gear frequently takes less damage
- Found On:
  - Materials: **Tyrian Steel** _(Main, Tool Rod)_, **Crimson Steel** _(Tool Rod)_, **End Rod** _(Tool Rod)_
- ID: `silentgear:sturdy`
- Max Level: 5
- Effects:
  - `silentgear:durability`
    - -1 damage with a 17% chance per level

### [Swift Swim](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/swift_swim.json)
- Increases swim speed
- Found On:
  - Materials: **Prismarine** _(Jewelry Setting)_
- ID: `silentgear:swift_swim`
- Max Level: 5
- Effects:
  - `silentgear:attribute`
    - Key[gearType=All Gear Types, group=ANY]
      - neoforge:swim_speed: ADD_VALUE [0.2, 0.4, 0.6, 0.8, 1.0]

### [Synergistic](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/synergistic.json)
- Gear gets a synergy bonus (if base value is more than 100%)
- Found On:
  - Materials: **Aluminum** _(Main, Tool Rod)_, **Aluminum Steel** _(Main, Tool Rod)_, **Emerald** _(Main, Tip Upgrade)_
- ID: `silentgear:synergistic`
- Max Level: 5
- Effects:
  - `silentgear:synergy_multiplier`
    - Please read [this page](https://github.com/SilentChaos512/Silent-Gear/wiki/Synergy) for more information on synergy
    - +0.04 synergy per level if greater than 100%

### [Terminus](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/terminus.json)
- Creates and places stone blocks when used
- Found On:
  - Materials: Nothing
- Conditions: (Only on Tools)
- ID: `silentgear:terminus`
- Max Level: 1
- Effects:
  - `silentgear:block_placer`
    - Places: minecraft:stone
    - Durability Cost: 3

### [Turtle](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/turtle.json)
- Hold your breath for longer
- Found On:
  - Materials: **Turtle** _(Main)_
- Conditions: ((Only on Helmet OR Only on Curio))
- ID: `silentgear:turtle`
- Max Level: 1

### [Venom](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/venom.json)
- Poisons the target when attacked
- Found On:
  - Materials: Nothing
- Conditions: (Only on Tools)
- ID: `silentgear:venom`
- Max Level: 5
- Effects:
  - `silentgear:target_effect`
    - Tools
      - Level 1:
        - effect.minecraft.poison, Duration: 80
      - Level 2:
        - effect.minecraft.poison, Duration: 160
      - Level 3:
        - effect.minecraft.poison, Duration: 240
      - Level 4:
        - effect.minecraft.poison, Duration: 320
      - Level 5:
        - effect.minecraft.poison, Duration: 400

### [Void Ward](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/void_ward.json)
- Saves the wearer from falling out of the world
- Found On:
  - Materials: **Tyrian Steel** _(Main)_
- Conditions: (Only on Armor)
- ID: `silentgear:void_ward`
- Max Level: 1
- Extra Info:
  - When void damage is taken, the player is launched upward and given a levitation and slow falling effect

### [Vulcan](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/vulcan.json)
- Places obsidian at a high durability cost
- Found On:
  - Materials: **Refined Obsidian** _(Tip Upgrade)_
- Conditions: (Only on Tools)
- ID: `silentgear:vulcan`
- Max Level: 1
- Effects:
  - `silentgear:block_placer`
    - Places: minecraft:obsidian
    - Durability Cost: 20
    - Cooldown: 100

### [Widen](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/widen.json)
- Increases the effect radius of hammers and excavators
- Found On:
  - Materials: Nothing
  - Parts: **Wide Plate Upgrade**
- Conditions: (Only on Harvest Tools)
- ID: `silentgear:widen`
- Max Level: 3
- Extra Info:
  - Adds the trait level to the effect radius
  - Level 1 = 5x5, 2 = 7x7, 3 = 9x9

### [Wind Blast](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/wind_blast.json)
- Creates a blast of wind when attacking
- Found On:
  - Materials: **Breeze Rod** _(Tool Rod)_
- Conditions: (Only on Tools)
- ID: `silentgear:wind_blast`
- Max Level: 1
- Effects:
  - `silentgear:wind_blast`
  Creates an explosion similar to a wind charge on attack

### [Yummy](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/yummy.json)
- Makes the item edible, but...
- Found On:
  - Materials: Nothing
- ID: `silentgear:yummy`
- Max Level: 1
- Effects:
  - `silentgear:attach_data_components`

### [trait.silentgear.dulling](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/dulling.json)
- trait.silentgear.dulling.desc
- Found On:
  - Materials: **Copper** _(Tip Upgrade)_
- ID: `silentgear:dulling`
- Max Level: 5
- Effects:
  - `silentgear:number_property_modifier`
    - Attack Damage: -1.0 * level * damage
    - Harvest Speed: -1.0 * level * damage

### [trait.silentgear.flutter](https://github.com/SilentChaos512/Silent-Gear/tree/1.21.x/src/generated/resources/data/silentgear/silentgear_traits/flutter.json)
- trait.silentgear.flutter.desc
- Found On:
  - Materials: **Feather** _(Main)_
- ID: `silentgear:flutter`
- Max Level: 5
- Effects:
  - `silentgear:attribute`
    - Key[gearType=Armor, group=LEGS]
      - minecraft:generic.safe_fall_distance: ADD_VALUE [0.25, 0.5, 0.75, 1.0, 1.25]
    - Key[gearType=Armor, group=FEET]
      - minecraft:generic.safe_fall_distance: ADD_VALUE [0.25, 0.5, 0.75, 1.0, 1.25]
    - Key[gearType=Armor, group=CHEST]
      - minecraft:generic.safe_fall_distance: ADD_VALUE [0.25, 0.5, 0.75, 1.0, 1.25]
    - Key[gearType=Armor, group=HEAD]
      - minecraft:generic.safe_fall_distance: ADD_VALUE [0.25, 0.5, 0.75, 1.0, 1.25]

