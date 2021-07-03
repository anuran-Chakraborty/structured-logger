<template>
  <h1>LogSpaces</h1>
  <el-row style="margin-bottom: 20px">
    <el-col :offset="17" :span="3">
      <el-button size="mini" type="success" @click="handleCreate()"
        >Create a logspace</el-button
      >
    </el-col>
  </el-row>
  <el-space direction="vertical" alignment="start" :size="30" />
  <el-row
    ><el-col :offset="6" :span="18">
      <el-table border size="small" :data="logspaces" style="width: 75%">
        <el-table-column prop="created_at" label="Created" width="200">
        </el-table-column>
        <el-table-column label="Name" width="600">
          <template #default="scope">
            <el-link type="primary" @click="handleClick(scope.row._id)">{{
              scope.row.name
            }}</el-link>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="">
          <template #default="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row._id)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>

  <create-modal ref="createModal" @created="fetchRecords"></create-modal>
</template>

<script>
import { fetchAll, remove } from "../api";
import CreateModal from "../components/CreateModal";
import _ from "lodash";

export default {
  data: () => {
    return {
      logspaces: [],
      loadingItems: false,
      itemsPerPage: 10,
      page: 1,
      search: "",
      serverItemsLength: 0,
    };
  },
  components: {
    CreateModal,
  },
  created: async function () {
    await this.fetchRecords();
  },
  methods: {
    //action
    async fetchRecords() {
      this.loadingItems = true;
      let params = { limit: this.itemsPerPage, page: this.page };
      if (this.search.length > 0) params["term"] = this.search;
      try {
        const resp = await fetchAll(this, "logspaces", params);
        console.log(resp);
        this.logspaces = _.get(resp, "data.data", []);
        this.loadingItems = false;
        this.serverItemsLength = _.get(resp, "data.total", 0);
      } catch (error) {
        console.log("dsfdsf", error.message);
        this.loadingItems = false;
      }
    },

    handleClick(id) {
      this.$router.push({ path: `/logs/${id}` });
    },

    handleCreate() {
      this.$refs.createModal.isVisible = true;
    },

    async handleDelete(id) {
      try {
        await remove(this, "logspaces", id);
        await this.fetchRecords();
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