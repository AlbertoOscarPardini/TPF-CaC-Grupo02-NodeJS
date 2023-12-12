const itemServices = require('../services/itemServices')

const adminControllers = {
    admin: async (req, res) => {
        const { data } = await itemServices.getAllItems();
        res.render ('admin/admin', {
            title: 'Admin | Funkoshop',
            items: data
        })
    },

    create: (req, res) => res.render('admin/create', { title: 'Create | Funkoshop'}),

    create_post: async (req, res) => {
        const item = req.body;
        const files = req.files;
        await itemServices.createItem(item, files);
        res.redirect('/admin')
    },

    edit: async (req, res) => {
        const id = req.params.id;
        const { data } = await itemServices.getOneItem(id);
        res.render('admin/edit', {
            title: `Editar item # ${id}`,
            item: data
        })
    },

    edit_put: async (req, res) => {
        const item = req.body;
        const id = req.params.id;
        await itemServices.editItem(item, id);
        res.redirect('/admin');
    },

    delete: async (req, res) => {
        const id = req.params.id;
        await itemServices.deleteItem(id);
        res.redirect('/admin');
    }
};

module.exports = adminControllers;