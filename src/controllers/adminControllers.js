const adminControllers = {
    admin: (req, res) => res.send('Rout for Admin View'),
    create: (req, res) => res.send('Rout for Create a item View'),
    create_post: (req, res) => res.send('Rout for Send a New Item'),
    edit: (req, res) => res.send('Rout for Get a Item with ID View'),
    edit_put: (req, res) => res.send('Rout for Edit a item'),
    delete: (req, res) => res.send('Rout for delete a Item with ID from database')
};

module.exports = adminControllers;