// Використовуючи js, HTML та СSS створити:
// a. Об’єкт для зберігання даних про фільм (Id, назва, режисер,
// продюсер, список акторів, URL-трейлеру, рік випуску, касові збори).
// b. На основі об’єкту фільму створити новий об’єкт, який перевизначає
// метод toString()
// c. Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт
// повинен містити конструктор та метод для знаходження всіх фільмів
// вказаного режисера.
// d. Відобразити дані про фільм вказаного режисера на сторінці.
//1
class Film {
    constructor(id,name, regiser, producer, actlist, url, year_date, money) {
        this.id = id;
        this.regiser = regiser;
        this.producer = producer;
        this.actlist = actlist;
        this.year_date = year_date;
        this.money = money;
        this.url = url;
        this.name = name;
    }
}
//2
class StringFilm extends Film {
    ToString(){
        return `
        id:${this.id},
        name:${this.name},
        regiser: ${this.regiser},
        actlist:${this.actlist},
        url: ${this.url},
        money: ${this.money},
        `;
      }
}
//3
class FilmCollections {
    constructor(films = []) {
        this.films = films;
    }
    add(film) {
        this.films.push(film);
      }
    getById(anyId) {
        return this.films.find((el) => el.id == anyId);
    }
    getInfo(anyId) {
        return this.getById(anyId).ToString();
      }
    allInfo(regiser) {
        return this.films.filter(el => el.regiser == regiser)
    }
}
//4??????
class FilmCollectionstoHtml extends FilmCollections {
    constructor(items) {
        super(items);
    }

    infoRegiser(el) {
        return `  
        <div class="film">
        <h2> ${el.name} </h2>
        <iframe src="${el.url}"></iframe>  
        <div class="description">
            <p> Regiser: ${el.regiser}</p>
            <p>	${el.actlist}</p>
            <p>Опубліковано ${el.year_date} року </p>
            <p> ${el.money} money earned </p>
        </div>
    </div>`;
    }
}
let Film1 = new Film(
    1,
    "Avatar",
    "https://uk.wikipedia.org/wiki/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)",
    "James Cameron",
    "Zoe Soldana",
    2009,
    2833679794
);
let movies = new FilmCollections()
movies.add(Film1);
