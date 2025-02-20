import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Posts = () => {
  const { id } = useParams();
  
  useEffect(() => {})
  return (
    <div>
        {id}
    </div>
  )
}

export default Posts;