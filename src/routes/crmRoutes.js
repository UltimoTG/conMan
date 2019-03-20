import { addNewcontact, 
            getContact, 
            getContactByID, 
            updateContact,
            deleteContact
} from "../controllers/conManController";

const routes = (app) => {
    app.route("/contact")

    // GET request endpoint
    .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
    }, getContact)

    // POST request endpoint
    .post(addNewcontact);

    app.route("/contact/:contactId")

    // get contact by ID
    .get(getContactByID)

    // PUT request endpoint
    .put(updateContact)

    // DELETE request endpoint
    .delete(deleteContact);
}

export default routes;