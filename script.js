document.addEventListener('DOMContentLoaded', () => {
    const allBtn = document.querySelectorAll('button')
    const deal = allBtn[0]
    const cBtn = allBtn[1]
    const pBtn = allBtn[2]
    const cDiv = document.getElementById('computer-cards')
    const pDiv = document.getElementById('player-cards')
    const computerSum = document.getElementById('computer-sum')
    const playerSum = document.getElementById('player-sum')
    const rDiv = document.getElementById('result')

    // const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    // const point = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]
    // const images = ['2-C.png', '3-C.png', '4-C.png', '5-C.png', '6-C.png', '7-C.png', '8-C.png', '9-C.png', '10-C.png', 'J-C.png', 'Q-C.png', 'K-C.png', 'A-C.png',]

    const pointC = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]
    const clubs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const imagesClubs = ['2-C.png', '3-C.png', '4-C.png', '5-C.png', '6-C.png', '7-C.png', '8-C.png', '9-C.png', '10-C.png', 'J-C.png', 'Q-C.png', 'K-C.png', 'A-C.png',]

    const pointH = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]
    const hearts = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const imagesHearts = ['2-H.png', '3-H.png', '4-H.png', '5-H.png', '6-H.png', '7-H.png', '8-H.png', '9-H.png', '10-H.png', 'J-H.png', 'Q-H.png', 'K-H.png', 'A-H.png',]

    const pointS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]
    const spades = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const imagesSpades = ['2-S.png', '3-S.png', '4-S.png', '5-S.png', '6-S.png', '7-S.png', '8-S.png', '9-S.png', '10-S.png', 'J-S.png', 'Q-S.png', 'K-S.png', 'A-S.png',]

    const pointD = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]
    const diamonds = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const imagesDiamonds = ['2-D.png', '3-D.png', '4-D.png', '5-D.png', '6-D.png', '7-D.png', '8-D.png', '9-D.png', '10-D.png', 'J-D.png', 'Q-D.png', 'K-D.png', 'A-D.png',]

    const point = [pointC, pointH, pointS, pointD]
    const values = [clubs, hearts, spades, diamonds]
    const images = [imagesClubs, imagesDiamonds, imagesHearts, imagesSpades]

    let player = []
    let computer = []
    function getC() {
        return Math.floor(Math.random() * values.length)
    }
    function getI(suitIndex) {
        const randomImg = Math.floor(Math.random() * images[suitIndex].length)
        return `./img/${images[suitIndex][randomImg]}`
    }

    pBtn.addEventListener('click', () => {
        const ranN = getC()
        const pointValue = point[ranN][Math.floor(Math.random() * point[ranN].length)]
        playerSum.textContent = pointValue
        const img = document.createElement('img')
        img.src = getI(ranN)
        pDiv.append(img)
        player.push(pointValue)
        const pSum = player.reduce((priviousSum, currentV) => { return priviousSum + currentV }, 0)
        playerSum.textContent = pSum

        if (pSum > 21) {
            rDiv.innerHTML = `<h1>У вас перебор. Вы проиграли.<h1>`
            pBtn.disabled = true
            cBtn.disabled = true
        } else if (pSum === 21) {
            rDiv.innerHTML = `<h1>Поздравляем! У вас блэкджек!<h1>`
            pBtn.disabled = true
            cBtn.disabled = true
        }

        console.log(pointValue)
    })

    cBtn.addEventListener('click', () => {
        const ranN = getC()
        computerSum.textContent = point[ranN]
        const img = document.createElement('img')
        img.src = `./img/${images[ranN]}`
        cDiv.append(img)
        computer.push(point[ranN])
        const cSum = computer.reduce((priviousSum, currentV) => { return priviousSum + currentV }, 0)
        computerSum.textContent = cSum
        if (cSum > 21) {
            rDiv.innerHTML = `<h1>У компьютера перебор. Вы выйграли.<h1/`
            pBtn.disabled = true
            cBtn.disabled = true
        } else if (cSum === 21) {
            rDiv.innerHTML = `<h1>Поздравляем! У компьютера блэкджек!<h1>`
            pBtn.disabled = true
            cBtn.disabled = true
        }
    })

    deal.addEventListener('click', () => {
        player = []
        computer = []
        cDiv.innerHTML = ''
        pDiv.innerHTML = ''
        computerSum.innerHTML = ''
        playerSum.innerHTML = ''
        rDiv.innerHTML = ''
        pBtn.disabled = false
        cBtn.disabled = false

    })
})