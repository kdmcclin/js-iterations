describe("Object", function(){

  describe("Frequency", function(){
    
    it("should have a frequency counter function", function(){

      // You can put dot-notation objects and methods
      // on separate lines to make them easier to read

      expect(frequency(["a", "b", "c", "c", "b", "c", "d"]))
        .to.deep.equal({ a: 1, b: 2, c: 3, d: 1})

      expect(frequency(["a", "b", "c", "d", "e", "f"]))
        .to.deep.equal({ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1 })

      expect(frequency(["a", "a", "a", "a", "a"]))
        .to.deep.equal({ a: 5 });

      expect(frequency([]))
        .to.deep.equal({});

    });

    it("should have a unique items function", function(){

      expect(unique(["d", "b", "c", "c", "b", "c", "a"]))
        .to.include.members(["a", "b", "c", "d"]);

      expect(unique(["a", "b", "c", "d", "e", "f"]))
        .to.include.members(["a", "b", "c", "d", "e", "f"]);

      expect(unique(["a", "a", "a", "a", "a"]))
        .to.deep.equal(["a"]);

      expect(unique([]))
        .to.deep.equal([]);

    });

  });

  describe("Tripler", function(){

    it("should have a tripler function", function(){

      expect(tripler(3)).to.equal(9);
      expect(tripler(10)).to.equal(30);
      expect(tripler(-5)).to.equal(-15);

    });

    it("should have an object tripler function", function(){

      expect(objectTripler({ a: 1, b: 2, c: 3 }))
        .to.deep.equal({ a: 3, b: 6, c: 9 });

      expect(objectTripler({ x: -10, y: 30, z: 0 }))
        .to.deep.equal({ x: -30, y: 90, z: 0 });

      expect(objectTripler({}))
        .to.deep.equal({});

    });

  });

  describe("Extend", function(){

    it("should be okay with objects without conflicts", function(){

      expect(extend({ a: 1, b: 2 }, { c: 3, d: 4 }))
        .to.deep.equal({ a: 1, b: 2, c: 3, d: 4 });

      expect(extend({ a: 1, b: 2 }, {}))
        .to.deep.equal({ a: 1, b: 2 });

      expect(extend({}, { c: 3 }))
        .to.deep.equal({ c: 3 });

    });

    it("should be okay with objects WITH conflicts", function(){

      expect(extend({ a: 1, b: 2 }, { b: 3, c: 4 }))
        .to.deep.equal({ a: 1, b: 2, c: 4 });

      expect(extend({ a: 1, b: 2, c: 3 }, { b: 9 }))
        .to.deep.equal({ a: 1, b: 2, c: 3 });

    });

  });

  describe("Pluck", function(){

    it("should work correctly", function(){

      expect(pluck([ { a: 1, b: 2 }, { a: 3 }, { a: 4, c: 5 }], "a"))
        .to.deep.equal([1, 3, 5]);

    });

  });

});