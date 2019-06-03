import UserController from "/home/sb-saikumar/WebstormProjects/sample-PEAN/serverapp/server/api/user/controller/controller_user"
export default class  UserRoute{
  static init (router){
    router
      .route('/user')
      .get(UserController.getAll)
      .post(UserController.newcreate)


  router
    .route('/user/:id')
    .get(UserController.getById)
    .put(UserController.update)
    .delete(UserController.removeById)
  }
}
