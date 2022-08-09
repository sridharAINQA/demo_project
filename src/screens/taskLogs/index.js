import { Stack } from "@mui/material";
import React from "react";
import { withNavBars, withRouter, withContainer } from "../../HOCs";
import PageHead from "../../components/pageHead";
import TaskLogCard from "../../components/taskLogCard";

class TaskLogs extends React.Component {
  render() {
    return (
      <div>
        <PageHead title="Task Logs" />

        {/* Task List */}
        <Stack gap={2} mt={3}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <TaskLogCard />
          ))}
        </Stack>
      </div>
    );
  }
}

export default withRouter(withNavBars(withContainer(TaskLogs)));
