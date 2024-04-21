const login = (req,res) =>{
    const {username, password} = req.body;
    try{
    res.status(200).json({message:"Success"});
    }catch(error){
        res.status(401).json({error: error.message})
    }
}
const updateUser = (req,res) => {
    const {} = req.body

}
export {login,updateUser}