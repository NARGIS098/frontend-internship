import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Counter from "../components/Counter";
import MessageForm from "../components/MessageForm";
import TodoList from "../components/TodoList";

function Home() {
  return (
    <div>
      <About
        name="Nargis Sheikh"
        description="I am a Computer Science student and Frontend Development Intern."
      />

      <Skills />

      <Projects />

      <Counter />

      <MessageForm />

      <TodoList />
    </div>
  );
}

export default Home;