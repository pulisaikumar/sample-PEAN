import LecturerController from "/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/lecturer/controller/controller_lecturer"

export default class LecturerRoute{
  static init(router)
  {
    router
      .route('/lecture')
      .get(LecturerController.getAll)
      .post(LecturerController.createNew)
  }

}
