module.exports =  (req, res) => {
    if (req.session.user) {
        req.session.destroy();
        res.redirect('http://localhost:3000/');
    }
}