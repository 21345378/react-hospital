//导入request.ts 目录下的$http
import $http from "./request";
export function getDataAction(url:string,data?:any):any{
  return $http({
    url,
    method: 'get',
    params: data
  })
}
export function postJob(url:string,data?:any): any{
  return $http({
    url,
    method: 'post',
    data
  })
}
export function getRequirement(): any{
  return $http({
    url: '/mock/704240/Requirement',
    method:'get'
  })
}
