import { getTransaction } from "../../models/method.js"

export default async (network, hash) => {

    return await getTransaction(network, hash)
        .then(data => {
            return data;
        });

}