import logo from "./assets/Logo.png";

import { PlusCircle, Clipboard, Trash } from "phosphor-react";

import styles from "./app.module.css";
import { CardsTodo } from "./components/CardsTodo";

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.content}>
          <input
            className={styles.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button className={styles.button}>
            Criar
            <PlusCircle />
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.containerHeader}>
            <div className={styles.containerHeaderTitle}>
              <p>Tarefas Criadas</p>
              <span>0</span>
            </div>
            <div className={styles.containerHeaderTitle}>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </div>

          {/* <div className={styles.containerBody}>
            <Clipboard className={styles.clipboard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div> */}

          <CardsTodo />
          <CardsTodo />
          <CardsTodo />
        </div>
      </main>
    </>
  );
}

export default App;
