
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 15000,
    years: 5,
    rate: 5,
  };
  expect(calculateMontlyPayment(values)).toEqual('283.07');
});


it("should return a result with 2 decimal places", function () {
  // ..
  const values = {
    amount: 15000,
    years: 5,
    rate: 5.4,
  };
  expect(calculateMontlyPayment(values)).toEqual('285.83');
});

/// etc
