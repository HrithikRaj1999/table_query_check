import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import TableData from "./component/TableData";
import QueryValidator from "./component/QueryValidator";

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column' ,gap:10}}>
     <Form/>
     <TableData/>
     <QueryValidator/>
    </div>
  );
}

export default App;
