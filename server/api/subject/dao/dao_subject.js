import model from '../../../models';
import Promise from 'bluebird'
export default class SubjectDao{

   static getAll() {
    return new Promise(( resolve,reject)=> {
      model.subject.findAll({})
        .then(subjects =>{resolve(subjects)})
        .catch(error=>{reject(error)})
    })
  }

  static createNew(request){
    return new Promise((resolve,reject)=>{
     model.subject.create({
     name: request.name })
       .then(subject=>{resolve(subject)})
       .catch((error=>{reject(error)}))
   })
  }

  static getById(id){
     return new Promise((resolve,reject)=>{
       model.subject.findAll({where:{id:id}})
         .then(results=>resolve(results))
         .catch(error=>reject(error))
     })
  }

  static removeById(id) {
    return new Promise((resolve, reject) => {
      model.subject.destroy({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))

    })
  }

  static updateById(request,id){
     return new Promise((resolve,reject)=>{
       model.subject.update({name:request.name},{where:{id:id}})
         .then(results=>resolve(results))
         .catch(error=>reject(error))
     })
  }

}
