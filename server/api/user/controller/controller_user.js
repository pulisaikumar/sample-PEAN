import UserDao from "/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/user/dao/dao_user.js"
 export default class UserController {
  static getAll(req,res){
    UserDao
      .getAll()
      .then((user)=> res.status(200).json(user))
      .catch((error)=>res.status(400).json(error))
  }


  static newcreate(req,res){
    UserDao
      .newCreate(req.body)
      .then((user)=>{res.status(200).json(user)})
      .error((error)=>res.status(400).json(error))

  }

   static getById(req, res){
     UserDao
       .getbyid(req.params.id)
       .then(user=>res.status(200).json(user))
       .catch((error)=> res.status(400).json(error))
   }
   static removeById(req,res){
    UserDao
      .removeById(req.params.id)
      .then((user)=>res.status(200).json(user))
      .catch((error)=>res.status(404).json(error))
   }

   static update(req,res){
     UserDao
       .update(req.body,req.params.id)
       .then((user)=>res.status(200).json(user))
       .catch((error)=>res.status(404).json(error))
   }
}
