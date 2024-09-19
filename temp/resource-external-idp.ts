import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
    loginWith: {
        externalProviders: {
            oidc: [
                {
                    name: 'MicrosoftEntraId',
                    clientId: secret("MICROSOFT_ENTRA_ID_CLIENT_ID"),
                    clientSecret: secret("MICROSOFT_ENTRA_ID_CLIENT_SECRET"),
                    issuerUrl: '<your-issuer-url>',
                }
            ],
            saml: {
                name: 'MicrosoftEntraIDSAML',
                metadata: {
                    metadataContent: 'your-url-hosting-saml-metadata',  // or content of the metadata file
                    metadataType: 'URL', // or 'File'
                },
            },
            google: {
                clientId: secret("GOOGLE_CLIENT_ID"),
                clientSecret: secret("GOOGLE_CLIENT_SECRET"),
                scopes: ['email'],
                attributeMapping: {
                    email: 'email'
                }
            },
            signInWithApple: {
                clientId: secret("SIWA_CLIENT_ID"),
                keyId: secret("SIWA_KEY_ID"),
                privateKey: secret("SIWA_PRIVATE_KEY"),
                teamId: secret("SIWA_TEAM_ID")
            },
            loginWithAmazon: {
                clientId: secret("LOGINWITHAMAZON_CLIENT_ID"),
                clientSecret: secret("LOGINWITHAMAZON_CLIENT_SECRET")
            },
            facebook: {
                clientId: secret("FACEBOOK_CLIENT_ID"),
                clientSecret: secret("FACEBOOK_CLIENT_SECRET")
            },
            callbackUrls: [
                "http://localhost:3000/profile",
                "https://mywebsite.com/profile"
            ],
            logoutUrls: [
                "http://localhost:3000/",
                "https://mywebsite.com"
            ]
        }
    }
});