var arrayTruth = [
  "Who is your crush?",
  "If you had to pick between eating greens everyday for a year or eating one kind of food for the rest of your life, what would you pick",
  "What is your deepest and darkest fear",
  "What is an annoying habit you have?",
  "What does your crush look like?",
]
var arrayDare = [
  "Hide somewhere and scare whoever walks by you",
  "Give yourself the worst makeover and go to a public place like that",
  "Stand on a chair and dance to your favorite song",
  "Tell everyone you see that day, Happy New Year",
  "Lay on the ground until someone asks you, are you ok?",
]

var truthButton = $('.truth_button');
truthButton.on('click', showTruth);

var truthContainer = $('.truthcontainer');

function showTruth() {
  truthContainer.text(arrayTruth[3]);
  truthContainer.append(`<img style="height: 100px; width: 100px;" src="https://dumielauxepices.net/sites/default/files/fail-clipart-fear-word-600312-9537902.jpg">`);
}

var dareButton = $('.dare_button');
dareButton.on('click', showDare);

var dareContainer = $('.darecontainer');

function showDare() {
  dareContainer.text(arrayDare[4]);
  dareContainer.append(`<img src="https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_boo_who_mike_lowery_00_300x300.png?v=1532011934">`);
}

var submit = $('.submit');
var secretContainer = $('.secretcontainer');
var secretPassword = $('.secretPassword');

submit.on('click', checkCode);



function checkCode() {

  if (secretPassword.val() === "Password"){
    secretContainer.text(`Suprise! You won a virtual hug!`);
    secretContainer.append(`<img style="height: 100px; width: 100px;" src="https://media.giphy.com/media/XpgOZHuDfIkoM/giphy.gif">`)
  }
  else{
    secretContainer.text(`I just HACKED into your computer and will explode in 10 seconds! YOU BETTER RUN!`)
    secretContainer.append(`<img style="height: 300px; width: 300px;" src="https://media.giphy.com/media/xTiTnkZVwUkDjVRLgs/giphy.gif">`)
  }



}
