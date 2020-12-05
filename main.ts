namespace SpriteKind {
    export const Veggie = SpriteKind.create()
    export const Sprout = SpriteKind.create()
}

function rabbitGoToSprout(){
    let sprouts = sprites.allOfKind(SpriteKind.Sprout)
    if(sprouts.length > 0.00){
        let sproutIndex = randint(0, sprouts.length - 1)
        let sprout = sprouts[sproutIndex]
    }
}

function createSprouts () {
    if(avaliableTiles.length > 0){
        sprout = sprites.create(sproutImg, SpriteKind.Sprout)
        tileIndex = randint(0, avaliableTiles.length - 1)
        tiles.placeOnTile(sprout, avaliableTiles[tileIndex])
        avaliableTiles.removeAt(tileIndex)
    }
}
let tileIndex = 0
let sprout: Sprite = null
let avaliableTiles: tiles.Location[] = []
let sproutImg: Image = null
let veggies = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 . . 6 6 6 6 . . 
    . . . . . . 6 6 6 6 6 7 7 6 . . 
    . . . . . 6 7 7 6 6 7 7 7 6 . . 
    . . . . . 6 7 7 6 7 7 6 6 6 . . 
    . . 6 6 6 6 7 7 7 7 7 6 6 . . . 
    . . 6 7 7 6 7 7 7 7 7 7 6 6 . . 
    . . 6 7 7 7 7 7 7 7 7 7 6 6 . . 
    . . 6 6 7 7 7 7 7 7 7 6 6 6 . . 
    . . . 6 6 6 6 6 7 7 6 6 . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 1 . . . . . . 
    . . . . . . . 7 1 7 . . . . . . 
    . . . . . . . e . e . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 . 7 7 
    . . . . . . . . . 4 4 4 4 . . 7 
    . . . . . . . . 4 4 4 4 4 . . . 
    . . . . . . . . 4 4 4 4 e . . . 
    . . . . . . . 4 4 4 4 e . . . . 
    . . . . . . 4 4 4 4 e . . . . . 
    . . . . . 4 4 4 e e . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 e . . . . . . . . 
    . . . . 4 4 e . . . . . . . . . 
    . . . 4 e . . . . . . . . . . . 
    . . 4 4 . . . . . . . . . . . . 
    . . 4 e . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 6 6 6 6 . . . . 
    . . . . . . 6 6 7 7 7 6 6 . . . 
    . . . . . 6 7 7 7 6 7 7 6 . . . 
    . . . . 6 7 7 6 6 6 6 7 6 . . . 
    . . . 6 6 7 7 6 7 7 6 7 6 . . . 
    . . . 6 7 7 6 6 7 7 6 7 . . . . 
    . . . 6 7 6 6 7 7 6 6 6 . . . . 
    . . . 6 7 6 7 7 6 6 7 6 . . . . 
    . . . 6 7 6 7 6 7 7 6 . . . . . 
    . . . 6 7 6 6 7 7 6 6 . . . . . 
    . . . . 6 7 7 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 7 7 . . . . . 
    . . . . . e e e e 7 e e e e . . 
    . . . . e e e e e e e e e e e . 
    . . . e e e d e e e e e e e e . 
    . . . e e e e e e e e e e e b . 
    . . e e e e e e e e e e e b b . 
    . . e e e e e e e e e e b b . . 
    . . e e f e e e e e e e b b . . 
    . . e e e e e e e e e b b . . . 
    . . e e e e e e d e b b . . . . 
    . . . . e b b b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . 7 7 . 7 7 . . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . . . 7 7 . . . . . 
    . . . . . 4 4 2 2 7 4 2 2 . . . 
    . . . . 4 4 2 2 2 4 2 2 2 . . . 
    . . . . 4 4 2 2 4 2 2 2 2 . . . 
    . . . . 4 4 2 2 4 2 2 2 2 . . . 
    . . . . 2 4 2 2 4 2 2 2 2 . . . 
    . . . . 2 4 2 2 4 2 2 2 2 . . . 
    . . . . . 4 2 2 4 2 2 2 2 . . . 
    . . . . . 4 2 2 4 2 2 2 2 . . . 
    . . . . . 4 4 2 4 2 2 2 2 . . . 
    . . . . . . 4 2 4 4 2 2 2 . . . 
    . . . . . . 4 4 2 4 4 2 . . . . 
    . . . . . . . 4 2 2 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 5 5 5 . . . . 
    . . . . . . 5 5 5 d 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 d 5 5 5 5 4 4 4 . . . 
    . . . . 5 5 5 5 4 4 4 . . . . . 
    . . . . 5 5 5 4 . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 d . . . 
    . . . 5 5 5 5 5 5 5 d d 5 5 . . 
    . . . 5 5 d d 5 5 5 5 5 5 5 . . 
    . . 5 5 5 d 5 5 5 d 5 5 5 4 . . 
    . . 5 5 5 5 5 5 5 5 5 5 4 4 . . 
    . . 5 5 5 d 5 5 d 5 5 4 4 . . . 
    . . 4 4 4 5 5 5 5 5 4 4 . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . c c c a a a . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . a a a a a a a a . . . . 
    . . . . c a a a a a a a . . . . 
    . . . . c a a a a a a a . . . . 
    . . . . c c a a a a a a . . . . 
    . . . . . c a a a a a a . . . . 
    . . . . . c c a a a a a . . . . 
    . . . . . . c c a a a a . . . . 
    . . . . . . a c c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
sproutImg = img`
    . . . . 
    . 7 . 7 
    7 7 7 7 
    . 7 7 . 
    `
let player = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . 
    . f . . . . . . . . . . . . . . 
    f f . . . . . . . . . 4 4 . . . 
    f . . . . . . . . . 4 f 4 . . . 
    f . . . . . . . . . f f 4 4 . . 
    f f . . . . . . . 4 4 4 4 4 4 . 
    . f . . . . . . . . f f f f . . 
    . f f f f f f f f f f f 5 f f . 
    . . f f f f f f f f f f f f f . 
    . . f f f f f f f f f . . . . . 
    . . f . f . . . f . f . . . . . 
    . . f . f . . . f . f . . . . . 
    . . f . f . . . f . f . . . . . 
    `, SpriteKind.Player)
let rabbit = sprites.create(img`
    . . . . . . 1 . . 1 1 . . . . . 
    . . . . . 1 1 . . 1 . . . . . . 
    . . . . . 1 3 . 1 1 . . . . . . 
    . . . . . 1 3 . 1 3 . . . . . . 
    . . . . . 1 3 . 1 3 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 f 1 1 f . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 . 1 1 1 . 1 . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    `, SpriteKind.Enemy)
tiles.setTilemap(tilemap`level`)
avaliableTiles = tiles.getTilesByType(myTiles.tile1)
scene.cameraFollowSprite(player)
controller.moveSprite(player)
info.player1.setScore(0)
info.player2.setScore(0)
scene.setBackgroundColor(13)
game.onUpdateInterval(100, function () {
    createSprouts()
})