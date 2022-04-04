import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class QueryValidationPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(metadata.type !== 'query') return value;

        const allowed = ['discount', 'sex'];
        const keys = Object.keys(value);

        for(let key of keys){
            if(!allowed.includes(key)) throw new BadRequestException('Invalid query parameter');
            if(key === 'discount' && value[key] !== 'true') value[key] = '';
        }

        return value;
    }
}