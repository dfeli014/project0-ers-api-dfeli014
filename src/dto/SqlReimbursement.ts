export class SqlReimbursement {
    reimbursementid = 0;
    author = 0;
    amount = 0;
    dateSubmitted = 0;
    dateResolved = 0;
    description = '';
    resolver = 0;
    status = 0;
    type = 0;
}

export class SqlReimbursementStatus {
    statusid = 0;
    status = '';
}

export class SqlReimbursementType {
    typeid = 0;
    type = '';
}