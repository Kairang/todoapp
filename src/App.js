import Heading from './components/Header/Heading';
import TaskList from './components/Main/TaskList';
import Select from './components/Sidebar/Select';
import './sass/index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <main className='App-main'>
        <aside className='sidebar'>
          <Select />
        </aside>
        <section className='task-container'>
          <TaskList /> 
        </section>
      </main>
    </div>
  );
}

export default App;
