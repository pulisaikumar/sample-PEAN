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
     name: request.name})
       .then(subject=>{resolve(subject)})
       .catch((error=>{reject(error)}))
   })
  }
}
