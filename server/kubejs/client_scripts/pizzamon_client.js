// Modify tooltips clientside
ItemEvents.modifyTooltips(event => {

    // Add tooltips for gacha coins and Payday tokens
    event.add('cobbledgacha:gacha_coin_5', {shift: false}, Text.gray('Hold Shift for details'))
    event.modify('cobbledgacha:gacha_coin_5', {shift:true}, tooltip => {
        tooltip.add(Text.gold('A token for a Game Corner "Payday" slot machine. Can be cashed out for 800 Pokedollars at any CobbleDollars merchant.'))
        tooltip.add(Text.gray('"In the Spagonia region, all shops are legally mandated to accept and cash out casino chips." - Prof. S.Ghetti').italic(true))
    })
    event.add('cobbledgacha:gacha_coin_2', {shift: false}, Text.gray('No cash value.').italic(true))
    event.add('cobbledgacha:gacha_coin_3', {shift: false}, Text.gray('No cash value.').italic(true))

    // Add tooltips for yarns
    event.add('#pizzamon:plush_yarns', {shift: false}, Text.gray('Hold Shift for details'))
    event.modify('#pizzamon:plush_yarns', {shift:true}, tooltip => {
        tooltip.add(Text.white('An odd bundle of yarn. You can insert multiple of the same type into a Plush-O-Matic to make a Pokédoll!').italic(true))
    })
})
// Add missing translation keys for various things (minor fixes)
ClientEvents.lang('en_us', event => { 
    // Add translation keys for the custom Advanced Loot Info categories that are added to the modpack to EMI
    event.add('emi.category.ali.cobblemon_trials_edition', 'Cobblemon Trials Edition Loot')
    event.add('emi.category.ali.cobblemon_trainers', 'Cobblemon Trainer Rewards')
    event.add('emi.category.ali.cobblemon_raid_dens', 'Cobblemon Raid Dens Loot')
    event.add('emi.category.ali.cobblemon_rad_gyms', 'Cobblemon Rad Gyms Loot')
    // Fix missing translation keys for two villager professions from CobbleDollars and Legendary Monuments
    event.add('entity.minecraft.villager.cobbledollars.cobble_merchant', 'CobbleDollars Merchant')
    event.add('entity.minecraft.villager.legendarymonuments.entrepreneur', 'Entrepeneur')
})