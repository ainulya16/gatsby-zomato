/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Loading, Restaurant, Restaurants } from '../../redux/restaurant/selectors';
import { restaurantsNearby } from '../../redux/restaurant/action';
import Layout from '../../components/Layout';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  componentDidMount() {
    const params = {
      lat: '40.732013',
      lon: '-73.996155',
    };
    this.props.getRestaurantNearby(params);
  }

  renderItem = ({ restaurant: data }) => {
    return (
      <div key={data.id}>
        {data.name}
      </div>
    );
  }

  renderEmpty = () => {
    return (
      <p>Empty records</p>
    )
  }

  render() {
    const { loading, data } = this.props;
    const records = data.toJS();
    const { modalShow } = this.state;
    return (
      <Layout title="Zomato">
        {modalShow && <div>modal</div>}
        {loading ? <p>loading...</p>
        : (
        <div>
          <h1>New York Restaurant</h1>
            {records.length > 0 ? records.map(this.renderItem) : this.renderEmpty()}
        </div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: Restaurants(),
  loading: Loading(),
  detail: Restaurant(),
});
const mapDispatchToProps = {
  getRestaurantNearby: restaurantsNearby,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
