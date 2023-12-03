import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import ItemList from '../components/ItemList';


const Home = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/photos";
  const ITEMS_PER_PAGE = 20;
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [TotalPages, setTotalPages] = useState('');
  const [newItemId, setNewItemId] = useState('');
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemImage, setNewItemImage] = useState('');

  async function fetchData() {
    setLoading(true);
    try {
      const result = await fetch(`${API_URL}?_page=${currentPage}&_limit=${ITEMS_PER_PAGE}`);
      const data = await result.json();
      // console.log(data);
      const totalCount = result.headers.get('X-Total-Count');
      const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
      setPosts(data);


      // console.log(posts);
      setTotalPages(totalPages);

    }
    catch (error) {
      console.log(error.message);
      setPosts([]);
      setTotalPages(0);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();

    // console.log();
  }, [currentPage])
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  const handleNewItemSubmit = (e) => {
    e.preventDefault();

    // Create a new item object with relevant fields
    const newItem = {
      albumId: Date.now(),
      id: newItemId,
      title: newItemTitle,
      thumbnailUrl: newItemImage, // Change this to the actual field name from your API
    };
    // console.log(newItem);
    // Dispatch the action to add the new item
    //  setPosts(newItem);
    posts.unshift(newItem);
    // setPosts((prevPosts) => [ newItem,...prevPosts]);
    console.log(posts);

    // Clear the form fields
    setNewItemId('');
    setNewItemTitle('');
    setNewItemImage('');
  };


  return (
    <div >

      {
        loading ? (<Spinner />) : (
          posts.length > 0 ?
            (
              <div>
                <div className='w-full  flex flex-wrap mt-6 px-2 '>
                  <form onSubmit={handleNewItemSubmit} className='grid xsm:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-center mx-auto'>
                    <input
                      type="text"
                      placeholder="New Item ID" className=' px-2 py-1 '
                      value={newItemId} required
                      onChange={(e) => setNewItemId(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="New Item Title" className='px-2 py-1 '
                      value={newItemTitle} required
                      onChange={(e) => setNewItemTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="New Item Image URL" required className=' px-2 py-1 '
                      // Adjust placeholder and label based on your needs
                      value={newItemImage}
                      onChange={(e) => setNewItemImage(e.target.value)}
                    />
                    <button type="submit" className='bg-blue-400 rounded-md px-2 py-1 '>Add New Item</button>
                  </form>
                </div>
                <div className='w-full grid xsm:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 max-w-6xl p-2 mx-auto  space-y-10 space-x-5 min-h-[80vh] justify-center'>

                  {posts.map((post) => (
                    //  console.log("hii");
                    <ItemList key={post.id} post={post} />

                  ))
                  }


                </div>
                <div className="flex justify-between items-center mx-auto max-w-6xl mt-6 px-8">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <p className='font-bold bg-slate-200 px-4 py-2 rounded '>{currentPage} of {TotalPages} </p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={posts.length < ITEMS_PER_PAGE}
                  >
                    Next
                  </button>
                </div>
              </div>


            )
            :
            <div className='text-center text-bold mt-8'>
              <p>No data found!</p>
              <div className='w-full  flex flex-wrap mt-6 px-2 '>
                <form onSubmit={handleNewItemSubmit} className='grid xsm:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-center mx-auto'>
                  <input
                    type="text"
                    placeholder="New Item ID" className=' px-2 py-1 '
                    value={newItemId} required
                    onChange={(e) => setNewItemId(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="New Item Title" className='px-2 py-1 '
                    value={newItemTitle} required
                    onChange={(e) => setNewItemTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="New Item Image URL" required className=' px-2 py-1 '
                    // Adjust placeholder and label based on your needs
                    value={newItemImage}
                    onChange={(e) => setNewItemImage(e.target.value)}
                  />
                  <button type="submit" className='bg-blue-400 rounded-md px-2 py-1 '>Add New Item</button>
                </form>
              </div>
            </div>

        )
      }



    </div>
  )
}

export default Home