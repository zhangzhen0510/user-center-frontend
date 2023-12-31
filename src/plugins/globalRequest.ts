import {extend} from 'umi-request';
import {message} from "antd";
import {history} from "@@/core/history";
import {stringify} from "querystring";

/**
 * 配置request请求时的默认参数
 */
export const request = extend({
  credentials: 'include',
  prefix: process.env.NODE_ENV === 'production' ? 'http://user-backend.zz.cn' : undefined
})

/**
 * 请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`request url = ${url}`)

  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 全局响应拦截器
 */
request.interceptors.response.use(async (response): Promise<any> => {
  const res = await response.clone().json();
  if (res.code === 0){
    return res.data;
  }
  if (res.code === 40100){
    message.error('请先登录')
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname,
      }),
    });
  } else {
    message.error(res.description)
  }
  return res.data;
});
