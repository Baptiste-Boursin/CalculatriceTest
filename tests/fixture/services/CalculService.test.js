const assert = require('assert');
var sinon = require('sinon');

describe('CalculService', () => {
  describe('#add', () => {
    it('should add values and return 6', () => {
      let result = CalculService.add(1, 5);
      assert.equal(result, 6);
    });

    it('should add values and return 12', () => {
      let result = CalculService.add(10, 2);
      assert.equal(result, 12);
    });
  });

  describe('#sub', () => {
    it('should sub values and return 4', () => {
      let result = CalculService.sub(5, 1);
      assert.equal(result, 4);
    });

    it('should sub values and return 1', () => {
      let result = CalculService.sub(15, 5);
      assert.equal(result, 10);
    });
  });

  describe('#mul', () => {
    it('should mul values and return 10', () => {
      let result = CalculService.mul(5, 2);
      assert.equal(result, 10);
    });

    it('should mul values adn return 0', () => {
      let result = CalculService.mul(5, 0);
      assert.equal(result, 0);
    });
  });

  describe('#div', () => {
    it('should div values and return 3', () => {
      let result = CalculService.div(6, 2);
      assert.equal(result, 3);
    });

    it('should return error', () => {
      try {
        let result = CalculService.div(6, 0);
      } catch (e) {
        assert.equal(e.message, 'Division par 0 interdite');
        return;
      }
      assert(false);

    });
  });

  describe('#prct', () => {
    it('should return the percentage values and return 10', () => {
      var stubMul = sinon.stub(CalculService, 'mul').callsFake((a, b) => {
        return 1000;
      });
      var stubDiv = sinon.stub(CalculService, 'div').callsFake((a, b) => {
        return 10;
      });

      var result = CalculService.prct(10, 1000);
      assert.equal(result, 10);
      CalculService.mul.restore();
      CalculService.div.restore();
    });

    it('spy the mul method', () => {
      const spyMul = sinon.spy(CalculService, 'mul');
      const spyDiv = sinon.spy(CalculService, 'div');

      CalculService.prct(10, 1000);

      assert(spyMul.calledOnce);
      assert(spyDiv.calledOnce);

      assert(spyDiv.calledImmediatelyAfter(spyMul));

      CalculService.mul.restore();
      CalculService.div.restore();
    });
  });

  describe('#pow', () => {
    it('should return the pow values and return 25', () => {
      var stubMul = sinon.stub(CalculService, 'mul').callsFake((a, b) => {
        return 25;
      });

      var result = CalculService.pow(10);
      assert.equal(result, 25);
      CalculService.mul.restore();

    });

    it('spy the mul method', () => {
      const spyMul = sinon.spy(CalculService, 'mul');

      CalculService.pow(10);

      sinon.assert.calledOnce(spyMul);
      CalculService.mul.restore();
    });
  });
});
