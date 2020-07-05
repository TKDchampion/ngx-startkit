# ngx-startkit
目前為0.0.4 持續更新中...
###### tags: `learn`

## Install
``` js
npm install ngx-startkit --save
```

## Import
``` js
import { NgxStartkitModule } from 'ngx-startkit';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxStartkitModule
  ])
export class AppModule { }
```

## Setting
- HttpDefaultOptions
    - baseApiURL(string): 預設的網域
    - headers(object): 預設的headers
- HttpRquestOptions
    - baseURL(string): 覆蓋預設的baseApiURL
    - headers(object): 會合併預設載入的headers
    - queryObject(object): query string的物件型態
    - body(object): body
- JWTOptions
    - key: 設定要讀取token在localstorage的key是為何

``` js
export class AppHttpDefaultOptions extends HttpDefaultOptions {
  baseApiURL = 'https://XXX-api.com/';
  headers = {
    ['api-version']: '0.1'
  };
}

export class AppJWTOptions extends JWTOptions {
  key = 'taken';
}
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxParisModule
  ],
  providers: [{
    provide: HttpDefaultOptions,
    useClass: AppHttpDefaultOptions
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Service
- StorageService
    ``` js
    import { StorageService } from 'ngx-startkit';
    @Component({ selector: 'app-root', templateUrl: './app.component.html' })
    export class AppComponent implements OnInit {
    constructor(private stotage: StorageService) {}
        ngOnInit(): void {
            // type = 'localStorage' || 'sessionStorage'
            // type 預設 'localStorage'
            this.storage.get('key', type); // 讀取typ
            this.storage.set('key', obj, type); // 存放type
            this.storage.removeItem('key', type) // 清除type單一項目
            this.stotage.clear(type); // 清除type所有內容
        }
    }
    ```
    
- GlobalStateService
    ``` js
    import { GlobalStateService } from 'ngx-startkit';
    @Component({ selector: 'app-root', templateUrl: './app.component.html' })
    export class AppComponent implements OnInit {
    constructor(private state: GlobalStateService) {}
        ngOnInit(): void {
            // 訂閱模式
            this.state.notifyDataChanged('key', value); //訂閱
            this.state.subscribe('key', () => {}); //訂閱者
            this.state.unsubscribe('key'); //取消訂閱
        }
    }
    ```
 
- GlobalService
    ``` js
    import { GlobalService } from 'ngx-startkit';
    @Component({ selector: 'app-root', templateUrl: './app.component.html' })
    export class AppComponent implements OnInit {
    constructor(private global: GlobalService) {}
        ngOnInit(): void {
            // 此全域變數僅限不切換router的情況下
            this.global.set(value); //存放全域變數
            this.global.get() //讀取全域變數
        }
    }
    ```
    
## String擴充方法
* toInt(radix?: number): number;
* toFloat(): number;
* toDate(): Date;
* toURL(base: string): string;
