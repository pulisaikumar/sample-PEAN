import  StudentsController from '/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/students/controller/controller_students';

 export  class StudentsRoutes {
   static init(router){
     router
       .route('/student')
       .get(StudentsController.getAll)
       .post(StudentsController.createNew)
     router
       .route('/student/:id')
       .get(StudentsController.getById)
   }
 }
