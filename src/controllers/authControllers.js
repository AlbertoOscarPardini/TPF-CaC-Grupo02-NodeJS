const authControllers = {
    login: (req, res) => res.render('auth/login', { title: 'Login | Funkoshop'}),
    login_post: (req, res) => res.send('Router for Login to website'),
    register: (req, res) => res.render('auth/register', { title: 'Register | Funkoshop'}),
    register_post: (req, res) => res.send('Router for Register to webiste'),
    logout: (req, res) => res.send('Router for Logout to webiste')
};

module.exports = authControllers;