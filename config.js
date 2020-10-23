var api = 'https://explorer.2acoin.org/daemon';
var donationAddress = "";
var blockTargetInterval = 90;
var coinUnits = 100000000;
var symbol = 'ARMS';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "arms": [
        ["pool.2acoin.org", "https://pool.2acoin.org:19761"],
        ["arms01.p2poolmining.us", "https://arms01.p2poolmining.us:19761"],
        ["tkts.cryptonote.club", "https://tkts.cryptonote.club:8197"],
        ["etrx.cryptonote.club", "https://etrx.cryptonote.club:8197"],
        ["chukwa.cryptonote.club", "https://chukwa.cryptonote.club:8297"],
//        ["communitypool.org/2acoin", "https://communitypool.org:8199"],
        ["fastpool.xyz/arms", "https://fastpool.xyz/api-arms"],
        ["arms.minercountry.com", "https://arms.minercountry.com/mapi"],
//        ["minercountry.com", "https://tickets.minercountry.com/mapi"],
        ["newpool.pw/btcmz", "https://minenice.newpool.pw:8243"],
        ["multi.walemo.com", "https://multipool.walemo.com:9139"],
        ["pool.n2aa.org", "https://pool.n2aa.org:8119"]
    ]
};

var networkStat2 = {
    "arms": [
	["webarms.semipool.com", "https://webarms.semipool.com/api"]
 ]
};
