import { Injectable } from "@angular/core";
import { HttpService } from "../shared/services/api/http.service";

@Injectable()
export class CategoryService {

    constructor(private httpSerive: HttpService){

    }

    addCategory(body){
       return this.httpSerive.post('category', body);
    }
}