<template>
  <v-content>
    <v-container>
      <v-text-field name="name" label="label" v-model="uploadfilename" outlined rounded></v-text-field>
      <v-file-input label="File input" v-model="uploadfile"></v-file-input>
      <v-btn color="info" @click="uploadfile_req">upload</v-btn>
      <v-btn color="warning" @click="getlist_req">getlist</v-btn>
      <v-layout wrap justify-center>
        <div style="width: 980px;">
          <div v-for="(item, index) in folderlist" class="databox folderbox">{{ item.name }}</div>
          <div v-for="(item, index) in filelist" class="databox">{{ item.name }}</div>
        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      uploadfile: null,
      uploadfilename: ""
    };
  },
  methods: {
    async uploadfile_req() {
      if (!this.uploadfile) {
        alert("ファイルが選択されていません");
        return;
      }
      const payload = {
        name: this.uploadfilename,
        file: this.uploadfile
      };
      await this.upload({ payload });
    },
    async getlist_req() {
      await this.getlist();
    },
    ...mapActions("storage", ["upload", "getlist"])
  },
  computed: {
    ...mapGetters("storage", ["folderlist", "filelist"])
  },
  mounted() {
    this.getlist_req();
  }
};
</script>

<style scoped>
.databox {
  margin: 0 10px 10px 10px;
  float: left;
  width: 300px;
  height: 300px;
  background-color: aqua;
}

.folderbox {
  background-image: url(/foldertest.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>