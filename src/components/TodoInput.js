import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import RadioGroup from "@material-ui/core/RadioGroup";

import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { useState } from "react";
import { connect } from "react-redux";
import { addTask, doneTask, notdoneTask, refrechList } from "../redux/action";

export const AddTodo = (props) => {
  const [newTask, setNewTask] = useState("");
  const [radiochecked, setRadioChecked] = useState("");
  const addnewTodo = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.random(),
      description: newTask,
      isdone: false,
    });
    setNewTask("");
  };

  return (
    <Fragment>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form onSubmit={addnewTodo}>
          <TextField
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            margin="normal"
            label="Add New Todo"
            fullWidth
          />
        </form>
      </Paper>
      <RadioGroup row>
        <Radio
          value="done"
          onChange={(e) => setRadioChecked(e.target.value)}
          onClick={() => props.doneTask()}
        />{" "}
        Done Task
        <Radio
          value="not done"
          onChange={(e) => setRadioChecked(e.target.value)}
          onClick={() => props.nodoneTask()}
        />
        Not Done
        <Radio
          value="allTasks"
          checked={radiochecked === "allTasks"}
          onChange={(e) => setRadioChecked(e.target.value)}
          onClick={() => props.refrechList()}
        />
        See All
      </RadioGroup>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    doneTask: () => dispatch(doneTask()),
    nodoneTask: () => dispatch(notdoneTask()),
    refrechList: () => dispatch(refrechList()),
  };
};
export default connect(null, mapDispatchToProps)(AddTodo);
