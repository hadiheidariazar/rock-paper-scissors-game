const weaponsButtons = document.querySelectorAll('.buttons button')
const weaponPlayer = document.querySelector('.player .weapon p')
const weaponRobot = document.querySelector('.robot .weapon p')
const playerScoreSpan = document.querySelector('.player-score')
const robotScoreSpan = document.querySelector('.robot-score')

const weapons = [
    { title: '✋', lose: '✌' },
    { title: '✊', lose: '✋' },
    { title: '✌', lose: '✊' }
]

const finallScore = 5
let robotScore = 0
let playerScore = 0

const selectWeaponHandle = (button) => {
    let robotWeapon = weapons[Math.ceil(Math.random() * weapons.length) - 1]

    weaponPlayer.innerHTML = ''
    weaponPlayer.innerHTML = button.value;
    weaponRobot.innerHTML = robotWeapon.title;

    (robotWeapon.lose === button.value || robotWeapon.title === button.value) ? (robotWeapon.lose === button.value) && (playerScore += 1) : (robotScore += 1);

    playerScoreSpan.innerHTML = playerScore
    robotScoreSpan.innerHTML = robotScore
}

weaponsButtons.forEach(button => button.addEventListener('click', () => selectWeaponHandle(button)))