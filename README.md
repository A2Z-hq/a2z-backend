# A2Z Resource for Students ( Backend )

## Tech Stack 
- Node.Js
- MongoDB

## Features

 User Should be able to access following resource : 

## 1. Coding Resource  
   
   1. Python
   2. HTML & CSS
   3. JavaScript
   4. Data Structure
   5. Machine Learning & Deep Learning
   6. Android Development
   7. Backend Development
   8. Frontend Development

   ```
   SCHEMA 
   =======

   Model Name : coding-resource

   text : 'String' 
   link : 'String'
   dlevel : 'Begineers', 'Moderate', 'Experts'
   
   ```
    
## 2.  Events for Students

#### 1. Developer Clubs and Meetups

#### 2. Conferences

    ```
    SCHEMA 
    =======

    Model Name : events
    
    text : String
    link : String
    place : String
    country : String
    event date : 'DATE' [String]
    subscription : boolena 

    ```

## 3. Student Programs 
    
#### 1. Fellowship Programs

    ```
    SCHEMA
    =======

    Model Name - fellowship 

    text : 
    link : 
    place :
    country :
    TR(travel reimbursment) : 

    ```

#### 2. Scholarship

  ```
    SCHEMA
    =======

    Model Name - Scholarship

    text : 
    link : 
    place :
    country :
    TR(travel reimbursment) : 

    ```



## 4. Hackathons

```
SCHEMA 
=======

Model Name - Hackathon

Id : 
Name : 
Domain : 
Type : Online or In-Person
Application Start Date : 
Application End Date : 
Country : 

```


## 5. Competiton

```
SCHEMA
=======

Model Name - Competition

Id : 
Name : 
Domain : 
Type : Online or In-Person
Application Start Date : 
Application End Date : 
Country : 

```

### Note - The Schema and Section Descibed Above are tentative. Suggestions are Welcome.


## TODO 

|S.No | Issue | Status | 
|--   |-------|--------|
|1    |Structuring Database and Specifing the Section for Resources | In  Progress |
|2    | Define Routes | InComplete | 

