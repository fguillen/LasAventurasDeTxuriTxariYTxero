<template>
  <div>
    <navbar></navbar>

    <div class="container-sm col-lg-7 px-3 py-3 pt-md-4 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Comprar el libro</h1>

      <img class="front-image" src="/assets/book.png">

      <p class="lead">
        Gracias por estar interesado/a en comprar "las aventuras de txuri, txari y txero" en formato
        papel. Así podrás leerlo más cómodamente, o dejar que tu hijo/a lo lea él/ella misma. También
        podrás regalarlo o dejarlo a quien quieras una vez que lo hayáis terminado.
      </p>

      <p class="lead">
        Todavía no he puesto la tienda online en marcha. Por favor envíame un email con tu dirección
        y ya nos arreglamos con la forma de pago y de envío.
      </p>

      <p class="h3">
        <a href="mailto:fguillen.mail@gmail.com">fguillen.mail@gmail.com</a>
      </p>

      <p class="lead">
        Prometo contestarte cuanto antes ;)
      </p>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'

  export default {
    name: 'Buy',
    components: {
      Navbar
    },
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  p.card-text {
    font-size: 1.2em;
  }

  h1 {
    line-height: 0.8;
  }

  .front-image {
    width: 100%;
  }
</style>
