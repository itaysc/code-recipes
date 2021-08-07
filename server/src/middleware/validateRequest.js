import Joi from "joi";

export default (validationSchema=null)=>{
  return function (req, res, next) {
    if(validationSchema){
      const r = validationSchema.validate(req.body);
      if (r.error) {
        console.log(r.error)
        return res.status(400).send(r.error.details? r.error.details: r.error);
      }
    }

    next();
  }
}