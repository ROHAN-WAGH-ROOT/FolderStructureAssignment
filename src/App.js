import Comp from "./Comp";
import { useState } from "react";
import "./styles.css";
export default function App() {
  const [data, setData] = useState({
    isFolder: true,
    name: "src",
    items: [
      {
        name: "one.js",
        isFolder: true,
        items: [
          {
            name: "secondOne.js",
            isFolder: false
          }
        ]
      },
      {
        name: "two.js",
        isFolder: false
      },
      {
        name: "three.js",
        isFolder: false
      }
    ]
  });
  return (
    <div>
      <Comp data={data} />
    </div>
  );
}
