import { loadByUserId } from "src/db/facture";

export default function handler(req, res) {
    const { id } = req.query;
    const userId = 1;
    const client = loadByUserId(userId)
    const { facture } = client.filter(_ => _.facture.id === +id)[0]
    res.status(200).json(facture);
}