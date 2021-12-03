import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addToArmy, discharge}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(b=> (
          <BotCard key={b.id} bot={b} handleClick={addToArmy} discharge={discharge}/>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
