# A2Z Resource for Students ( Backend )

## Tech Stack 
- Node.Js
- MongoDB

## Features

 User Should be able to access following resource : 

## 1. Coding Resource  [DONE]
   
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

   [Make one collection and filter by tags]

   Model Name : coding-resource

   title : 'String' 
   url : 'String'
   dlevel : 'Begineers', 'Moderate', 'Experts'
   tags : [enums]
   bookmark  : boolean [DEFAULT - false]
   active : boolean [DEFAULT - true]


   ```
    
## 2.  Events for Students [TBD]

#### 1. Developer Clubs and Meetups

#### 2. Conferences

    ```
    SCHEMA 
    =======

    Model Name : events
    
    title : String
    url : String
    place : String
    country : String
    event date : 'DATE' [String]
    subscription : boolean [DEFAULT - false]
    active : [DEFAULT - true]

    ```

## 3. Student Programs 
    
#### 1. Fellowship Programs [DONE]

    ```
    SCHEMA
    =======

    Model Name - fellowship 

    text : String
    link : String
    place : String
    country : String
    field : String
    eligiblity : enum [Bachelors, Masters, PHD]
    application deadline : DATE 
    active : boolean  [DEFAULT - true]
    subscribe : boolean [DEFAULT - false]
    bookmark : boolean [DEFAULT - false]
    online : boolean [Online or InPerson]

    ```

#### 2. Scholarship [DONE]

```
SCHEMA
=======

Model Name - Scholarship

text : String
url : String
field : String
bookmark : boolean
active : boolean
subscribe : boolean

```

## 4. Hackathons [DONE]

```
SCHEMA 
=======

Model Name - Hackathon

Name : String
Domain : String
url : String
Type : Enum[Online or InPerson]
Application Start Date : Date
Application End Date : Date
place : String
Country : String
TR : Enum[Yes, No, Partial]
subscribe : boolean
active : boolean
bookmark : boolean

```


## 5. Competiton

```
SCHEMA
=======

Model Name - Competition
 
title : String
Domain : String
url : String
Type : Enum[Online or InPerson]
Application Start Date : Date
Application End Date : Date
place : String
Country : String
subscribe : boolean
active : boolean
bookmark : boolean

```

### Note - The Schema and Section Descibed Above are tentative. Suggestions are Welcome.


## TODO 

|S.No | Issue | Status | 
|--   |-------|--------|
|1    |Structuring Database and Specifing the Section for Resources | In  Progress |
|2    | Define Routes | InComplete | 
|3 | Update User Authentication | InComplete |


