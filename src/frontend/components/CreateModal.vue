<template>
  <el-dialog
    title="Create a logspace"
    v-model="isVisible"
    width="30%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="logspace.name"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="handleCancel">Cancel</el-button>
        <el-button type="success" @click="handleCreate">Create</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { create } from "../api";

export default {
  data: () => {
    return {
      logspace: {
        name: "",
      },
      isVisible: false,
    };
  },
  methods: {
    async handleCreate() {
      try {
        await create(this, "logspaces", this.logspace);
        this.isVisible = false;
        this.$emit("created");
      } catch (error) {
        console.log("dsfdsf", error.message);
        this.loadingItems = false;
      }
    },

    handleCancel() {
      this.isVisible = false;
    },
  },
};
</script>

<style>
</style>