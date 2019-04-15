/*
import MoviesDao from '/home/sb-saikumar/WebstormProjects/sample-PEAN/server/api/movies/dao/dao_movies'
*/
import MoviesDao from '../dao/dao_movies';
export default class MoviesController {
  static getAll(req,res){
     MoviesDao
      .getall()
      .then((movie)=> res.status(200).json(movie))
      .catch((error)=>res.status(400).json(error))
  }

  static createNew(req,res){
    MoviesDao.createmovie(req.body)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
    }

    static getbyid(req,res){
    MoviesDao.getbyId(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
    }


    static updatebyd(req,res){
    MoviesDao.updatebyId(req.body,req.params.id)
    .then(results=>res.status(200).json(results))
        .catch(error=>res.status(400).json(error))
    }

    static removebyid(req,res){
    MoviesDao.removebyId(req.params.id)
    .then(results=>res.status(200).json(results))
        .catch(error=>res.status(400).json(error))
    }

}
