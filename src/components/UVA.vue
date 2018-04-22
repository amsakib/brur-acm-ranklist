<template>
  <div>
    <h2 class="text-center">Ranklist based on no. of problems solved in uVA OJ</h2>
    <div class="loading" v-if="loading">
      <h3 class="text-center">Loading...</h3>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="ranklist" class="content">
      <table class="table table-bordered">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>username</th>
          <th>No. of problem solved</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in ranklist">
          <td>{{ (index+1) }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.ac }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: 'UVA',
  data () {
    return {
      loading: false,
      ranklist: null,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.ranklist = null
      this.loading = true
      var uva_ids = [857063,887444,841407, 800669,841513,841784,842539,891655, 891237, 841792, 874221,862922,854023,801775,841477,856509,856334,846835, 841501,734499,841665,1306045,842923,544812,836526,837411, 670535, 542658, 209062, 438420, 265971, 564915, 525034, 272560,481730,575414,136946,532838,537444,479379,128018,209266,454538,154564,579889, 537235, 536920, 568977, 599601, 570713, 600070, 539637, 538815, 600506,230728,  531363, 596546, 609053, 611623,601691,442290,620399,536814,897621,900411,896448,898457,895246,906079,898447,45497,896815,898372,937478,899318,897029,906081,900794,841477,896284,903604,945171,905514,896681,898444,896693,938016]; 
      var ranks = [];
      var promises = [];

      uva_ids.forEach(function(uids){
          var url = "https://uhunt.onlinejudge.org/api/ranklist/" + uids + "/0/0";
          promises.push(axios.get(url));
      });

      
      axios.all(promises).then(result => {
           for(var i=0; i<result.length; i++) {
             ranks.push(result[i].data[0]);
           }
           ranks.sort(function (userA, userB) {
             return userB.ac - userA.ac; // Sort descending based on rating.
          });
             this.loading = false;
             this.ranklist = ranks;
           
      }, error => {
        this.error = error;
          console.error(error);
      });
      
    }
  }
}
</script>


<style>
</style>
