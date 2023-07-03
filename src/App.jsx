import React, { Component, useState } from "react";

import Support from "./components/Support";
import ListCast from "./components/ListCast";

function App() {
  const name = "StarGazers";

  const [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>Meet the star gazers</h1>

        <ListCast onChoice={(info) => setMemberInfo(info)} />
        <Support />
      </hgroup>
      {memberInfo && (
        <article>
          <hgroup>
            <div>
              <img src={`images/${memberInfo.slug}.svg`} alt="" />
              <div></div>
            </div>
          </hgroup>
        </article>
      )}
    </div>
  );
}
export default App;
