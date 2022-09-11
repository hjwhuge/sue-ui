<script lang="ts" setup>
import { Button } from "./Button";
</script>
<template>
  <h2>不同样式</h2>
  <div>
    <Button color="blue">蓝色按钮</Button>
    <Button color="green">绿色按钮</Button>
    <Button color="gray">灰色按钮</Button>
    <Button color="yellow">黄色按钮</Button>
    <Button color="red">红色按钮</Button>
  </div>
  <h2>带icon</h2>
  <div>
    <Button color="blue" round plain icon="search"></Button>
    <Button color="green" round plain icon="edit"></Button>
    <Button color="gray" round plain icon="check"></Button>
    <Button color="yellow" round plain icon="message"></Button>
    <Button color="red" round plain icon="delete"></Button>
  </div>
</template>

<style lang="scss" scoped></style>
