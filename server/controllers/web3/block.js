import { getBlock } from "../../models/method.js"

export default async (network, blockNum) => {

    return await getBlock(network, blockNum)
        .then(data => {

            return data;
        });

}