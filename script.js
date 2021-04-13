const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];

const root = document.createElement("div");
document.body.append(root);
root.setAttribute("id", "root");
const list = document.createElement("ul");
root.append(list);

const showList = (newArr) => {
  newArr.map((el) => {
    const book = document.createElement("li");
    list.append(book);
    book.insertAdjacentHTML(
      "afterbegin",
      `<h1>${el.author}</h1><h2>${el.name}</h2><h3>${el.price}</h3>`
    );
  });
};

const filterError = (arr) => {
  const newArr = arr.filter((el) => {
    try {
      if (el["price"] && el["author"] && el["name"]) return el;
      else if (!el["price"]) throw new TypeError("Doesn't have price");
      else if (!el["name"]) throw new TypeError("Doesn't have name");
      else if (!el["author"]) throw new TypeError("Doesn't have author");
    } catch (error) {
      console.log(error);
    }
  });
  showList(newArr);
};

filterError(books);
