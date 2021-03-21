
import { ADD_NUMBER } from '../constants/actionConstants';


// TODO: Fix the type in Future PR
export const add = (num: number) : any =>  {

    return {
        type: ADD_NUMBER,
        payLoad: num
    }

}