import React from "react";
import { Stack, TextField, Button } from "@mui/material";
import PageHead from "../../../components/pageHead";
import { withContainer, withNavBars, withRouter } from "../../../HOCs";
import { AppRoutes } from "../../../router/routes";
import { LocalStorageKeys } from "../../../utils";
import { actions } from "timesheet-binder";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";

class EmployeeTaskAddEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      duration: "",
      error: [],
      user: {},
      isEdit: false,
    };
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem(LocalStorageKeys.user)),
    });

    if (this.props.location.state?._key) {
      this.setState({
        isEdit: true,
      });

      // Edit Mode - So fetch the task details and populate the form
      Promise.resolve(
        this.props.GET_TASK_BY_ID({ taskKey: this.props.location.state?._key })
      )
        .then((res) => {
          if (res?.payload?.data?.Code === 201) {
            const task = res?.payload?.data?.result?.[0];
            this.setState({
              title: task?.title,
              duration: task?.duration,
            });
          }
        })
        .catch((err) => {
          this.props.enqueueSnackbar("Failed to fetch task details", {
            variant: "error",
          });
        });
    }
  }

  validateForm = () => {
    debugger;
    const { title, duration } = this.state;
    const error = [];
    if (!title) {
      error.push("title");
    }
    if (!duration) {
      error.push("duration");
    }

    this.setState({ error });

    return error?.length === 0;
  };

  handleUpsert = () => {
    if (!this.validateForm()) {
      return;
    }

    Promise.resolve(
      this.props.UPSERT_TASK({
        ...(this.state.isEdit ? { _key: this.props.location.state?._key } : {}),
        title: this.state.title,
        empID: this.state.user?._id,
        duration: this.state.duration,
      })
    )
      .then((res) => {
        if (res?.payload?.data?.Code === 201) {
          this.props.enqueueSnackbar(
            this.state.isEdit
              ? "Task updated successfully"
              : "Task added successfully",
            {
              variant: "success",
            }
          );
          this.props.navigate(AppRoutes.employeeTaskList);
        }
      })
      .catch((err) => {
        this.props.enqueueSnackbar(
          this.state.isEdit ? "Failed to update task" : "Failed to add task",
          {
            variant: "error",
          }
        );
      });
  };

  handleChange = (event, key) => {
    this.setState((prevState) => ({
      [key]:
        event.target.validity.valid || event.target.value === ""
          ? event.target.value
          : prevState[key],
    }));
  };

  render() {
    return (
      <div>
        <PageHead
          title="Add Task"
          showIcon
          onIconButtonClick={() =>
            this.props.navigate(AppRoutes.employeeTaskList)
          }
        />

        <Stack gap={2} mt={3}>
          <TextField
            id="task-title"
            label="Title"
            variant="outlined"
            required
            value={this.state.title}
            onChange={(e) => this.handleChange(e, "title")}
            error={this.state.error.includes("title")}
            helperText={
              this.state.error.includes("title") && "Title is required"
            }
          />
          <TextField
            id="task-duration"
            label="Duration (in hrs)"
            variant="outlined"
            required
            value={this.state.duration}
            inputProps={{
              pattern: "[0-9]{0,3}",
            }}
            onChange={(e) => this.handleChange(e, "duration")}
            error={this.state.error.includes("duration")}
            helperText={
              this.state.error.includes("duration") && "Duration is required"
            }
          />

          <Stack direction={"row"} justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={() => this.props.navigate(AppRoutes.employeeTaskList)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleUpsert}
            >
              {this.state.isEdit ? "Update" : "Save"}
            </Button>
          </Stack>
        </Stack>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  upsertTask: state?.rootReducer?.mainSlice?.upsertTask,
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(withContainer(withNavBars(withSnackbar(EmployeeTaskAddEdit)))));
