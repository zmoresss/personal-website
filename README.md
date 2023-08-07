# Zmores (zmores-dev)

### Production Deployment
1. Checkout to `builds` branch
2. Build project: `quasar build`
3. Copy contents from `dist/spa` to `builds/html`
4. Delete `personal-website` zipped files from `builds`
5. Create new zipped folder named `personal-website` with the following contents: `html` folder, `nginx` folder, `Dockerfile`
6. Create new tag semver then push
7. Deployment will run; Wait until finished (Cloud Build GCP)
8. Verify changes to production

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
