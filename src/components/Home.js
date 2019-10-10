import React, { Component, Fragment } from "react";
import Exercises from "./Exercises";
import Header from "./Layouts/Header";
import Loaders from './Exercises/Loaders'

const styles = {
    bodyContainer: {
        // padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
    }
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoading: true
        };
    }

    componentWillMount = () => {
        setTimeout (() =>{
        this.setState({
            isLoading: false
        })
    }, 2000);
    }

    render() {
        const Loading = <Loaders/>
    return (
        this.state.isLoading 
        ?  Loading :
    <Fragment>
    <Header/>
    <div style = { styles.bodyContainer } >
    <Exercises/>
    </div >
    </Fragment>
    );
    }
}
export default Home;