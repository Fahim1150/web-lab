# BADHON - Lab 03 Setup

This patch modifies the existing `web-lab` development branch for the Lab 03 CRUD requirements.

## Entity
BloodRequest

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




## Entity
Donor

## MVC

- Model: `server/models/Donor.js`
- View layer: existing React client; `server/views/` documents the JSON API presentation boundary
- Controllers: `server/controllers/donorController.js`
- Routes: `server/routes/donorRoutes.js`

## API Endpoints

- Create Donor: `POST /api/donors`
- Get all Donors: `GET /api/donors`
- Get Donor by ID: `GET /api/donors/:id`
- Update Donor: `PUT /api/donors/:id`
- Delete Donor: `DELETE /api/donors/:id`

## Run

From the repository root:

```bash
docker compose down --remove-orphans
docker compose up -d --build

Check:

curl http://localhost:3000/api
curl http://localhost:3000/api/donors

## Postman

Import:

test/LAB-03-Alisha-Donor CRUD.postman_collection.json

Run the collection in order:

Create Donor
Get all Donors
Get Donor by ID
Update Donor
Delete Donor

The Create request automatically saves the returned MongoDB _id into requestId.

## Git
After applying the patch:

git add .
git commit -m "Implement Donor CRUD for Lab 03"
git push origin development
