<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/"><a class="navbar-brand">8log</a></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/"><a class="nav-link active" aria-current="page">Home</a></router-link>
          <router-link to="/list"><a class="nav-link">List</a></router-link>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavBar"
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>