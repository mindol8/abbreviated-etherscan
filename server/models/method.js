const getBlock = async (network, blockNum) => {
    try {
        return network.eth.getBlock(blockNum)
            .then(block => {
                // console.log(block);
                return block;
            })
    } catch (error) {
        return error;
    }
};

const toChecksumAddress = (network, address) => {
    return network.utils.toChecksumAddress(address);
}

const getBalance = async (network, address) => {
    try {
        const _address = toChecksumAddress(network, address);
        return await network.eth.getBalance(_address)
            .then(data => {
                const wei = data;
                const eth = network.utils.fromWei(data, "ether");
                return { wei, eth };
            })

    } catch (error) {
        return error;
    }
}



const getTransaction = async (network, txhash) => {
    try {
        return await network.eth.getTransactionReceipt(txhash)
            .then(data => {
                return data;
            })

    } catch (error) {
        return error;
    }
}

export { getBlock, getBalance, getTransaction, toChecksumAddress };