import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

const { cfnUserPool } = backend.auth.resources.cfnResources;

cfnUserPool.addPropertyOverride('DeviceConfiguration', {
  ChallengeRequiredOnNewDevice: true,
  DeviceOnlyRememberedOnUserPrompt: false
});

const { cfnIdentityPool } = backend.auth.resources.cfnResources;
cfnIdentityPool.allowUnauthenticatedIdentities = false;
