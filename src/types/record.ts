import { RecordId } from "../utils/recordId"

export type Record = {
    id: RecordId
};

export type DataRecord<T> = Record & T;