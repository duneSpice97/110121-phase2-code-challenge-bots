import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const botAPI = `http://localhost:8002/bots`

function BotsPage() {
  //start here with your code for step one


  const [bots, setBots] = useState([]);

  
  useEffect(() => {
    fetch(botAPI)
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function addToArmy(bot) {
    // console.log('add')
    setBots(bots.map(b=> (b.id === bot.id ? {...b, inArmy:true} : b)))
  }

  function removeFromArmy(bot) {
    // console.log('remove')
    setBots(bots.map(b=> (b.id === bot.id ? {...b, inArmy:false} : b)))
  }

  function discharge(bot) {
    // console.log('discharge')
    setBots(bots.filter(b => b.id !== bot.id))
  }

  return (
    <div>
      <YourBotArmy bot={bots.filter(b=>b.inArmy)} removeFromArmy={removeFromArmy} discharge={discharge}/>
      <BotCollection bots={bots} addToArmy={addToArmy} discharge={discharge}/>
    </div>
  );
}

export default BotsPage;
