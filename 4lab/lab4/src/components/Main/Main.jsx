import React, { Component } from 'react'
import PointInput from "./PointInput";
import Plot from './Plot';
import ResultTable from './ResultTable'
import '../../css/Main.css'
import '../../stores/store'
import store from "../../stores/store";


export class Main extends Component {

    constructor(props){

        super(props);
        this.state = {};
        this.state.r = 0;
        if (store.getState().userState.Authorization === null){
            this.props.history.goBack();
        }


        console.log(store.getState().userState.Authorization);


    }

    onRadiusChange = (radius) => {
        this.setState({r:radius});
    };



  render() {
    return (
        <div>
            { this.state.blocked ? (<div></div>) : (<div className="main">

                <PointInput history={this.props.history}
                changeR={this.onRadiusChange} />
                <Plot height={300} width={300} r={this.state.r} />
                <ResultTable />
                </div>) }
        </div>


    )
  }
}

export default Main
