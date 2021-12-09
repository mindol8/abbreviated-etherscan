import block from "./web3/block.js";
import account from "./web3/account.js";
import txhash from "./web3/txhash.js";
import Web3 from "../models/web3.js";

export default async (req, res) => {
    const params = req.params;
    const query = req.query;
    const keyword = query.keyword || "";
    const mainNet = `https://mainnet.infura.io/v3/84c17e384bc64fab95c2181c7bc1c507`;
    const ropsten = `https://ropsten.infura.io/v3/84c17e384bc64fab95c2181c7bc1c507`;
    let network = 'ropsten' === params.network ? ropsten : mainNet;
    const web3 = Web3(network);

    if (keyword === "block") {
        res.send(await block(web3, query.num || 0))
    } else if (keyword === "account") {
        res.send(await account(web3, query.address || '0x0'));
    } else if (keyword === "txhash") {
        res.send(await txhash(web3, query.hash || ""));
    } else {
        res.status(401).json({ message: "error" });
    }

}