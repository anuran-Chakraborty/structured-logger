<template>
  <h1>Logs</h1>
  <el-row v-for="log in logs" :key="log._id">
    <el-col align="left" :span="3">
      <span>{{ log.timestamp }}</span>
    </el-col>
    <el-col align="left" :span="2">
      [<span>{{ log.log_level }}</span
      >]
    </el-col>
    <el-col align="left" :span="2">
      <span>{{ log.log_tag }}</span>
    </el-col>

    <el-col align="left" :span="12">
      <span>{{ log.log }}</span>
    </el-col>
  </el-row>
</template>

<script>
import { fetchOne } from "../api";
import _ from "lodash";

export default {
  data: () => {
    return {
      logs: [],
      loadingItems: false,
      itemsPerPage: 10,
      page: 1,
      search: "",
      serverItemsLength: 0,

      colors: {
        ERROR: "#F56C6C",
        VERBOSE: "#67C23A",
        INFO: "#909399",
      },
    };
  },
  components: {},
  created: async function () {
    setInterval(async () => {
      await this.fetchLogs();
    }, 200);
  },
  methods: {
    //action
    async fetchLogs() {
      this.loadingItems = true;
      let params = {};
      if (this.search.length > 0) params["term"] = this.search;
      try {
        const resp = await fetchOne(this, "logs", this.$route.params.id);
        this.logs = _.get(resp, "data", []);
        this.loadingItems = false;
        this.serverItemsLength = _.get(resp, "data.total", 0);
      } catch (error) {
        console.log("dsfdsf", error.message);
        this.loadingItems = false;
      }
    },
  },
};
</script>

<style>
</style>