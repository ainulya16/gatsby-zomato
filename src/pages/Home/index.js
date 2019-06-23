/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
 Row, Col, Skeleton, Typography, Card, Avatar, Modal, Alert,
} from 'antd';
import {
  Loading, Restaurant, Restaurants, ErrorMessage, LoadingDetail,
} from '../../redux/restaurant/selectors';
import { restaurantsNearby, restaurant } from '../../redux/restaurant/action';
import Detail from './components/Detail';
import Layout from '../../components/Layout';

const { Meta } = Card;
const { Title } = Typography;
const Center = styled.div`
  text-align: center;
`;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
    };
  }

  componentDidMount() {
    const params = {
      lat: '40.732013',
      lon: '-73.996155',
    };
    this.props.getRestaurantNearby(params);
  }

  showDetail = (id) => {
    this.props.getRestaurantDetail(id);
    this.setState({ isShowDetail: true });
  }

  hide = () => this.setState({ isShowDetail: false })

  detail = () => {
    const { detail } = this.props;
    if (!_.isEmpty(detail)) {
      const data = detail.toJS();
      window.open(data.menu_url, '_blank');
    }
  }

  renderCover = (image) => {
    if (image) {
      return <img alt={image} src={image} />;
    }
    return (
      <Center>
        <Avatar shape="square" size={164} icon="picture" />
      </Center>
    );
  }

  renderItem = ({ restaurant: data }) => {
    return (
      <Card
        onClick={() => this.showDetail(data.id)}
        key={data.id}
        hoverable
        style={{ width: 240 }}
        cover={this.renderCover(data.thumb)}
      >
        <Meta title={data.name} description={`${data.location.address}, ${data.location.city}`} />
      </Card>
    );
  }

  renderEmpty = () => <Title level={2}>Empty data</Title>

  render() {
    const {
      loading, data, error, detail, loading_detail,
    } = this.props;
    const records = !_.isEmpty(data) ? data.toJS() : [];
    const { isShowDetail } = this.state;
    return (
      <Layout title="Zomato">
        {error && <Alert message={error} closable />}
        <Modal visible={isShowDetail} title="Detail" okText="See Menus" cancelText="Close" onCancel={this.hide} onOk={this.detail}>
          <Detail data={detail.toJS()} loading={loading_detail} />
        </Modal>
        {loading ? <Skeleton />
        : (
        <div>
          <Title level={2}>New York Restaurant</Title>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={4}>
              {records.length > 0 ? records.map(this.renderItem) : this.renderEmpty()}
            </Col>
          </Row>
        </div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: Restaurants(),
  loading: Loading(),
  loading_detail: LoadingDetail(),
  detail: Restaurant(),
  error: ErrorMessage(),
});
const mapDispatchToProps = {
  getRestaurantNearby: restaurantsNearby,
  getRestaurantDetail: restaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
