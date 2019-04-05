import  SubjectDao from "/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/subject/dao/dao_subject.js"
export default class SubjectController{
  static getAll(req,res){
     SubjectDao
      .getAll(req.query)
      .then((subject)=>res.status(200).json(subject))
      .error((subject)=>res.status(400).json(error))
  }


  static createNew(req,res){
     SubjectDao
      .createNew(req.body)
      .then((subject)=>res.status(200).json(subject))
      .error((subject)=>res.status(400).json(error))
  }
}
