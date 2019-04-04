import StudentDao from '/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/students/dao/dao_students'
export default class ControllerStudents {
  static getAll(req,res){
    const _query = req.query;
    StudentDao
        .getAll(_query)
      .then((student) => res.status(200).json(student).send(student))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let studnt  = req.body;
    StudentDao
      .createNew(studnt)
      .then(student => res.status(200).json(student).send(student))
      .catch(error => res.status(400).json(error));
  }
}

