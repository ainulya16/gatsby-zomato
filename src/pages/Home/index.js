import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Loading, Restaurant, Restaurants } from '../../redux/restaurant/selectors';
import { restaurant } from '../../redux/restaurant/action';
import Layout from '../../components/Layout';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  render() {
    const { modalShow } = this.state;
    return (
      <Layout title="Zomato">
        {modalShow && <div>modal</div>}
        <div>Hai</div>
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
  getRestaurantList: restaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;