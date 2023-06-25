import React, { useState } from "react";
const Comp = ({ data }) => {
  const [expand, setExpand] = useState(false);
  if (data?.isFolder) {
    return (
      <div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setExpand(!expand);
          }}
        >
          📁{data.name}
        </div>
        <div style={{ display: expand ? "block" : "none", marginLeft: "10px" }}>
          {data.items &&
            data.items.map((ele, i) => {
              return <Comp data={ele} />;
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>📃{data.name}</div>
      </div>
    );
  }
};
export default Comp;
