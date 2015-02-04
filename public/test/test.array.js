describe("Array", function(){
  
  describe("Double", function(){

    it("should have a number doubler function", function(){

      expect(doubler(2)).to.equal(4);
      expect(doubler(3.3)).to.equal(6.6);
      expect(doubler(0)).to.equal(0);

    });

    it("should have an array doubler function", function(){

      /*
        JavaScript equality doesn't really work the way you'd think
        when it comes to arrays and objects.

        So we need to change our expect test a little bit here.

      */
      
      expect(arrayDoubler([1, 2, 3])).to.deep.equal([2, 4, 6]);
      expect(arrayDoubler([0, -5, 10, 3])).to.deep.equal([0, -10, 20, 6]);
      expect(arrayDoubler([])).to.deep.equal([]);

    });

  });

  describe("Divide", function(){

    it("should have a number divide function", function(){

      expect(divide(6, 3)).to.equal(2);
      expect(divide(3.3, 1.1)).to.equal(3);
      expect(divide(5, 1)).to.equal(5);

    });

    it("should have an array divide function", function(){

      expect(arrayDivide([3, 6, 9, 12], 2)).to.deep.equal([1.5, 3, 4.5, 6]);
      expect(arrayDivide([1, 2, 3], 1)).to.deep.equal([1, 2, 3]);
      expect(arrayDivide([], 4)).to.deep.equal([]);
      
    });

  });

  describe("Sum", function(){

    it("should have a number sum function", function(){

      expect(sum(6, 3)).to.equal(9);
      expect(sum(3.3, 1.1)).to.equal(4.4);
      expect(sum(5, 1)).to.equal(6);

    });

    it("should have an array sum function", function(){

      expect(arraySum([1, 2, 3, 4, 5])).to.equal(15);
      expect(arraySum([10, 0, -10])).to.equal(0);
      expect(arraySum([])).to.equal(0);
      
    });

  });

  describe("Minimum", function(){

    it("should have a number minimum function", function(){

      expect(minimum(6, 3)).to.equal(3);
      expect(minimum(3.3, 1.1)).to.equal(1.1);
      expect(minimum(5, 1)).to.equal(1);

    });

    it("should have an array minimum function", function(){

      expect(arrayMinimum([1, 2, 3, 4, 5])).to.equal(1);
      expect(arrayMinimum([10, 0, -10])).to.equal(-10);
      expect(arrayMinimum([])).to.equal(undefined);
      
    });

  });

  describe("Ends In Period", function(){

    it("should have a string ends in period function", function(){

      expect(endsInPeriod("hello, world")).to.equal(false);
      expect(endsInPeriod("hello, world.")).to.equal(true);
      expect(endsInPeriod("what. now?")).to.equal(false);

    });

    it("should have an array ends in period filter function", function(){

      expect(arrayEndsInPeriod(["yep.", "nope", "ok.", "nah"])).to.equal(["yep.", "ok."]);
      expect(arrayEndsInPeriod(["you", "are", "correct."])).to.equal(["correct."]);
      expect(arrayEndsInPeriod([])).to.equal([]);

    });

  });

  describe("Multiple of 3", function(){

    it("should have a string ends in period function", function(){

      expect(multiple3(20)).to.equal(false);
      expect(multiple3(21)).to.equal(true);
      expect(multiple3(22)).to.equal(false);

    });

    it("should have an array ends in period filter function", function(){

      expect(arrayMultiple3([5, 10, 15, 20, 25, 30])).to.equal([15, 30]);
      expect(arrayMultiple3([3, 6, 9, 12])).to.equal([3, 6, 9, 12]);
      expect(arrayMultiple3([])).to.equal([]);

    });

  });

});