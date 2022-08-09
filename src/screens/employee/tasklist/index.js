import { Stack } from "@mui/material";
import React from "react";
import { withNavBars, withRouter, withContainer } from "../../../HOCs";
import TaskCard from "../../../components/taskCard";
import PageHead from "../../../components/pageHead";
import { AppRoutes } from "../../../router/routes";

class EmployeeTaskList extends React.Component {
  render() {
    return (
      <div>
        <PageHead
          title="Task List"
          buttonText="+ Add Task"
          onButtonClick={() =>
            this.props.navigate(AppRoutes.employeeTaskAddEdit)
          }
        />

        {/* Task List */}
        <Stack gap={2} mt={3}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <TaskCard />
          ))}
        </Stack>
      </div>
    );
  }
}

export default withRouter(withNavBars(withContainer(EmployeeTaskList)));
