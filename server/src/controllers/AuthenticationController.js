module.exports = {
  register (req, res) {
    res.send({
      message: `Hey ${req.body.email}! Your registration is successfull!`
    })
  }
}
