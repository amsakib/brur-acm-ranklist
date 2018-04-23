<template>
  <div>
    <h2 class="text-center">Ranklist based on no. of problems solved in UVa OJ</h2>

<div class="row">
      <div class="col-md-3 col-sm-12">
        <table class="table table-bordered table-striped">
           <thead> <tr> <th> User color </th> <th>Coder Title </th> </tr> </thead>
<tbody> 
	<tr> <td style="background-color:#FA051D;">  &gt;=1000 </td> <td> National Grandmaster </td> </tr>
	<tr> <td style="background-color:#FAF605;">700-999 </td> <td> Grandmaster </td> </tr>
	<tr> <td style="background-color:#6151F5;">400-699 </td> <td> Expert </td> </tr>
	<tr> <td style="background-color:#E339FA;"> 300-399 </td><td> Specialist  </td> </tr>
	<tr> <td style="background-color:#00DB2C;">200-299  </td> <td>Experienced </td> </tr>
	<tr> <td style="background-color:#BBEDC1;">100-199 </td> <td> Amateur  </td> </tr>
	<tr> <td style="background-color:#D9DBD7;"> 50-99 </td> <td> Newbie  </td> </tr>
	<tr> <td style="background-color:;"> &lt;50</td> <td> Observer </td> </tr>
	
</tbody>
  
        </table>
      </div>
 <div class="col-sm-12 col-md-9">
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
        <template v-for="(user, index) in ranklist">
          <tr :style="user.color" >
            <td>{{ (index+1) }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.ac }}</td>
          </tr>
        </template>
      </tbody>
    </table>
      </div>
      </div>
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
      var uva_ids = [ 128018, 1306045, 136946, 154564, 209062, 209266, 230728, 265971, 272560, 438420, 442290, 454538, 45497, 479379, 481730, 525034, 531363, 532838, 536814, 536920, 537235, 537444, 538815, 539637, 542658, 544812, 564915, 568977, 570713, 575414, 579889, 596546, 599601, 600070, 600506, 601691, 609053, 611623, 620399, 670535, 734499, 800669, 801775, 836526, 837411, 841407, 841477, 841477, 841501, 841513, 841665, 841784, 841792, 842539, 842923, 846835, 854023, 856334, 856509, 857063, 862922, 874221, 887444, 891237, 891655, 895246, 896284, 896448, 896681, 896693, 896815, 897029, 897621, 898372, 898444, 898447, 898457, 899318, 900411, 900794, 903604, 905514, 906079, 906081, 937478, 938016, 945171 ]; 


      var ranks = [];
      var promises = [];

      var len = uva_ids.length;
      for(var i=0; i<len; i++) {
        if(i > 0) {
          if(uva_ids[i] == uva_ids[i-1]){
            console.log("Continue");
            continue;
          }
        }
        var url = "https://uhunt.onlinejudge.org/api/ranklist/" + uva_ids[i] + "/0/0";
        promises.push(axios.get(url));
      }

      
      axios.all(promises).then(result => {
           var tmp;
           for(var i=0; i<result.length; i++) {
             tmp = result[i].data[0];
             if(tmp.ac >= 1000) {
               tmp.color = "background-color: #FA051D";
             } else if(tmp.ac >= 700) {
               tmp.color = "background-color: #FAF605;";
             } else if(tmp.ac >= 400) {
               tmp.color = "background-color: #6151F5;";
             } else if(tmp.ac >= 300) {
               tmp.color = "background-color: #E339FA;";
             } else if(tmp.ac >= 200) {
               tmp.color = "background-color: #00DB2C;";
             } else if(tmp.ac >= 100) {
               tmp.color = "background-color: #BBEDC1;";
             } else if(tmp.ac >= 50) {
               tmp.color = "background-color: #D9DBD7;";
             } else {
               tmp.color = "background-color:white;";
             }

             ranks.push(tmp);
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
