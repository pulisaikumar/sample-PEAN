import  SubjectDao from "/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/subject/dao/dao_subject.js"
export default class SubjectController{
  static getAll(req,res){
     SubjectDao.getAll()
      .then((subject)=>res.status(200).json(subject))
      .error((subject)=>res.status(400).json(error))
  }


  static createNew(req,res){
     SubjectDao.createNew(req.body)
      .then((subject)=>res.status(200).json(subject))
      .error((subject)=>res.status(400).json(error))
  }

  static getbyid(req,res){
    SubjectDao.getById(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))

  }

  static removebyid(req,res){
    SubjectDao.removeById(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static updatebyid(req,res){
    SubjectDao.updateById(req.body,req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }
}
