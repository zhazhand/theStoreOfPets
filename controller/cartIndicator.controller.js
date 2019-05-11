export class CartIndicatorController{
  getLength(){
    let indicator = JSON.parse(sessionStorage.getItem('candidatesForBuying')) ? JSON.parse(sessionStorage.getItem('candidatesForBuying')).length : 0;
    return indicator;
  }
}