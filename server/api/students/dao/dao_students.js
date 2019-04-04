import Promise from 'bluebird';
import model from '../../../models';
 export default class StudentDao {
  static getAll(_query) {
    return new Promise((resolve, reject) => {
      console.log('getall method called')
       model.student.findAll({})
        .then(students => {
           resolve(students)
        }, (error) => {
           reject(error);
        })
    })
  }
   static createNew(request) {
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = request
      model.student.create({
        name: _reqBody.name,
      }).then(student => {
        resolve(student)
      })
        .catch(error => {
          reject('Not Created ')
        })
    })


    }
}
