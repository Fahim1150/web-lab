# BADHON - Lab 03 Setup

This patch modifies the existing `web-lab` development branch for the Lab 03 CRUD requirements.

## Entity
BloodRequest (Donor and Patient are intentionally not used as the CRUD entity.)

## MVC
- Model: `server/models/BloodRequest.js`
- View layer: existing React client; `server/views/` documents the JSON API presentation boundary
- Controllers: `server/controllers/bloodRequestController.js`
- Routes: `server/routes/bloodRequestRoutes.js`

## Run
From the repository root:

```bash
docker compose down --remove-orphans
docker compose up -d --build
```

Check:
```bash
curl http://localhost:3000/api
curl http://localhost:3000/api/health
```

## Postman
Import:
`test/BADHON_Lab03_CRUD.postman_collection.json`

Run the collection in order:
1. Create
2. Get all
3. Get by ID
4. Update
5. Delete

The Create request automatically saves the returned MongoDB `_id` into `requestId`.

## Git
After applying the patch:

```bash
git add .
git commit -m "Implement Lab 03 BloodRequest CRUD with MongoDB"
git push origin development
```
