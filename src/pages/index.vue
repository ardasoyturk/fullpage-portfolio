<template>
  <full-page :options="{ sectionSelector: '.container' }" ref="fullPage">
    <div class="container">
      <div class="text-gray-700 text-center">
        <div class="p-6">
          <img
            class="avatar w-32 h-32 mx-auto mb-2"
            draggable="false"
            src="/images/barney.png"
            alt="image"
          />

          <div class="text-center">
            <h2 class="text-lg">Arda Soytürk</h2>
            <div
              class="select-none cursor-pointer text-purple-500 mb-1"
              @click="randomRank"
            >{{ rank }}</div>
            <Socials class="socials" />
          </div>
        </div>
      </div>

      <div class="select-none bottom-text text-center text-gray-700" @click="moveDown">
        <span>scroll down</span>
      </div>
    </div>

    <div class="container text-gray-700 max-w-md">
      <div class="text-left">
        <h1 class="text-lg title">Who am I?</h1>
        <p class="appear text-left">
          I am a Turkish student who is interested in programming, playing games and watching series. I program JavaScript most and I hope I will learn other languages as well. I love watching series, they help me spend time. And I think that's pretty much it. :)
        </p>
      </div>

      <div class="select-none bottom-text text-center text-gray-700" @click="moveDown">
        <span>scroll down</span>
      </div>
    </div>

    <div class="container text-gray-700 max-w-md">
      <div class="text-left">
        <h1 class="text-lg title">What do I know so far?</h1>
        <p class="appear text-left">
          First of all, I am not the best, maybe not even "good", but I like what I do and I am
          happy with my current self; this doesn't mean that I'll stop learning new technologies and
          all, I'll definitely improve my skills in the future!
        </p>

        <h1 class="text-lg title mt-6">Skills</h1>
        <Skills />
      </div>

      <div class="select-none bottom-text text-center text-gray-700">
        <span><a href="https://github.com/ardasoyturk/fullpage-portfolio">source code of this website</a></span>
      </div>
    </div>
  </full-page>
</template>

<style>
.title {
  border-left: 4px solid purple;
  padding-left: 0.5em;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bottom-text {
  cursor: pointer;
  position: absolute;
  bottom: 0.25em;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.75;
  transition: opacity 0.2s;
}

.bottom-text:hover {
  opacity: 1;
}

.avatar {
  border-radius: 100%;
  transition: border-radius 0.2s;
}

.avatar:hover {
  border-radius: 4px;
}

li {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1024px) {
  .container {
    padding: 0 2em;
  }

  .flex.mt-4 {
    text-align: center;
    justify-content: space-between;
  }

  .flex.mt-4 .flex {
    display: block;
  }

  .flex.mt-4 .flex img {
    margin: 0;
  }

  .flex.mt-4 .flex:not(:last-child) {
    margin-bottom: 0.5em;
  }
}
</style>

<script>
export default {
  data() {
    return {
      ranks: [
        "Gamer",
        "Student",
        "Turkish",
        "Vue Lover",
        "Programmer",
        "Professional Javascript Player",
        "Sometimes Kid",
        "Netflix Lover",
        "Backend Developer",
        "Not-Much-A-Person",
        "Stack Overflow FTW!",
        "Discord Bot Dev",
        "Prefers Spotify to others",
      ],
      rank: "a student from turkey",
    };
  },
  methods: {
    moveDown() {
      this.$refs.fullPage.api.moveSectionDown();
    },
    goTop() {
      this.$refs.fullPage.api.moveTo(1);
    },
    randomRank() {
      this.rank = this.ranks.filter((r) => r !== this.rank)[
        Math.floor(Math.random() * (this.ranks.length - 1))
      ];
    },
  },
};
</script>
