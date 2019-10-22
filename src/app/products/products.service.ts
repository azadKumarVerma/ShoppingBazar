import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../shared/services/api/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, 
    private httpService: HttpService) { }

    addProduct(body){
       return this.httpService.post('/product',body);
    }

    fetchCategories(){
      return this.httpService.getAll('/category');
    }
}
