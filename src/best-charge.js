let loadAllItems=require('../src/items.js');
let promotion=require('../src/promotions.js');
let items = loadAllItems();
let getPromotion=promotion();

let isHalfPromotion =(goodsCode)=>{
  return getPromotion[1].items.indexOf(goodsCode)!== -1;
}

let getTotalPriceNoPromotion = (inputs) =>{
  let cnt=0;
  for(var i in inputs){
    for(var j in items){
      let arr=inputs[i].split(' x ');
      if(arr[0]===items[j].id){
        cnt+=items[j].price*parseFloat(arr[1]);
      }

    }

  }
  return cnt;
}

function bestCharge(selectedItems) {
  return /*TODO*/;
}
module.exports = {
  isHalfPromotion,
  getTotalPriceNoPromotion,
};