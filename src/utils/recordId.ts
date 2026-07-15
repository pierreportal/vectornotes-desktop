import { DataRecord } from "../types/record";

export type RecordId = {
    tb: string,
    id: {
        String: string
    }
};

export type ParsedRecord<T> = T & { id: string };

const getIdStringFromRecordId = ({ id }: RecordId): string => id.String;

export const formatRecordId = <T,>(record: DataRecord<T>): ParsedRecord<T> => ({ ...record, id: getIdStringFromRecordId(record.id) });
export const formatRecordIds = <T,>(data: DataRecord<T>[]): ParsedRecord<T>[] => data.map(formatRecordId);