import { Injectable } from '@nestjs/common';

const users = [{
  "id": "24387593",
  "nodeId": "MDQ6VXNlcjI0Mzg3NTkz",
  "displayName": "willian.chan",
  "username": "cwy007",
  "profileUrl": "https://github.com/cwy007",
}]

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  findUserByGithubId(githubId: string) {
    return users.find(user => user.id === githubId);
  }
}
