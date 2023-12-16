const {Client} = require("pg")
const client = new Client({
    user: "postgres",
    password: "admin",
    host: "fedora",
    port: 5432,
    database:"ayushDemo"

})
execute()
async function execute(){
    try{
        await client.connect()
    await client.query("BEGIN")

    await client.query("insert into student(name,phone) values($1,$2)",["pulkit",973892])
    console.log("inserted new row");
    await client.query("COMMIT")
    }catch(e){
        console.log(e);
        await client.query("ROLLBACK")
    }finally{
        await client.end()
        console.log("closed");
    }
}