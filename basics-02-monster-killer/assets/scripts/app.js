const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const enteredValue = prompt("당신과 몬스터는 최대 체력으로 시작합니다.", "100");
let chosenMaxLife = parseInt(enteredValue, 10);
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

if (isNaN(enteredValue) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialPlayerHealth;

    setPlayerHealth(currentPlayerHealth);
    removeBonusLife();
    alert("보너스 생명을 사용하여 되살아났습니다!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("당신이 이겼습니다!");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("당신이 패배했습니다!");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("둘이 비겼습니다!");
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;

  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);

  currentMonsterHealth -= damage;

  endRound();
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;

  if (currentPlayerHealth > chosenMaxLife - HEAL_VALUE) {
    alert("최대 체력을 초과하는 회복은 사용 불가능합니다.");

    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);

  currentPlayerHealth += healValue;
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
