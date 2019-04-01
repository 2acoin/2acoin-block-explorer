var api = 'http://your.daemon.location:17910';
var donationAddress = "";

// 2ACoin block target
var blockTargetInterval = 90;
// 2ACoin Coin Units (8 units)
var coinUnits = 100000000;
// 2ACoin Coin Symbol
var symbol = 'ARMS';

var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
    "arms": [
        ["pool.2acoin.org", "http://45.76.232.71:19760"],
        ["arms01.p2poolmining.us", "http://108.61.205.5:19760"],
        ["arms.codpool.com", "https://pool.codpool.com:8119"],
        ["2acoin.smartcoinpool.com", "https://2acoin.smartcoinpool.com:7109"],
        ["arms.profitbotpro.com", "https://arms.profitbotpro.com:8119"],
        ["2a.cnpools.space", "https://cnpools.dedyn.io:9119"]
    ]
};

var networkStat2 = {
    "arms": [
	[""]
 ]
};
