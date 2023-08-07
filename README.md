# Zmores (zmores-dev)

### Production Deployment
1. Checkout to `builds` branch
2. Rebase branch from `master`
3. Build project: `quasar build`
4. Copy contents from `dist/spa` to `builds/html`
5. Delete `personal-website` zipped files from `builds`
6. Create new zipped folder named `personal-website` with the following contents: `html` folder, `nginx` folder, `Dockerfile`
7. Create new tag semver then push
8. Deployment will run; Wait until finished (Cloud Build GCP)
9. To make sure all changes are fresh, purge your cache from cloudflare
10. Verify changes to production
