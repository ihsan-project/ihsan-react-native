import { ADD_NUMBER } from '../constants/actionConstants';



export const add = (num: number) : any =>  {

    return {
        type: ADD_NUMBER,
        payLoad: num
    }

}