import React from "react";
import { withContainer, withNavBars, withRouter } from "../../../HOCs";

class EmployeeTaskAddEdit extends React.Component {
  render() {
    return "EmployeeTaskAddEdit";
  }
}

export default withRouter(withNavBars(withContainer(EmployeeTaskAddEdit)));
