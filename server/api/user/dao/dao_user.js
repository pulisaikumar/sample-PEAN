import Promise from "bluebird"
import models from "/home/sb-saikumar/WebstormProjects/sample-PEAN/server/models"
export default class UserDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.user.findAll({})
        .then((user) => resolve(user))
        .catch((error) =>reject(error))
    })
  }

 static newCreate(request) {
    return new Promise((resolve, reject) => {
      models.user.create({
        name: request.name,
        email: request.email,
        phone: request.phone,
      })
        .then(result =>
          resolve(result)
        )
        .catch((error =>
          reject(error)
        ))
    })
  }


  static getbyid(id){
    return new Promise((resolve,reject)=>{
      models.user.findAll({where:{id:id}})
      .then(result=> resolve(result))
      .catch(error=>reject(error))
    })
  }

  static removeById(id){
    return new Promise((resolve,reject)=>{
      models.user.destroy({where:{id:id}})
        .then( result =>{resolve("delted")})
        .catch(error=>{reject("error occur")})
    })
  }

  static update(add,id){
    return new Promise((resolve,reject)=>{
      models.user.update({name:add.name,email: add.email,phone:add.phone},
      {where:{id:id}})
        .then( result =>{resolve(result)})
        .catch(error=>{reject(error)})
    })
  }
}


