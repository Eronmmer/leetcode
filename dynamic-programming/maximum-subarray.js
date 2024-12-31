// Leetcode #53, medium

var maxSubArray = function (nums) {
	let maxSum = nums[0];
	let currSum = 0;
	for (elem of nums) {
		currSum = currSum + elem;
		maxSum = Math.max(maxSum, currSum);
		if (currSum < 0) {
			currSum = 0;
		}
	}

	return maxSum;
};
