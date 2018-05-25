<template>
  <div>
    <h2 class="text-center">Ranklist based on ratings at CodeForces</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Avatar</th>
          <th>Handle</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="(handle, index) in handles">
           <td>{{ (index+1) }}</td>
           <td><img :src="handle.avatar"></td>
           <td>{{ handle.handle }} </td>
           <td>{{ handle.rating }} </td>
       </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'codeforces',
  data() {
    return {
       handles: [ ]
    }
  },
  mounted() {
      var url = "https://codeforces.com/api/user.info?handles=shahidul_brur;NAbdulla;Ashap_Bappy;SamiulSourav;Mr.Panda;Mr.Dash;Mr_SAM;hasanaliemon;himisir;tarikul39;Rakibul6636;asik_b8;Rimi;nurrahman;amsakib;mhsn06;faruk;Helaluddin_brur;menon;Ruman_Hossain;trms;Dipu_brur";
      axios(url).then(
          result => {
              this.handles = result.data.result.sort(function (userA, userB) {
                return userB.rating - userA.rating; // Sort descending based on rating.
            });
          }, error => {
              console.error(error);
          }
      )
  }
}
</script>


<style>
</style>
