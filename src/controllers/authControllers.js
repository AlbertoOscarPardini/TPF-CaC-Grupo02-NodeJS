const authControllers = {
    login: (req, res) => res.send('Router for Login View'),
    login_post: (req, res) => res.send('Router for Login to website'),
    register: (req, res) => res.send('Router for Register View'),
    register_post: (req, res) => res.send('Router for Register to webiste'),
    logout: (req, res) => res.send('Router for Logout to webiste')
};

module.exports = authControllers;