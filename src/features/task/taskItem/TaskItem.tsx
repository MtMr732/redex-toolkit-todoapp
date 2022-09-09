import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteTask,
  selectTask,
  completeTask,
  handleModalOpen,
  selectIsModalOpen,
} from "../taskSlice";
import TaskForm from "../taskForm/TaskForm";
import styles from "./TaskItem.module.scss";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };
  const handleClose = () => {
    dispatch(handleModalOpen(false));
  };
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon className="styles.icon" />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          // {...label}
          defaultChecked
          onClick={() => dispatch(completeTask(task))}
          className={"styles.checkbox"}
          color="error"
        />
        <button className={styles.edit_button} onClick={handleOpen}>
          <EditIcon className="styles.icon" />
        </button>
        <button
          className={styles.delete_botton}
          onClick={() => dispatch(deleteTask(task))}
        >
          <DeleteIcon className="styles.icon" />
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit Task Title</div>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
