const client = require('../config/connection')


//Get
module.exports.findAll = (req, res) =>{
    client
        .query(`Select * from accounts`)
        .then(allAccounts => res.json({ accounts: allAccounts.rows }))
        .catch(err =>  res.json({ message: "Something went wrong", error: err}))
}

module.exports.getOne = (req, res) =>{
    client
        .query(`Select * from accounts where id=${req.params.id}`)
        .then(oneAccount => res.json({ account : oneAccount.rows }))
        .catch(err => res.json({ message: "Something went wrong", error: err}) )
}


//Create
//Does not work? Getting error "Column does not exist"
module.exports.createAccount = (req, res) =>{
    console.log(req.body)
    client
        .query(`Insert into accounts( id, account_id, first_name, last_name, age, race, gender, phone, zip) values (${req.body.id, req.body.account_id, req.body.first_name, req.body.last_name, req.body.age, req.body.race, req.body.gender, req.body.phone, req.body.zip}) `)
        .then(createdAccount => res.json({account : createdAccount.rows }))
        .catch(err => console.log(res.json({ message: "Something went wrong", error: err}))  ) 
}


//Update
module.exports.updateOne = (req, res) =>{
    console.log(req.body)
    console.log(req.params.id)
    client
        .query(`Update accounts set id=${req.params.id} account_id = ${ req.body.account_id}, first_name = ${ req.body.first_name}, last_name = ${req.body.last_name}, age = ${req.body.age}, race = ${req.body.gender}, gender = ${ req.body.gender }, phone = ${req.body.phone}, zip = ${req.body.zip} where id = ${req.params.id}`)
        .then(updatedAccount => console.log(res.json({account : updatedAccount.rows})))
        .catch(err => res.json({ message: "Something went wrong", error: err}) )
}


//Delete 
module.exports.deleteOne = (req, res) =>{
    client
        .query(`Delete from accounts where id = ${req.params.id}`)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}