import SubjectController from "/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/subject/controller/controller_subject.js"
export default  class SubjectRoute {
  static  init(router){
    router
      .route('/subject')
      .get(SubjectController.getAll)
      .post(SubjectController.createNew)

    router
      .route('/subject/:id')
      .get(SubjectController.getbyid)
      .put(SubjectController.updatebyid)
      .delete(SubjectController.removebyid)
  }

}
