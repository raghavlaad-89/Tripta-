const getAllBooks = async(req, res) => {
    res.status(200).json({msg : "get all books"});
};

const getAllBooksTesting = async(req, res) => {
    res.status(200).json({msg : "get all books testing"});
};

module.exports = {
    getAllBooks,
    getAllBooksTesting
};