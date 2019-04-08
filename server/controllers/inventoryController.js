module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.read_inventory()
        .then( inventory => res.status(200).send(inventory) )
        .catch( () => res.status(500).send() );
    }
}