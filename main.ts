 let ship = sprites.create(img`
     . . . . . . . c d . . . . . . .
     . . . . . . . c d . . . . . . .
     . . . . . . . c d . . . . . . .
     . . . . . . . c b . . . . . . .
     . . . . . . . f f . . . . . . .
     . . . . . . . c 4 . . . . . . .
     . . . . . . . f f . . . . . . .
     . . . . . . . e 4 . . . . . . .
     . . . . . . e e 5 2 . . . . . .
     . . . . . . e 4 5 2 . . . . . .
     . . . . . c c c 2 2 2 . . . . .
     . . . . e e 4 4 4 5 2 2 . . . .
     . . e f f f c c 2 2 f f 2 2 . .
     . e e e e 2 2 4 4 4 4 5 4 2 2 .
     e e e e e e 2 2 4 4 4 5 4 4 2 2
     e e e e e e 2 2 4 4 4 4 5 4 2 2
 `, SpriteKind.Player)
ship.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(ship)
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    sprites.createProjectileFromSprite(img`
        8 4 4 8
        8 4 5 8
        8 5 4 8
        8 4 5 8
        8 5 4 8
        8 4 5 8
        8 5 4 8
        8 4 4 8
    `, ship, 0, -200)
    pause(150)
})
game.onUpdateInterval(500, function() {
    let asteroid = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
})