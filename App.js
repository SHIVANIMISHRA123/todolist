 import React,{useState , useEffect} from "react";
 import Header from "./components/Header";
 import Form from "./components/Form";
 import TodoList from "./components/TodoList";
 import "./App.css";

 const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  const [Todos,setTodos] = useState(initialState);
  const [editTodo, setEditTodos] = useState(null);
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  },[Todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div> 
           <Header />
           </div>
           <div>
            <Form 
              input={input}
              setInput={setInput}
              Todos ={Todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodos={setEditTodos} />

           </div>
           <div> 
            <TodoList 
            Todos={Todos}
            setTodos ={setTodos}
            setEditTodos={setEditTodos} />
           </div>
              
      </div>
    </div>
  );
 }
 export default App;
