// export const asyncHandler =(requestHandler)=>async(req,res,next)=>{
//  try {
//     await requestHandler(req,res,next)
//  } catch (error) {
//     res.status(err.code || 500).json({
//         success:false,
//         messager:err.message
//     })
//  }
// }

export const asyncHandler = async requestHandler => {
  ;(req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(err => next(err))
  }
}
