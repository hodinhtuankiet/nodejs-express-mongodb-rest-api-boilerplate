import { StatusCodes } from 'http-status-codes';
import  ApiError  from '~/utils/ApiError';

const createNew = async (req , res , next ) => {
    try {
    // console.log(req.body);
    res.status(StatusCodes.CREATED).json({message: 'POST from controller: API create new board'})
    } catch (error) {
        // res.status(StatusCodes.int).json({
            // just get string error message
        //     errors: new Error(error).message
        // })
        next(error);
    }
}        
export const boardController = {
    createNew
}