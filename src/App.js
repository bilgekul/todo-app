import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { TodoProvider } from "./contexts/TodoContext";
function App() {
  return (
   <>
   <TodoProvider>
     <section className="todoapp">
      <Header/>
      <Content/>
    </section>
   </TodoProvider> 
   </>
  );
}

export default App;
