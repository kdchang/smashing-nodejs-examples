#NoSQL MongoDB Tutorial
Site:http://try.mongodb.org/

$>mongod
$>mongo

db.help()

db.getCollectionNames()

db.addUser(userDocument)
db.adminCommand(nameOrDocument) - switches to 'admin' db, and runs command [ just calls db.runCommand(...) ]
db.auth(username, password)
db.cloneDatabase(fromhost)
db.commandHelp(name) returns the help for the command
db.copyDatabase(fromdb, todb, fromhost)
db.createCollection(name, { size : ..., capped : ..., max : ... } )
db.currentOp() displays currently executing operations in the db
db.dropDatabase()
db.eval(func, args) run code server-side
db.fsyncLock() flush data to disk and lock server for backups
db.fsyncUnlock() unlocks server following a db.fsyncLock()
db.getCollection(cname) same as db['cname'] or db.cname
db.getCollectionNames()
db.getLastError() - just returns the err msg string
db.getLastErrorObj() - return full status object
db.getMongo() get the server connection object
db.getMongo().setSlaveOk() allow queries on a replication slave server
db.getName()
db.getPrevError()
db.getProfilingLevel() - deprecated
db.getProfilingStatus() - returns if profiling is on and slow threshold
db.getReplicationInfo()
db.getSiblingDB(name) get the db at the same server as this one
db.hostInfo() get details about the server's host
db.isMaster() check replica primary status
db.killOp(opid) kills the current operation in the db
db.listCommands() lists all the db commands
db.loadServerScripts() loads all the scripts in db.system.js
db.logout()
db.printCollectionStats()
db.printReplicationInfo()
db.printShardingStatus()
db.printSlaveReplicationInfo()
db.removeUser(username)
db.repairDatabase()
db.resetError()
db.runCommand(cmdObj) run a database command.  if cmdObj is a string, turns it into { cmdObj : 1 }
db.serverStatus()
db.setProfilingLevel(level,<slowms>) 0=off 1=slow 2=all
db.setVerboseShell(flag) display extra information in shell output
db.shutdownServer()
db.stats()
db.version() current version of the server



1. JavaScript ShellThe first thing to notice is that the MongoDB shell is JavaScript-based.So you can do things like:  a = 5;   a * 10;   for(i=0; i<10; i++) { print('hello'); };  
Try a few JS commands; when you're ready to move on, enter ‘next'

2. DocumentsMongoDB is a document database. This means that we store data as documents,which are similar to JavaScript objects. Here below are a few sample JS objects:  var a = {age: 25};   var n = {name: 'Ed', languages: ['c', 'ruby', 'js']};   var student = {name: 'Jim', scores: [75, 99, 87.2]};  
Create some documents, then enter ‘next'

3. SavingHere's how you save a document to MongoDB:  db.scores.save({a: 99}); 
This says, "save the document '{a: 99}' to the 'scores' collection."Go ahead and try it. Then, to see if the document was saved, try  db.scores.find();  
Once you've tried this, type 'next’.

4. Saving and QueryingTry adding some documents to the scores collection:  for(i=0; i<10; i++) { db.scores.save({a: i, exam: 5}) }; 
Try that, then enter  db.scores.find(); to see if the save succeeded. Since the shell only displays 10 results at time,you'll need to enter the 'it' command to iterate over the rest. 
(enter 'next' when you're ready)

5. Basic QueriesYou've already tried a few queries, but let's make them more specific.How about finding all documents where a == 2:  db.scores.find({a: 2}); 
Or what about documents where a > 15? 
  db.scores.find({a: {'$gt': 15}}); 

6. Query OperatorsQuery Operators:$gt is one of many special query operators. Here are few others:  $lt  - '<',   $lte - '<=',   $gte - '>=',  $ne  - '!=' 
  $in - 'is in array',  $nin - '! in array’

7. UpdatesNow create a couple documents like these for updating:  db.users.save({name: 'Johnny', languages: ['ruby', 'c']});   db.users.save({name: 'Sue', languages: ['scala', 'lisp']}); Make sure they were saved by called db.users.find()Update the first document like so: 
  db.users.update({name: 'Johnny'}, {name: 'Cash', languages: ['english']}); 

8. Update OperatorsThe previous update replaced the entire document, but MongoDB alsosupports partial updates to documents. For example, you can set a value:  db.users.update({name: 'Cash'}, {'$set': {'age': 50} }); You can also push and pull items from arrays:  db.users.update({name: 'Sue'}, {'$pull': {'languages': 'scala'} });   db.users.update({name: 'Sue'}, {'$push': {'languages': 'ruby'} });  
Give these a try, check the results, and then enter 'next’.

9. Deleting dataTo delete matching documents only, add a query selector to the remove method:  db.users.remove({name: 'Sue'});To delete everything from a collection: 
  db.scores.remove();

10. Now go download it!There's a lot more to MongoDB than what's presented in this tutorial.Best thing is to go to the downloads page or to mongodb.org to check out the docs.(You can also keep fiddling around here, but you'll be a bit limited.)
You can also sign up for a chance to win a MongoDB t-shirt or mug. But firsta little challenge: enter your e-mail address, first, and last name into the 
'email' collection, using fields 'email', 'first_name', and 'last_name'.