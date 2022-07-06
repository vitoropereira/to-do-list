import { useState } from "react";

import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

import { CardsTodo } from "./components/CardsTodo";
import { EmptyCardsTodo } from "./components/EmptyCardsTodo";

import styles from "./app.module.css";
import logo from "./assets/Logo.png";

interface AllTodoProps {
  id: string;
  isChecked: boolean;
  title: string;
}

function App() {
  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState<AllTodoProps[]>([]);

  function handleAddTodo() {
    const newTodo = {
      id: uuidv4(),
      isChecked: false,
      title: todo,
    };

    setAllTodo((oldState) => [...oldState, newTodo]);
    setTodo("");
  }

  function handleDeleteTodo(id: string) {
    console.log(id);
    setAllTodo((oldState) =>
      oldState.filter((todo) => {
        console.log(todo.id);
        return todo.id !== id;
      })
    );
    // const newTodo = allTodo.filter((todo) => todo.id !== id);
    // setAllTodo(newTodo);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.content}>
          <input
            className={styles.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className={styles.button} onClick={handleAddTodo}>
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
          {allTodo.length > 0 ? (
            allTodo.map((todo) => (
              <CardsTodo
                key={todo.id}
                todo={todo}
                deleteTodo={handleDeleteTodo}
              />
            ))
          ) : (
            <EmptyCardsTodo />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
