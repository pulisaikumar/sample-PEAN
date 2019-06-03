import Promise from 'bluebird'
import models from "../../../models"
export default class MoviesDao {
  static getall(){
    return new Promise((resolve,reject)=>{
      models.movie.findAll({})
        .then((movie) => resolve(movie))
        .catch(error=>reject(error))

    })}

    static createmovie(request){
    return new Promise((resolve,reject)=>{
      models.movie.create({name:request.name,user_id:request.user_id})
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    })
    }

    static getbyId(id){
    return new Promise((resolve,reject)=>{
      models.movie.findAll({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })

    }

    static updatebyId(body,id){
    return new Promise((resolve,reject)=>{
      models.movie.update({name:body.name,user_id:body.user_id},{where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
    }


    static removebyId(id){
    return new Promise((resolve,reject)=>{
      models.movie.destroy({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })

    }

}
