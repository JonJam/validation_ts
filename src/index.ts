import { validate } from "class-validator";
import Site from "./Site";

const params = {
  // Causing max length error
  name:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam tortor vitae neque iaculis tincidunt.",
  // Causing not valid email address error
  emailAddress: "invalidemail",
  url: "http://test.com",
  // Causing the required error
  password: ""
};

const exampleSite = new Site(params);

validate(exampleSite).then(errors => {
    if (errors.length > 0) {
        console.log("validation failed. errors: ", errors);
    } else {
        console.log("validation succeed");
    }
});
