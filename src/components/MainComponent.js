import React, { Component } from 'react';

// import general components
// import Header from './Header';
// import Footer from './Footer';

// import Page components
// import HomeScreen from './screens/HomeScreen/HomeScreen';



// redux imports
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { } from '../redux/ActionCreators';

const mapStateToProps = state =>{
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

const TestComponent = () =>{
    return(
        <div>
        </div>
    );
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // dispatch fetch

    }

    render() { 
        

        return (
            <div>
                {/* <Header/> */}
                <Switch>
                    <Route path="" component={TestComponent}/>
                    <Route path="" component={TestComponent}/>
                    <Route path="" component={TestComponent}/>
                    <Route path="" component={TestComponent}/>
                    <Route path="" component={TestComponent}/>
                    <Redirect to="/home"/>
                </Switch>
                {/* <Footer/> */}
            </div>
        );
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));