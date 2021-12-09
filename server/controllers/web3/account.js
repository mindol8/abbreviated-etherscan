import { getBalance, getBlock, getTransaction, toChecksumAddress } from "../../models/method.js"

export default async (network, address) => {
    const balance = await getBalance(network, address)
        .then(data => {
            return data;
        });
    const latestBlock = await getBlock(network, "latest").then(data => data.number);
    //console.log(latestBlock);
    //가장 최신 block이전 10개까지만 검사
    const transactions = [];
    for (let i = latestBlock; i >= latestBlock - 10; i--) {
        let blockTransaction = await getBlock(network, i)
            .then(data => {
                if (data.transactions.length) {
                    return data.transactions;
                }
                return [];
            });
        for (let j = 0; j < blockTransaction.length; j++) {
            await getTransaction(network, blockTransaction[j])
                .then(data => {
                    // console.log(blockTransaction[j])
                    if (data.from && toChecksumAddress(network, address) === toChecksumAddress(network, data.from)) {

                        transactions.push(blockTransaction[j]);
                    }
                    if (data.to && toChecksumAddress(network, address) === toChecksumAddress(network, data.to)) {

                        transactions.push(blockTransaction[j]);
                    }
                })
        }
    }
    return { balance, transactions };
}