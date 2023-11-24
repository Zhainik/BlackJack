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

    const point = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]
    const images = ['2-C.png', '3-C.png', '4-C.png', '5-C.png', '6-C.png', '7-C.png', '8-C.png', '9-C.png', '10-C.png', 'J-C.png', 'Q-C.png', 'K-C.png', 'A-C.png',]

    let player = []
    let computer = []
    function getC() {
        return Math.floor(Math.random() * point.length)
    }

    pBtn.addEventListener('click', () => {
        const ranN = getC()
        playerSum.textContent = point[ranN]
        const img = document.createElement('img')
        img.src = `./img/${images[ranN]}`
        pDiv.append(img)
        player.push(point[ranN])
        const pSum = player.reduce((priviousSum, currentV) => { return priviousSum + currentV }, 0)
        playerSum.textContent = pSum
        if (pSum > 21) {
            rDiv.innerHTML = `<h1>У вас перебор. Вы проиграли.</h1>`
            pBtn.disabled = true
            cBtn.disabled = true
        } else if (pSum === 21) {
            rDiv.innerHTML = `<h1>Поздравляем! У вас блэкджек!</h1>`
            pBtn.disabled = true
            cBtn.disabled = true
        }

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
            rDiv.innerHTML = `<h1>У компьютера перебор. Вы выйграли.</h1>`
            pBtn.disabled = true
            cBtn.disabled = true
        } else if (cSum === 21) {
            rDiv.innerHTML = `<h1>Поздравляем! У компьютера блэкджек!</h1>`
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