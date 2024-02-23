CREATE TABLE users(
	serial_no SERIAL PRIMARY KEY,
	name VARCHAR(30),
	password VARCHAR(100) NOT NULL
);

CREATE TABLE groups(
	id SERIAL PRIMARY KEY,
	name VARCHAR(30),
	serial_no INT,
	CONSTRAINT fk_users_serial_no
	FOREIGN KEY (serial_no)
	REFERENCES users(serial_no)
);

CREATE TABLE transactions(
	serial_no INT,
	CONSTRAINT fk_users_serial_no
	FOREIGN KEY (serial_no)
	REFERENCES USERS(serial_no),
	payor VARCHAR(30),
	payee VARCHAR(30),
	amount INT,
	ispaid BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT Now() 
);

INSERT INTO users (name, password)
VALUES ('Abhi', '12ka4');

INSERT INTO groups (name,serial_no)
values ('Abhi', (SELECT serial_no from users WHERE password = '12ka4')), 
	('Bob', (SELECT serial_no from users WHERE password = '12ka4')),
	('Carry', (SELECT serial_no from users WHERE password = '12ka4')),
	('Dobby', (SELECT serial_no from users WHERE password = '12ka4')),
	('Eno', (SELECT serial_no from users WHERE password = '12ka4'));

INSERT INTO transactions(serial_no, payor, payee, amount, ispaid)
VALUES ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Abhi', 'Abhi', 0, true),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Abhi', 'Bob', 30, false),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Abhi', 'Carry', 30, false),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Abhi', 'Dobby', 30, false),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Abhi', 'Eno', 30, false);

INSERT INTO transactions(serial_no, payor, payee, amount, ispaid)
VALUES ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Bob', 'Abhi', 20, false),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Bob', 'Bob', 0, true),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Bob', 'Carry', 20, false),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Bob', 'Dobby', 20, false),
	   ((SELECT serial_no from users WHERE password = '12ka4'), 
	   'Bob', 'Eno', 20, false);
