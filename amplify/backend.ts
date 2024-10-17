import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage, firstBucket, secondBucket } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  storage,
});

const { cfnUserPool } = backend.auth.resources.cfnResources;

cfnUserPool.addPropertyOverride('DeviceConfiguration', {
  ChallengeRequiredOnNewDevice: true,
  DeviceOnlyRememberedOnUserPrompt: false
});

const { cfnIdentityPool } = backend.auth.resources.cfnResources;
cfnIdentityPool.allowUnauthenticatedIdentities = false;
