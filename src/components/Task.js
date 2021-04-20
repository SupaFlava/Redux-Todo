import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask, completeTask } from "../redux/action";

export const Task = ({ task, id, delTask, updateTasks, completeTask }) => {
  const [isEditing, setIsEdeting] = useState(false);
  const [taskupdate, setTaskUpdate] = useState(task.description);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTasks({ id: id, value: taskupdate });
    setIsEdeting(!isEditing);
  };

  return (
    <ListItem>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <TextField
            value={taskupdate}
            id={id}
            onChange={(e) => {
              setTaskUpdate(e.target.value);
            }}
            margin="normal"
            fullWidth
          />
        </form>
      ) : (
        <>
          <CheckBox onClick={() => completeTask(id)} />

          <ListItemText>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => delTask(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => setIsEdeting(!isEditing)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    delTask: (id) => dispatch(deleteTask(id)),
    updateTasks: ({ id, value }) => dispatch(updateTask({ id, value })),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};
export default connect(null, mapDispatchToProps)(Task);
