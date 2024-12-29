// Leetcode #3, medium

var lengthOfLongestSubstring = function (s) {
	let leftIdx = 0,
		rightIdx = 0,
		maxSub = 0;
	const set = new Set();

	while (rightIdx < s.length) {
		while (set.has(s[rightIdx])) {
			set.delete(s[leftIdx]);
			leftIdx++;
		}
		set.add(s[rightIdx]);
		maxSub = Math.max(maxSub, set.size);
		rightIdx++;
	}

	return maxSub;
};
