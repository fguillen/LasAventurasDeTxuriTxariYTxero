<template>
  <div class="container-sm col-lg-7">
    <nav class="top navbar py-0 py-md-0 navbar-expand-md navbar-light bg-white sticky-top">
      <router-link class="navbar-brand" to="/">txuri, txari y txero</router-link>
      <button class="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item py-0">
            <router-link class="nav-link" to="/read">Leer el libro</router-link>
          </li>
          <li class="nav-item py-0">
            <router-link class="nav-link" to="/buy">Comprar el libro</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>
  .navbar {
    font-family: sans-serif;
  }

  .navbar.top {
    border-bottom: 1px solid #d6ceaf;
  }
</style>
