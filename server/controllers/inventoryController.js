module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.read_inventory()
        .then( inventory => res.json(inventory) )
        .catch( () => res.status(500).send() );
    }
}