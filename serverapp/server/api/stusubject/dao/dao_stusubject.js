import models from '../../../models';
import Promise from 'bluebird'
export default class StusubjectDao {
  static getAll(){
    return new Promise ((resolve,reject)=>{
      models.stusubject.findAll({})
        .then(results => resolve(results))
        .catch(error => reject(error))
    })
  }
  static createNew(request){
    return new Promise((resolve,reject)=>{
      models.stusubject.create( {
        stu_id:request.stu_id,
        sub_id:request.sub_id,
      })
        .then((results)=>{resolve(results)})
        .catch((error)=>{reject(error)})

    })
  }
/*
  static getById(id){
  return new Promise((resolve,reject)=>{
    models.stusubject.findAll({where:{id:id}})
      .then(results=>resolve(results))
      .catch(error=>reject(error))
  })
  }

  static updateById(request,id){
    return new Promise((resolve,reject)=>{
      models.stusubject.update({sud_id:request.sud_id, stu_id:request.stu_id},{where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }*/

  static removeById(id){
    return new Promise((resolve,reject)=>{
      models.stusubject.destroy({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))

    })
  }

}
