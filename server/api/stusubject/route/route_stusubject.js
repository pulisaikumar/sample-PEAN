import StusubjectController from '../../stusubject/controller/controller_stusubject'
export default class StusubjectRoute {
  static init(router){
    router
      .route('/stusub')
      .get(StusubjectController.getall)
      .post(StusubjectController.createnew)
 /*   Router
      .route('./stusub/:id')
      .get(StusubjectController.getbyid);*!/*/
  }
}
