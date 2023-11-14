import {http } from '@/utils/http'
export const wechatMinAppLogin=(data)=>{
	return http({
		method:"POST",
		url:"/login/wxMin",
		data,
	})
}