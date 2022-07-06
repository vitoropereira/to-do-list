import { Trash } from "phosphor-react";

import styles from "./CardsTodo.module.css";
import checkBox from "../assets/checkBox.png";
import { useState } from "react";

interface TodoProps {
  id: string;
  isChecked: boolean;
  title: string;
}

interface CardsTodoProps {
  todo: TodoProps;
  deleteTodo: (id: string) => void;
}

export function CardsTodo({ todo, deleteTodo }: CardsTodoProps) {
  const [todoState, setTodoState] = useState(todo);

  function handleChecked() {
    setTodoState({
      ...todoState,
      isChecked: !todoState.isChecked,
    });
  }

  return (
    <div className={styles.containerBodyItem}>
      <button className={styles.checkBox}>
        <input
          className={
            todoState.isChecked
              ? [styles.inputCheckBox, styles.inputCheckBoxChecked].join(" ")
              : styles.inputCheckBox
          }
          type="checkbox"
          name="todo"
          id="todo"
          checked={todoState.isChecked}
          onChange={handleChecked}
        />
      </button>
      <div className={styles.containerBodyItemTitle}>
        <p className={todoState.isChecked ? styles.textChecked : ""}>
          {todoState.title}
        </p>
      </div>
      <button
        className={styles.trashButton}
        onClick={() => deleteTodo(todoState.id)}
      >
        <Trash className={styles.trash} size={24} />
      </button>
    </div>
  );
}
