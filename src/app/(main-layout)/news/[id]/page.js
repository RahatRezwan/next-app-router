import React from 'react';

const NewsDetails = ({ params, searchParams }) => {
   console.log(searchParams);
   return (
      <div>
         <h1 className='text-3xl'>News Details Page of Id: {params.id}</h1>
      </div>
   );
};

export default NewsDetails;
