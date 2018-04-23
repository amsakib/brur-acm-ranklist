<template>
  <div id="app">
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            
          </div>
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="#"><h1>BRUR ACM Ranklist</h1></a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
           
          </div>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <p class="p-2 text-muted" href="#"></p>
          <p class="p-2 text-muted" href="#"></p>
          <p class="p-2 text-muted" href="#"></p>
          <p class="p-2 text-muted" href="#"></p>
          <router-link to="uva" class="p-2 " >UVa Ranklist</router-link>
          <router-link to="codeforces"  class="p-2">Codeforces Ranklist</router-link>
          <p class="p-2 text-muted" href="#"></p>
          <p class="p-2 text-muted" href="#"></p>
          <p class="p-2 text-muted" href="#"></p>
          <p class="p-2 text-muted" href="#"></p>
        </nav>
      </div>
      
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
nav a {
  color: blueviolet;
}
nav > a:hover {
  text-decoration: underline;
}
</style>
