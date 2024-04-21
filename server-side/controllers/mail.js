const index = (req, res) => {
    res.status(200).json({message: "success"});
}

const deleteMail = (req, res) => {
    res.status(200).json({message: "success"});
}
const postMail = (req, res) => {
    res.status(200).json({message: "success"});
}
export { deleteMail, index, postMail }