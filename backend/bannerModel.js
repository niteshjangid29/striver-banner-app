const db = require('./database');

const Banner = {
    getAll: function(callback) {
        return db.query('SELECT * FROM banners', callback);
    },
    getLatestVisible: function(callback) {
        return db.query('SELECT * FROM banners WHERE is_visible = 1 ORDER BY id DESC LIMIT 1', callback);
    },
    getById: function(id, callback){
        return db.query('SELECT * FROM banners WHERE id = ?', [id], callback);
    },
    create: function(newBanner, callback){
        return db.query('INSERT INTO banners SET ?', newBanner, callback);
    },
    update: function(id, updateBanner, callback){
        return db.query('UPDATE banners SET ? WHERE id = ?', [updateBanner, id], callback);
    },
    delete: function(id, callback){
        return db.query('DELETE FROM banners WHERE id = ?', [id], callback);
    },
    setAllInvisible: function(callback){
        return db.query('UPDATE banners SET is_visible = 0 WHERE is_visible = 1', callback);
    }
};

module.exports = Banner;