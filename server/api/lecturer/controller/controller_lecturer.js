import LecturerDao from "/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/lecturer/dao/dao_lecturer"
 export default class LecturerController {

  static getAll(req,res){
    LecturerDao
      .getAll(req.query)
      .then((lecturer) => res.status(201).json(lecturer))
      .catch(error => res.status(404).json(error));
  }

  static createNew(req,res){
    LecturerDao
      .createNew(req.body)
      .then(lecturer=>res.status(200).json(lecturer))
      .catch(error=>res.status(400).json(error))
  }

}
