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

  isPresent(x, y, data){
    y = y+window.pageYOffset
      for(let i=x-1.5; i<=x+1.5;i=i+0.5){
        for(let j=y-1.5; j<=y+1.5;j=j+0.5){
          if(i in data && j in data[i]){
            console.log(i, j, data)
            return data[i][j]
          }
        }
      }
  }

  componentDidMount(){
    let xx = this.myRef.current.getBoundingClientRect();
    let data = this.props.static_data.data
    let isPresent = this.isPresent(xx.x-this.props.xMargin, xx.y-54, data)
    if(isPresent){
      this.setState({backgroundColor:this.props.colors[isPresent]})
    }
  }

  onHover = e => {
    if (
      this.props.is_mousedown &&
      this.state.label === null &&
      this.state.backgroundColor === "grey"
    ) {
      if (this.props.color) {
        if(e.pageY<=(this.props.imageDimentions.height+54)){
          this.setStateWrapper({ backgroundColor: this.props.color });
          this.props.addToHoveredPoints(
            e.pageX,
            e.pageY-54,
            parseInt(this.row),
            parseInt(this.column),
            this.props.grid_number
        );}
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
