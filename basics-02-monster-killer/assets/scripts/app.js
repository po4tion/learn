const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 5;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

  currentMonsterHealth -= damage;
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("당신이 이겼습니다!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("당신이 패배했습니다!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("둘이 비겼습니다!");
  }
}

attackBtn.addEventListener("click", attackHandler);
