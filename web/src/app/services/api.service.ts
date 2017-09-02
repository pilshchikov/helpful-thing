import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Inject} from "@angular/core";

/**
 * Сервия для запросов на сервер
 */
export class ApiService {
  /**
   * @type {string} Урл для получения списока методов
   */
  private methodsURL = environment.API + '/methods';

  /**
   * @type {string} урл для выполнения метода
   */
  private executeMethodURL = environment.API + '/execute';

  constructor(@Inject(Http) private http: Http) {
  }

  /**
   * Сетим стандартные хедеры
   */
  private setHeaders(): Headers {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    return headers;
  }

  /**
   * Запрос GET к ресурсу
   * @param {string} url          адрес русурса
   * @returns {Observable<any>}   ответ
   */
  private get (url: string): Observable<any> {
    return this.http.get(url, {headers: this.setHeaders()}).map((res: Response) => res.json());
  }

  /**
   * Запрос POST к ресурсы
   * @param {string} url          адрес ресурса
   * @param body                  тело запроса
   * @returns {Observable<any>}   ответ
   */
  private post(url: string, body: any): Observable<any> {
    return this.http.post(url, body).map(res => res.json());
  }

  /**
   * Выполняем метод с параметрами
   * @param body                  значения с формы метода
   * @returns {Observable<any>}   ответ
   */
  executeMethod(body: any) {
    return this.post(this.executeMethodURL, body);
  }

  /**
   * Получаем список методов
   * @returns {Observable<any>}   ответ
   */
  getMethods(): Observable<any> {
    return this.get(this.methodsURL);
  }
}
