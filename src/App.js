import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {NewPost} from "./components/new_post/new_post";
import {Wall} from "./components/wall/wall";

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <NewPost />
        <Wall />
      </main>
    </div>
  );
}

export default App;
