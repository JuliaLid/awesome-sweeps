import axios from "axios";

export default {
  saveRecord: function(consumerData) {
    console.log(consumerData);
    return axios.post("/api/registration", consumerData);
  }
};

//Is tis a handoff point to the service template????????
