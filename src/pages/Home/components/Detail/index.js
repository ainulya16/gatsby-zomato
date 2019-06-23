import React from 'react';
import { bool, objectOf, any } from 'prop-types';
import {
Skeleton,
} from 'antd';


const Detail = (props) => {
  const { loading, data } = props;
  if (loading) {
    return <Skeleton />;
  }
  return (
    <div>
      <img alt={data.name} src={data.featured_image} width="100%" />
        <h2>{data.name}</h2>
        <h4>{data.cuisines}</h4>
        <b>{`${data.location.address}, ${data.location.city}`}</b>

    </div>
  );
};

Detail.defaultProps = {
  loading: true,
  data: {},
};

Detail.propTypes = {
  loading: bool,
  data: objectOf(any),
};

export default Detail;
