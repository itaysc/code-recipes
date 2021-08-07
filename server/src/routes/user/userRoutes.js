import * as validations from "./validations";

export default (
    app,
    service,
    {validateRequest}
) => {
    app.get("/users/:userName", async (req, res) => {
        try {
            const _response = await service.getUserByUserName(req.params.userName);
            return res.status(_response.status).send(_response.payload);
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    });
    app.post("/users", validateRequest(validations.user), async (req, res) => {
        try {
            const _response = await service.createUser(req.body);
            return res.status(_response.status).send(_response.payload);
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    });
};
