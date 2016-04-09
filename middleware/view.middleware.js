

module.exports = {
    viewGlobals: function (req, res, nxt) {
        req.viewGlobals = {};
        nxt();
    }
}