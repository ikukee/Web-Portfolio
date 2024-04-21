const index = async(req,res) => {
    
    res.status(200).json({});
    
}
// /projects/:id (n+1)
const getProject = async(req,res) => {
    const {id} = req.params;


    res.status(200).json();
    
}
const updateProject = async(req,res)=>{
    const {id} = req.params;
    res.status(200).json({message: "success"});
}

const deleteProject = async(req,res)=>{
    const {id} = req.params;

    res.status(200).json({message: "success"});
}
const postProject = async(req,res) =>{
    const {} = req.body;

    res.status(200).json({message: "success"});
}
export { index, getProject,updateProject,deleteProject,postProject }