

const colorElms = [...document.querySelectorAll('#game-board > div')]
const scoreElm = document.querySelector('#score > span')
const gameOverElm = document.getElementById('fin-juego')
const restartBtnElm = document.querySelector('#fin-juego > button')

let score
let diff
let answer

// random integer from min to max
const random = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
)

const updateScore = newScore => {
  score = newScore
  scoreElm.textContent = newScore
}

const startGame = () => {
  updateScore(0)
  diff = 100
  renderGame()
  gameOverElm.style.display = 'none'
}

const renderGame = () => {
  const color = [
    random(0, 255), // R
    random(0, 255), // G
    random(0, 255), // B
  ]
  const wrongColor = [
    color[0], // R
    color[1], // G
    color[2], // B
  ]
  
  const wrongCh = random(0, 2)
  wrongColor[wrongCh] = random(0, 1)
    ? Math.min(255, color[wrongCh] + diff)
    : Math.max(0, color[wrongCh] - diff)
  
  answer = random(0, 8)
  
  colorElms.forEach((colorElm, index) => {
    if (index === answer) {
      colorElm.style.background = `rgb(
        ${wrongColor[0]},
        ${wrongColor[1]},
        ${wrongColor[2]}
      )`
    } else {
      colorElm.style.background = `rgb(
        ${color[0]},
        ${color[1]},
        ${color[2]}
      )`
    }
  })
}

colorElms.forEach((colorElm, index) => {
  colorElm.addEventListener('click', () => {
    if (index === answer) {
      updateScore(score + 1)
      diff = Math.max(1, Math.floor(diff * 0.9))
      renderGame()
    } else {
      gameOverElm.style.display = 'block'
    }
  })
})

restartBtnElm.addEventListener('click', startGame)

window.onload = startGame
