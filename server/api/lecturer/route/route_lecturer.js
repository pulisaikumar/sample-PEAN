import LecturerController from "../controller/controller_lecturer"

export default class LecturerRoute{
  static init(router)
  {
    router
      .route('/lecture')
      .get(LecturerController.getAll)
      .post(LecturerController.createNew)
  }

}
zz
