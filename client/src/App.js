import { Routes, Route } from "react-router-dom";
import MessagesList from "./routes/message list/messageList.route";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.routes";
import Contact from "./routes/contact page/contact.route";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Contact />} />
        <Route path="/messagelist" element={<MessagesList />} />
      </Routes>
    </>
  );
}

export default App;
