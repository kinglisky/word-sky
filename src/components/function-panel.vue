<template>
  <div class="function-panel-wrapper">
    <module v-if="moduleId !== 0"></module>
    <div class="function-btns">
      <span class="btn" @click="setModuleId(1)"><i class="icon-pencil"></i></span class="btn">
      <span class="btn" @click="setModuleId(2)"><i class="icon-image"></i></span class="btn">
      <span class="btn" @click="setModuleId(3)"><i class="icon-twitch"></i></span class="btn">
      <span class="btn" @click="setModuleId(0)"><i class="icon-cross"></i></span class="btn">
    </div>
  </div>
</template>
<script>
import Module from './module';
import  * as Getters from '../vuex/getters';
import { setModuleId } from '../vuex/actions';
export default {
	components: {
	    Module
	},
	vuex: {
		getters: {
			 moduleId: Getters.moduleId
		},
		actions: {
			setModuleId
		}
	}
}
</script>
<style lang="less" scoped>
.function-panel-wrapper {
  width: 100%;
  height: 40px;
  // border: 1px solid #ccc;
  position: relative;
}
.function-btns {
	height: 100%;
	display: flex;
	.btn {
		cursor: pointer;
		height: 100%;
		width: 40px;
		border: 1px solid #ccc;
		border-bottom: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.5s;
		border-right: none;
		&:hover{
			color: #00fff5;
		}
	}
	.btn:nth-child(1) {
		border-radius: 8px 0 0 0;
	}
	.btn:nth-child(4) {
		border-right: 1px solid #fff;
		border-radius: 0 8px 0 0;
		&:hover{
			color: #f00;
		}
	}
}
</style>
