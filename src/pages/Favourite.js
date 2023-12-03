import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Favourite = () => {

    const { favourite } = useSelector((state) => state);
    

    return (
        <div>
            {
                favourite.length> 0 ?
                    (
                        <div className='flex flex-row  justify-center mx-auto gap-8 flex-wrap   '>
                             <div className=' '>
                                {
                                    favourite.map((item,index)=>{
                                        return <CartItem key={item.id} item={item} itemIndex={index}/>
                                    })
                                }
                             </div>
                             <div className='flex flex-col justify-between mt-10'>
                                  <div>
                                    <h1 className='text-green-700 font-bold uppercase text-[14px]'>Your Favourite</h1>
                                    <h1 className='text-3xl font-semibold text-green-600 uppercase'>Summary</h1>
                                    <p className='text-[14px] pt-2'>
                                        <span >Total Items:{favourite.length}</span>
                                    </p>
                                  </div>
                                 

                             </div>
                        </div>
                    ) :

                    (
                        <div className='absolute sm:top-[50%] sm:left-[44%] top-[50%] left-[30%] flex flex-col justify-center items-center gap-3 mx-auto'>
                            <h1 className='font-semibold '>Favourite Empty</h1>
                            <Link to="/"><button className='bg-green-600 py-2 px-4  text-white rounded-md'>Add to Favourites</button></Link>
                        </div>
                    )



            }


        </div>
    )
}

export default Favourite