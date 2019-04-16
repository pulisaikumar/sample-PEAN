import StusubjectDao from "../../stusubject/dao/dao_stusubject"
export default class StusubjectController{

  static getall(req,res) {
     StusubjectDao.getAll()
      .then((stusub) => res.status(201).json(stusub))
      .catch(error => res.status(404).json(error));
  }

  static createnew(req,res){
     StusubjectDao
      .createNew(req.body)
      .then((results)=>{res.status(200).json(results)})
      .catch(error => res.status(404).json(error));
     console.log(req.body);

  }

/*  static getbyid(req,res){
    StusubjectDao.getById(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static updatebyid(req,res){
    StusubjectDao.updateById(req.body,req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }*/

  static removebyid(req,res){
    StusubjectDao.removeById(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))

  }
}
