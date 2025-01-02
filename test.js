// function to test
function say_happy_new_year(a, b) {
  return a + b;
}

// test case
test('Correctly greets people in the New Year', () => {
  expect(say_happy_new_year("Happy New Year", " Code:You peeps")).toBe("Happy New Year Code:You peeps");
});
