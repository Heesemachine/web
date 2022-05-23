//Об’єкт “Аукціон” (Код, назва лота, дата початку торгів, дата завершення торгів, 
//стартова ціна, кінцева ціна). Запит торгів за вказану дату із початковою ціною що не перевищує Х.

let id = 0
class Auction {
    constructor(code, name, start, end, fprice, lprice) {
      this.code = code
      this.name = name
      this.start = start.split(".")
      this.end = end.split(".")
      this.fprice = fprice
      this.lprice = lprice
      this.id = ++id 
    }
  }
  
  class StringToLots extends Auction {
      toString() {
          return `
          
              Code: ${this.code}
              LotName: ${this.name}
              LotsStart: ${this.start}
              LotsEnd: ${this.end}
              Startprice: ${this.fprice}
              Endprice: ${this.lprice}
          `;
      }
  }
  
  class AllLots {
      constructor(all_lots = []) {this.all_lots = all_lots;}
      AddElement(el) {
          this.all_lots.push(el)
      }
      AddColection(colection) {
          for(let i = 0; i < colection.length;i++) {
              this.all_lots.push(colection[i])
          }
      }
      EditEl(el,code, name, start, end, fprice, lprice) {
          this.all_lots.find((x) => x == el).code = code
          this.all_lots.find((x) => x == el).name = name
          this.all_lots.find((x) => x == el).start = start
          this.all_lots.find((x) => x == el).end = end
          this.all_lots.find((x) => x == el).fprice = fprice
          this.all_lots.find((x) => x == el).lprice = lprice         
      }
      FindByCode(code2) {
           return this.all_lots.find((el) => el.code == code2); 
        }

      GetInfo(code2) { 
          return this.FindByCode(code2).ToString(); 
        }

      ClearEl(el) {
        this.all_lots.find((x) => x == el).code = ''
        this.all_lots.find((x) => x == el).name = ''
        this.all_lots.find((x) => x == el).start = ''
        this.all_lots.find((x) => x == el).end = ''
        this.all_lots.find((x) => x == el).fprice = ''
        this.all_lots.find((x) => x == el).lprice = ''

      }
      FindBySmth(date,price) {
        
          date = date.split(".")
          for(let i = 0; i < this.all_lots.length; i++){
              if(date[2] > this.all_lots[i].start[2] && date[2] < this.all_lots[i].end[2] && price >= this.all_lots[i].fprice){
                return this.all_lots[i]
              }
              else if(date[1] > this.all_lots[i].start[1] && date[1] < this.all_lots[i].end[1] && price >= this.all_lots[i].fprice){
                return this.all_lots[i]
              }
              else if(date[0] > this.all_lots[i].start[0] && date[0] < this.all_lots[i].end[0] && price >= this.all_lots[i].fprice){
                return this.all_lots[i]
              } 
          }
  
      }
  
  }
  let b = new StringToLots(1,"iphone", "20.05.2022","24.05.2022", 18000, 34000)
  let a = new StringToLots(2, "glasess", "19.05.2022","26.05.2022", 20222, 55555)
  let lots = new AllLots([a,b])
  console.log(lots.FindBySmth("23.05.2022",20000))
  console.log(lots.ClearEl(a))