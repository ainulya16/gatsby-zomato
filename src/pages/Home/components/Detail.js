import React from 'react';
import { bool, objectOf, any } from 'prop-types';
import {
Skeleton, Typography,
} from 'antd';

const { Title } = Typography;

const Detail = (props) => {
  const { loading, data } = props;
  if (loading) {
    return <Skeleton />;
  }
  return (
    <div>
      <img alt={data.name} src={data.featured_image} width="100%" />
        <Title level={2}>{data.name}</Title>
        <Title level={4}>{data.cuisines}</Title>
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
