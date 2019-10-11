<template>
  <v-content>
    <client-only>
      <v-flex xs12 md12 id="prolabo_main_img" :style="`background-image: url(${resImg});`">
        <div id="triangle"></div>
        <v-layout align-center id="undernav" v-if="isPc">
          <v-btn color="white" icon @click="scroll">
            <v-icon>mdi-chevron-down-circle</v-icon>
          </v-btn>ProLaboをもっと知る
        </v-layout>
        <v-layout wrap justify-center align-center class="prolabo_main_body" v-if="isPc">
          <div id="preword">
            <h2>
              <span style="font-size: 40px;">絶対</span>に円滑に進むプロジェクトなんてない？
              <br />できます
              <span style="font-size: 40px;">ProLabo</span>なら。
            </h2>
          </div>
        </v-layout>
        <v-layout wrap justify-center align-center class="prolabo_main_body" v-if="isPc">
          <div id="preword">
            <h2>
              <v-btn
                color="white"
                style="color: #487EB0;font-weight: bold;"
                width="200px"
                height="50px"
                @click="$router.push('/project')"
              >はじめる</v-btn>
            </h2>
          </div>
        </v-layout>
        <v-layout
          wrap
          justify-center
          align-center
          v-if="!isPc"
          style="height: 50vh;color: white;font-size: 25px;"
        >ProLaboではじめましょう</v-layout>
        <v-layout wrap justify-center align-center v-if="!isPc" style="height: 50vh;">
          <v-btn
            color="white"
            style="color: #487EB0;font-weight: bold;"
            width="200px"
            height="50px"
            @click="$router.push('/project')"
          >はじめる</v-btn>
        </v-layout>
      </v-flex>
      <v-container id="maincontent" fluid>
        <v-btn color="info" @click="$router.push('/project/testproject/markdown')">roomIn</v-btn>
        <v-layout wrap justify-center>
          <v-flex xs12 md10 style="height: 100vh;">
            <v-card>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </client-only>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      resImg: "",
      isPc: null
    };
  },
  methods: {
    scroll() {
      var speed = 500;
      var target = $("#maincontent");
      var position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    }
  },
  mounted() {
    var body = document.body;
    body.classList.remove("markdown-body");
    if (
      (navigator.userAgent.indexOf("iPhone") > 0 &&
        navigator.userAgent.indexOf("iPad") == -1) ||
      navigator.userAgent.indexOf("iPod") > 0 ||
      navigator.userAgent.indexOf("Android") > 0
    ) {
      this.isPc = false;
      this.resImg = "/prolabomain_mob_sub.png";
    } else {
      this.isPc = true;
      this.resImg = "/prolabomain_sub2.png";
    }
  },
  computed: {}
};
</script>

<style>
a {
  text-decoration: none;
}

#prolabo_main_img {
  background-size: cover;
  height: 93vh;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
}

.prolabo_main_body h2 {
  width: 100%;
}

.prolabo_main_body #preword {
  position: relative;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-end;
  width: 80%;
  height: 25vh;
  color: #fafafa;
}

#triangle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 320px 320px;
  border-color: transparent transparent #fbc531 transparent;
}

#undernav {
  color: white;
  font-weight: bold;
  font-size: 15px;
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
