<template>
  <div>
    <div class="pricing-header px-3 py-3 pt-md-4 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Las aventuras de txuri, txari y txero</h1>

      <img class="front-image" src="/assets/image_0.jpg">

      <p class="lead">
        txuri, txari y txero no son unos niños normales, ningún niño lo es.
        txuri, txari y txero viven en nuestro mundo pero para ellos este mundo es algo diferente
        gracias a su imaginación y a su manera de ver nuevos mundos se abren ante ellos,
        nuevos y extraños amigos les acompañan. Acompáñales también tú.
      </p>

      <p class="lead">
        Este libro ha sido creado con la intención de ser leído en voz alta, para disfrutar de una
        experiencia lectora con tus hijos, llena de aventuras y de encuentros excitantes y llenos de emoción.
        Un viaje por las experiencias, la comunicación, la imaginación y la intención de conocer al otro.
      </p>
    </div>

    <div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Lee el libro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Gratis</h1>
            <p class="card-text">
              He escrito este libro para ser leído. Si no tienes dinero, si no estás seguro o segura de si te va a gustar,
              no hace falta que pagues nada puedes leerlo y disfrutarlo completamente gratis.
            </p>
            <a href="#" class="btn btn-primary">Leer gratis</a>
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Compra el libro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">15 <small class="text-muted">euros</small></h1>
            <p class="card-text">
              Disfruta del libro en papel o en formato digital. Regálalo, compártelo, deja que tus hijos lo lean.
            </p>
            <a href="#" class="btn btn-primary">Comprar el libro</a>
          </div>
        </div>
      </div>

      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
            <small class="d-block mb-3 text-muted">&copy; 2017-2019</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
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
