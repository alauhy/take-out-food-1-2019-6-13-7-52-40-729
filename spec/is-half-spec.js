'use strict';
var is_half_promotion=require("../src/best-charge.js")
describe('is half promotion', function () {
  it('should be true when invoke isHalfPromotion given the goodsCode [ITEM0001]',function(){
          let inputs = 'ITEM0001'
          let summary = is_half_promotion.isHalfPromotion(inputs);
          expect(summary).toBe(true);
  });
  it('should be fasle when invoke isHalfPromotion given the goodsCode [ITEM0002]',function(){
          let inputs = 'ITEM0002'
          let summary = is_half_promotion.isHalfPromotion(inputs);
          expect(summary).toBe(false);
  })

})
