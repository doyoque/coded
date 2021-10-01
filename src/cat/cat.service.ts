import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    getAll(): string {
        return 'this is a cat';
    }

    getFilter(): string {
        return 'this action filter cat';
    }

    postCreate(): string {
        return 'this action create cat';
    }
}
