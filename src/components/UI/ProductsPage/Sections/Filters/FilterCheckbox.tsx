// import { IDetailedProduct } from "../../../models/IDetailProduct";
import React, { useContext, Component } from "react";
import ContextStore from "../../../../../Context";
import { Menu, Checkbox } from "antd";

interface IProps {}

interface IState {
  checkboxes: boolean[];
}

const n = 3;

class FilterCheckbox extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      // checked/unchecked is stored here
      // initially the first one is checked:
      // [true, false, false]
      checkboxes: new Array(n).fill(0).map((_, i) => !i),
    };
  }

  onChange(e: any) {
    const { checked } = e.target;
    console.log(e);
    this.setState((state) => ({
      // this lets you unselect all.
      // but selected can be anly one at a time
      // checkboxes: state.checkboxes.map((_, i) => i ===  ? checked : false),
    }));
  }

  render() {
    return (
      <div>
        <Checkbox style={{ display: "block" }} value={"jewelry"} checked={true}>
          Jewelry
        </Checkbox>
        <Checkbox style={{ display: "block" }} value={"paintings"}>
          Paintings
        </Checkbox>
        <Checkbox style={{ display: "block" }} value={"ceramics"}>
          Ceramics
        </Checkbox>
      </div>
    );
  }
}

export default FilterCheckbox;
