import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallserviceService {
    url="http://localhost:3000/posts/"
  constructor(private ht:HttpClient) { }
postdata(t){
  return this.ht.post(this.url,t)
}
getdata(){
  return this.ht.get(this.url)
}
deletedata(s){
  return this.ht.delete(this.url +s)
}
updatedata(r){
  return this.ht.put(this.url + r.id,r)
}
}
