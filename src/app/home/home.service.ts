import { Injectable } from "@angular/core";
import { HttpService } from "../shared/services/api/http.service";

@Injectable()
export class HomeService {

    constructor(private httpSerive: HttpService){

    }

    fetchAllProducts(){
       return this.httpSerive.getAll('product');
    }
}