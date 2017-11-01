import { IsEmail, IsNotEmpty, IsUrl, MaxLength } from "class-validator";

interface ISite {
    readonly name: string;
    readonly url: string;
    readonly emailAddress: string;
    readonly password: string;
}

export default class Site implements ISite {
  @IsNotEmpty({
    message: "Name is required."
  })
  @MaxLength(100, {
    message: "Name must be shorter than or equal to $constraint1 characters."
  })
  public readonly name: string;

  @IsNotEmpty({
    message: "Url is required."
  })
  @IsUrl(undefined, {
    message: "Url must be a URL."
  })
  @MaxLength(1000, {
    message: "Url must be shorter than or equal to $constraint1 characters."
  })
  public readonly url: string;

  @IsNotEmpty({
    message: "Email address is required."
  })
  @IsEmail(undefined, {
    message: "Email address must be an email address."
  })
  @MaxLength(100, {
    message: "Email address must be shorter than or equal to $constraint1 characters."
  })
  public readonly emailAddress: string;

  @IsNotEmpty({
    message: "Password is required."
  })
  @MaxLength(100, {
    message: "Password must be shorter than or equal to $constraint1 characters."
  })
  public readonly password: string;

  constructor(
    site: ISite = {
      name: "",
      password: "",
      url: "",
      emailAddress: ""
    }
  ) {
    this.name = site.name;
    this.url = site.url;
    this.emailAddress = site.emailAddress;
    this.password = site.password;
  }
}