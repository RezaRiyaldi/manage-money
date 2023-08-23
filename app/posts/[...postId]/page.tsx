import React from 'react'

export default function PostDetail({ params }: { params: { postId: string } }) {
   return (
      <div>
         <h2>Post: {params.postId[0]}</h2 >
         <h2>Detail: {params.postId[1]}</h2 >
      </div>
   )
}
