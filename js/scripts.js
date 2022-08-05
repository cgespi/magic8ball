const inputField = document.forms.inputField
const answerList = [
  `img/magic8ball_1.png`,
  `img/magic8ball_2.png`,
  `img/magic8ball_3.png`,
  `img/magic8ball_4.png`,
  `img/magic8ball_5.png`,
  `img/magic8ball_6.png`,
  `img/magic8ball_7.png`,
  `img/magic8ball_8.png`,
  `img/magic8ball_9.png`,
  `img/magic8ball_10.png`,
  `img/magic8ball_11.png`,
  `img/magic8ball_12.png`,
  `img/magic8ball_13.png`,
  `img/magic8ball_14.png`,
  `img/magic8ball_15.png`,
  `img/magic8ball_16.png`,
  `img/magic8ball_17.png`,
  `img/magic8ball_18.png`,
  `img/magic8ball_19.png`,
  `img/magic8ball_20.png`
];

inputField.addEventListener(`submit`, function(magic) {
    magic.preventDefault();
    let question = inputField.question.value
    let randomNumber = Math.floor(Math.random() * answerList.length);
    let answer = answerList[randomNumber];
    document.getElementById("input").hidden = true;
    document.getElementById("cardTitle").hidden = true;
    document.getElementById("again").style['display'] = 'inline';
    document.getElementById("question").hidden = false;
    document.getElementById("question").innerHTML = `You asked: ${question}`
    document.getElementById("answers").innerHTML = `<img src="${answer}">`;
    console.log(answer);
});

document.getElementById("again").addEventListener(`click`, function(newAsk) {
  newAsk.preventDefault();
  inputField.question.value = '';
  document.getElementById("again").style['display'] = 'none';
  document.getElementById("cardTitle").hidden = false;
  document.getElementById("question").hidden = true;
  document.getElementById("input").hidden = false;
  console.log("click")
});