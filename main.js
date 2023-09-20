function Book(title, category, author, pages, coverImg) {
  this.title = title;
  this.category = category;
  this.author = author;
  this.pages = pages;
  this.coverImg = coverImg;
  this.render = function () {
    return `<div class="card">
    <h1>${this.title}</h1>
    <p>${this.category}</p>
    <p>${this.author}</p>
    <p>${this.pages}</p>
    <img  src=${this.coverImg}>
    </div>`;
  };
}

const arrBooks = [
  new Book(
    "shulhan aruh",
    "alacha",
    "rabi tosef karo",
    500,
    "https://cdn.pixabay.com/photo/2018/10/27/04/48/sunset-3775838_1280.jpg"
  ),
  new Book(
    "tanya",
    "hasidut",
    "snieor zalman",
    600,
    "https://cdn.pixabay.com/photo/2017/11/06/14/51/honda-s2000-2923839_1280.jpg"
  ),
  new Book(
    "tehilim",
    "tfila",
    "david hamelech",
    300,
    "https://cdn.pixabay.com/photo/2021/08/12/05/25/car-6539946_1280.jpg"
  ),
];
arrBooks.forEach((book) => {
  container.innerHTML += book.render();
});
const p2 = new Pr();
