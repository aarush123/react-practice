import React from 'react';
import { useParams } from 'react-router';
const Details = () => {
    const params = useParams();
    console.log(params.test);
  return (
    <div>
        Details Component {params.test}
    </div>
  )
}

export default Details;