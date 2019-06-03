import MoviesCotroller from "/home/sb-saikumar/WebstormProjects/sample-PEAN/serverapp/server/api/movies/controller/controller_movies"
export default class MoviesRoute {
  static init(Router){
    Router
      .route('/movies')
      .get(MoviesCotroller.getAll)
     .post(MoviesCotroller.createNew)

    Router
       .route('/movies/:id')
       .get(MoviesCotroller.getbyid)
       .put(MoviesCotroller.updatebyid)
       .delete(MoviesCotroller.removebyid)
  }

}
