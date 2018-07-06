import axios from "axios";

export default {
  lookUpOrderStatus: function(id) {
    return axios.get("/orderstatuslookup/" + id);
  }
};
