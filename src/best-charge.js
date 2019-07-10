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
let getTotalPriceNormalPromotion =(inputs)=>{
  let cnt=0;
  for(var i in inputs){
    for(var j in items){
      let arr=inputs[i].split(' x ');
      if(arr[0]===items[j].id){
        cnt+=items[j].price*parseFloat(arr[1]);
      }

    }

  }
  if(cnt>=30){
    cnt-=6;
  }
  return cnt;
}
let getTotalPriceHalfPromotion=(inputs)=>{
  let cnt=0;
  for(var i in inputs){
    for(var j in items){
      let arr=inputs[i].split(' x ');
      if(arr[0]===items[j].id){
        if(isHalfPromotion(arr[0])){
          cnt+=items[j].price/2*parseFloat(arr[1]);
        }
        else {
          cnt+=items[j].price*parseFloat(arr[1]);
        }
      }
    }

  }

  return cnt;
}
let choosePromotion=(inputs)=>{
  let totalHalf=getTotalPriceHalfPromotion(inputs);
  let totalNormal=getTotalPriceNormalPromotion(inputs);
  let totalPrice=getTotalPriceNoPromotion(inputs);
  if(totalPrice<30){
    return "";
  }
  else if(totalHalf>=totalNormal){
    return '使用优惠:\n'+getPromotion[0].type;
  }
  else if(totalHalf<totalNormal){
    return '使用优惠:\n'+getPromotion[1].type;
  }
}
function bestCharge(selectedItems) {
  return /*TODO*/;
}
module.exports = {
  isHalfPromotion,
  getTotalPriceNoPromotion,
  getTotalPriceNormalPromotion,
  getTotalPriceHalfPromotion,
  choosePromotion,
};