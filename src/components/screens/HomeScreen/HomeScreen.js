import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

const jumbotronStyle = {
    backgroundColor: 'skyblue',
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
                            <h1> What is our cause? </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Quarantine for Covid-19 started 10 months ago, in march of last year. By this point, many of us had already signed lease agreements with various apartments for the following summer and fall semesters.
                            </p>
                            <p>
                                However, due to quarantine, we suddenly found ourselves having no use of these apartments, and needed to either sublet them to others, or lose thousands of dollars due to the quarantine.
                            </p>
                            <p>
                                We discovered through this process how difficult it was to find suitable sublets at reasonable prices, due to there being no standard market for such short term leases. When finding a sublet, there was no concrete way of knowing whether you were selling yourself short, or asking for too much.
                            </p>
                            <p>
                                By having a marketplace with numerous offers for similar residences targeted at a similar population, it is easier for prospective buyers to find a home they like at a fair price, as well as helping sellers set their places at reasonable prices.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;