import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import { add,remove } from '../redux/slices/CartSlice';

const ItemList = ({post}) => {
    const {favourite}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addToFavourite=()=>{
      dispatch(add(post));
      toast.success("Item added to Favourite");
  }

  const removeFromFavourite=()=>{
    dispatch(remove(post.id));
    toast.success("Item removed from Favourite");
}


  return (
    <div className='flex flex-col  rounded-md gap-3 p-4 mt-10 ml-5 items-center justify-between hover:scale-105 transition-all duration-300 ease-in shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] '>
         <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
         </div>
      
         <div className='h-[180px]' >
            <img src={post.thumbnailUrl}  alt="" className='h-full w-full' />
         </div>
         <div className='flex w-full  justify-around items-center'>
        
         
            {
                favourite.some((p)=>p.id===post.id)? 
                (
                <button onClick={removeFromFavourite} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-2 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300'>Remove Favourite</button>
                )
                :
                (
                    <button onClick={addToFavourite} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-2 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300'>Add to Favourite</button>
                 )
            }
        </div>
         

    </div>
  )
}

export default ItemList