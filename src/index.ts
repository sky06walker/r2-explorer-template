import { R2Explorer } from 'r2-explorer';

export default R2Explorer({
  readonly: false,
  basicAuth: [
    {
      username: 'user1',
      password: 'password1'
    },
    {
      username: 'user2',
      password: 'password2'
    }
  ]
});
