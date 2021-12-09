import Web3 from "web3";

export default (network) => {
    return new Web3(new Web3.providers.HttpProvider(network));
}
