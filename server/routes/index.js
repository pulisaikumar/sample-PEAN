import TodoRoutes from "../api/todo/route/todo-route";
import {StudentsRoutes} from "../api/students/route/route_students";


export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     StudentsRoutes.init(router);
     app.use("/" , router);
   }
}
