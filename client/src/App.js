import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Card from "./components/Cards";

const USERS = gql`
  query getUserData {
    getUser {
      id
      name
      age
      office
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="App">
      <h2>Sample Apolo Server Application</h2>
      <div className="Cards">
        {data?.getUser?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
