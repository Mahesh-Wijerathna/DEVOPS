import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const SearchResultPage = () => {
  const { search } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  
  

  useEffect(() => {
    console.log(search);
    
    
    const fetchSearchResults = async () => {
        try {
          console.log(search);
          const response = await axios.get(`/product/search?keyword=${search}`);
          setPost(response.data.results);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching search results:', error.response.data);
        }
      };

    fetchSearchResults();
  }, [search]);
  
  
  



  return (
    <div className='w-full h-full'>
      <div className='mx-8 pt-8'>
        <h1 className='text-[32px] font-medium'>Results for Products '{search}'</h1>
        <div className='border-t border-black mt-2 w-full'></div>
      </div>
      {loading ? (
        <div className='w-full h-[300px] items-center justify-center'>
          <div className='flex flex-row gap-2 justify-center'>
            <div className='w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]'></div>
            <div className='w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]'></div>
            <div className='w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]'></div>
          </div>
        </div>
      ) : (
        <div className='mt-8 grid grid-cols-4 justify-center animate-fade animate-once'>
          {Array.isArray(post) && post.length > 0 ? (
            post.map((postItem) => (
              <div key={postItem._id} className='p-2 m-2 cursor-pointer'>
                {postItem.postImage && (
                  <img
                    src={postItem.postImage}
                    alt='post'
                    className='w-80 h-60 object-cover rounded-md'
                    
                  />
                )}
                <div className='flex flex-row justify-between p-4'>
                  <h3 className='text-[16px] font-medium'>{postItem.title}</h3>
                  <div>
                    <p className='mr-8'>{postItem.likes.length}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      )}
    </div>
  );};


export default SearchResultPage;