INSERT INTO project0."role" ("role") VALUES('Admin');
INSERT INTO project0.reimbursement_type ("type") VALUES('Food');
INSERT INTO project0.reimbursement_status (status) VALUES('Approved');
INSERT INTO project0."role" ("role") VALUES('Finance Manager');
INSERT INTO project0.reimbursement_type ("type") VALUES('Travel');
INSERT INTO project0.reimbursement_status (status) VALUES('Pending');
INSERT INTO project0."role" ("role") VALUES('User');
INSERT INTO project0.reimbursement_type ("type") VALUES('Lodging');
INSERT INTO project0.reimbursement_status (status) VALUES('Denied');
INSERT INTO project0.reimbursement_type ("type") VALUES('Other');


INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('ptesm21', 'noneyabusiness', 'Pete', 'Smalls', 'petesmall@yahoo.com', 2);
INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('ghoiureg4', 'whatever322', 'Greg', 'Hull', 'jfiorj32@yahoo.com', 3);
INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('dfkie92', 'hahaha21', 'Dom', 'Felix', 'dfe2344@yahoo.com', 1);


INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(1, 200.00, '01/29/2019 00:00:00', '02/03/2019 00:00:00', 'Tampa Trip', 2, 1, 1);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(2, 100.00, '08/23/2018 00:00:00', '01/03/2019 00:00:00', 'Business Meeting', 2, 2, 1);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(1, 40.00, '07/03/2018 00:00:00', '09/14/2018 00:00:00', 'Car Rental', 1, 2, 2);









