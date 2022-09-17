function assert_equals(cb, assertion) {
  let value = cb();
  let is_equal = value === assertion;

  if (is_equal) {
    console.log('Test Passed');
  } else {
    console.log('Test Failed ' + `value: ${value} != assertion: ${assertion}`);
  }
}

export { assert_equals };
