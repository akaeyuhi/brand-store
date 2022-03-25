import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { Types } from 'mongoose';

@Injectable()
export class IdValidationPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        const isValid = Types.ObjectId.isValid(value) || 
            metadata.type === 'body';

        if(!isValid) throw new BadRequestException('Invalid ID');

        return value;
    }
}