import React from "react";

class CountClass extends React.Component {
  constructor(count, uid) {
    super(count);
    this.state = {
      id: count?.id ? count.id : "",
      uid: uid ? uid : "",
      description: count?.description ? count.description : "",
      currentBalance: count?.currentBalance ? count.currentBalance : 0,
      icon: count?.icon ? count.icon : "",
    };
  }
}

export default CountClass;
