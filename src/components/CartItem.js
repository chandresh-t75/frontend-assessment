import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import { remove } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const CartItem = ({item}) => {

    const dispatch=useDispatch();
    const removeFromFavourite=()=>{
        dispatch(remove(item.id));
        toast.success("Item removed from Favourite");
    }

  return (
    <div className=' flex flex-row flex-wrap gap-2  justify-around items-center  p-4 border-b-2 border-slate-700 mt-4 '>
        <div className='h-[120px]'>
            <img src={item.thumbnailUrl} alt="" className=' h-full'/>
        </div>
        <div className='flex flex-col gap-2 items-center text-center'>
            <h1 className='w-80 text-lg text-slate-700 font-semibold flex flex-wrap'>{item.title}</h1>
           
            <div className='flex justify-between'>
              
                <div onClick={removeFromFavourite} className='bg-red-500 rounded-full p-2 '>
                <FcDeleteDatabase/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CartItem