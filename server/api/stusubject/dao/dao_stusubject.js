import models from '../../../models';
import Promise from 'bluebird'
export default class StusubjectDao {
  static getAll(){
    return new Promise ((resolve,reject)=>{
      models.stusubject.findAll({})
        .then(results => {resolve(results)})
        .catch((error) => {reject(error);})
    })
  }
  static createNew(request){
    return new Promise((resolve,reject)=>{
      models.stusubject.create( {
        sud_id:request.sud_id,
        stu_id:request.stu_id,
      })
        .then((stusub)=>{resolve(stusub)})
        .catch((error)=>{reject('not created')})

    })

  }

}
