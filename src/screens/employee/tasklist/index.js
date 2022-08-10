import { Stack, Typography } from "@mui/material";
import React from "react";
import { withNavBars, withRouter, withContainer } from "../../../HOCs";
import TaskCard from "../../../components/taskCard";
import PageHead from "../../../components/pageHead";
import { AppRoutes } from "../../../router/routes";
import { connect } from "react-redux";
import { actions } from "timesheet-binder";
import { LocalStorageKeys } from "../../../utils";
import { withSnackbar } from "notistack";

class EmployeeTaskList extends React.Component {
  fetchTasks = () => {
    this.props.GET_TASKS_BY_EMPLOYEE_ID({
      empID: JSON.parse(localStorage.getItem(LocalStorageKeys.user))._id,
    });
  };

  componentDidMount() {
    this.fetchTasks();
  }

  handEditClick = (_key) => {
    this.props.navigate(AppRoutes.employeeTaskAddEdit, {
      state: {
        _key,
      },
    });
  };

  handleDeleteClick = (_key) => {
    this.props
      .DELETE_TASK({ _key })
      .then((res) => {
        debugger;
        this.props.enqueueSnackbar("Task deleted Successfully", {
          variant: "success",
        });
        this.fetchTasks();
      })
      .catch((err) => {
        this.props.enqueueSnackbar("Failed to delete task", {
          variant: "error",
        });
      });
  };

  render() {
    const { tasksByEmployeeId = [] } = this.props;
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
        <Stack gap={4} mt={3}>
          {Array.isArray(tasksByEmployeeId) && tasksByEmployeeId?.length > 0 ? (
            tasksByEmployeeId?.map((item) => (
              <TaskCard
                key={item?._key}
                title={item?.title}
                status={item?.status}
                duration={item?.duration}
                handEditClick={() => this.handEditClick(item?._key)}
                handleDeleteClick={() => this.handleDeleteClick(item?._key)}
              />
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ my: 4 }}>
              No Tasks added yet
            </Typography>
          )}
        </Stack>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasksByEmployeeId:
    state?.rootReducer?.mainSlice?.getTasksByEmployeeId?.data?.result,
  deleteTask: state?.rootReducer?.mainSlice?.deleteTask?.data?.result,
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(withNavBars(withContainer(withSnackbar(EmployeeTaskList)))));
