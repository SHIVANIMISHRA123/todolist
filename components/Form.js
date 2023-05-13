import React, {useEffect} from "react";
import {v4 as uuidV4} from "uuid";
  const Form =({input, setInput, todos, setTodos, editTodo, seteditTodo}) => {
    const updateTodo =(title, id, completed) =>{
        const newTodo = todos.map((todo) =>
        todo.id === id ? {title, id, completed} : todo
    );
    setTodos(newTodo);
    seteditTodo("");
    };
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);

        }else{
            setInput("")
        }
    }, [setInput, editTodo]);
    const onInputChange = (event) =>{
        setInput(event.target.vallue);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidV4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id,editTodo.completed)
        }
        
    }
    return (
        <Form onSubmit={onFormSubmit}>
            <input type="text"
             placeholder="Enter a todo..."
             className="task-input"
             value={input} 
             required
              onChange={onInputChange}/>
            <button className="button -add" type="submit">
                {editTodo ? "OK" :"Add"}
            </button>
        </Form>
    );
  }
  export default Form;