let loadAllItems = require('../src/items.js');
let promotion = require('../src/promotions.js');
let items = loadAllItems();
let getPromotion = promotion();

let isHalfPromotion = (goodsCode) => {
  return getPromotion[1].items.indexOf(goodsCode) !== -1;
}

let getTotalPriceNoPromotion = (inputs) => {
  let cnt = 0;
  for (var i in inputs) {
    for (var j in items) {
      let arr = inputs[i].split(' x ');
      if (arr[0] === items[j].id) {
        cnt += items[j].price * parseFloat(arr[1]);
      }

    }

  }
  return cnt;
}
let getTotalPriceNormalPromotion = (inputs) => {
  let cnt = 0;
  for (var i in inputs) {
    for (var j in items) {
      let arr = inputs[i].split(' x ');
      if (arr[0] === items[j].id) {
        cnt += items[j].price * parseFloat(arr[1]);
      }

    }

  }
  if (cnt >= 30) {
    cnt -= 6;
  }
  return cnt;
}
let getTotalPriceHalfPromotion = (inputs) => {
  let cnt = 0;
  for (var i in inputs) {
    for (var j in items) {
      let arr = inputs[i].split(' x ');
      if (arr[0] === items[j].id) {
        if (isHalfPromotion(arr[0])) {
          cnt += items[j].price / 2 * parseFloat(arr[1]);
        } else {
          cnt += items[j].price * parseFloat(arr[1]);
        }
      }
    }

  }

  return cnt;
}
let choosePromotion = (inputs) => {
  let totalHalf = getTotalPriceHalfPromotion(inputs);
  let totalNormal = getTotalPriceNormalPromotion(inputs);
  let totalPrice = getTotalPriceNoPromotion(inputs);
  if (totalPrice < 30) {
    return 0;
  } else if (totalHalf >= totalNormal) {
    return 1;
  } else if (totalHalf < totalNormal) {
    return 2;
  }
}
let getName =(goodsCode)=>{
     for(let i in items ){
       if(items[i].id === goodsCode){
         return items[i].name;
       }
     }
}
function bestCharge(selectedItems) {
  let str='============= 订餐明细 =============\n';
  let totalPrice=0;
  let totalPriceNoPromotion=getTotalPriceNoPromotion(selectedItems);
  selectedItems.forEach(i => {
    let arr=i.split(' x ');
  
    for(let j in items){
      if(arr[0]===items[j].id){
        str+=items[j].name+' x '+arr[1]+' = '+items[j].price*parseFloat(arr[1])+'元\n';
      }
    }
  });
  str+='-----------------------------------\n';
    let usePromotion=choosePromotion(selectedItems);
    if(usePromotion===1){
      totalPrice=getTotalPriceNormalPromotion(selectedItems);
      str+='使用优惠:\n'+getPromotion[0].type+'\n'+'-----------------------------------\n';
    }
    else if(usePromotion===2){
      totalPrice=getTotalPriceHalfPromotion(selectedItems);
      str+='使用优惠:\n'+getPromotion[1].type+'(';
      selectedItems.forEach(i=>{
        let arr=i.split(' x ');
        if(isHalfPromotion(arr[0])){
          str+=getName(arr[0])+'，';
        }
      })
      str=str.substring(0,str.length-1);
      str+=')，省';
      str+=totalPriceNoPromotion-totalPrice+'元\n'+'-----------------------------------\n';
    }
    else totalPrice=getTotalPriceNoPromotion(selectedItems);
    str+='总计：'+totalPrice+'元\n'+
    '===================================';
    return str;
}
module.exports = {
  isHalfPromotion,
  getTotalPriceNoPromotion,
  getTotalPriceNormalPromotion,
  getTotalPriceHalfPromotion,
  choosePromotion,
  bestCharge
};
