import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
import { UsersService } from '../api-services/users.service';
import Dialogtype, { Dialog } from '../libs/dialog.lib';

@Injectable({
    providedIn: 'root'
})

export class HttpConfigInterceptor implements HttpInterceptor {

    isRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    onTokenize = false;
    loader = false;

    constructor(
        public loaderService: LoaderService,
        private userService: UsersService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loader = false;
        if (!request.url.includes('noload')) {
            this.loaderService.show();
            this.loader = true;
        }

        if (request.headers.get("skip")) {
            return next.handle(request);
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        if (!request.headers.has('Accept')) {
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }


        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (this.loader) {
                        this.loaderService.hide()
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data: any = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status,
                    message: error && error.error && error.error.error ? error.error.error_description : error.message,
                    exceptionMessage: error && error.error ? error.error.exceptionMessage : error.message,
                    exceptionType: error && error.error ? error.error.exceptionType : null
                };

                if (data["status"] != "" && data["status"] == "500") {

                    this.loaderService.hide();
                    Dialog.show('Ha ocurrido un error con el servicio', Dialogtype.error).subscribe();

                    return throwError('error-->>>' + error);

                }
                else {
                    this.loaderService.hide();
                    if (data["message"] != undefined) {
                        Dialog.show(data["message"], Dialogtype.warning).subscribe();
                    }
                    return throwError('error-->>>' + error);
                }

            }),
            finalize(() => { })
        );

    }
}

