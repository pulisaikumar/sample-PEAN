import StusubjectController from '../controller/controller_stusubject'
export default class StusubjectRoute {
  static init(router){
    router
      .route('/stusub')
      .get(StusubjectController.getall)
      .post(StusubjectController.createnew)
   router
      .route('./stusub/:id')/*
      .get(StusubjectController.getbyid)
      .put(StusubjectController.updatebyid)*/
      .delete(StusubjectController.removebyid);
  }
}
