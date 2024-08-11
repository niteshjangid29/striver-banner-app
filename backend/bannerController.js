const Banner = require('./bannerModel');

const bannerController = {
    getAll: function(req, res) {
        Banner.getAll(function(err, banners) {
            if (err) {
                return res.status(500).json({error: 'Failed to retrieve banners.'});
            } else {
                res.json(banners);
            }
        });
    },
    getLatestVisible: function(req, res) {
        Banner.getLatestVisible(function(err, banner) {
            if (err) {
                return res.status(500).json({error: 'Failed to retrieve latest banner.'});
            } else {
                res.json(banner);
            }
        });
    },
    getById: function(req, res){
        const id = req.params.id;
        Banner.getById(id, function(err, banner){
            if (err) {
                return res.status(500).json({error: 'Failed to retrieve banner by id.'});
            } else {
                res.json(banner);
            }
        });
    },
    create: function(req, res){
        const newBanner = {
            name: req.body.name,
            description: req.body.description,
            end_time: req.body.end_time,
            link: req.body.link,
            is_visible: req.body.is_visible,
        }

        // If new banner is set to visible, set all other banners to invisible
        if (newBanner.is_visible) {
            Banner.setAllInvisible(function(err){
                if (err) {
                    return res.status(500).json({error: 'Failed to set all banners invisible.'});
                }

                Banner.create(newBanner, function(err, banner){
                    if (err) {
                        return res.status(500).json({error: 'Failed to create new banner.'});
                    } else {
                        res.json({message: 'Banner created successfully.', data: banner});
                    }
                });
            });
        } else {
            Banner.create(newBanner, function(err, banner){
                if (err) {
                    return res.status(500).json({error: 'Failed to create new banner.'});
                } else {
                    res.json({message: 'Banner created successfully.', data: banner});
                }
            });
        }
    },
    update: function(req, res){
        const id = req.params.id;
        const updateBanner = {
            name: req.body.name,
            description: req.body.description,
            end_time: req.body.end_time,
            link: req.body.link,
            is_visible: req.body.is_visible,
        }

        // If updated banner is set to visible, set all other banners to invisible
        if(updateBanner.is_visible){
            Banner.setAllInvisible(function(err){
                if(err){
                    return res.status(500).json({error: 'Failed to set all banners invisible.'});
                }

                Banner.update(id, updateBanner, function(err, banner){
                    if (err) {
                        return res.status(500).json({error: `Failed to update banner with id ${id}.`});
                    } else {
                        res.json({message: 'Banner updated successfully.', data: banner});
                    }
                });
            });
        } else {
            Banner.update(id, updateBanner, function(err, banner){
                if (err) {
                    return res.status(500).json({error: `Failed to update banner with id ${id}.`});
                } else {
                    res.json({message: 'Banner updated successfully.', data: banner});
                }
            });
        }
    },
    delete: function(req, res){
        const id = req.params.id;
        Banner.delete(id, function(err, banner){
            if(err){
                return res.status(500).json({error: `Failed to delete banner with id ${id}.`});
            } else {
                res.json({message: `Banner with id ${id} deleted successfully`});
            }
        })
    }
};

module.exports = bannerController;