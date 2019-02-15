
export class SqlReimbursement {
    reimbursementid = 0;
    author = 0;
    amount = 0;
    datesubmitted = '';
    dateresolved = '';
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

export class SqlFullyJoinedReimbursement {
    reimbursementid = 0;
    author = 0;
    amount = 0;
    datesubmitted = '';
    dateresolved = '';
    description = '';
    resolver = 0;
    status = 0;
    type = 0;
    userid = 0;
    username = '';
    password = '';
    firstname = '';
    lastname = '';
    email = '';
    role = '';
    roleid = 0;
    statusid = 0;
    typeid = 0;
}