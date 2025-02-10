import Button from './components/Button'
import Header from './components/Header'
import TodoItem from './components/ToDoItem'

function App() {
  return (
    <>
      <Header title="To-Do List" />
      <TodoItem 
        tasks={[
          { task: "Learn React" },
          { task: "Build a To-Do List" },
          { task: "Master JavaScript" },
          { task: "Apply for Jobs" }
        ]}
      />
      <Button add="Add" del="Delete" />
    </>
  );
}

export default App
