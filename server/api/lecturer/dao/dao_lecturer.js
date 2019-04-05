import Promise from "bluebird"
import model from "../../../models"
export default class LecturerDao{

  static getAll(){
    return new Promise((resolve,reject)=>{
      model.lecturer.findAll( {})
        .then(lecturer=>{resolve(lecturer)})
        .catch((error)=>{reject(error)})
    })
  }

  static createNew(request){
    return new Promise((resolve,reject)=>{
      model.lecturer.create({
        name: request.name})
        .then((lecturer)=>{resolve(lecturer)})
        .catch((error)=>{reject('not created')})
    })

  }
}
