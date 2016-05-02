<template>
  <div class="function-panel-wrapper">
    <div class="function-module"></div>
    <div class="function-btns">
      <span class="btn"><i class="icon-pencil"></i></span class="btn">
      <span class="btn"><i class="icon-image"></i></span class="btn">
      <span class="btn"><i class="icon-twitch"></i></span class="btn">
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@height: 40px;
@moduleBottom: @height+10;
@borderRadius: 8px;
.function-panel-wrapper {
  width: 100%;
  height: @height;
  // border: 1px solid #ccc;
  position: relative;
}
.function-module {
	display: none;
	position: absolute;
	width: 100%;
	height: 300px;
	border: 1px solid #fff;
	bottom: @moduleBottom;
	&:after{
		@bwidth: 50px;
		content: '';
		position: absolute;
		bottom: -@bwidth;
		left: 50%;
		margin-left: -@bwidth /2;
		border: @bwidth/2 solid transparent;
		border-top: @bwidth/2 solid #fff;
		border-left-width: none;
		border-right-width: none;
		border-bottom-width: none;
	}
}
.function-btns {
	height: 100%;
	display: flex;
	.btn {
		cursor: pointer;
		height: 100%;
		width: @height;
		border: 1px solid #ccc;
		border-bottom: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.5s;
		&:hover{
			color: #00fff5;
		}
	}
	.btn:nth-child(1) {
		border-radius: @borderRadius 0 0 0;
		border-right: none;
	}
	.btn:nth-child(3) {
		border-radius: 0 @borderRadius 0 0;
		border-left: none;
	}
}
</style>
