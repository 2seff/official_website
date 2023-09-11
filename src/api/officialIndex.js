import { request } from "axios";

export function homeIndex(){
  return request({
    url:'/test',
    method: 'get',
  })
}
