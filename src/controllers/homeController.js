const getHomepage = (req, res) => {
    res.send('Hello World! test test')

}

const getAbc = (req, res) => (
    res.send('Check ABC')
)

const getHuy = (req, res) => (
    res.render('sample.ejs')
)
// tại vì có nhiều mục cần export nên phải dùng dấu oject {....}
module.exports = {
    getHomepage, getAbc, getHuy
}