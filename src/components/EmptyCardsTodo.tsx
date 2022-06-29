import { Clipboard } from "phosphor-react";

import styles from "./EmptyCardsTodo.module.css";
import checkBox from "../assets/checkBox.png";

export function EmptyCardsTodo() {
  return (
    <div className={styles.containerBody}>
      <Clipboard className={styles.clipboard} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
