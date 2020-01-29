import React, { Component } from 'react'
import {connect} from "react-redux";
import store from "../../stores/store"
import {getHistoryFromServer} from "../../api/point-api";

export class ResultTable extends Component {
  constructor(props){
    super(props);
  }

    componentDidMount(){
        store.subscribe(()=>this.forceUpdate());
        getHistoryFromServer();
    }

  updateTable(){
    return this.props.points.map((point) => {
      return(<tr>
          <td className="table-elem" align="center">{point.x}</td>
          <td className="table-elem" align="center">{point.y}</td>
          <td className="table-elem" align="center">{point.r}</td>
          { point.result ?
          <td className="table-elem table-true" align="center">
          Yes
          </td>
          :
          <td className="table-elem table-false" align="center">
          No
          </td>
          }
      </tr>
      );});
  }

  
  render() {
    return (
      <div className="main-table">
       <table className="table">
        <tr>
            <td className="table-elem table-header-elem" align="center">X</td>
            <td className="table-elem table-header-elem" align="center">Y</td>
            <td className="table-elem table-header-elem" align="center">R</td>
            <td className="table-elem table-header-elem" align="center">Result</td>
        </tr>
        {this.updateTable()}
      </table>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
      points: store.plotState.points
  }
}
export default connect(mapStateToProps)(ResultTable)
