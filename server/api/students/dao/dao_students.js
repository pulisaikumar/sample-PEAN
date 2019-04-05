import Promise from 'bluebird';
import model from '../../../models';
 export default class StudentDao {
  static getAll() {
    return new Promise((resolve, reject) => {
        model.student.findAll({})
        .then(students => {resolve(students)})
         .catch((error) => {reject(error);})
    })
  }
   static createNew(request) {
    return new Promise((resolve, reject) => {
       model.student.create({
        name: request.name,
      }).then(student => {resolve(student)})
        .catch(error => {reject('Not Created ')})
    })


    }
}
