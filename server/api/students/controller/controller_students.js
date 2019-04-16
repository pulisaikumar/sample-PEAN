import StudentDao from '/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/students/dao/dao_students'
export default class ControllerStudents {

  static getAll(req,res){
    StudentDao.getAll()
      .then((student) => res.status(201).json(student))
      .catch(error => res.status(404).json(error));
  }

  static createNew(req, res) {
     StudentDao.createNew(req.body)
      .then(student => res.status(201).json(student))
      .catch(error => res.status(404).json(error));
  }
   static getbyid(req,res){
     StudentDao.getById(req.params.id)
      .then((student) => res.status(200).json(student))
      .catch(error => res.status(404).json(error));

   }

   static updatebyid(req,res){
    StudentDao.updateById(req.body,req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
   }

   static removebyid(req,res){
    StudentDao.removeById(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.error.json(error))

   }

}

