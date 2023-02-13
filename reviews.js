import fs from "fs";

const createReview = (star) => ({
  id: crypto.randomUUID(),
  rating: star,
  createdAt: new Date(),
  body: "This was great!",
});

const reviews = [];

for (let i = 0; i < 106; i++) {
  reviews.push(createReview(5));
}

for (let i = 0; i < 22; i++) {
  reviews.push(createReview(4));
}
for (let i = 0; i < 2; i++) {
  reviews.push(createReview(3));
}
for (let i = 0; i < 52; i++) {
  reviews.push(createReview(2));
}
for (let i = 0; i < 12; i++) {
  reviews.push(createReview(1));
}

fs.writeFileSync("src/data/reviews.json", JSON.stringify(reviews));
