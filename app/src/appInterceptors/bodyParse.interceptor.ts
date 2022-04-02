import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class BodyParseInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const req = context.switchToHttp().getRequest();
        const body = req.body;
        const needed = ['price', 'rating', 'discountPrice'];
        
        for(const prop in body){
            req.body[prop] = needed.includes(prop) ? Number(body[prop]) : body[prop];
        }

        if(body.categories) req.body.categories = body.categories.split(',');

        return next.handle();
    }
}