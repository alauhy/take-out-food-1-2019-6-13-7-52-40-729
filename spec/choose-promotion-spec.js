'use strict';
var get_total_price=require("../src/best-charge.js")
describe('is half promotion', function () {
  it('should be 2 when invoke choosePromotion given the input ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]',function(){
          let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
          let summary = get_total_price.choosePromotion(inputs);
          expect(summary).toBe(2);
  });
  it('should be 2 when invoke choosePromotion given the input ["ITEM0013 x 4", "ITEM0022 x 1"]',function(){
          let inputs = ["ITEM0013 x 4", "ITEM0022 x 1"];
          let summary = get_total_price.choosePromotion(inputs);
          expect(summary).toBe(1);
  });
})
