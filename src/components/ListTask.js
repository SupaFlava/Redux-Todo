import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import Task from "./Task";

export const ListTask = (props) => {
  let filtredTask = [];
  if (props.search) {
    filtredTask = props.tasks.filter((task) => task.isdone === true);
  }
  if (props.search === false) {
    filtredTask = props.tasks.filter((task) => task.isdone === false);
  }
  if (props.search === "") {
    filtredTask = props.tasks;
  }

  return (
    <Paper>
      {props.tasks.length !== 0 ? (
        filtredTask.map((task) => {
          return (
            <List style={{ listStyleType: "none" }}>
              <Task
                id={task.id}
                completed={task.completed}
                key={task.id}
                task={task.description}
              />
              <Divider />
            </List>
          );
        })
      ) : (
        <h3>No Task Yet!</h3>
      )}
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.Todoreducer.todos,
    search: state.Todoreducer.search,
  };
};
export default connect(mapStateToProps)(ListTask);
