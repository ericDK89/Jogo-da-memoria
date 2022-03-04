const front = 'card_front'
const back = 'card_back'
let techs = ['bootstrap', 'css', 'electron', 'firebase', 'html', 'javascript', 'jquery', 'mongo', 'node', 'react']
let cards = null

startGame()

function startGame() {
    cards = createCardFromTechs(techs)
    shuffleCards(cards)
    initializeCards(cards)
    console.log(cards);

}

function initializeCards(cards) {
    let gameBoard = document.querySelector("#gameBoard")

    for (let card of cards) {

    }
}

function shuffleCards(cards) {

    let currentIndex = cards.length
    let randomIndex = 0

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

createCardFromTechs(techs)

function createCardFromTechs(techs) {
    let cards = []

    techs.forEach((tech) => {
        cards.push(createPairFromTechs(tech))
    })

    return cards.flatMap(pair => pair)
}

function createPairFromTechs(tech) {

    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    }]

}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000)
}