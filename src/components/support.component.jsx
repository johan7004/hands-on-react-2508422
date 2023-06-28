import { React, useState } from "react";

function Support() {
  const [count, setState] = useState(0);
  return (
    <>
      <button className="outline" onClick={() => setState(count + 1)}>
        {!count ? `Click to Support` : `Supported ${count}`}
      </button>
    </>
  );
}

export default Support;
