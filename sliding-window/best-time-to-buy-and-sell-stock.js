// Leetcode #121

var maxProfit = function (prices) {
	let maxProfit = 0;
	if (prices.length < 2) return 0;
	let buyIdx = 0,
		sellIdx = 1;
	while (buyIdx < sellIdx && sellIdx < prices.length) {
		const currProfit = prices[sellIdx] - prices[buyIdx];
		maxProfit = Math.max(maxProfit, currProfit);
		if (currProfit < 0) {
			buyIdx = sellIdx;
		}
		sellIdx++;
	}

	return maxProfit;
};
