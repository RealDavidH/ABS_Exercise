const ActCon = require("../controllers/account.controller");

module.exports = (app) => {
    app.get("/api/accounts", ActCon.findAll);
    app.get("/api/accounts/:id", ActCon.getOne);
    app.post("/api/accounts/new", ActCon.createAccount);
    app.put("/api/accounts/update/:id", ActCon.updateOne);
    app.delete("/api/accounts/delete/:id", ActCon.deleteOne);
};
