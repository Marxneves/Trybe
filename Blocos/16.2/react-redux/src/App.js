import { connect } from 'react-redux';
import { actionDecrement, actionIncrement } from './actions';
import './App.css';

function App({ number, clickPlus, clickMinus }) {

  return (
    <div>
      <span>{ number }</span>
      <button onClick={ () => clickPlus() }> + </button>
      <button onClick={ () => clickMinus() }> - </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  number: state.changeNumber,
});

const mapDispatchToProps = (dispatch) => ({
  clickPlus: () => dispatch(actionIncrement()),
  clickMinus: () => dispatch(actionDecrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
