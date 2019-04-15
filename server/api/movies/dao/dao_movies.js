import Promise from 'bluebird'
import models from "../../../models"
export default class MoviesDao {
  static getall(){
    return new Promise((resolve,reject)=>{
      models.movie.findAndCountAll({})
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
    return new Promise

    }

    static updatebyId(body,id){

    }


    static removebyId(id){

    }

}
