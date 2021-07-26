import { request } from "./request";

export function getArray() {
  return request({
    url: '/api'
  })
}

export function getHtml() {
  return request({
    url: '/api'
  })
}