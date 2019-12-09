import { compose } from 'recompose';
import { connect } from 'react-redux';
import Home from './Home';
import './index.css'
const mapStateToProps = (state) => ({
});

const actions = { };

export default compose(
  connect(mapStateToProps, actions)
)(Home);