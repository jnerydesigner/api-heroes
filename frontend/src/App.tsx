import { Header } from "./components/header";
import { HomePage } from "./pages/home.page";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <HomePage />
      </div>
    </>
  );
}

export default App;
