import React, { Component } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { localDB } from '../Constants/constants'

export default class CreateTables extends Component {  

    constructor(props) {
        super(props)
    }  
        
    
    componentDidMount() { 
       var db = SQLite.openDatabase(localDB.dbName, "1.0", "IBD Database", 200000, this.openCB, this.errorCB);
        db.transaction(function (fn) {
            fn.executeSql('CREATE TABLE IF NOT EXISTS ' + 
            localDB.tableName.tblIBD +
            ' (id  INTEGER PRIMARY KEY AUTOINCREMENT, heading_one TEXT, heading_two TEXT, subheading TEXT, practicestatement TEXT, supporting_text TEXT, population TEXT, intervention TEXT, comparator TEXT, outcome TEXT)', []);
            console.log('Database Created Sucessfully.')
        });      
    }

    // (id  INTEGER PRIMARY KEY AUTOINCREMENT,date TEXT,user_id INTEGER,code TEXT,session_token TEXT)

    errorCB(err) {
        console.log("SQL Error: " + err);
      }
      
      successCB() {
        console.log("SQL Query Sucessfully Executed");
      }
      
      openCB() {
        console.log("Database OPENED");
      }   

    render() {
        return null
      }  

}