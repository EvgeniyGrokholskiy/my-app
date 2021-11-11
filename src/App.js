import './App.css';
import {Header} from "./components/header/Header";
//import {Profile} from "./components/profile/Profile";
import {Chat} from "./components/chat/chat";

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>

        {/*<Profile />*/}
          <Chat />
      </main>
    </div>
  );
}

export default App;
