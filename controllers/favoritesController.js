exports.getFavorites = async (req, res) => {
    try{
        const connection = req.db;
        const [rows] = await connection.query('SELECT * FROM favorites');
        res.render('favorites', {favorites: rows});
    } catch (error){
        console.error('Error fetching favorites:', error);
        res.status(500).send('Internal Server Error');
    }
};