import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bot, removeFromArmy, discharge}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bot.map(b=> (
            <BotCard key={b.id} bot={b} handleClick={removeFromArmy} discharge={discharge}/>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
