import React, { Component } from 'react';

// import general components
// import Header from './Header';
// import Footer from './Footer';

// import Page components
import HomeScreen from './screens/HomeScreen/HomeScreen';
// import ListingsScreen from './screens/ListingsScreen/ListingsScreen';
// import MessagesScreen from './screens/MessagesScreen/MessagesScreen';
// import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
// import SingleListingScreen from './screens/SingleListingScreen/SingleListingScreen';



// redux imports
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchListings, fetchProfiles } from '../redux/ActionCreators';

const mapStateToProps = state =>{
    return {
        listings: state.listings,
        profiles: state.profiles
    }
}

const mapDispatchToProps = dispatch => ({
    fetchListings: () => {dispatch(fetchListings())},
    fetchProfiles: () => {dispatch(fetchProfiles())}
});


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // dispatch fetch
        this.props.fetchListings();
        this.props.fetchProfiles();
    }

    render() { 
        const HomeScreenPage = () =>{
            return(
                <HomeScreen/>
            );
        }

        const ListingScreenPage = () =>{
            return(
                <div></div>
            );
        }

        const MessagesScreenPage = () =>{
            return(
                <div></div>
            );
        }

        const ProfilesScreenPage = () =>{
            return(
                <div></div>
            );
        }

        const SignUpScreenPage = () =>{
            return(
                <div></div>
            );
        }

        const SingleListingScreenPage = () =>{
            return(
                <div></div>
            );
        }

        return (
            <div>
                {/* <Header/> */}
                <Switch>
                    <Route path="/home" component={HomeScreenPage}/>
                    <Route path="/listings" component={ListingScreenPage}/>
                    <Route path="/messages" component={MessagesScreenPage}/>
                    <Route path="/:profileId" component={SignUpScreenPage}/>
                    <Route path="/signup" component={SignUpScreenPage}/>
                    <Route path="/listings/:listingId" component={SingleListingScreenPage}/>
                    <Redirect to="/home"/>
                </Switch>
                {/* <Footer/> */}
            </div>
        );
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));