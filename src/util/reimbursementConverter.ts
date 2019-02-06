import { SqlReimbursement, SqlReimbursementStatus, SqlReimbursementType, SqlFullyJoinedReimbursement } from '../dto/SqlReimbursement';
import { Reimbursement, ReimbursementType, ReimbursementStatus, FullyJoinedReimbursement } from '../models/Reimbursement';

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

export function fullyJoinedReimbursementConverter(fullyJoined: SqlFullyJoinedReimbursement) {
    return new FullyJoinedReimbursement(fullyJoined.reimbursementid, fullyJoined.author, fullyJoined.amount, fullyJoined.dateSubmitted,
        fullyJoined.dateResolved, fullyJoined.description, fullyJoined.resolver, fullyJoined.status, fullyJoined.type, fullyJoined.userid,
        fullyJoined.username, fullyJoined.password, fullyJoined.firstname, fullyJoined.lastname, fullyJoined.email, fullyJoined.user_role,
        fullyJoined.roleid, fullyJoined.statusid, fullyJoined.typeid);
}