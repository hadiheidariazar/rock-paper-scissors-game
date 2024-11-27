const weaponsButtons = document.querySelectorAll('.buttons button')
const weaponPlayer = document.querySelector('.player .weapon p')
const weaponRobot = document.querySelector('.robot .weapon p')
const playerScoreSpan = document.querySelector('.player-score')
const robotScoreSpan = document.querySelector('.robot-score')
const modal = document.querySelector('.modal')
const titleModal = document.querySelector('.title-modal')
const closeModalBtn = document.querySelector('.modal-container button')

const weapons = [
    { title: '✋', lose: '✌' },
    { title: '✊', lose: '✋' },
    { title: '✌', lose: '✊' }
]

const finallScore = 5
let robotScore = 0
let playerScore = 0

const selectWeaponHandle = (button) => {
    if (robotScore < finallScore && playerScore < finallScore) {
        let robotWeapon = weapons[Math.ceil(Math.random() * weapons.length) - 1]

        weaponPlayer.innerHTML = ''
        weaponPlayer.innerHTML = button.value;
        weaponRobot.innerHTML = robotWeapon.title;

        (robotWeapon.lose === button.value || robotWeapon.title === button.value) ? (robotWeapon.lose === button.value) && (playerScore += 1) : (robotScore += 1);

        updateScoresInDom(playerScore, robotScore)

        if (robotScore === finallScore || playerScore === finallScore) {
            modal.classList.add('show')
            titleModal.innerHTML = robotScore === finallScore ? "باختی 😢" : "برنده شدی 😎"

            closeModalBtn.addEventListener('click', () => {
                playerScore = 0
                robotScore = 0
                weaponPlayer.innerHTML = '؟'
                weaponRobot.innerHTML = '؟'
                updateScoresInDom(playerScore, robotScore)

                modal.classList.remove('show')
            })
        }
    }

}

const updateScoresInDom = (playerScore, robotScore) => {
    playerScoreSpan.innerHTML = playerScore
    robotScoreSpan.innerHTML = robotScore;
}

weaponsButtons.forEach(button => button.addEventListener('click', () => selectWeaponHandle(button)))