import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid'

@Injectable()

export class UniqueIdService {

    private validId= /^[A-Za-z]+[\w\-\:\.]*$/
    private numberOfGeneratedIds = 0

    public generateUniqueIdWithPrefix(prefix: string): string {

        if (!prefix || !this.validId.test(prefix)) {
            throw Error("Prefix can not be empty")
        }

        const uniqueId = this.genenerateUniqueId()
        this.numberOfGeneratedIds++
        return `${prefix}-${uniqueId}`
    }

    public getNumberOfGenerateUniqueIds(): number {
        return this.numberOfGeneratedIds
    }

    private genenerateUniqueId(): string {
        return uuidv4();
    }
}