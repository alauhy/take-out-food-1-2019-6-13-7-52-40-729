'use strict';
var get_total_price=require("../src/best-charge.js")
describe('is half promotion', function () {
  it('should be 指定菜品半价 when invoke choosePromotion given the input ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]',function(){
          let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
          let summary = get_total_price.choosePromotion(inputs);
          expect(summary).toBe('使用优惠:\n'+'指定菜品半价');
  });
  it('should be 满30减6元，省6元 when invoke choosePromotion given the input ["ITEM0013 x 4", "ITEM0022 x 1"]',function(){
          let inputs = ["ITEM0013 x 4", "ITEM0022 x 1"];
          let summary = get_total_price.choosePromotion(inputs);
          expect(summary).toBe('使用优惠:\n'+'满30减6元，省6元');
  });
})
