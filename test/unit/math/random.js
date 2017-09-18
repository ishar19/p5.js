suite('Random', function() {

  suite('p5.prototype.random', function() {
    var random = p5.prototype.random;
    var randomSeed = p5.prototype.randomSeed;
    var result;

    var results = [];

    suite('random()', function() {
      setup(function() {
        randomSeed(99);
        for (var i = 0; i < 5; i++) {
          results[i] = random();
        }
        randomSeed(99);
        for (i = 5; i < 10; i++) {
          results[i] = random();
        }
      });
      test('should return a number', function() {
        for(var i = 0; i < 10; i++) {
          assert.typeOf(results[i], 'number');
        }
      });
      test('should return a number 0 <= n < 1', function() {
        for(var i = 0; i < 10; i++) {
          assert.isTrue(results[i] >= 0);
          assert.isTrue(results[i] < 1);
        }
      });
      test('should return same sequence of numbers', function() {
        for (var i = 0; i < 5; i++) {
          assert.isTrue(results[i] === results[i+5]);
        }
      });
    });

    suite('random(5)', function() {
      test('should return a number 0 <= n < 5', function() {
        result = random(5);
        assert.isTrue(result >= 0);
        assert.isTrue(result < 5);
      });
    });

    suite('random(1, 10)', function() {
      test('should return a number 1 <= n < 10', function() {
        result = random(1, 10);
        assert.isTrue(result >= 1);
        assert.isTrue(result < 10);
      });
    });

    suite('random(["apple", "pear", "orange", "grape"])', function() {
      test('should return a fruit', function() {
        var fruits = ['apple', 'pear', 'orange', 'grape'];
        result = random(fruits);
        assert.include(fruits, result);
      });
    });
  });
});
