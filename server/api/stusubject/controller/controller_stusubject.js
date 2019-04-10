import StusubjectDao from "../../stusubject/dao/dao_stusubject"
export default class StusubjectController{

  static getall(req,res) {
    console.log('i am in the controller')
    StusubjectDao.getAll()
      .then((stusub) => res.status(201).json(stusub))
      .catch(error => res.status(404).json(error));
  }

  static createnew(req,res){
    console.log('i am in the controller')
    StusubjectDao
      .createNew(req.body)
      .then((stusub)=>{res.status(200), json(stusub)})
      .catch(error => res.status(404).json(error));
  }

}
