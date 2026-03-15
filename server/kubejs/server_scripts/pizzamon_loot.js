// Begin LootJS calls
LootJS.lootTables(event => {
    // Define support tables for the modpack to inject into other loot tables

    // Support tables for Supplementaries Urns
    event.create("pizzamon:tier_1_ancient_balls").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon:ancient_poke_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_citrine_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_verdant_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_azure_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_roseate_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_slate_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_ivory_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_feather_ball").setCount([2, 5]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_heavy_ball").setCount([2, 5]))
    })
    event.create("pizzamon:tier_2_ancient_balls").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon:ancient_great_ball").setCount([1, 4]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_wing_ball").setCount([1, 4]))
        pool.addEntry(LootEntry.of("cobblemon:ancient_leaden_ball").setCount([1, 4]))
    })
    event.create("pizzamon:tier_3_ancient_balls").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon:ancient_ultra_ball"))
        pool.addEntry(LootEntry.of("cobblemon:ancient_jet_ball"))
        pool.addEntry(LootEntry.of("cobblemon:ancient_gigaton_ball"))
    })
    event.create("pizzamon:tumblestones").createPool(pool => {
        pool.addEntry(LootEntry.tag("cobblemon:tumblestones", true).setCount([2, 16]))
    })


    // Photography related stuff for Cameraman trainers 
    // Exposure camera stuff
    event.create("pizzamon:photography").createPool(pool => {
        pool.addEntry(LootEntry.of("exposure:camera"))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.of("exposure:black_and_white_film").withWeight(3))
        pool.addEntry(LootEntry.of("exposure:color_film").withWeight(3))
        pool.addEntry(LootEntry.of("exposure_expanded:gameboy_film"))
    })
    // Exposure polaroid stuff
    event.create("pizzamon:photography_instant").createPool(pool => {
        pool.addEntry(LootEntry.of("exposure_polaroid:instant_camera"))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.of("exposure_polaroid:instant_black_and_white_slide").withWeight(3).setCount([2, 4]))
        pool.addEntry(LootEntry.of("exposure_polaroid:instant_color_slide").withWeight(3).setCount([2, 4]))
    })
    // Coinflip for Exposure camera stuff
    event.create("pizzamon:camera_loot").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:photography").withWeight(50))
        pool.addEntry(LootEntry.reference("pizzamon:photography_instant").withWeight(50))
    })


    // Dark and fighting TM/TRs to inject to Police trainers table
    event.create("pizzamon:acab").createPool(pool => {
        pool.addEntry(LootEntry.tag("simpletms:type_fighting_tr", true))
        pool.addEntry(LootEntry.tag("simpletms:type_dark_tr", true))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.tag("simpletms:type_fighting_tm", true))
        pool.addEntry(LootEntry.tag("simpletms:type_dark_tm", true))
        pool.when(conditions => {
            conditions.randomChance(0.1)
        })
    })

    // Water and Ice TM/TRs to inject into Aqauculture loot boxes
    event.create("pizzamon:wet_treasure").createPool(pool => {
        pool.addEntry(LootEntry.tag("simpletms:type_water_tr", true).setCount([1, 3]))
        pool.addEntry(LootEntry.tag("simpletms:type_ice_tr", true).setCount([1, 3]))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.tag("simpletms:type_water_tm", true))
        pool.addEntry(LootEntry.tag("simpletms:type_ice_tm", true))
        pool.when(conditions => {
            conditions.randomChance(0.1)
        })
    })


    // Artist trainer stuff
    event.create("pizzamon:chalks").createPool(pool => {
        pool.addEntry(LootEntry.tag("chalk:chalks", true))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
        .rolls([1, 2])
    })
    event.create("pizzamon:dyes").createPool(pool => {
        pool.addEntry(LootEntry.tag("c:dyes", true))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
        .rolls([1, 2])
    })
    // Main artist trainer type loot table, can also be rolled generally
    event.create("pizzamon:art_supplies").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:chalks").withWeight(8))
        pool.addEntry(LootEntry.reference("pizzamon:dyes").withWeight(8).setCount([1, 4]))
        pool.addEntry(LootEntry.of("cobblemon:charcoal_stick").withWeight(5))
        pool.addEntry(LootEntry.of("cobblemon:light_clay").withWeight(5))
        pool.addEntry(LootEntry.of("cobblemon:black_sludge").withWeight(5))
        pool.addEntry(LootEntry.of("minecraft:glow_ink_sac").withWeight(5).setCount([1, 3]))
        pool.addEntry(LootEntry.of("xercapaint:item_easel").withWeight(2))
        pool.addEntry(LootEntry.of("xercapaint:item_palette").withWeight(2))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas").withWeight(3))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas_long").withWeight(3))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas_large").withWeight(3))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas_tall").withWeight(3))
        pool.addEntry(LootEntry.of("immersive_paintings:painting").withWeight(4))
        pool.addEntry(LootEntry.of("immersive_paintings:graffiti").withWeight(4))
        pool.addEntry(LootEntry.of("chalk:chalk_box").withWeight(2))
        .rolls([2, 4])
    })
    // Generic loot for random art mod items
    event.create("pizzamon:general/art").createPool(pool => {
        pool.addEntry(LootEntry.of("xercapaint:item_easel").withWeight(2))
        pool.addEntry(LootEntry.of("xercapaint:item_palette").withWeight(2))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas").withWeight(3))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas_long").withWeight(3))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas_large").withWeight(3))
        pool.addEntry(LootEntry.of("xercapaint:item_canvas_tall").withWeight(3))
        pool.addEntry(LootEntry.of("immersive_paintings:painting").withWeight(4))
        pool.addEntry(LootEntry.of("immersive_paintings:graffiti").withWeight(4))
    })


    // Breeder/rancher trainers
    event.create("pizzamon:pokemon_breeding").createPool(pool => {
        pool.addEntry(LootEntry.tag("cobblepedia:power_items", true).withWeight(1))
        pool.addEntry(LootEntry.of("cobblemon:pasture").withWeight(10))
        pool.addEntry(LootEntry.of("cobblemon:mirror_herb").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:destiny_knot").withWeight(1))
        pool.addEntry(LootEntry.of("cobblemon:lucky_egg").withWeight(1))
        pool.addEntry(LootEntry.of("cobblemon:everstone").withWeight(4))
        pool.addEntry(LootEntry.of("cobblemon:soothe_bell").withWeight(4))
        pool.addEntry(LootEntry.of("cobblemon:eviolite").withWeight(4))
        pool.addEntry(LootEntry.of("cobblemon:light_ball").withWeight(2))
    })
    // Scientists/Professors
    event.create("pizzamon:science_team").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon:display_case").withWeight(5))
        pool.addEntry(LootEntry.of("cobblemon:fossil_analyzer").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:restoration_tank").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:monitor").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:healing_machine").withWeight(3))
        pool.addEntry(LootEntry.of("cobblemon:pc").withWeight(3))
        pool.addEntry(LootEntry.of("cobblemon:wise_glasses").withWeight(10))
        pool.addEntry(LootEntry.of("cobblemon:metal_coat").withWeight(5))
        pool.addEntry(LootEntry.of("cobblemon:magnet").withWeight(5))
        pool.addEntry(LootEntry.of("cobblemon:safety_goggles").withWeight(5))
        pool.addEntry(LootEntry.of("cobblemon:wide_lens").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:zoom_lens").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:scope_lens").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:exp_share").withWeight(1))
        pool.addEntry(LootEntry.of("mega_showdown:zygarde_cell").withWeight(2))
    })


    // Basic Pokedolls
    event.create("pizzamon:pokedolls").createPool(pool => {
        pool.addEntry(LootEntry.tag("c:pokedoll", true))
    })
    // Shiny Pokedolls
    event.create("pizzamon:pokedolls_shiny").createPool(pool => {
        pool.addEntry(LootEntry.tag("c:shiny_pokedoll", true))
    })
    // Gigantic Pokedolls
    event.create("pizzamon:pokedolls_gigantic").createPool(pool => {
        pool.addEntry(LootEntry.tag("c:gigantic_pokedoll", true))
    })
    // Gigantic Shiny Pokedolls
    event.create("pizzamon:pokedolls_gigantic_shiny").createPool(pool => {
        pool.addEntry(LootEntry.tag("c:gigantic_shiny_pokedoll", true))
    })
    // All Pokedolls (weighted)
    event.create("pizzamon:all_pokedolls").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokedolls").withWeight(64))
        pool.addEntry(LootEntry.reference("pizzamon:pokedolls_shiny").withWeight(4))
        pool.addEntry(LootEntry.reference("pizzamon:pokedolls_gigantic").withWeight(16))
        pool.addEntry(LootEntry.reference("pizzamon:pokedolls_gigantic_shiny").withWeight(1))
    })


    // Create - Basic components
    event.create("pizzamon:create_basic").createPool(pool => {
        pool.addEntry(LootEntry.of("create:andesite_alloy").withWeight(8).setCount([2, 8]))
        pool.addEntry(LootEntry.of("create:zinc_ingot").withWeight(6).setCount([1, 5]))
        pool.addEntry(LootEntry.of("create:andesite_casing").withWeight(6).setCount([2, 8]))
        pool.addEntry(LootEntry.of("create:cogwheel").withWeight(10).setCount([2, 8]))
        pool.addEntry(LootEntry.of("create:large_cogwheel").withWeight(10).setCount([2, 8]))
        pool.addEntry(LootEntry.of("create:gearbox").withWeight(8).setCount([1, 3]))
        pool.addEntry(LootEntry.of("create:encased_chain_drive").withWeight(6).setCount([2, 8]))
        pool.addEntry(LootEntry.of("create:belt_connector").withWeight(8).setCount([2, 4]))
        pool.addEntry(LootEntry.of("create:shaft").withWeight(10).setCount([8, 16]))
        pool.addEntry(LootEntry.of("create:andesite_funnel").withWeight(6).setCount([1, 3]))
        pool.addEntry(LootEntry.of("create:chute").withWeight(6).setCount([2, 8]))
        pool.addEntry(LootEntry.of("create:water_wheel").withWeight(6).setCount([1, 4]))
    })
    // Create - Advanced components
    event.create("pizzamon:create_advanced").createPool(pool => {
        pool.addEntry(LootEntry.of("create:brass_ingot").withWeight(10).setCount([2, 4]))
        pool.addEntry(LootEntry.of("create:brass_funnel").withWeight(8).setCount([1, 4]))
        pool.addEntry(LootEntry.of("create:brass_casing").withWeight(8).setCount([1, 4]))
        pool.addEntry(LootEntry.of("create:rose_quartz").withWeight(5).setCount([1, 4]))
        pool.addEntry(LootEntry.of("create:polished_rose_quartz").withWeight(4).setCount([1, 4]))
        pool.addEntry(LootEntry.of("create:electron_tube").withWeight(3).setCount([1, 4]))
        pool.addEntry(LootEntry.of("create:precision_mechanism").withWeight(2).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:speedometer").withWeight(8))
        pool.addEntry(LootEntry.of("create:stressometer").withWeight(8))
        pool.addEntry(LootEntry.of("create:filter").withWeight(6).setCount([1, 3]))
        pool.addEntry(LootEntry.of("create:attribute_filter").withWeight(6).setCount([1, 3]))
        pool.addEntry(LootEntry.of("create:mechanical_crafter").withWeight(8).setCount([1, 4]))
    })
    // Create - Redstone components
    event.create("pizzamon:create_redstone").createPool(pool => {
        pool.addEntry(LootEntry.of("create:analog_lever").withWeight(10).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:display_link").withWeight(4))
        pool.addEntry(LootEntry.of("create:transmitter").withWeight(8).setCount([1, 3]))
        pool.addEntry(LootEntry.of("create:redstone_link").withWeight(4).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:display_board").withWeight(4))
        pool.addEntry(LootEntry.of("create:nixie_tube").withWeight(4).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:pulse_repeater").withWeight(6).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:pulse_extender").withWeight(6).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:pulse_timer").withWeight(6).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:powered_latch").withWeight(6).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:powered_toggle_latch").withWeight(6).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:desk_bell").withWeight(4))
        pool.addEntry(LootEntry.of("create_connected:sequenced_pulse_generator").withWeight(3))
        pool.addEntry(LootEntry.of("create:stockpile_switch").withWeight(4))
        pool.addEntry(LootEntry.of("create:content_observer").withWeight(4))
        pool.addEntry(LootEntry.of("create:rose_quartz_lamp").withWeight(8).setCount([1, 4]))
        pool.addEntry(LootEntry.of("create:factory_gauge").withWeight(6).setCount([1, 4]))
        pool.addEntry(LootEntry.of("create:smart_chute").withWeight(4).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:redstone_contact").withWeight(10).setCount([2, 4]))
        pool.addEntry(LootEntry.of("create:clutch").withWeight(16).setCount([1, 4]))
    })
    // Create - Tools
    event.create("pizzamon:create_tools").createPool(pool => {
        pool.addEntry(LootEntry.of("create:wrench").withWeight(10))
        pool.addEntry(LootEntry.of("create:sand_paper").withWeight(6))
        pool.addEntry(LootEntry.of("create:super_glue").withWeight(8))
        pool.addEntry(LootEntry.of("create:schematic_and_quill").withWeight(4))
        pool.addEntry(LootEntry.of("create:empty_schematic").withWeight(4))
        pool.addEntry(LootEntry.of("create:goggles").withWeight(8))
        pool.addEntry(LootEntry.of("create:clipboard").withWeight(6))
        pool.addEntry(LootEntry.tag("create:toolboxes", true))
    })


    // Firework capsule stickers
    event.create("pizzamon:firework_stickers").createPool(pool => {
        pool.addEntry(LootEntry.tag("c:capsule_stickers", true))
    })
    // Pokemaniac type accessories
    event.create("pizzamon:pokemaniac_accessories").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemonarmors:butterfree_helmet"))
        pool.addEntry(LootEntry.of("cobblemonarmors:butterfree_chestplate"))
        pool.addEntry(LootEntry.of("cobblemonarmors:fennekin_chestplate"))
        pool.addEntry(LootEntry.of("cobblemonarmors:fennekin_helmet"))
        pool.addEntry(LootEntry.of("cobblemonarmors:magikarp_helmet"))
        pool.addEntry(LootEntry.of("cobblemonarmors:pikachu_helmet"))
        pool.addEntry(LootEntry.of("cobblemonarmors:slowking_helmet"))
        pool.addEntry(LootEntry.of("simplehats:pika_ears"))
        pool.addEntry(LootEntry.of("simplehats:magikarp"))
    })


    // Cobblecuisine foods (uses tagging from main.js)
    // EV Shakes
    event.create("pizzamon:cuisine_ev_shakes").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/low_shakes", true).withWeight(16).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/medium_shakes", true).withWeight(8).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/high_shakes", true).withWeight(4))
    }) 
    // Friendship foods
    event.create("pizzamon:cuisine_friendship").createPool(pool => {
        pool.addEntry(LootEntry.tag("cobblecuisine:beans", true).withWeight(12).setCount([2, 4]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/pokepuffs", true).withWeight(6).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/malasada", true).withWeight(1))
    }) 
    // All cuisines (weighted)
    event.create("pizzamon:cuisine_all").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:cuisine_ev_shakes").withWeight(8))
        pool.addEntry(LootEntry.reference("pizzamon:cuisine_friendship").withWeight(24))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/spawn_power_foods", true).withWeight(16))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/size_desserts", true).withWeight(16))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/roasted_berries", true).withWeight(24).setCount([2, 8]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/deluxe_shakes", true).withWeight(4))
        pool.when(conditions => {
            conditions.randomChance(0.75)
        })
    }) 

    // Rarity tiers of general pokemon healing / battle items and IV/EV items
    // Common Pokemon consumables
    event.create("pizzamon:poke_consumables_common").createPool(pool => {
        pool.addEntry(LootEntry.tag("cobblemon:iv_candies", true).withWeight(4).setCount([2, 8]))
        pool.addEntry(LootEntry.tag("cobblemon:feathers", true).withWeight(6).setCount([2, 8]))
        pool.addEntry(LootEntry.of("cobblemon:antidote").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:paralyze_heal").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:ice_heal").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:burn_heal").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:awakening").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:exp_candy_s").withWeight(4).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobblemon:exp_candy_xs").withWeight(6).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobblemon:potion").withWeight(8).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:ether").withWeight(2).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:elixir").withWeight(2).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("cobblecuisine:beans", true).withWeight(3).setCount([2, 4]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/low_shakes", true).withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("maxrepel:repel").withWeight(6).setCount([1, 4]))
    })
    // Uncommon Pokemon consumables
    event.create("pizzamon:consumables/uncommon").createPool(pool => {
        pool.addEntry(LootEntry.tag("cobblemon:mochis", true).withWeight(2).setCount([1, 3]))
        pool.addEntry(LootEntry.tag("cobblemon:battle_items", true).withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:exp_candy_l").withWeight(3).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobblemon:exp_candy_m").withWeight(6).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobblemon:super_potion").withWeight(6))
        pool.addEntry(LootEntry.of("cobblemon:hyper_potion").withWeight(3))
        pool.addEntry(LootEntry.of("cobblemon:revive").withWeight(5).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:full_heal").withWeight(6).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/pokepuffs", true).withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/medium_shakes", true).withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("maxrepel:super_repel").withWeight(5).setCount([1, 2]))
    })
    // Rare Pokemon consumables
    event.create("pizzamon:consumables/rare").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon:max_ether").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:max_elixir").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("cobblemon:vitamins", true).withWeight(3))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/spawn_power_foods", true).withWeight(3))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/size_desserts", true).withWeight(3))
        pool.addEntry(LootEntry.of("cobblemon:rare_candy").withWeight(3).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobblemon:exp_candy_xl").withWeight(4).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobblemon:max_potion").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:full_restore").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:max_revive").withWeight(4).setCount([1, 2]))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/malasada", true).withWeight(3))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/high_shakes", true).withWeight(3))
        pool.addEntry(LootEntry.tag("pizzamon:cuisine/deluxe_shakes", true).withWeight(2))
        pool.addEntry(LootEntry.of("maxrepel:max_repel").withWeight(4).setCount([1, 2]))
    })




    // Generic all TRs
    event.create("pizzamon:all_trs").createPool(pool => {
        pool.addEntry(LootEntry.tag("simpletms:tr_items", true))
    })
    // Generic all TMs
    event.create("pizzamon:all_tms").createPool(pool => {
        pool.addEntry(LootEntry.tag("simpletms:tm_items", true))
    })
    // Generic all TRs AND TMs
    event.create("pizzamon:move_tutor_items").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:all_trs").withWeight(8))
        pool.addEntry(LootEntry.reference("pizzamon:all_tms").withWeight(1))
    })

    // Relic coin loot
    event.create("pizzamon:relic_coins").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon:relic_coin").withWeight(32).setCount([4, 16]))
        pool.addEntry(LootEntry.of("cobblemon:relic_coin_pouch").withWeight(8).setCount([1, 2]))
        pool.addEntry(LootEntry.of("cobblemon:relic_coin_sack").withWeight(1))
    }) 

    // Tera shards
    event.create("pizzamon:tera_shards").createPool(pool => {
        pool.addEntry(LootEntry.tag("mega_showdown:tera_shard", true).withWeight(3).setCount([2, 8]))
        pool.addEntry(LootEntry.of("mega_showdown:stellar_tera_shard").withWeight(1).setCount([1, 3]))
    }) 

    // Cobblemon utility silver bottlecaps
    event.create("pizzamon:silver_bottlecaps").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon_utility:spatksilvercap"))
        pool.addEntry(LootEntry.of("cobblemon_utility:spdefsilvercap"))
        pool.addEntry(LootEntry.of("cobblemon_utility:atksilvercap"))
        pool.addEntry(LootEntry.of("cobblemon_utility:defsilvercap"))
        pool.addEntry(LootEntry.of("cobblemon_utility:speedsilvercap"))
        pool.addEntry(LootEntry.of("cobblemon_utility:hpsilvercap"))
    }) 
    
    // Cobblemon size essences
    event.create("pizzamon:size_essences").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemonsizevariation:growth_essence"))
        pool.addEntry(LootEntry.of("cobblemonsizevariation:shrink_essence"))
        pool.addEntry(LootEntry.of("cobblemonsizevariation:tiny_essence"))
        pool.addEntry(LootEntry.of("cobblemonsizevariation:normal_essence"))
        pool.addEntry(LootEntry.of("cobblemonsizevariation:huge_essence"))
    }) 


    // General Loot - Materials
    event.create("pizzamon:loot/materials/common").createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:copper_ingot").withWeight(6).setCount([1, 3]))
        pool.addEntry(LootEntry.of("minecraft:iron_ingot").withWeight(4).setCount([1, 2]))
        pool.addEntry(LootEntry.of("create:zinc_ingot").withWeight(3).setCount([1, 3]))
        pool.addEntry(LootEntry.of("create:andesite_alloy").withWeight(3).setCount([2, 4]))
    })
    event.create("pizzamon:loot/materials/uncommon").createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:redstone").withWeight(5).setCount([2, 8]))
        pool.addEntry(LootEntry.of("minecraft:lapis_lazuli").withWeight(5).setCount([2, 8]))
        pool.addEntry(LootEntry.of("minecraft:quartz").withWeight(5).setCount([2, 8]))
        pool.addEntry(LootEntry.of("minecraft:blaze_powder").withWeight(3).setCount([1, 3]))
        pool.addEntry(LootEntry.of("create:brass_ingot").withWeight(5).setCount([1, 3]))
        pool.addEntry(LootEntry.of("minecraft:prismarine_shard").withWeight(3).setCount([2, 6]))
        pool.addEntry(LootEntry.of("minecraft:prismarine_crystals").withWeight(2).setCount([1, 3]))
        pool.addEntry(LootEntry.of("minecraft:amethyst_shard").withWeight(3).setCount([2, 6]))
    })
    event.create("pizzamon:loot/materials/rare").createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:gold_ingot").withWeight(8).setCount([1, 3]))
        pool.addEntry(LootEntry.of("minecraft:diamond").withWeight(4).setCount([1, 3]))
        pool.addEntry(LootEntry.of("minecraft:emerald").withWeight(6).setCount([1, 3]))
        pool.addEntry(LootEntry.of("minecraft:netherite_scrap").withWeight(1))
        pool.addEntry(LootEntry.of("minecraft:blaze_rod").withWeight(4).setCount([1, 2]))
    })

    // Plush-O-matic yarns
    event.create("pizzamon:loot/fun/whimsy/yarn").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:plush_yarns", true).setCount([1, 3]))
    })

    // Pokedolls AND yarns (pre-weighted)
    event.create("pizzamon:loot/fun/whimsy/plushies").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/whimsy/yarn").withWeight(80))
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls").withWeight(20))
    })



    event.create("pizzamon:loot/fun/decor/tools").createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:stonecutter"))
        pool.addEntry(LootEntry.of("chipped:multimeter"))
        pool.addEntry(LootEntry.of("chipped:alchemy_book"))
        pool.addEntry(LootEntry.of("chipped:watering_can"))
        pool.addEntry(LootEntry.of("chipped:needles"))
        pool.addEntry(LootEntry.of("chipped:saw"))
        pool.addEntry(LootEntry.of("rechiseled:chisel"))
        pool.addEntry(LootEntry.of("sawmill:sawmill"))
        pool.addEntry(LootEntry.of("refurbished_furniture:workbench"))
        pool.addEntry(LootEntry.of("immersive_furniture:artisans_workstation"))
        pool.addEntry(LootEntry.of("fetzisdisplays:workbench"))
        pool.addEntry(LootEntry.of("cluttered:hand_drill"))
        pool.addEntry(LootEntry.of("cobblefurnies:furnicrafter"))
        pool.addEntry(LootEntry.of("exposure:lightroom"))
    })

    event.create("pizzamon:loot/fun/decor/lighting").createPool(pool => {
        pool.addEntry(LootEntry.tag("nightlights:octopus", true))
        pool.addEntry(LootEntry.tag("nightlights:frog", true))
        pool.addEntry(LootEntry.tag("nightlights:mushroom", true))
        pool.addEntry(LootEntry.tag("nightlights:fairy_lights", true))
        pool.addEntry(LootEntry.tag("nightlights:hanging_lights", true))
        pool.addEntry(LootEntry.of("cluttered:bee_lamp"))
        pool.addEntry(LootEntry.of("cluttered:bee_lamp_angry"))
        pool.addEntry(LootEntry.of("cluttered:honeycomb_lamp"))
        pool.addEntry(LootEntry.of("cluttered:red_mushroom_lamp"))
        pool.addEntry(LootEntry.of("cluttered:blue_mushroom_lamp"))
        pool.addEntry(LootEntry.of("cluttered:flower_desk_lamp"))
        pool.addEntry(LootEntry.of("fetzisasiandeco:pagoda_lantern"))
        pool.addEntry(LootEntry.of("fetzisasiandeco:red_paper_lantern"))
    })

    event.create("pizzamon:loot/fun/decor/smokestacks").createPool(pool => {
        pool.addEntry(LootEntry.of("railways:smokestack_caboosestyle"))
        pool.addEntry(LootEntry.of("railways:smokestack_long"))
        pool.addEntry(LootEntry.of("railways:smokestack_coalburner"))
        pool.addEntry(LootEntry.of("railways:smokestack_oilburner"))
        pool.addEntry(LootEntry.of("railways:smokestack_woodburner"))
        pool.addEntry(LootEntry.of("railways:smokestack_streamlined"))
    })

    event.create("pizzamon:loot/fun/decor/displays").createPool(pool => {
        pool.addEntry(LootEntry.tag("handcrafted:trophies", true))
        pool.addEntry(LootEntry.tag("pizzamon:decals", true))
        pool.addEntry(LootEntry.tag("pizzamon:statues", true))
        pool.addEntry(LootEntry.of("minecraft:armor_stand"))
        pool.addEntry(LootEntry.of("supplementaries:statue"))
        pool.addEntry(LootEntry.of("supplementaries:hat_stand"))
        pool.addEntry(LootEntry.of("simplehats:hatdisplay"))
        pool.addEntry(LootEntry.of("cobblemon:display_case"))
        pool.addEntry(LootEntry.of("fetzisdisplays:glass_cloche_red"))
        pool.addEntry(LootEntry.of("exposure:photograph_frame"))
    })

    event.create("pizzamon:loot/fun/gadgets/compass").createPool(pool => {
        pool.addEntry(LootEntry.of("explorerscompass:explorerscompass"))
        pool.addEntry(LootEntry.of("naturescompass:naturescompass"))
    })

    event.create("pizzamon:loot/fun/gadgets/pokemon").createPool(pool => {
        pool.addEntry(LootEntry.of("berrypouch:berry_pouch").withWeight(3))
        pool.addEntry(LootEntry.of("berrypouch:pokeball_gun").withWeight(3))
        pool.addEntry(LootEntry.of("mega_showdown:tera_pouch_white").withWeight(3))
        pool.addEntry(LootEntry.of("simpletms:case_tr").withWeight(2))
        pool.addEntry(LootEntry.of("simpletms:case_tm").withWeight(2))
        pool.addEntry(LootEntry.of("simpletms:machine_tm").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon_utility:ballsynchronizer").withWeight(3))
        pool.addEntry(LootEntry.of("cobbled_counter:counter").withWeight(2))
        pool.addEntry(LootEntry.of("cbmnfieldlab:pokemon_field_lab").withWeight(3))
        pool.addEntry(LootEntry.of("rctmod:trainer_spawner").withWeight(2))
        pool.addEntry(LootEntry.of("rctmod:trainer_repel_rod").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon_wonder_trade:wonder_trade_station").withWeight(3))
        pool.addEntry(LootEntry.of("cobblemon_home:home_storage_terminal").withWeight(3))
        pool.addEntry(LootEntry.reference("pizzamon:silver_bottlecaps").withWeight(1))
        pool.addEntry(LootEntry.reference("pizzamon:size_essences").withWeight(2))
    })

    event.create("pizzamon:loot/fun/gadgets/wands").createPool(pool => {
        pool.addEntry(LootEntry.of("wands:stone_wand").withWeight(9))
        pool.addEntry(LootEntry.of("wands:iron_wand").withWeight(3))
        pool.addEntry(LootEntry.of("wands:diamond_wand").withWeight(1))
        pool.addEntry(LootEntry.of("wands:magic_bag_1").withWeight(1))
    })

    event.create("pizzamon:loot/fun/gadgets/create").createPool(pool => {
        pool.addEntry(LootEntry.of("create:extendo_grip"))
        pool.addEntry(LootEntry.of("create:wand_of_symmetry"))
        pool.addEntry(LootEntry.of("pipeorgans:roll_puncher"))
        pool.addEntry(LootEntry.of("pipeorgans:keyboard_relay"))
        pool.addEntry(LootEntry.of("escalated:metal_walkway_steps").setCount([2, 4]))
        pool.addEntry(LootEntry.of("create:copper_diving_helmet"))
        pool.addEntry(LootEntry.of("create:cuckoo_clock"))
    })

    event.create("pizzamon:loot/fun/gadgets/supplementaries").createPool(pool => {
        pool.addEntry(LootEntry.of("supplementaries:slice_map"))
        pool.addEntry(LootEntry.of("supplementaries:cog_block").setCount([2, 4]))
        pool.addEntry(LootEntry.of("supplementaries:spring_launcher"))
        pool.addEntry(LootEntry.of("supplementaries:cage"))
        pool.addEntry(LootEntry.of("supplementaries:jar"))
        pool.addEntry(LootEntry.of("supplementaries:rope").setCount([8, 32]))
        pool.addEntry(LootEntry.of("supplementaries:rope_arrow"))
    })


    event.create("pizzamon:loot/fun/gacha").createPool(pool => {
        pool.addEntry(LootEntry.of("cobbledgacha:gacha_coin_5").withWeight(33).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobbledgacha:gacha_coin_2").withWeight(33).setCount([1, 3]))
        pool.addEntry(LootEntry.of("cobbledgacha:gacha_coin_3").withWeight(33).setCount([1, 3]))
    })

    event.create("pizzamon:loot/fun/hats/events").createPool(pool => {
        pool.addEntry(LootEntry.of("simplehats:hatbag_easter").withWeight(1))
        pool.addEntry(LootEntry.of("simplehats:hatbag_summer").withWeight(1))
        pool.addEntry(LootEntry.of("simplehats:hatbag_halloween").withWeight(1))
        pool.addEntry(LootEntry.of("simplehats:hatbag_festive").withWeight(1))
    })

    event.create("pizzamon:loot/fun/hats/tiered").createPool(pool => {
        pool.addEntry(LootEntry.of("simplehats:hatbag_common").withWeight(40))
        pool.addEntry(LootEntry.of("simplehats:hatbag_uncommon").withWeight(32))
        pool.addEntry(LootEntry.of("simplehats:hatbag_rare").withWeight(16))
        pool.addEntry(LootEntry.of("simplehats:hatbag_epic").withWeight(8))
    })

    event.create("pizzamon:loot/fun/hats").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/hats/tiered').withWeight(90))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/hats/events').withWeight(10))
    })
    
    // Decor parent pool
    event.create("pizzamon:loot/fun/decor").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/decor/tools').withWeight(50))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/decor/lighting').withWeight(30))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/decor/smokestacks').withWeight(10))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/decor/displays').withWeight(20))
    })
    // Whimsy parent pool
    event.create("pizzamon:loot/fun/whimsy").createPool(pool => {
        pool.addEntry(LootEntry.of("supplementaries:confetti_popper").setCount([8, 16]).withWeight(3))
        pool.addEntry(LootEntry.of("supplementaries:flute").withWeight(2))
        pool.addEntry(LootEntry.of("supplementaries:bubble_blower").withWeight(2))
        pool.addEntry(LootEntry.of("supplementaries:slingshot").withWeight(2))
        pool.addEntry(LootEntry.of("create_things_and_misc:blaze_ballon_fire"))
        pool.addEntry(LootEntry.of("create_things_and_misc:spout_gun"))
        pool.addEntry(LootEntry.of("create:potato_cannon"))
        pool.addEntry(LootEntry.of("splash_milk:splash_milk_bottle"))
        pool.addEntry(LootEntry.of("splash_milk:lingering_milk_bottle"))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/hats').withWeight(3))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/gacha').withWeight(2))
        pool.addEntry(LootEntry.reference('pizzamon:general/art').withWeight(3))
        pool.addEntry(LootEntry.reference('pizzamon:firework_stickers').withWeight(2))
        pool.addEntry(LootEntry.of("createframed:karpboard_block"))
        pool.addEntry(LootEntry.of("immersive_furniture:crafting_material").setCount([8, 16]).withWeight(2))
    })
    // Gadgets parent pool
    event.create("pizzamon:loot/fun/gadgets").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/gadgets/pokemon"))
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/gadgets/supplementaries"))
        pool.addEntry(LootEntry.tag("comforts:sleeping_bags", true))
        pool.addEntry(LootEntry.of("farmingforblockheads:market"))
        pool.addEntry(LootEntry.of("cookingforblockheads:cooking_table"))
        pool.addEntry(LootEntry.of("minecraft:waxed_copper_golem_statue"))
        pool.addEntry(LootEntry.of("apothic_enchanting:flimsy_ender_lead"))
        pool.addEntry(LootEntry.of("apothic_enchanting:scrap_tome"))
        pool.addEntry(LootEntry.tag("pizzamon:type_tomes", true))
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/gadgets/compass"))
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/gadgets/wands"))
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/gadgets/create"))
        pool.addEntry(LootEntry.reference('pizzamon:camera_loot'))
    })

    // "Fun" loot pool, various niche items to expose existence of mods or items otherwise hard to know about
    event.create("pizzamon:loot/fun").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/decor').withWeight(33))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/gadgets').withWeight(33))
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun/whimsy').withWeight(33))
    })



    // All mega stones
    event.create("pizzamon:loot/mega_stones").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:mega_stones", true))
    })
    
    // Type Z-crystals
    event.create("pizzamon:loot/z_crystals/type").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:z_crystal/type", true))
    })
    // Species Z-crystals
    event.create("pizzamon:loot/z_crystals/species").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:z_crystal/species", true))
    })
    // All Z-crystals (weighted)
    event.create("pizzamon:loot/z_crystals").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/z_crystals/type").withWeight(75))
        pool.addEntry(LootEntry.reference("pizzamon:loot/z_crystals/species").withWeight(25))
    })

    // Dyna/gigantamax items
    event.create("pizzamon:loot/dynamax_items").createPool(pool => {
        pool.addEntry(LootEntry.of("mega_showdown:dynamax_candy").withWeight(30).setCount([1, 4]))
        pool.addEntry(LootEntry.of("mega_showdown:max_soup").withWeight(20))
        pool.addEntry(LootEntry.of("mega_showdown:sweet_max_soup").withWeight(20))
        pool.addEntry(LootEntry.of("mega_showdown:max_mushroom").withWeight(30).setCount([4, 8]))
    })

    // Legendary related items
    event.create("pizzamon:loot/cobblelegendary/item_summon").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/item_summon", true))
    })
    event.create("pizzamon:loot/cobblelegendary/structure_summon").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/structure_summon", true))
    })
    event.create("pizzamon:loot/cobblelegendary/summon").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/item_summon"))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/structure_summon"))
    })

    event.create("pizzamon:loot/cobblelegendary/plates").createPool(pool => {
        pool.addEntry(LootEntry.tag("mega_showdown:plates", true))
    })
    event.create("pizzamon:loot/cobblelegendary/drives").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/drives", true))
    })
    event.create("pizzamon:loot/cobblelegendary/memories").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/memories", true))
    })
    event.create("pizzamon:loot/cobblelegendary/type_change").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/memories"))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/drives"))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/plates"))
    })

    event.create("pizzamon:loot/cobblelegendary/form_change").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/form_change", true))
    })
    event.create("pizzamon:loot/cobblelegendary/locate").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/locate", true))
    })
    event.create("pizzamon:loot/cobblelegendary/component").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/component", true))
        pool.addEntry(LootEntry.of("mega_showdown:zygarde_cell").withWeight(3).setCount([1, 3]))
    })
    event.create("pizzamon:loot/cobblelegendary/fusion").createPool(pool => {
        pool.addEntry(LootEntry.tag("pizzamon:legendary/fusion", true))
    })

    event.create("pizzamon:loot/cobblelegendary/misc").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/type_change").withWeight(10))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/form_change").withWeight(10))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/locate").withWeight(10))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/component").withWeight(15))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/fusion").withWeight(5))
    })

    event.create("pizzamon:loot/cobblelegendary").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/type_change").withWeight(15))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/form_change").withWeight(15))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/locate").withWeight(12.5))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/component").withWeight(15))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/fusion").withWeight(12.5))
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary/summon").withWeight(7.5))
    })


    // Payday machine - Shiny capsule bonus
    // Shiny capsules have 2.5% chance to also drop a plush for free!
    event.create("pizzamon:payday/showdown_items").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/mega_stones").withWeight(33))
        pool.addEntry(LootEntry.reference("pizzamon:loot/z_crystals").withWeight(33))
        pool.addEntry(LootEntry.reference("pizzamon:loot/dynamax_items").withWeight(33))
    })
    event.create("pizzamon:payday/materials").createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:iron_ingot").withWeight(32).setCount([8, 16]))
        pool.addEntry(LootEntry.of("minecraft:gold_ingot").withWeight(32).setCount([4, 16]))
        pool.addEntry(LootEntry.of("minecraft:diamond").withWeight(32).setCount([2, 4]))
        pool.addEntry(LootEntry.of("minecraft:emerald").withWeight(24).setCount([4, 8]))
        pool.addEntry(LootEntry.of("minecraft:blaze_rod").withWeight(24).setCount([2, 4]))
        pool.addEntry(LootEntry.of("minecraft:netherite_scrap").withWeight(12).setCount([1, 2]))
        pool.addEntry(LootEntry.of("minecraft:nether_star").withWeight(3))
    })
    event.create("pizzamon:payday/shiny_bonus").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/cobblelegendary").withWeight(33))
        pool.addEntry(LootEntry.reference("pizzamon:payday/materials").withWeight(33))
        pool.addEntry(LootEntry.reference("pizzamon:payday/showdown_items").withWeight(33))
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls"))
        pool.when(conditions => {
            conditions.randomChance(0.025)
        })
    })




    /*
    Useful tables of note:

    bca:item_groups/candies
^ has all XP candies weighted towards XS (but not rare candy)
    bca:item_groups/medicinal_items
    cobblemon:sets/any_type_gem
    bca:item_groups/held_items
    bca:support_tables/evolution
    bca:support_tables/poke_balls
    bca:support_tables/special_rare_items : contains gems, xp candies, fossils, and vanilla extremely rare loot, all pre-weighted
    bca:general/easter_egg : contains the above special rare items table, plus an additional pool of weighted tm/trs with chance to fail

    // Create a NEW Loot table template
    // Followed by secondary pool template

    event.create("pizzamon:").createPool(pool => {
       
    })
    .createPool(pool => {
        
    })

    Give a pool a chance to fail
        pool.when(conditions => {
            conditions.randomChance(0.4)
        })


    // Access an EXISTING loot table template
    
    event.getLootTable("supplementaries:loot/urn_loot/urn_loot").createPool(pool => {

    })


    */

    //
    //
    //  Aggregate / Specific Support Tables (nested tables for specific things, defined just before injects to ensure their pre-reqs are read first))
    //
    //


    // Pizzamon unique loot tables for injecting to anywhere needing better (or more pokemon themed) loot tables
    // Pool 1: General / Valuable Loot, minimum 1 roll
    // Pool 2: Consumables, Balls, & Misc Loot, chance to fail, minimum 1 roll
    // Pool 3: "Fun" loot (1 roll only) fun stuff like joke items or items to expose the identity/existence of niche mods like Exposure, Joy of Painting, etc.; chance to fail
    // Pool 4: Pokedolls, chance to fail, 1 roll
    // Pool 5: Move tutoring items, 1 roll
    // Pool 6: BCA Easter egg pool bonus, 1 roll

    // These tables when injected are meant to be gauranteed rolls ONCE, they then handle all subsequent loot themselves!

    // Pizzamon Common
    event.create("pizzamon:loot/common").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/common').withWeight(64))
        .rolls([1, 2])
    }) // ^ General loot
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:support_tables/evolution').withWeight(10))
        pool.addEntry(LootEntry.reference('bca:support_tables/poke_balls').withWeight(10))
        pool.addEntry(LootEntry.reference('bca:item_groups/held_items').withWeight(4))
        pool.addEntry(LootEntry.reference('pizzamon:relic_coins').withWeight(10))
        pool.addEntry(LootEntry.reference('pizzamon:tera_shards').withWeight(10))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/common').withWeight(16))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/uncommon').withWeight(4))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/rare').withWeight(1))
        pool.when(conditions => {
            conditions.randomChance(0.4)
        })
    }) // ^ Consumables
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.075)
        })
    }) // ^ Fun
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/whimsy/yarn").withWeight(80))
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls").withWeight(20))
        pool.when(conditions => {
            conditions.randomChance(0.03)
        })
    }) // ^ Pokedolls
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:move_tutor_items').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.03)
        })
    }) // ^ TMs/TRs
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:general/easter_egg').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.03)
        })
    }) // ^ Bonus roll

    // Pizzamon Uncommon
    event.create("pizzamon:loot/uncommon").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/common').withWeight(48))
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/uncommon').withWeight(64))
        .rolls([1, 2])
    }) // ^ General loot
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:support_tables/evolution').withWeight(8))
        pool.addEntry(LootEntry.reference('bca:support_tables/poke_balls').withWeight(8))
        pool.addEntry(LootEntry.reference('bca:item_groups/held_items').withWeight(6))
        pool.addEntry(LootEntry.reference('pizzamon:relic_coins').withWeight(12))
        pool.addEntry(LootEntry.reference('pizzamon:tera_shards').withWeight(8))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/common').withWeight(16))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/uncommon').withWeight(16))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/rare').withWeight(2))
        pool.when(conditions => {
            conditions.randomChance(0.66)
        })
        .rolls([1, 3])
    }) // ^ Consumables
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.1)
        })
        .rolls(2)
    }) // ^ Fun
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/whimsy/yarn").withWeight(60))
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls").withWeight(40))
        pool.when(conditions => {
            conditions.randomChance(0.06)
        })
    }) // ^ Pokedolls
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:move_tutor_items').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.06)
        })
    }) // ^ TMs/TRs
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:general/easter_egg').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.03)
        })
    }) // ^ Bonus roll

    // Pizzamon Rare
    event.create("pizzamon:loot/rare").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/common').withWeight(16))
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/uncommon').withWeight(32))
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/rare').withWeight(32))
        .rolls([2, 3])
    }) // ^ General loot
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:support_tables/evolution').withWeight(6))
        pool.addEntry(LootEntry.reference('bca:support_tables/poke_balls').withWeight(8))
        pool.addEntry(LootEntry.reference('bca:item_groups/held_items').withWeight(10))
        pool.addEntry(LootEntry.reference('pizzamon:relic_coins').withWeight(12))
        pool.addEntry(LootEntry.reference('pizzamon:tera_shards').withWeight(4))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/common').withWeight(3))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/uncommon').withWeight(6))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/rare').withWeight(9))
        pool.when(conditions => {
            conditions.randomChance(0.75)
        })
        .rolls([2, 3])
    }) // ^ Consumables
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.125)
        })
        .rolls(2)
    }) // ^ Fun
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/whimsy/yarn").withWeight(40))
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls").withWeight(60))
        pool.when(conditions => {
            conditions.randomChance(0.09)
        })
    }) // ^ Pokedolls
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:move_tutor_items').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.09)
        })
    }) // ^ TMs/TRs
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:general/easter_egg').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.03)
        })
    }) // ^ Bonus roll
    .createPool(pool => {
        pool.addEntry(LootEntry.of('mega_showdown:zygarde_cell'))
        pool.when(conditions => {
            conditions.randomChance(0.2)
        })
    }) // ^ Bonus Zygarde Cells roll

    // Pizzamon Epic
    event.create("pizzamon:loot/epic").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/common').withWeight(16))
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/uncommon').withWeight(32))
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/rare').withWeight(48))
        .rolls([2, 4])
    }) // ^ General loot
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:support_tables/evolution').withWeight(4))
        pool.addEntry(LootEntry.reference('bca:support_tables/poke_balls').withWeight(6))
        pool.addEntry(LootEntry.reference('bca:item_groups/held_items').withWeight(12))
        pool.addEntry(LootEntry.reference('pizzamon:relic_coins').withWeight(12))
        pool.addEntry(LootEntry.reference('pizzamon:tera_shards').withWeight(4))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/common').withWeight(2))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/uncommon').withWeight(8))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/rare').withWeight(12))
        pool.when(conditions => {
            conditions.randomChance(0.85)
        })
        .rolls([2, 4])
    }) // ^ Consumables
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.12)
        })
        .rolls(3)
    }) // ^ Fun
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:loot/fun/whimsy/yarn").withWeight(20))
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls").withWeight(80))
        pool.when(conditions => {
            conditions.randomChance(0.12)
        })
    }) // ^ Pokedolls
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:move_tutor_items').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.12)
        })
    }) // ^ TMs/TRs
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:general/easter_egg').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.03)
        })
    }) // ^ Bonus roll
    .createPool(pool => {
        pool.addEntry(LootEntry.of('mega_showdown:zygarde_cell').setCount([1, 3]))
        pool.when(conditions => {
            conditions.randomChance(0.33)
        })
    }) // ^ Bonus Zygarde Cells roll

    // Pizzamon Legendary
    event.create("pizzamon:loot/legendary").createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/common').withWeight(8))
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/uncommon').withWeight(16))
        pool.addEntry(LootEntry.reference('pizzamon:loot/materials/rare').withWeight(48))
        .rolls([3, 6])
    }) // ^ General loot
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:support_tables/evolution').withWeight(2))
        pool.addEntry(LootEntry.reference('bca:support_tables/poke_balls').withWeight(4))
        pool.addEntry(LootEntry.reference('bca:item_groups/held_items').withWeight(16))
        pool.addEntry(LootEntry.reference('pizzamon:relic_coins').withWeight(12))
        pool.addEntry(LootEntry.reference('pizzamon:tera_shards').withWeight(4))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/common').withWeight(1))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/uncommon').withWeight(8))
        pool.addEntry(LootEntry.reference('pizzamon:consumables/rare').withWeight(16))
        .rolls([3, 6])
    }) // ^ Consumables
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:loot/fun').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.15)
        })
        .rolls(3)
    }) // ^ Fun
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls"))
        pool.when(conditions => {
            conditions.randomChance(0.15)
        })
    }) // ^ Pokedolls
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('pizzamon:move_tutor_items').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.15)
        })
    }) // ^ TMs/TRs
    .createPool(pool => {
        pool.addEntry(LootEntry.reference('bca:general/easter_egg').withWeight(10))
        pool.when(conditions => {
            conditions.randomChance(0.03)
        })
    }) // ^ Bonus roll
    .createPool(pool => {
        pool.addEntry(LootEntry.of('mega_showdown:zygarde_cell').setCount([2, 5]))
        pool.when(conditions => {
            conditions.randomChance(0.66)
        })
    }) // ^ Bonus Zygarde Cells roll



    
    // Gambler trainers
    event.create("pizzamon:lets_go_gambling").createPool(pool => {
        pool.addEntry(LootEntry.of("cobblemon:blunder_policy").withWeight(7))
        pool.addEntry(LootEntry.of("cobblemon:loaded_dice").withWeight(1))
        pool.addEntry(LootEntry.of("cobblemon:black_glasses").withWeight(10))
        pool.addEntry(LootEntry.of("cobblemon:covert_cloak").withWeight(5))
        pool.addEntry(LootEntry.of("cobblemon:eject_button").withWeight(4))
        pool.addEntry(LootEntry.of("cobblemon:red_card").withWeight(4))
        pool.addEntry(LootEntry.of("cobblemon:choice_band").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:choice_scarf").withWeight(2))
        pool.addEntry(LootEntry.of("cobblemon:choice_specs").withWeight(2))
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.of("cobbledgacha:gacha_coin_2").withWeight(5).setCount([3, 8]))
        pool.addEntry(LootEntry.of("cobbledgacha:gacha_coin_3").withWeight(5).setCount([3, 8]))
        pool.addEntry(LootEntry.of("cobbledgacha:gacha_coin_5").withWeight(5).setCount([3, 8]))
        pool.addEntry(LootEntry.reference('pizzamon:relic_coins').withWeight(10))
        .rolls([1, 3])
    })

    // Pokemaniac trainers / pokefan trainer loot
    event.create("pizzamon:pokemaniac_loot").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_accessories").when(c => c.randomChance(0.33)))
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:firework_stickers").withWeight(2))
        pool.addEntry(LootEntry.of('fireworkcapsules:ball_capsule').withWeight(10))
        .rolls([1, 2])
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:all_pokedolls"))
        .rolls(1)
    })


    //
    // 
    // Inject support tables for the modpack into other loot tables
    // 
    //

    //
    // Supplementaries Urns
    //
    // Always roll tumblestones
    event.getLootTable("supplementaries:loot/urn_loot/urn_loot").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:tumblestones"))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    // Rarity tiers
    event.getLootTable("supplementaries:loot/urn_loot/common").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:tier_1_ancient_balls"))
    })
    event.getLootTable("supplementaries:loot/urn_loot/uncommon").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:tier_2_ancient_balls").withWeight(6))
        pool.addEntry(LootEntry.reference("cobblemon:sets/any_type_gem").withWeight(3).setCount(1))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    event.getLootTable("supplementaries:loot/urn_loot/rare").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:tier_3_ancient_balls").withWeight(3).setCount([1, 2]))
        pool.addEntry(LootEntry.reference("bca:item_groups/held_items"))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.of('mega_showdown:zygarde_cell'))
        pool.when(conditions => {
            conditions.randomChance(0.05)
        })
    }) // ^ Bonus Zygarde Cells roll for rare tier
    event.getLootTable("supplementaries:loot/urn_loot/epic").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:tier_3_ancient_balls").withWeight(3).setCount([2, 4]))
        pool.addEntry(LootEntry.reference("bca:item_groups/held_items"))
        pool.when(conditions => {
            conditions.randomChance(0.5)
        })
        .rolls(3)
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.of('mega_showdown:zygarde_cell'))
        pool.when(conditions => {
            conditions.randomChance(0.15)
        })
    }) // ^ Bonus Zygarde Cells roll for epic tier

    //
    // RCT Trainers
    //
    // Cameraman category trainers
    event.getLootTable("rctmod:trainers/groups/cameraman").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:camera_loot"))
    })
    // Police category trainers
    event.getLootTable("rctmod:trainers/groups/police").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:acab"))
    })
    // Artist category trainers
    event.getLootTable("rctmod:trainers/groups/artist").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:art_supplies"))
    })
    // Gambler category trainers
    event.getLootTable("rctmod:trainers/groups/gambler").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:lets_go_gambling"))
    })
    // Professor/Scientist category trainers
    event.getLootTable("rctmod:trainers/groups/scientist").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:science_team"))
    })
    event.getLootTable("rctmod:trainers/groups/prof").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:science_team"))
    })
    event.getLootTable("rctmod:trainers/groups/professor").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:science_team"))
    })
    event.getLootTable("rctmod:trainers/groups/prof_prof").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:science_team"))
    })
    // Rancher/Breeder category trainers
    event.getLootTable("rctmod:trainers/groups/pokemon_breeder").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemon_breeding"))
    })
    event.getLootTable("rctmod:trainers/groups/rancher").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemon_breeding"))
    })
    event.getLootTable("rctmod:trainers/groups/breeder").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemon_breeding"))
    })
    event.getLootTable("rctmod:trainers/groups/cowgirl").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemon_breeding"))
    })
    // Maniac/Fan category trainers
    event.getLootTable("rctmod:trainers/groups/pokemaniac").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_loot"))
    })
    event.getLootTable("rctmod:trainers/groups/poke_kid").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_loot"))
    })
    event.getLootTable("rctmod:trainers/groups/poke_fan").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_loot"))
    })
    event.getLootTable("rctmod:trainers/groups/pokefan").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_loot"))
    })
    event.getLootTable("rctmod:trainers/groups/game_freaks").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_loot"))
    })
    event.getLootTable("rctmod:trainers/groups/friendly_maniac").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_loot"))
    })
    event.getLootTable("rctmod:trainers/groups/collector").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:pokemaniac_loot"))
    })



    //
    // Trial Chambers & Spawners + Cobblemon Trials Edition (Temporarily all commented out while investigating the Trials Edition tables not being recognized)
    //

    
    event.getLootTable("minecraft:spawners/ominous/trial_chamber/key").createPool(pool => {
    
    })
    event.getLootTable("minecraft:spawners/ominous/trial_chamber/consumables").createPool(pool => {

    })
    event.getLootTable("minecraft:spawners/trial_chamber/key").createPool(pool => {

    })
    event.getLootTable("minecraft:spawners/trial_chamber/consumables").createPool(pool => {

    })

    // Cobblemon Trials Edition
    event.create("pizzamon:loot/trialsedition/default-mob-spawner").createPool(pool => {
       LootEntry.alternative(
        LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.05)),
        LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.25)),
        LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.5)),
        LootEntry.reference("pizzamon:loot/common")
       )
    })

    event.create("pizzamon:loot/trialsedition/monster-room").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })

    event.create("pizzamon:loot/trialsedition/abandoned-mineshaft").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })

    event.create("pizzamon:loot/trialsedition/bastion-remnant").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.1)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.33)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.66)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })

    event.create("pizzamon:loot/trialsedition/fortress").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.1)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.33)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.66)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })

    event.create("pizzamon:loot/trialsedition/stronghold").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.15)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.75)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })


    // Ominous variants
    event.create("pizzamon:loot/trialsedition/ominous-default-mob-spawner").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })
    event.create("pizzamon:loot/trialsedition/ominous-monster-room").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })
    event.create("pizzamon:loot/trialsedition/ominous-abandoned-mineshaft").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })
    event.create("pizzamon:loot/trialsedition/ominous-bastion-remnant").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.03)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.15)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.75)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })
    event.create("pizzamon:loot/trialsedition/ominous-fortress").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.03)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.15)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.75)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })
    event.create("pizzamon:loot/trialsedition/ominous-stronghold").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.15)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.75)),
            LootEntry.reference("pizzamon:loot/common")
           )
    })

    //
    // Raid den tables
    //
    // Tier one (Level 12?)
    event.getLootTable("cobblemonraiddens:raid/tier/tier_one").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.005)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/common")
        )
        pool.rolls(1)
    })
    // Tier two (Level 25?)
    event.getLootTable("cobblemonraiddens:raid/tier/tier_two").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.0075)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.02)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.075)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.33)),
            LootEntry.reference("pizzamon:loot/common")
        )
        pool.rolls(1)
    })
    // Tier three (Level 35)
    event.getLootTable("cobblemonraiddens:raid/tier/tier_three").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.0333)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.15)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/common")
        )
        pool.rolls([1, 2])
    })
    // Tier four (Level 45)
    event.getLootTable("cobblemonraiddens:raid/tier/tier_four").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.02)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.075)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.33)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.75)),
            LootEntry.reference("pizzamon:loot/common")
        )
        pool.rolls([1, 3])
    })
    
    // Tier five (Level 75)
    event.getLootTable("cobblemonraiddens:raid/tier/tier_five").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.15)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.5)),
            LootEntry.reference("pizzamon:loot/uncommon")
        )
        pool.rolls([2, 3])
    })
    // Tier six (Level 90) Only exist with additional datapacks from mod author's discord for literally no reason
    event.getLootTable("cobblemonraiddens:raid/tier/tier_six").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.1)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.66)),
            LootEntry.reference("pizzamon:loot/uncommon")
        )
        pool.rolls(3)
    })
    // Tier seven (Level 100) Only exist with additional datapacks from mod author's discord for literally no reason
    event.getLootTable("cobblemonraiddens:raid/tier/tier_seven").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.2)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.33)),
            LootEntry.reference("pizzamon:loot/rare")
        )
        pool.rolls(3)
    })


    // Rad Gyms tables
    event.getLootTable("rad_gyms:gyms/default/common_loot_table").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.0075)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.02)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.075)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.33)),
            LootEntry.reference("pizzamon:loot/common")
        )
        pool.rolls(1)
    })

    event.getLootTable("rad_gyms:gyms/default/uncommon_loot_table").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.01)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.0333)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.2)),
            LootEntry.reference("pizzamon:loot/uncommon").when(c => c.randomChance(0.75)),
            LootEntry.reference("pizzamon:loot/common")
        )
        pool.rolls([1, 2])
    })

    event.getLootTable("rad_gyms:gyms/default/rare_loot_table").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.05)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.15)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.4)),
            LootEntry.reference("pizzamon:loot/uncommon")
        )
        pool.rolls(2)
    })

    event.getLootTable("rad_gyms:gyms/default/epic_loot_table").createPool(pool => {
        LootEntry.alternative(
            LootEntry.reference("pizzamon:loot/legendary").when(c => c.randomChance(0.1)),
            LootEntry.reference("pizzamon:loot/epic").when(c => c.randomChance(0.25)),
            LootEntry.reference("pizzamon:loot/rare").when(c => c.randomChance(0.66)),
            LootEntry.reference("pizzamon:loot/uncommon")
        )
        pool.rolls([2, 3])
    })





    // Rustling spots?




    //
    //
    // Directly modify other loot tables (NOT adding new pools)
    //
    //

    // BCA support table additions (BCA tables are the chests and containers in the fancy bigger towns)
    // Ingots table
    event.getLootTable("bca:item_groups/ingots").firstPool(pool => {
        pool.addEntry(LootEntry.of("create:andesite_alloy").withWeight(32).setCount([2, 8]))
        pool.addEntry(LootEntry.of("create:zinc_ingot").withWeight(32).setCount([2, 4]))
        pool.addEntry(LootEntry.of("create:brass_ingot").withWeight(16).setCount([1, 3]))
        pool.addEntry(LootEntry.of("silentgear:crimson_iron_ingot").withWeight(4))
    })
    // Nuggets table
    event.getLootTable("bca:item_groups/nuggets").firstPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:copper_nugget"))
        pool.addEntry(LootEntry.of("create:zinc_nugget"))
        pool.addEntry(LootEntry.of("create:brass_nugget"))
        pool.addEntry(LootEntry.of("silentgear:crimson_iron_nugget"))
    })
    // Ore block table
    event.getLootTable("bca:item_groups/ore").firstPool(pool => {
        pool.addEntry(LootEntry.of("silentgear:bort_ore").withWeight(8))
        pool.addEntry(LootEntry.of("silentgear:deepslate_bort_ore").withWeight(4))
        pool.addEntry(LootEntry.of("silentgear:crimson_iron_ore").withWeight(3))
        pool.addEntry(LootEntry.of("silentgear:blackstone_crimson_iron_ore").withWeight(2))
        pool.addEntry(LootEntry.of("expandeddelight:salt_ore").withWeight(16))
        pool.addEntry(LootEntry.of("expandeddelight:deepslate_salt_ore").withWeight(8))
        pool.addEntry(LootEntry.of("create:zinc_ore").withWeight(16))
        pool.addEntry(LootEntry.of("create:deepslate_zinc_ore").withWeight(8))
    })
    // Raw ore table
    event.getLootTable("bca:item_groups/raw_minerals").firstPool(pool => {
        pool.addEntry(LootEntry.of("create:raw_zinc").withWeight(3).setCount([1, 7]))
        pool.addEntry(LootEntry.of("silentgear:raw_crimson_iron").withWeight(1).setCount([1, 3]))
    })
    // Redstone
    event.getLootTable("bca:item_groups/redstone").firstPool(pool => {

    })
    event.getLootTable("bca:support_tables/redstone_tech").firstPool(pool => {

    })
    // Food tables
    event.getLootTable("bca:item_groups/pokefood").createPool(pool => {

    })
    event.getLootTable("bca:item_groups/cobblefood").createPool(pool => {

    })
    event.getLootTable("bca:support_tables/fridge").createPool(pool => {
        pool.addEntry(LootEntry.reference("pizzamon:cuisine_all"))
        .rolls(1)
    })

    // Aquaculture tables
    // Boxes
    event.getLootTable("aquaculture:box/box").createPool(pool => {
        pool.addEntry(LootEntry.reference("wet_treasure"))
        pool.when(conditions => {
            conditions.randomChance(0.1)
        })
    })
    event.getLootTable("aquaculture:box/lockbox").createPool(pool => {
        pool.addEntry(LootEntry.reference("wet_treasure"))
        pool.when(conditions => {
            conditions.randomChance(0.33)
        })
    })
    event.getLootTable("aquaculture:box/treasure_chest").createPool(pool => {
        pool.addEntry(LootEntry.reference("wet_treasure"))
        pool.when(conditions => {
            conditions.randomChance(0.66)
        })
    })
    event.getLootTable("aquaculture:gameplay/fishing/junk").createPool(pool => {
        pool.addEntry(LootEntry.reference("wet_treasure"))
        pool.when(conditions => {
            conditions.randomChance(0.05)
        })
    })
})