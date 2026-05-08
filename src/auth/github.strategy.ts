import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-github2";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, "github") {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      callbackURL: process.env.GITHUB_CALLBACK_URL || "",
      scope: ["public_profile"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile, done: Function) {
    const { id, username, emails } = profile;
    const email = emails?.[0]?.value;
    const user = { id, username, email };
    done(null, user);
    // return profile;
  }
}
