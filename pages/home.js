import withRedux from 'next-redux-wrapper';
import initializeStore from '../state';

import Layout from '../components/MyLayout.js'

import {
	getValue
} from '../state/Home/selectors';

import {
	setValueAsync,
	setValue
} from '../state/Home/actionCreators';


const HomePage = (props) =>
  <Layout>
  	<div>
    
    <h1>The next button changes the value in 1 second</h1>

    <button id="submit" type="submit" 
	    name="go" className="btn btn-lg btn-primary btn-block" 
	    onClick={()=> props.setValueAsync()}
	>
		incrementAsync
	</button>
	 <button id="submit" type="submit" 
	    name="go" className="btn btn-lg btn-primary btn-block" 
	    onClick={()=> props.setValue(8)}
	>
		increment
	</button>
	<h1>Value: {props.value}</h1>
  </div>
  </Layout>


const mapStateToProps = (state, ownProps) => ({
	value: getValue(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setValueAsync: () => { dispatch(setValueAsync(3)); },
	setValue: (value) => { dispatch(setValue(value)); }
});

export default withRedux(initializeStore, mapStateToProps, mapDispatchToProps)(HomePage);