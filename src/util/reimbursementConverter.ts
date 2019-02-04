import { SqlReimbursement, SqlReimbursementStatus, SqlReimbursementType } from '../dto/SqlReimbursement';
import { Reimbursement, ReimbursementType, ReimbursementStatus } from '../models/Reimbursement';

export function reimbursementConverter(reimbursement: SqlReimbursement) {
    return new Reimbursement(reimbursement.reimbursementid, reimbursement.author,
        reimbursement.amount, reimbursement.dateSubmitted, reimbursement.dateResolved
        , reimbursement.description, reimbursement.resolver, reimbursement.status
        , reimbursement.type);
}

export function reimbursementTypeConverter(reimbursementType: SqlReimbursementType) {
    return new ReimbursementType(reimbursementType.typeid, reimbursementType.type);
}

export function reimbursementStatusConverter(reimbursementStatus: SqlReimbursementStatus) {
    return new ReimbursementStatus(reimbursementStatus.statusid, reimbursementStatus.status);
}