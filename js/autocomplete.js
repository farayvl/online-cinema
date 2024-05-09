const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const placeholderRow = document.getElementById("header-right");

let availableKeyWords = [
  { keyword: "Мстители", link: "http://127.0.0.1:5501/avengers.html" },
  { keyword: "Mortal Combat", link: "http://127.0.0.1:5501/mortal-kombat.html" },
  { keyword: "Сопрано", link: "http://127.0.0.1:5501/soprano.html" },
  { keyword: "Cyberpunk", link: "http://127.0.0.1:5501/cyberpunk.html" },
  { keyword: "Человек-Паук", link: "http://127.0.0.1:5501/spiderman.html" },
  { keyword: "Человек-Паук: Через Вселенные", link: "http://127.0.0.1:5501/across-the-spider-verse.html" },
  { keyword: "Алхимия Душ", link: "http://127.0.0.1:5501/alchemyofsouls.html" },
  { keyword: "Чужой", link: "http://127.0.0.1:5501/alien.html" },
  { keyword: "Аркейн", link: "http://127.0.0.1:5501/arcane.html" },
  { keyword: "Во все тяжкие", link: "http://127.0.0.1:5501/breaking-bad.html" },
  { keyword: "Остров проклятых", link: "http://127.0.0.1:5501/dead-island.html" },
  { keyword: "Как приручить дракона 3", link: "http://127.0.0.1:5501/dragon.html" },
  { keyword: "Бойцовский клуб", link: "http://127.0.0.1:5501/fight-club.html" },
  { keyword: "Город Героев", link: "http://127.0.0.1:5501/herocity.html" },
  { keyword: "Укрощение-строптивого", link: "http://127.0.0.1:5501/il-bisbetico-domato.html" },
  { keyword: "Оно 2", link: "http://127.0.0.1:5501/it-2.html" },
  { keyword: "Джон Уик", link: "http://127.0.0.1:5501/john-wick.html" },
  { keyword: "Оно", link: "http://127.0.0.1:5501/it.html" },
  { keyword: "Я - Легенда", link: "http://127.0.0.1:5501/legenda.html" },
  { keyword: "Любовь и Голуби", link: "http://127.0.0.1:5501/loveandpiggies.html" },
  { keyword: "Метод", link: "http://127.0.0.1:5501/metod.html" },
  { keyword: "Моана", link: "http://127.0.0.1:5501/moana.html" },
  { keyword: "Университет Монстров", link: "http://127.0.0.1:5501/monsters.html" },
  { keyword: "Ван Пис", link: "http://127.0.0.1:5501/one-piece.html" },
  { keyword: "Пищеблок", link: "http://127.0.0.1:5501/pisheblock.html" },
  { keyword: "Предложение", link: "http://127.0.0.1:5501/proposal.html" },
  { keyword: "Поезд в Пусан", link: "http://127.0.0.1:5501/pusan-train.html" },
  { keyword: "Искрящийся Арбуз", link: "http://127.0.0.1:5501/shinywatermelon.html" },
  { keyword: "Сопрано", link: "http://127.0.0.1:5501/soprano.html" },
  { keyword: "Душа", link: "http://127.0.0.1:5501/soul.html" },
  { keyword: "Сплит", link: "http://127.0.0.1:5501/split.html" },
  { keyword: "Очень странные дела", link: "http://127.0.0.1:5501/stranger-things.html" },
  { keyword: "Молчание Ягнят", link: "http://127.0.0.1:5501/the-silence-of-lambs.html" },
  { keyword: "Титаник", link: "http://127.0.0.1:5501/titanic.html" },
  { keyword: "Веном", link: "http://127.0.0.1:5501/venom.html" },
  { keyword: "Добро пожаловать в Зомбиленд", link: "http://127.0.0.1:5501/zombieland.html" },
];  

function display(result) {
  let content = "";
  if (Array.isArray(result) && result.length > 0) {
    content = result.map((item) => {
      return "<li><a href='" + item.link + "'>" + item.keyword + "</a></li>";
    }).join(""); // объединяем массив строк в одну строку
  }
  resultBox.innerHTML = "<ul>" + content + "</ul>";
}

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeyWords.filter((item) => {
      return item.keyword.toLowerCase().includes(input.toLowerCase());
    });
    
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

inputBox.oninput = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeyWords.filter((item) => {
      return item.keyword.toLowerCase().includes(input.toLowerCase());
    });
    
  }
  display(result);

  if (!result.length) {
    hideResultBox();
  } else {
    showResultBox();
  }
};

function showResultBox() {
  resultBox.style.display = "block";
  resultBox.style.borderTopLeftRadius = "0px";
  resultBox.style.borderTopRightRadius = "0px";
  placeholderRow.style.borderBottomRightRadius = "0px";
  placeholderRow.style.borderBottomLeftRadius = "0px";
}

function hideResultBox() {
  resultBox.style.display = "none";
  placeholderRow.style.borderBottomRightRadius = "20px";
  placeholderRow.style.borderBottomLeftRadius = "20px";
}
