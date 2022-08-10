import { Stack, Typography } from "@mui/material";
import React from "react";
import { withNavBars, withRouter, withContainer } from "../../HOCs";
import PageHead from "../../components/pageHead";
import TaskLogCard from "../../components/taskLogCard";
import { connect } from "react-redux";
import { actions } from "timesheet-binder";
import { withSnackbar } from "notistack";
import { LocalStorageKeys, TASK_LOG_STATUS } from "../../utils";
import ReasonDialog from "./reasonDialog";

class TaskLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rejectId: "",
      reason: "",
    };
  }

  fetchTasks = () => {
    this.props.GET_ALL_TASKS();
  };

  componentDidMount() {
    this.fetchTasks();
  }

  handApproveClick = (_key) => {
    debugger;
    const payload = {
      _key: _key,
      status: TASK_LOG_STATUS.APPROVED,
      verifiedby: JSON.parse(localStorage.getItem(LocalStorageKeys.user))._id,
    };

    Promise.resolve(this.props.UPDATE_TASK_STATUS(payload))
      .then((res) => {
        debugger;
        this.props.enqueueSnackbar("Task approved Successfully", {
          variant: "success",
        });
        this.fetchTasks();
      })
      .catch((err) => {
        this.props.enqueueSnackbar(
          JSON.stringify(err) || "Failed to approve task",
          {
            variant: "error",
          }
        );
      });
  };
  handleRejectClick = (_key) => {
    this.setState({ rejectId: _key });
  };

  handleClose = () => {
    this.setState({ rejectId: "" });
  };

  handleReject = () => {
    const payload = {
      _key: this.state.rejectId,
      status: TASK_LOG_STATUS.REJECTED,
      verifiedby: JSON.parse(localStorage.getItem(LocalStorageKeys.user))._id,
      reason: this.state.reason,
    };

    Promise.resolve(this.props.UPDATE_TASK_STATUS(payload))
      .then((res) => {
        debugger;
        this.props.enqueueSnackbar("Task rejected Successfully", {
          variant: "success",
        });
        this.setState({
          reason: "",
        });
        this.handleClose();
        this.fetchTasks();
      })
      .catch((err) => {
        this.handleClose();
        this.props.enqueueSnackbar(
          JSON.stringify(err) || "Failed to reject task",
          {
            variant: "error",
          }
        );
      });
  };

  render() {
    const { getAllTasks } = this.props;
    return (
      <div>
        <PageHead title="Task Logs" />

        {/* Task List */}
        <Stack gap={2} mt={3}>
          {Array.isArray(getAllTasks) && getAllTasks?.length > 0 ? (
            getAllTasks?.map((item) => (
              <TaskLogCard
                key={item?._key}
                title={item?.title}
                status={item?.status}
                duration={item?.duration}
                employee={item?.empID}
                reason={item?.reason}
                handApproveClick={() => this.handApproveClick(item?._key)}
                handleRejectClick={() => this.handleRejectClick(item?._key)}
              />
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ my: 4 }}>
              No logs added yet
            </Typography>
          )}
        </Stack>

        <ReasonDialog
          open={Boolean(this.state.rejectId)}
          handleClose={this.handleClose}
          handleReject={this.handleReject}
          reason={this.state.reason}
          handleChange={(e) => this.setState({ reason: e.target.value })}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getAllTasks: state?.rootReducer?.mainSlice?.getAllTasks?.data?.result,
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(withNavBars(withContainer(withSnackbar(TaskLogs)))));
