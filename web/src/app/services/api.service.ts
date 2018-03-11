import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Inject} from "@angular/core";

/**
 * Service for server requests
 */
export class ApiService {

  /**
   * @type {string} Methods list url
   */
  private methodsURL = environment.API + '/methods';

  /**
   * @type {string} Execute method url
   */
  private executeMethodURL = environment.API + '/execute';

  constructor(@Inject(Http) private http: Http) {
  }

  /**
   * Set default headers
   */
  private setHeaders(): Headers {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    return headers;
  }

  /**
   * GET request to server
   * @param {string} url          server url
   * @returns {Observable<any>}   response
   */
  private get (url: string): Observable<any> {
    return this.http.get(url, {headers: this.setHeaders()}).map((res: Response) => res.json());
  }

  /**
   * POST request to server
   * @param {string} url          server url
   * @param body                  request body
   * @returns {Observable<any>}   response
   */
  private post(url: string, body: any): Observable<any> {
    return this.http.post(url, body).map(res => res.json());
  }

  /**
   * Execute method
   * @param body                  method values
   * @returns {Observable<any>}   response
   */
  executeMethod(body: any) {
    return this.post(this.executeMethodURL, body);
  }

  /**
   * Get methods list
   * @returns {Observable<any>}   response
   */
  getMethods(): Observable<any> {
    return this.get(this.methodsURL);
  }
}
