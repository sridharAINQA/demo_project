import { Container, Stack, Typography, Button, Box } from "@mui/material";
import React from "react";
import { withNavBars, withRouter, withContainer } from "../../../HOCs";
import TaskCard from "../../../components/taskCard";
import { AppRoutes } from "../../../router/routes";

class EmployeeTaskList extends React.Component {
  render() {
    return (
      <div>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography variant="h4">Task List</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.navigate(AppRoutes.employeeTaskAddEdit)}
          >
            + Add Task
          </Button>
        </Stack>

        {/* Task List */}
        <Stack gap={2} mt={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <TaskCard />
          ))}
        </Stack>
      </div>
    );
  }
}

export default withRouter(withNavBars(withContainer(EmployeeTaskList)));
