function two_sum(nums, target) {
  let differences = new Map()

  for (let [index, num] of nums.entries()) {
    let diff = target - num;
    if (differences.has(diff)) return [index, differences.get(diff)]
    differences.set(num, index)
  }
}
