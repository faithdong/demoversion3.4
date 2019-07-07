/*
 * @Author: zhongxd 
 * @Date: 2019-04-28 00:23:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-05-26 20:55:37
 */

<template>
	<div>
		<el-container>
			<el-row>
				<el-col :span="10" :offset="2">
					<el-input-number v-model="childInput" placeholder=""></el-input-number>
				</el-col>
			</el-row>
		</el-container>
	</div>
</template>

<script>
export default {
	props:["parentToChildData"],
	data(){
		return{
			childInput:"5",
		}
	},
	methods:{

	},
	mounted(){
		// eslint-disable-next-line
		console.log("child-mounted");
		// eslint-disable-next-line
		console.log(this.parentToChildData);
	}

}
</script>