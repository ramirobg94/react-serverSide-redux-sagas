import withRedux from 'next-redux-wrapper';
import initializeStore from '../state';

import {
	getValue
} from '../state/Home/selectors';

import {
	setValueAsync 
} from '../state/Home/actionCreators';


const HomePage = (props) =>
  <div>
    That's the home page.
    <button id="submit" type="submit" 
	    name="go" className="btn btn-lg btn-primary btn-block" 
	    onClick={()=> props.setValueAsync()}
	>
		incrementeAsync
	</button>
	{props.value}
  </div>


const mapStateToProps = (state, ownProps) => ({
	value: getValue(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setValueAsync: () => { dispatch(setValueAsync(3)); },
});

export default withRedux(initializeStore, mapStateToProps, mapDispatchToProps)(HomePage);