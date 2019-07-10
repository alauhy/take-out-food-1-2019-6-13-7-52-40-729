let loadAllItems=require('../src/items.js');
let promotion=require('../src/promotions.js');
let items = loadAllItems();
let getPromotion=promotion();

let isHalfPromotion =(goodsCode)=>{
  return getPromotion[1].items.indexOf(goodsCode)!== -1;
}


function bestCharge(selectedItems) {
  return /*TODO*/;
}
module.exports = {
  isHalfPromotion,
};