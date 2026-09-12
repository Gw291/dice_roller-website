function rollDice(){

  const numoDice = Number(document.getElementById('numoDice').value);
  const diceResult = document.getElementById('diceResult');
  const diceImages = document.getElementById('diceImages');
  const values = [];
  const images = [];

  let clickInterval = setInterval(function() {

    let rollingValues = [];
    let rollingImages = []

    for(let i = 0; i < numoDice; i++){
    let value = Math.floor(Math.random() * 6) + 1;
    rollingValues.push(value);
    rollingImages.push(`<img src="dice_images/dice_${value}.webp" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${rollingValues.join(', ')}`;
    diceImages.innerHTML = rollingImages.join('');
  }, 100);

  setTimeout(function(){

    clearInterval(clickInterval);

    for(let i = 0; i < numoDice; i++){
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/dice_${value}.webp" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${(values.join(', '))}`;
    diceImages.innerHTML = images.join('');

  }, 2000);
}
