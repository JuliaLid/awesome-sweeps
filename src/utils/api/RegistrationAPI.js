import axios from "axios";

export default {
  saveSubmission: function(consumerData) {
    console.log(consumerData);
    return axios.post("/registration", consumerData);
  },
  getSubmissionId: function (){
    return axios.get("/thankyou");
  }
};

//Is tis a handoff point to the service template????????
