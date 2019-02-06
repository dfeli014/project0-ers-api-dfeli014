INSERT INTO project0."role" ("role") VALUES('Admin');
INSERT INTO project0."role" ("role") VALUES('Finance Manager');
INSERT INTO project0."role" ("role") VALUES('Sales');

INSERT INTO project0.reimbursement_type ("type") VALUES('Food');
INSERT INTO project0.reimbursement_type ("type") VALUES('Travel');
INSERT INTO project0.reimbursement_type ("type") VALUES('Other');
INSERT INTO project0.reimbursement_type ("type") VALUES('Lodging');

INSERT INTO project0.reimbursement_status (status) VALUES('Pending');
INSERT INTO project0.reimbursement_status (status) VALUES('Approved');
INSERT INTO project0.reimbursement_status (status) VALUES('Denied');


INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('philsteve4', 'hahaha21', 'Steve', 'Phil', 'stevephil@yahoo.com', 1);
INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('ferrfx21', 'mycaris2fast4u', 'Pete', 'Ferrari', 'petesmall@bellsouth.com', 2);
INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('merzbenz9', 'noneyabusiness21', 'Mary', 'Benz', 'benzzzz21@aol.com', 2);
INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('hullgreg32', 'whatever322', 'Greg', 'Hull', 'ghull9090@ymail.com', 3);
INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('driftking22', 'kiddrift4life', 'Darron', 'Honda', 'hondaarr@outlook.com', 3);
INSERT INTO project0."user" (username, "password", firstname, lastname, email, "role") VALUES('vickysped', 'imhungryy2', 'Victoria', 'Crown', 'coolio333@gmail.com', 3);


INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(1, 250.00, '01/29/2019 01:00:45', '02/03/2019 12:30:12', 'New Hardware', 3, 2, 1);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(2, 100.00, '12/25/2018 10:00:03', '01/03/2019 06:00:33', 'Miami Beach Festivities', 3, 1, 2);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(3, 490.00, '08/03/2018 12:15:18', '09/14/2018 09:30:07', 'Licensing for Mercedes', 2, 3, 3);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(6, 89.00, '11/03/2018 07:00:39', '09/14/2018 04:00:54', 'Office Supplies', 2, 1, 3);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(5, 135.00, '02/03/2019 04:00:16', '09/14/2018 11:15:24', 'Parking at fancy hotel', 2, 1, 4);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(2, 3200.00, '01/05/2019 08:00:23', '02/01/2019 06:23:18', 'Missed Pay', 3, 1, 3);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(4, 50.00, '12/12/2018 06:00:40', '09/14/2018 02:45:11', 'Party things', 3, 2, 3);
INSERT INTO project0.reimbursement (author, amount, datesubmitted, dateresolved, description, resolver, status, "type") VALUES(6, 25.00, '10/07/2018 12:00:08', '09/14/2018 07:05:37', 'LUNCH', 2, 2, 1);

SELECT * FROM project0.user left join project0.role on project0.user."role" = project0.role.roleid;








select * from project0.reimbursement r left join project0."user" u on r.author = u.userid 
left join project0.role rl on u."role" = rl.roleid 
left join project0.reimbursement_status rs on rs.statusid = r.status 
left join project0.reimbursement_type rt on rt.typeid = r."type" order by r.reimbursementid desc;








