//const Client = require("pg").Client ==
const {Client} = require("pg")
const client = new Client({
    user: "postgres",
    password:"admin",
    host:"fedora",
    port:5432,
    database:'ayushDemo'

});

//method1

// client.connect()
// .then(()=>console.log('cnncted succ'))
// .then(()=>client.query("insert into student(name,phone) values ($1,$2)",["SD",75948]))
// .then(()=>client.query("select * from student"))
// .then(results=>console.table(results.rows))
// .catch(e=>console.log("error"+ e))
// .finally(()=>client.end())

//method2 async await if it fails u need to wrap inside try catch finally

(async function(){
    try{
    await client.connect()
    console.log("connc succ async")
    const results = await client.query("select * from student")
    console.table(results.rows)
    console.log("client disconn succ");
    }
    catch(e){
        console.log(e);
    }
    finally{
        await client.end()
        console.log("cnnc ended");
    }
    
})();