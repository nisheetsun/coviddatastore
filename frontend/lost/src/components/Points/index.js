import React from "react";
import "./index.css";

export default class Point extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      backgroundColor: "grey",
      label: null,
      imageUrl: this.props.imageUrl
    };
    [this.row, this.column] = this.props.row_column.split("_");
  }

  setStateWrapper = key_value_dict => {
    this.setState(key_value_dict);
  };

  componentDidUpdate = () => {
    if (this.props.label_data) {
      if (
        this.state.label === null &&
        this.props.label_data["label_id"] !== null
      ) {
        this.setState({
          label: this.props.label_data["label_id"],
          backgroundColor: this.props.label_data[["colors"]]
        });
      }
    }
  };

  onHover = e => {
    if (
      this.props.is_mousedown &&
      this.state.label === null &&
      this.state.backgroundColor === "grey"
    ) {
      let xx = this.myRef.current.getBoundingClientRect();
      // console.log("!!!!!!", this.myRef, xx)
      if (this.props.color) {
        if(e.pageY<=(this.props.imageDimentions.height+54)){
          this.setStateWrapper({ backgroundColor: this.props.color });
          // console.log("@@@@@@@@@@@@@", this.myRef.current.getBoundingClientRect(), e.pageX, e.pageY, this.props.is_mousedown)
          this.props.addToHoveredPoints(
            e.pageX,
            e.pageY-54,
            parseInt(this.row),
            parseInt(this.column),
            this.props.grid_number
        );}else{
          // console.log('hhhh')
        }
      } else {
        // alert("SELECT LABEL FIRST");
      }
    }
  };

  render() {
    return (
      <span
        ref={this.myRef}
        style={{ backgroundColor: this.state.backgroundColor }}
        onMouseOver={this.onHover}
      />
    );
  }
}
