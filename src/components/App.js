import React from "react";
import Profile from "./socialProfile/Profile";
import userData from "../data/user.json";
import Statistics from "./statistics/Statistics";
import statsData from "../data/statistical-data.json";
import FriendList from "./friendList/FriendList";
import friendsData from "../data/friends.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import transactionData from "../data/transactions.json";

const App = () => {
  return (
    <>
      <h2>---------------------------- Задание 1 ----------------------------</h2>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <h2>---------------------------- Задание 2 ----------------------------</h2>
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      <h2>---------------------------- Задание 3 ----------------------------</h2>
      <FriendList friends={friendsData} />
      <h2>---------------------------- Задание 4 ----------------------------</h2>
      <TransactionHistory items={transactionData} />
    </>
  );
};

export default App;
