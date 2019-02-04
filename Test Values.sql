INSERT INTO project0."user" (userid, username, "password", firstname, lastname, email, "role") VALUES(0, '', '', '', '', '', 0);
INSERT INTO project0."role" (roleid, "role") VALUES(0, '');
INSERT INTO project0.reimbursement_type (typeid, "type") VALUES(0, '');
INSERT INTO project0.reimbursement_status (statusid, status) VALUES(0, '');
INSERT INTO project0.reimbursement (reimbursementid, author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(0, 0, 0, 0, 0, '', 0, 0, 0);

INSERT INTO project0."user" (userid, username, "password", firstname, lastname, email, "role") VALUES(1, 'dfeli014', 'fighter20', 'Dominique', 'Felix', 'dfeli014@fiu.edu', 1);
INSERT INTO project0."role" (roleid, "role") VALUES(1, 'Admin');
INSERT INTO project0.reimbursement_type (typeid, "type") VALUES(1, 'Lodging');
INSERT INTO project0.reimbursement_status (statusid, status) VALUES(1, 'Pending');
INSERT INTO project0.reimbursement (reimbursementid, author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(1, 1, 10, 01212019, 01312019, 'For Testing Period', 1, 1, 1);