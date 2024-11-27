const weaponsButtons = document.querySelectorAll('.buttons button')
const weaponPlayer = document.querySelector('.player .weapon p')
const weaponRobot = document.querySelector('.robot .weapon p')

const weapons = [
    {title: '✋', lose: '✌'},
    {title: '✊', lose: '✋'},
    {title: '✌', lose: '✊'}
]

weaponsButtons.forEach(button => {
    button.addEventListener('click', () => {
        let robotWeapon = weapons[Math.ceil(Math.random() * weapons.length) - 1]

        weaponPlayer.innerHTML = ''
        weaponPlayer.innerHTML = button.value
        weaponRobot.innerHTML = robotWeapon.title
    })
})