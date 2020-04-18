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
    if(y==380 && x>500 && x< 560){
      console.log(x, y, "!")
    }
    if(x>555 && x < 610 && y>365 && y<460){
      console.log(x, y)
    }
      for(let i=x-2; i<=x+2;i=i+0.5){
        for(let j=y-2; j<=y+2;j=j+0.5){
          if(i in data && j in data[i]){
            return data[i][j]
          }
        }
      }
  }

  componentDidMount(){
    const yMargin = this.props.yMargin+window.pageYOffset
    let xx = this.myRef.current.getBoundingClientRect();
    let data = this.props.static_data.data
    let isPresent = this.isPresent(xx.x-this.props.xMargin, xx.y-yMargin, data)
    if(isPresent){
      this.setState({backgroundColor:this.props.colors[isPresent]})
    }
  }

  onHover = e => {
    const yMargin = this.props.yMargin+window.pageYOffset
    let xx = this.myRef.current.getBoundingClientRect();
    if (
      this.props.is_mousedown &&
      this.state.label === null &&
      this.state.backgroundColor === "grey"
    ) {
      if (this.props.color) {
        if(e.pageY<=(this.props.imageDimentions.height+yMargin)){
          console.log(xx.x, xx.y+window.pageYOffset, xx.x-this.props.xMargin, xx.y-yMargin+window.pageYOffset, xx.x-e.pageX, xx.y+window.pageYOffset-e.pageY,  "!!!!!!!!!!!!!!!!!!!!!!!", e.pageX-this.props.xMargin, e.pageY-yMargin, e.pageX, e.pageY, this.props.xMargin, yMargin)
          this.setStateWrapper({ backgroundColor: this.props.color });
          this.props.addToHoveredPoints(
            e.pageX-this.props.xMargin,
            e.pageY-yMargin,
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
