const weaponsButtons = document.querySelectorAll('.buttons button')
const weaponPlayer = document.querySelector('.player .weapon p')
const weaponRobot = document.querySelector('.robot .weapon p')

const weapons = {
    0: 'کاغذ',
    1: 'قیچی',
    2: 'سنگ'
}

weaponsButtons.forEach(button => {
    button.addEventListener('click', () => {
        let robotWeapon = weapons[Number((Math.random() * 3).toFixed(0))]
        
        weaponPlayer.innerHTML = ''
        weaponPlayer.innerHTML = button.innerHTML

        if (robotWeapon === 'سنگ') {
            weaponRobot.innerHTML = '✊'
        } else if (robotWeapon === 'قیچی') {
            weaponRobot.innerHTML = '✌'
        } else {
            weaponRobot.innerHTML = '✋'
        }
    })
})