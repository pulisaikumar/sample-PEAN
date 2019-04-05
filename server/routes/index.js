import TodoRoutes from "../api/todo/route/todo-route";
import {StudentsRoutes} from "../api/students/route/route_students";
import  SubjectRoute from "../api/subject/route/route_subject";
import LecturerRoute from "../api/lecturer/route/route_lecturer";


export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     SubjectRoute.init(router);
     StudentsRoutes.init(router);
     LecturerRoute.init(router);
     app.use("/" , router);
   }
}
