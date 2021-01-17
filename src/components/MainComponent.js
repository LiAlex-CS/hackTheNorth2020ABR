import React, { Component } from 'react';

// import general components
import Header from './Header';
import Footer from './Footer';

// import Page components
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ListingsScreen from './screens/ListingsScreen/ListingsScreen';
import PostListingScreen from './screens/PostListingScreen/PostListingScreen';
// import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
// import ContactScreen from './screens/ContactScreen/ContactScreen';
import SingleListingScreen from './screens/SingleListingScreen/SingleListingScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';

// redux imports
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchListings, fetchProfiles, loginUser, logoutUser, signUpUser } from '../redux/ActionCreators';
import SingleListing from './screens/SingleListingScreen/SingleListingScreen';

const mapStateToProps = state =>{
    return {
        listings: state.listings,
        profiles: state.profiles,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
    fetchListings: () => {dispatch(fetchListings())},
    fetchProfiles: () => {dispatch(fetchProfiles())},
    loginUser: (creds) => {dispatch(loginUser(creds))},
    logoutUser: () => {dispatch(logoutUser())},
    signUpUser: (creds) => {dispatch(signUpUser(creds))}
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
                <ListingsScreen
                    listings={this.props.listings.listings}
                    listingsLoading = {this.props.listings.isLoading}
                    listingsErrMess={this.props.listings.errMess}
                    profiles={this.props.profiles.profiles}
                    profilesLoading = {this.props.profiles.isLoading}
                    profilesErrMess={this.props.profiles.errMess}
                    />
            );
        }

        const PostListingScreenPage = () =>{
            return(
                <PostListingScreen
                    auth={this.props.auth}
                    />
            );
        }

        const ProfilesScreenPage = () =>{
            return(
                <div></div>
            );
        }

        const SignUpScreenPage = () =>{
            return(
                <SignUpScreen
                    postSignUp={this.props.signUpUser}
                    />
            );
        }

        const ContactScreenPage = () =>{
            return(
                <div></div>
            );
        }

        const SingleListingScreenPage = ({match}) =>{
            return(
                <SingleListing
                    data={this.props.listings.listings.filter(listing => listing._id === match.params.listingId)}
                    isLoading = {this.props.listings.isLoading}
                    errMess={this.props.listings.errMess}
                    />
            );
        }

        return (
            <div>
                <Header
                    auth={this.props.auth} 
                    loginUser={this.props.loginUser} 
                    logoutUser={this.props.logoutUser}
                />
                <Switch>
                    <Route path="/home" component={HomeScreenPage}/>
                    <Route path="/listings" component={ListingScreenPage}/>
                    <Route path="/post_listing" component={PostListingScreenPage}/>
                    <Route path="/:profileId" component={SignUpScreenPage}/>
                    <Route path="/signup" component={SignUpScreenPage}/>
                    {/* <Route path="/contact" component={ContactScreenPage}/> */}
                    <Route path="/listings/:listingId" component={SingleListingScreenPage}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));