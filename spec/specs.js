describe('add', function(){

  it("will return the value of a single roman numeral", function() {
    expect(add("I")).to.equal(1)
  });

  it("will total the roman numerals", function() {
    expect(add("LXVI")).to.equal(66)
  });

});
