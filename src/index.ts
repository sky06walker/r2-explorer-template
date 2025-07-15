import { R2Explorer } from "r2-explorer";

export default R2Explorer({
  // Set to false to allow users to upload files
  readonly: false,
  asicAuth: [
    {
      username: 'cloud',
      password: 'cloudamind123'
    }]
  // Learn more how to secure your R2 Explorer instance:
  // https://r2explorer.com/getting-started/security/
  // cfAccessTeamName: "my-team-name",
});
