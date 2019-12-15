<template>
  <div>
    <navbar></navbar>

    <div id="page-read" class="content container-sm col-lg-7">
      <vue-markdown :source="content" :postrender="addHeaderIds"></vue-markdown>

      <nav class="bottom container-sm col-lg-7 py-0 py-md-0 navbar fixed-bottom navbar-light bg-white">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" :href="'#' + actualChapterId" v-on:click.prevent="goToChapter(actualChapterId, $event)" v-if="actualChapterTitle"><i class="fas fa-angle-double-up"></i> {{ actualChapterTitle }}</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" :href="'#' + nextChapterId" v-on:click.prevent="goToChapter(nextChapterId, $event)" v-if="nextChapterTitle">{{ nextChapterTitle }} <i class="fas fa-angle-double-down"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import Navbar from './Navbar.vue'

  export default {
    name: 'Read',
    components: {
      VueMarkdown,
      Navbar
    },
    props: {
      msg: String
    },
    data() {
      return {
        content: "loading ...",
        actualChapterTitle: null,
        actualChapterId: null,
        nextChapterTitle: null,
        nextChapterId: null,
      }
    },
    methods: {
      actualChapter: function () {
        var chapters = Array.from(document.querySelectorAll("h3, h1"));
        var chaptersUp =
          chapters.filter(function(element){
            var rect = element.getBoundingClientRect();
            var elemTop = rect.top;
            return elemTop < 100;
          });

        var chapterUp = chaptersUp.slice(-1)[0];
        var chapterDown = chapters[chapters.indexOf(chapterUp) + 1]

        if(chapterUp != null) {
          this.actualChapterTitle = chapterUp.textContent;
          this.actualChapterId = chapterUp.id;
        } else {
          this.actualChapterTitle = null;
          this.actualChapterId = null;
        }

        if(chapterDown != null) {
          this.nextChapterTitle = chapterDown.textContent;
          this.nextChapterId = chapterDown.id;
        } else {
          this.nextChapterTitle = null;
          this.nextChapterId = null;
        }
      },
      updateChapters: function () {
        console.log("updateChapters");
        var chapters = Array.from(document.querySelectorAll("h3, h1"));
        var chaptersHash = [];
        chapters.forEach(function(chapter){
          chaptersHash.push({
            id: chapter.id,
            text: chapter.textContent
          })
        });

        this.chapters = chaptersHash;
        console.log("chaptersHash", chaptersHash);
      },
      afterRenderContent: function() {
        console.log("afterRenderContent");
        this.updateChapters();
      },
      goToChapter: function(chapterId, event) {
        console.log("goToChapter", chapterId);

        event.stopPropagation()

        var options = {
          easing: 'ease-in',
          offset: -80
        }

        this.$scrollTo("#" + chapterId, 200, options);

        // Google Analytics
        this.$gtag.event('read/' + chapterId, { method: 'Google' });
      },
      addHeaderIds: function(content) {
        console.log("addHeaderIds");

        // document.querySelectorAll("h3").forEach(element => {
        //   var chapterNumber = element.textContent.match(/\s([0-9]+)/);
        //   console.log(chapterNumber);
        //   element.setAttribute("id", "chapter_" + chapterNumber);
        // });
        content = content.replace(/<h1>/, "<h1 id=\"cover\">")
        content = content.replace(/<h3>Capítulo ([0-9]+)<\/h3>/g, "<h3 id=\"chapter_$1\">Capítulo $1</h3>");
        content = content.replace(/<h3>Fin<\/h3>/, "<h3 id=\"fin\">Fin</h3>");

        return content
      }
    },
    mounted () {
      fetch("./assets/text.md")
        .then(text => text.text())
        .then(text => {
          this.content = text;
        });
    },
    beforeMount () {
      window.addEventListener('scroll', this.actualChapter);
    }

  }
</script>

<style>
  .content {
    margin-bottom: 80px;
  }

  .navbar.bottom {
    border-top: 1px solid #d6ceaf;
  }

  #page-read p {
    font-size: 1.2em;
    margin-bottom: 0;
    text-indent: 1em;
    line-height: 1.2em;
  }

  #page-read h1 {
    font-size: 3rem;
    text-align: center;
    line-height: 0.9em;
    margin-top: 0.6em;
    margin-bottom: 1em;
  }

  #page-read h2 {
    font-size: 1.5em;
    line-height: 1em;
    margin-bottom: 1em;
  }

  #page-read h3 {
    margin-top: 4em;
    font-size: 1.2em;
    text-align: center;
    border-bottom: 1px solid #d6ceaf;
    padding-bottom: 0.3em;
  }

  #page-read h3:last-of-type {
    border-bottom: 0;
  }

  #page-read h3:first-of-type {
    margin-top: 10em;
  }

  #page-read img {
    max-width: 100%;
    max-height: 500px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin: 1em 0 1em 0;
  }

  @media (min-width: 576px) {
    #page-read h1 {
      font-size: 4rem;
    }

    #page-read h2 {
      font-size: 2.5em;
    }

    #page-read h3 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 768px) {
    #page-read p {
      font-size: 1.5em;
    }

    #page-read h3 {
      font-size: 1.8em;
    }
  }
</style>
