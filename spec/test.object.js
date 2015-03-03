describe("Object", function(){

  describe("Frequency", function(){
    
    it("should have a frequency counter function", function(){

      // You can put dot-notation objects and methods
      // on separate lines to make them easier to read

      expect(frequency(["a", "b", "c", "c", "b", "c", "d"]))
        .toEqual({ a: 1, b: 2, c: 3, d: 1})

      expect(frequency(["a", "b", "c", "d", "e", "f"]))
        .toEqual({ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1 })

      expect(frequency(["a", "a", "a", "a", "a"]))
        .toEqual({ a: 5 });

      expect(frequency([]))
        .toEqual({});

    });

    it("should have a unique items function", function(){

      expect(unique(["d", "b", "c", "c", "b", "c", "a"]))
        .toContain(["a", "b", "c", "d"]);

      expect(unique(["a", "b", "c", "d", "e", "f"]))
        .toContain(["a", "b", "c", "d", "e", "f"]);

      expect(unique(["a", "a", "a", "a", "a"]))
        .toEqual(["a"]);

      expect(unique([]))
        .toEqual([]);

    });

  });

  describe("Tripler", function(){

    it("should have a tripler function", function(){

      expect(tripler(3)).toEqual(9);
      expect(tripler(10)).toEqual(30);
      expect(tripler(-5)).toEqual(-15);

    });

    it("should have an object tripler function", function(){

      expect(objectTripler({ a: 1, b: 2, c: 3 }))
        .toEqual({ a: 3, b: 6, c: 9 });

      expect(objectTripler({ x: -10, y: 30, z: 0 }))
        .toEqual({ x: -30, y: 90, z: 0 });

      expect(objectTripler({}))
        .toEqual({});

    });

  });

  describe("Extend", function(){

    it("should be okay with objects without conflicts", function(){

      expect(extend({ a: 1, b: 2 }, { c: 3, d: 4 }))
        .toEqual({ a: 1, b: 2, c: 3, d: 4 });

      expect(extend({ a: 1, b: 2 }, {}))
        .toEqual({ a: 1, b: 2 });

      expect(extend({}, { c: 3 }))
        .toEqual({ c: 3 });

    });

    it("should be okay with objects WITH conflicts", function(){

      expect(extend({ a: 1, b: 2 }, { b: 3, c: 4 }))
        .toEqual({ a: 1, b: 2, c: 4 });

      expect(extend({ a: 1, b: 2, c: 3 }, { b: 9 }))
        .toEqual({ a: 1, b: 2, c: 3 });

    });

  });

  describe("Pluck", function(){

    it("should work correctly", function(){

      expect(pluck([ { a: 1, b: 2 }, { a: 3 }, { a: 4, c: 5 }], "a"))
        .toEqual([1, 3, 5]);

    });

  });

});