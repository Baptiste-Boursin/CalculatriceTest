const assert = require('assert');
var sinon = require('sinon')

describe('CalculService',function(){

  describe("#add",function (){
    it("should add values and return 6",function(){
        let result = CalculService.add(1,5);
        assert.equal(result,6);
    })

    it("should add values and return 12",function(){
      let result = CalculService.add(10,2);
      assert.equal(result,12);
    })
  })

  describe("#sub",function (){
    it("should sub values and return 4",function(){
      let result = CalculService.sub(5,1);
      assert.equal(result,4);
    })

    it("should sub values and return 10",function(){
      let result = CalculService.sub(15,5);
      assert.equal(result,10);
    })
  })

  describe("#mul",function (){
    it("should mul values and return 10",function(){
      let result = CalculService.mul(5,2);
      assert.equal(result,10);
    })

    it("should mul values adn return 0",function(){
      let result = CalculService.mul(5,0);
      assert.equal(result,0);
    })
  })

  describe("#div",function (){
    it("should div values and return 3",function(){
      let result = CalculService.div(6,2);
      assert.equal(result,3);
    })

    it("should return error",function(){
      try{
        let result = CalculService.div(6,0);
      }catch(e){
        assert.equal(e.message,"Division par 0 interdite")
        return;
      }
      assert(false)

    })
  })

  describe("#prct",function (){
    it("should return the percentage values and return 10",function(){
      var stub_mul = sinon.stub(CalculService,'mul').callsFake(function (a , b){ return 1000});
      var stub_div = sinon.stub(CalculService,'div').callsFake(function (a , b) {return  10});

      var result = CalculService.prct(10,1000);
      assert.equal(result,10);
      CalculService.mul.restore()
      CalculService.div.restore()
    })

    it("spy the mul method",function(){
      const spy_mul = sinon.spy(CalculService,'mul');
      const spy_div = sinon.spy(CalculService,'div');

      CalculService.prct(10,1000);

      assert(spy_mul.calledOnce)
      assert(spy_div.calledOnce)

      assert(spy_div.calledImmediatelyAfter(spy_mul))

      CalculService.mul.restore()
      CalculService.div.restore()
    })
  })

  describe("#pow",function (){
    it("should return the pow values and return 25",function(){
      var stub_mul = sinon.stub(CalculService,'mul').callsFake(function (a , b){ return 25});

      var result = CalculService.pow(10);
      assert.equal(result,25);
      CalculService.mul.restore()

    })

    it("spy the mul method",function(){
      const spy_mul = sinon.spy(CalculService,'mul');

      CalculService.pow(10);

      sinon.assert.calledOnce(spy_mul)
      CalculService.mul.restore()
    })
  })
})
