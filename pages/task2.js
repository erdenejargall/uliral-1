import { useState } from "react";

const userData = [
  { id: 1, name: "John", email: "johnathon@hotmail.com" },
  { id: 2, name: "Jane", email: "janice@hotmail.com" },
  { id: 3, name: "Mohammed", email: "Mohammeds@hotmail.com" },
  { id: 4, name: "Lee", email: "Leepiker@hotmail.com" }
];

export default function User() {
  const [search, setSearch] = useState('');
  const [grid, setGrid] = useState(userData);

  const filteredUsers = grid.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-white p-8">
      <a href="https://erdenejargal.vercel.app/" className="w-36 border-2 border-bg-red-300 rounded-lg p-4 bg-blue-400"> 
        go back
      </a>
      <h1 className="text-2xl font-bold text-center text-black">Users</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border bg-white p-2 text- gray-700"
        placeholder="Search by name..."
      />
      {filteredUsers.length > 0 ? (
        filteredUsers.map((item) => (
          <div key={item.id} className="bg-white p-4 mb-4">
            <p className="text-lg font-bold text-black">ID: {item.id}</p>
            <p className="text-lg text-gray-700">Name: {item.name}</p>
            <p className="text-lg text-gray-700">Email: {item.email}</p>
          </div>
        ))
      ) : (
        <p className="text-lg text-gray-700 text-center">No users found</p>
      )}
    </div>
  );
}