import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

const jumbotronStyle = {
    backgroundColor: 'red',
    height: "540px"
}

const jumbotronOneText = {
    marginTop: "100px"
}



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <Jumbotron  style={jumbotronStyle}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-1" style={jumbotronOneText}>
                                <h1>FIND THE RIGHT PLACE FOR YOU</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1> Title </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                paragraph
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;