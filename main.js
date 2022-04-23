//1問目のクイズの要素
const choice1 = document.getElementById("choice-1-1");
const choice2 = document.getElementById("choice-1-2");
const choice3 = document.getElementById("choice-1-3");
const feedback = document.getElementById("feedback1");
const quizText = document.getElementById("quiz-text1");
const quizImage = document.getElementById("quiz-image1");

//2問目のクイズの要素
const choice4 = document.getElementById("choice-2-1");
const choice5 = document.getElementById("choice-2-2");
const choice6 = document.getElementById("choice-2-3");
const feedback2 = document.getElementById("feedback2");
const quizText2 = document.getElementById("quiz-text2");
const quizImage2_1 = document.getElementById("quiz-image2-1");
const quizImage2_2 = document.getElementById("quiz-image2-2");
const quizImage2_3 = document.getElementById("quiz-image2-3");

//3問目のクイズの要素
let inputElement = document.getElementById("input-todo");
const feedback3 = document.getElementById("feedback3");
const quizText3 = document.getElementById("quiz-text3");
const quizImage3 = document.getElementById("quiz-image3");

const quiz = [
  {
    text: "土橋は２年間ほどメンターをしていましたが、どのコースのメンターだったでしょうか？？",
    image: "course.png",
    choices: [
      {
        text: "Web",
        feedback:
          "残念！Webコース所属だったらもう少しカッコいいポートフォリオができていたかもしれませんね…",
      },
      {
        text: "Game",
        feedback:
          "残念！スマホゲームのパズドラやモンスト、白猫プロジェクトなら高校の時に死ぬほどやっていました！",
      },
      {
        text: "iPhone",
        feedback:
          "正解！！天才です！ちなみにその時リリースしたアプリはこちらです！（アプリの詳細はページ右上の「MyApp」から見れます！」）",
      },
    ],
  },
  {
    text: "土橋の出身地は葛飾区ですが、葛飾区で有名なものと言えば以下のどれでしょう？",
    image1: "kochikame.webp",
    image2: "kuroko.jpg",
    image3: "inD.webp",
    choices: [
      {
        text: "こち亀",
        feedback:
          "正解！葛飾区の「亀有」がモデルとなっています。この前、亀有にある両津勘吉の銅像がイタズラされたという噂を聞きました。",
      },
      {
        text: "黒子のバスケ",
        feedback:
          "残念！ちなみに黒子のバスケは自分の出身高校（都立戸山高校）がモデルになってます！🏀",
      },
      {
        text: "頭文字D",
        feedback:
          "ざんねえん！ちなみに頭文字Dの聖地は群馬県の「渋川伊香保」となっていて、温泉の観光地として有名らしいです。",
      },
    ],
  },
  {
    text: "土橋はとある事情から、ストレートで行った場合と比べて学年がずれています。さて、何年ずれているでしょう？",
    image: "nayami.jpeg",
  },
];

const reloadQuiz = function () {
  console.dir(inputElement);
  //1問目の表示
  quizText.textContent = "Q." + quiz[0].text;
  quizImage.src = "./images/" + quiz[0].image;

  choice1.textContent = quiz[0].choices[2].text;
  choice2.textContent = quiz[0].choices[1].text;
  choice3.textContent = quiz[0].choices[0].text;

  //2問目の表示
  quizText2.textContent = "Q." + quiz[1].text;
  quizImage2_1.src = "./images/" + quiz[1].image1;
  quizImage2_2.src = "./images/" + quiz[1].image2;
  quizImage2_3.src = "./images/" + quiz[1].image3;
  choice4.textContent = quiz[1].choices[0].text;
  choice5.textContent = quiz[1].choices[1].text;
  choice6.textContent = quiz[1].choices[2].text;

  //3問目の表示
  quizText3.textContent = "Q." + quiz[2].text;
  quizImage3.src = "./images/" + quiz[2].image;
};

choice1.onclick = function () {
  choose(2);
};
choice2.onclick = function () {
  choose(1);
};
choice3.onclick = function () {
  choose(0);
};

choice4.onclick = function () {
  choose2(0);
};
choice5.onclick = function () {
  choose2(1);
};
choice6.onclick = function () {
  choose2(2);
};

const choose = function (number) {
  feedback.textContent = quiz[0].choices[number].feedback;
};

const choose2 = function (number) {
  feedback2.textContent = quiz[1].choices[number].feedback;
};

const answer = function () {
  console.log(inputElement.value);
  if (inputElement.value == 2) {
    feedback3.textContent = "正解です！！冴えてますねぇ";
  } else if (inputElement.value <= 1) {
    feedback3.textContent = "残念！そんなに人生は甘くありませんでした‥";
  } else if (inputElement.value >= 3) {
    feedback3.textContent = "不正解！それは人生ハードモードすぎるwww";
  } else {
    feedback3.textContent = "数値を入力してください。";
  }
};

inputElement.addEventListener("input", answer);
reloadQuiz();
