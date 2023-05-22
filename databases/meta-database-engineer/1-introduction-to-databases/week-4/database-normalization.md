# database normalization

process for structuring tables that minimizes challenges facing database systems

reduces data duplication, avoid data modification and simplifies queries

normalization challenges

## insert anomaly

insertion of one record leads to the insertion of several more required data sets

enter a new course name is possible, but new records can't be added until enrolling a student, can't enroll new students without assigning an ID, the ID can't be empty, so a course can't be added without inserting a new student.

## update anomaly

updating a record in a table column requires in further updates across the table.

the course and department information is repeated for each student. Duplication increases storage requirements and makes it difficult to maintain data changes.


## deletion anomaly

deletion of a record of data causes deletion of more than one set of data required in the database.

rose decides to unenroll a course, but deleting rose data results in deleting records for the department.

data normalization optimizes database design to create a single purpose for each table.

create a table for a single purpose.

solution is to create a student table, course table and department table instead of having them all in the same

separation of information helps anomaly challenges.

writing sql queries to search, sort and analyze data is easier.

creating an unnormalized form

```sql
CREATE TABLE Surgery(
  DoctorID VARCHAR(10),
  DoctorName VARCHAR(50),
  Region VARCHAR(20),
  PatientID VARCHAR(10),
  PatientName VARCHAR(50),
  SurgeryNumber INT,
  Council  VARCHAR(20),
  Postcode VARCHAR(10),
  SlotID VARCHAR(5),
  TotalCost Decimal
);
```

## first normal form

eliminates unnecessary repeating groups of data

data atomicity rule means only one single instance value of the column attribute in any cell of table

```sql
CREATE TABLE Patient(
PatientID VARCHAR(10) NOT NULL,
PatientName VARCHAR(50),
SlotID VARCHAR(10) NOT NULL,
TotalCost Decimal,
CONSTRAINT PK_Patient PRIMARY KEY (PatientID, SlotID)
);

CREATE TABLE Doctor(
DoctorID VARCHAR(10),
DoctorName VARCHAR(50),
PRIMARY KEY (DoctorID)
);

CREATE TABLE Surgery(
  SurgeryNumber INT NOT NULL,
  Region VARCHAR(20),
  Council  VARCHAR(20),
  Postcode VARCHAR(10),
  PRIMARY KEY (SurgeryNumber)
);
```

## second normal form

avoid partial dependency relationships between data

partial dependency refers to tables with a composite primary key

a non-key attribute value depends only on one part of the composite key

all non-keys should be determine by both parts of the composite keys

```sql
CREATE TABLE Patient(
  PatientID VARCHAR(10) NOT NULL,
  PatientName, VARCHAR(50),
  PRIMARY KEY (PatientID)
);

CREATE TABLE Appointments(
  AppointmentID INT NOT NULL,
  SlotID, VARCHAR(10),
  TotalCost Decimal,
  PRIMARY KEY (AppointmentID)
);
```

## third normal form

must have no transitive dependency

any non-key attribute in the table may not be functionally dependent on another non-key attribute in the same table.

the postal code depends on the surgery surgery council, therefore those two must be separated

```sql
CREATE TABLE Location(SurgeryNumber INT NOT NULL, Postcode VARCHAR(10), PRIMARY KEY (SurgeryNumber));

CREATE TABLE Council  (Council VARCHAR(20) NOT NULL, Region VARCHAR(20), PRIMARY KEY (Council));
```

# first normal form 1NF

data duplications can make viewing, searching and sorting data challenging

atomicity rule

eliminate unnecessary repeating groups of data

there must be only one single instance value of the column attribute in any field of the table

tables should only have one value per field

repeated data can cause data redundancy and inconsistency

split course table and tutor table instead of having them together

# second normal form 2NF

functional dependency

partial dependency

best structure means it reduces duplication and allows accurate data analysis and retrieval

functional dependency refers to the relationship between two attributes in a table.

the unique value of a column determines the value of another column.

partial dependency refers to a table with a composite primary key

# third normal form 3NF

transitive dependency is when a non-key attribute can't functionally depend on another non-key value

all non-key attributes are only determined by a unique key

# database schema lab

define database purpose

identify database tables
- table attributes
- attribute data types
- primary key for each table


