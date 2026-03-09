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
})
