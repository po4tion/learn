const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let chosenMaxLife;
let battleLog = [];

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  chosenMaxLife = 100;

  console.error(error);
  alert("잘못된 값이 입력되었습니다. 기본 체력이 100으로 적용됩니다.");
}

adjustHealthBars(chosenMaxLife);

function getMaxLifeValues() {
  const enteredValue = prompt("당신과 몬스터는 최대 체력으로 시작합니다.", "100");
  const parsedValue = parseInt(enteredValue, 10);

  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: "다시 입력해주세요." };
  }

  return parsedValue;
}

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  // 간단한 조건이 아닌 경우에는 if문을 사용하는 것이 편하다
  // Switch문은 fall-through 메커니즘을 사용한다.
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = "PLAYER";
      break;
  }

  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

  currentPlayerHealth -= playerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialPlayerHealth;

    setPlayerHealth(currentPlayerHealth);
    removeBonusLife();
    alert("보너스 생명을 사용하여 되살아났습니다!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("당신이 이겼습니다!");

    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("당신이 패배했습니다!");

    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("둘이 비겼습니다!");

    writeToLog(LOG_EVENT_GAME_OVER, "A DRAW", currentMonsterHealth, currentPlayerHealth);
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  // 삼항 연산자의 중첩은 가독성이 떨어진다. 이것은 if문을 사용하는 것이 대체방법이 될 수 있다.
  let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

  const damage = dealMonsterDamage(maxDamage);

  currentMonsterHealth -= damage;

  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
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

  writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);

  endRound();
}

function printLogHandler() {
  for (const log of battleLog) {
    console.table(log);
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);

window.addEventListener("devtoolschange", (event) => {
  console.log(event);
});
