import axios from "axios";

//This may change when API service template is hooked to UI.
export default {
  saveSubmission: function(consumerData) {
    console.log(consumerData);
    return axios.post("/registration", consumerData);
  },
  getSubmissionId: function (){
    return axios.get("/thankyou");
  }
};

