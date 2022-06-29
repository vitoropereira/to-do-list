import { Trash } from "phosphor-react";

import styles from "./CardsTodo.module.css";
import checkBox from "../assets/checkBox.png";

export function CardsTodo() {
  return (
    <div className={styles.containerBodyItem}>
      <button className={styles.checkBox}>
        <input
          className={styles.inputCheckBox}
          type="radius"
          name="todo"
          id="todo"
        />
      </button>
      <div className={styles.containerBodyItemTitle}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          eligendi dolorum eius qui necessitatibus quo excepturi dolorem
          temporibus consectetur, error optio nihil tempore voluptates at
          adipisci veritatis rerum ipsum provident!
        </p>
      </div>
      <button className={styles.trashButton}>
        <Trash className={styles.trash} size={24} />
      </button>
    </div>
  );
}
