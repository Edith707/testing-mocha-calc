const assert = require ("assert")
const calc = require ("./calc")



describe("result", function(){
    it ("should test multiplication -10* 5", function(){
     /*tenemos que determinar el valor esperado*/
      var expected = -50;
      var actual = calc.multiply(-10,5 );
      assert.equal(actual, expected);  
            
    });

      it ("should test multiply 6* 0", function(){
        var expected = 0;
        var actual = calc.multiply(6, 0 );
        assert.equal(actual, expected);  
  
      });
       
});

describe("result", function(){
    it ("should test substraction 3-2", function(){
        var expected = 1;
        var actual = calc.substraction(3, 2 );
        assert.equal(actual, expected);  
  
      });
      it ("should test substraction-8 22", function(){
        var expected = -30;
        var actual = calc.substraction(-8, 22 );
        assert.equal(actual, expected);  
  
      });
});

describe("result", function(){
    it ("should test division 9/-3", function(){
        var expected = -3;
        var actual = calc.division(9, -3 );
        assert.equal(actual, expected);  
  
      });
    it ("should test division 9/3", function(){
        var expected = 3;
        var actual = calc.division(9, 3 );
        assert.equal(actual, expected);  
  
      });
});

describe("result", function(){
    it ("should test addition 3+2", function(){
        var expected = 5;
        var actual = calc.addition(3, 2 );
        assert.equal(actual, expected);  
  
      });
});