export class Reimbursement {
    reimbursementId: number; // primary key
    author: number;  // foreign key -> User, not null
    amount: number;  // not null
    datesubmitted: string; // not null
    dateresolved: string; // not null
    description: string; // not null
    resolver: number; // foreign key -> User
    status: number; // foreign key -> ReimbursementStatus, not null
    type: number; // foreign key -> ReimbursementType

    constructor(reimbursementId?: number, author?: number, amount?: number, datesubmitted?: string,
        dateresolved?: string, description?: string, resolver?: number, status?: number, type?: number) {
            this.reimbursementId = reimbursementId;
            this.author = author;
            this.amount = amount;
            this.datesubmitted = datesubmitted;
            this.dateresolved = dateresolved;
            this.description = description;
            this.resolver = resolver;
            this.status = status;
            this.type = type;
        }
}

export class ReimbursementStatus {
    statusId: number; // primary key
    status: string; // not null, unique

    constructor(statusId?: number, status?: string) {
        this.statusId = statusId;
        this.status = status;
    }
}

export class ReimbursementType {
    typeId: number; // primary key
    type: string; // not null, unique

    constructor(typeId?: number, type?: string) {
        this.typeId = typeId;
        this.type = type;
    }
}

export class FullyJoinedReimbursement {
    reimbursementid: number;
    author: number;
    amount: number;
    dateSubmitted: string;
    dateResolved: string;
    description: string;
    resolver: number;
    status: number;
    type: number;
    userid: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    user_role: string;
    roleid: number;
    statusid: number;
    typeid: number;

    constructor(reimbursementid?: number,
        author?: number,
        amount?: number,
        dateSubmitted?: string,
        dateResolved?: string,
        description?: string,
        resolver?: number,
        status?: number,
        type?: number,
        userid?: number,
        username?: string,
        password?: string,
        firstname?: string,
        lastname?: string,
        email?: string,
        user_role?: string,
        roleid?: number,
        statusid?: number,
        typeid?: number
    ) {
        this.reimbursementid = reimbursementid;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = dateSubmitted;
        this.dateResolved = dateResolved;
        this.description = description;
        this.resolver = resolver;
        this.status = status;
        this.type = type;
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.user_role = user_role;
        this.roleid = roleid;
        this.statusid = statusid;
        this.typeid = typeid;
    }
}