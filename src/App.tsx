import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import PseudoAxios from "./components/PseudoAxios";
import type { Users } from "./types/user";

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    setUsers(PseudoAxios);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ItemList
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};

export default App;
