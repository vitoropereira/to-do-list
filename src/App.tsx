import logo from "./assets/Logo.png";
import checkBox from "./assets/checkBox.png";
import { PlusCircle, Clipboard, Trash } from "phosphor-react";

import styles from "./app.module.css";

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
      <main>
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

          <div className={styles.containerBodyItem}>
            <button className={styles.checkBox}>
              <img src={checkBox} className={styles.checkBoxImage} alt="logo" />
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
              <Trash className={styles.trash} />
            </button>
          </div>
          <div className={styles.containerBodyItem}>
            <button className={styles.checkBox}>
              <img src={checkBox} className={styles.checkBoxImage} alt="logo" />
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
              <Trash className={styles.trash} />
            </button>
          </div>
          <div className={styles.containerBodyItem}>
            <button className={styles.checkBox}>
              <img src={checkBox} className={styles.checkBoxImage} alt="logo" />
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
              <Trash className={styles.trash} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
