import { Header } from "./components/header";
import { Student } from "./components/students";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div>
      <Header title="React + Typescript Students" />

      <Student name="Ana Caroline" age={13} />
      <Student name="Henrique Salles" age={19} />

      <Footer />
    </div>
  );
}
