import axios from "axios";

//This may change when API service template is hooked to UI.
export default {
  lookUpOrderStatus: function(id) {
    return axios.get("/orderstatuslookup/" + id);
  }
};
