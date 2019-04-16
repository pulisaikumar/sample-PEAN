import Promise from 'bluebird';
import models from '../../../models';
 export default class StudentDao {
  static getAll() {
    return new Promise((resolve, reject) => {
        models.student.findAll({})
        .then(students => {resolve(students)})
         .catch((error) => {reject(error);})
    })
  }
   static createNew(request) {
    return new Promise((resolve, reject) => {
       models.student.create({
        name: request.name,
      }).then(student => {resolve(student)})
        .catch(error => {reject('Not Created ')})
    })
    }

   static getById(id){
      return new Promise((resolve,reject)=>{
       models.student.findAll({where:{id:id}})
         .then(result =>{resolve(result)})
         .catch((error) => {reject(error)})
     })
   }

   static updateById(request,id){
    return new Promise((resolve,reject)=>{
      models.student.update({name:request.name},{where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
   }

   static removeById(id){
    return new Promise((resolve,reject)=>{
      models.student.destroy({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
   }


}
