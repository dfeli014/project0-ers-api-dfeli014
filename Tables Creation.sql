-- Drop table

-- DROP TABLE project0.reimbursement_status

CREATE TABLE project0.reimbursement_status (
	statusid serial NOT NULL,
	status text NOT NULL,
	CONSTRAINT reimbursementstatus_pk PRIMARY KEY (statusid),
	CONSTRAINT reimbursementstatus_un UNIQUE (status) 
);

-- Drop table

-- DROP TABLE project0.reimbursement_type

CREATE TABLE project0.reimbursement_type (
	typeid serial NOT NULL,
	"type" text NOT NULL,
	CONSTRAINT reimbursementtype_pk PRIMARY KEY (typeid) 
);

-- Drop table

-- DROP TABLE project0."role"

CREATE TABLE project0."role" (
	roleid serial NOT NULL,
	"role" text NOT NULL,
	CONSTRAINT role_pk PRIMARY KEY (roleid),
	CONSTRAINT role_un UNIQUE (role) 
);

-- Drop table

-- DROP TABLE project0."user"

CREATE TABLE project0."user" (
	userid serial NOT NULL,
	username text NOT NULL,
	"password" text NOT NULL,
	firstname text NOT NULL,
	lastname text NOT NULL,
	email text NOT NULL,
	"role" int4 NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (userid),
	CONSTRAINT user_un UNIQUE (username),
	CONSTRAINT user_role_fk FOREIGN KEY (role) REFERENCES project0.role(roleid) ON DELETE cascade ON UPDATE cascade
);
-- Drop table

-- DROP TABLE project0.reimbursement

CREATE TABLE project0.reimbursement (
	reimbursementid serial NOT NULL,
	author int4 NOT NULL,
	amount int4 NOT NULL,
	datesubmitted timestamp NOT NULL,
	dateresolved timestamp NOT NULL,
	description text NOT NULL,
	resolver int4 NULL,
	status int4 NOT NULL,
	"type" int4 NULL,
	CONSTRAINT reimbursement_pk PRIMARY KEY (reimbursementid),
	CONSTRAINT reimbursement_reimbursementstatus_fk FOREIGN KEY (status) REFERENCES project0.reimbursement_status(statusid) ON DELETE set null ON UPDATE cascade,
	CONSTRAINT reimbursement_reimbursementtype_fk FOREIGN KEY (type) REFERENCES project0.reimbursement_type(typeid) ON DELETE set null ON UPDATE cascade,
	CONSTRAINT reimbursement_user_fk FOREIGN KEY (author) REFERENCES project0."user"(userid) ON DELETE set null ON UPDATE cascade,
	CONSTRAINT reimbursement_user_fk_1 FOREIGN KEY (resolver) REFERENCES project0."user"(userid) ON DELETE set null ON UPDATE cascade
);
