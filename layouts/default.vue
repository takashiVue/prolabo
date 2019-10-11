<template>
  <v-app style="background-color: white;">
    <v-dialog
      app
      v-model="login_dialog"
      :overlay="false"
      transition="dialog-transition"
      max-width="500px"
    >
      <v-card class="pa-10">
        <v-card-title primary-title>Login</v-card-title>
        <v-card-text>
          <v-layout row wrap class="pa-5" v-if="login_error">{{ login_error }}</v-layout>
          <v-text-field color="success" outlined label="id" rounded v-model="logindata.id"></v-text-field>
          <v-text-field
            color="success"
            outlined
            label="password"
            rounded
            v-model="logindata.password"
          ></v-text-field>
          <v-btn color="success" icon block @click="login_req">submit</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <div id="menubar">
      <img
        id="menulogo"
        src="~/assets/logo.png"
        alt="ロゴ"
        style="margin: 0 8px 0 10px;"
        @click="$router.push('/')"
      />
      <div @click="$router.push('/')" id="nav_title">ProLabo.</div>

      <div style="width: 100%;display: flex;justify-content: flex-end;align-items: center;box-sizing: border-box;padding: 10px;">
        <v-btn
          style="font-family: 'Rajdhani', sans-serif;font-size: 22px;font-weight: 900;"
          @click="login_dialog = true"
          color="white"
          icon
          v-if="!isLogin"
        >Login</v-btn>
        <div
          v-if="isLogin"
          id="avatar"
          style="background-image: url(https://jp.vuejs.org/images/logo.png);"
        ></div>
      </div>
    </div>
    <nuxt />
    <v-footer id="footer">
      <span>&copy; 2019 takashi.vue</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      //login系統
      login_dialog: false,
      logindata: { id: "", password: "" },
      login_error: null
    };
  },
  methods: {
    async login_req() {
      if (!this.logindata.id && !this.logindata.password) {
        this.login_error = "入力内容が間違っています";
        return;
      }
      try {
        const payload = {
          id: this.logindata.id,
          password: this.logindata.password
        };
        var result = await this.login({ payload });
      } catch (e) {}
      if (result) {
        this.login_error = result;
        return;
      }
      this.login_dialog = false;
      this.logindata.id = "";
      this.logindata.password = "";
      alert("ログイン完了");
    },
    ...mapActions("dao", ["login"])
  },
  computed: {
    ...mapGetters("dao", ["isLogin"])
  }
};
</script>

<style scoped>
#footer {
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  color: #666666;
}

a {
  text-decoration: none;
  color: white;
}

#menubar {
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  height: 7vh;
  background-color: #0fcdb9;
}

#menubar div {
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  letter-spacing: 1.5px;
  font-size: 23px;
}

#menubar img#menulogo {
  cursor: pointer;
  width: 30px;
  margin: 0 8px 0 10px;
  background-color: rgba(0, 0, 0, 0);
}

#nav_title{
  cursor: pointer;
}

#avatar {
  width: 35px;
  height: 35px;
  border-radius: 100px;
  background-color: aliceblue;
  background-size: cover;
}
</style>
