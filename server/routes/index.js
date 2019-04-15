 import {StudentsRoutes} from "../api/students/route/route_students";
import  SubjectRoute from "../api/subject/route/route_subject";
import LecturerRoute from "../api/lecturer/route/route_lecturer";
 import StusubjectRoute  from "../api/stusubject/route/route_stusubject";
 import UserRoute from "../api/user/route/route_user";
 import MoviesRoute from "../api/movies/route/route_movies";


export default class Routes {
   static init(app, router) {
     SubjectRoute.init(router);
     StudentsRoutes.init(router);
     LecturerRoute.init(router);
     MoviesRoute.init(router)
     StusubjectRoute.init(router);
     UserRoute.init(router);
     app.use("/" , router);
   }
}
