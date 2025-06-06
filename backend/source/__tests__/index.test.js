const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path: ".env.local"});
const app = require("../index.js");

const path = require("path");
const apiEndpoint = process.env.VITE_API_ENDPOINT

// mock test data
const testCoffee = {
    name: "Test Coffee",
    description: "A coffee created for testing",
    cost: 3.99,
    type: "Ground",
    brand: "Test Brand"
};

const testAccount = {
    name: "Test User",
    displayname: "Test Display",
    email: "test@example.com",
    password: "password123",
};

let createdCoffeeId;
let createdAccountId;
let createdPostId;
let favouriteId;

describe("Express App", () => {
    beforeAll(async () => {
        try {
            // setup account
            try {
                if (mongoose.connection.models.Account) {
                    const Account = mongoose.connection.models.Account;
                    const testAccountDoc = await Account.create(testAccount);
                    createdAccountId = testAccountDoc._id.toString();
                }
            } catch (error) {
                console.error("db error:", error.message);
            }

            // setup coffee
            try {
                if (mongoose.connection.models.Coffee) {
                    const Coffee = mongoose.connection.models.Coffee;
                    const testCoffeeDoc = await Coffee.create(testCoffee);
                    createdCoffeeId = testCoffeeDoc._id.toString();
                }
            } catch (error) {
                console.error("db error:", error.message);
            }

            // setup post
            try {
                if (mongoose.connection.models.Post) {
                    const Post = mongoose.connection.models.Post;
                    const testPost = {
                        title: "Test Post",
                        content: "This is a test post",
                        author: createdAccountId || "placeholder-id",
                        displayname: "Test Display"
                    };
                    const testPostDoc = await Post.create(testPost);
                    createdPostId = testPostDoc._id.toString();
                }
            } catch (error) {
                console.error("db error:", error.message);
            }
        } catch (error) {
            console.error("db error:", error.message);
        }
    }, 15000);

    afterAll(async () => {
        try {
            // cleanup favourite
            if (mongoose.connection.models.Favourite && favouriteId) {
                await mongoose.connection.models.Favourite.findByIdAndDelete(
                    favouriteId
                );
            }

            // cleanup post
            if (mongoose.connection.models.Post && createdPostId) {
                await mongoose.connection.models.Post.findByIdAndDelete(
                    createdPostId
                );
            }

            // cleanup coffee
            if (mongoose.connection.models.Coffee && createdCoffeeId) {
                await mongoose.connection.models.Coffee.findByIdAndDelete(
                    createdCoffeeId
                );
            }

            // cleanup account
            if (mongoose.connection.models.Account && createdAccountId) {
                await mongoose.connection.models.Account.findByIdAndDelete(
                    createdAccountId
                );
            }

            // disconnect db
            if (mongoose.connection.readyState !== 0) {
                await mongoose.disconnect();
            }
        } catch (error) {
            console.error("db error:", error.message);
        }

        app.close()
    }, 15000);

    // test get account
    test("GET /account without admin authorisation should return 401", async () => {
        try {
            const response = await request(app).get(path.join(apiEndpoint, "/account"));
            expect(response.statusCode).toBe(401);
        } catch (error) {
            throw error;
        }
    });

    // test get coffee
    test("GET /coffee should return 200", async () => {
        try {
            const response = await request(app).get(path.join(apiEndpoint, "/coffee"));
            expect(response.statusCode).toBe(200);
        } catch (error) {
            throw error;
        }
    });

    // test create favourite
    test("POST /favourite with no authorisation should return 401", async () => {
        try {
            // setup ids
            const newFavourite = {
                coffee_id: createdCoffeeId || "67c84b7bd3ae8ecfc4ac7424",
                account_id: createdAccountId || "67c84b7bd3ae8ecfc4ac741b",
            };

            const response = await request(app)
                .post(path.join(apiEndpoint, "/favourite"))
                .send(newFavourite);

            expect(response.statusCode).toBe(401);
        } catch (error) {
            throw error;
        }
    }, 10000);

    // test update post
    test("PATCH /post/:postId without authorisation should return 401", async () => {
        try {
            // check post exists
            if (!createdPostId) {
                return;
            }

            const updateData = {
                title: "Updated Test Post Title",
                content: "This post has been updated for testing",
            };

            const response = await request(app)
                .patch(path.join(apiEndpoint, "post", createdPostId))
                .send(updateData);

            expect(response.statusCode).toBe(401);
        } catch (error) {
            throw error;
        }
    }, 10000);

    // test delete coffee
    test("DELETE /coffee/:coffeeId without admin authorisation should return 401", async () => {
        try {
            // check coffee exists
            if (!createdCoffeeId) {
                return;
            }

            const response = await request(app).delete(
                path.join(apiEndpoint, "coffee", createdCoffeeId)
            );

            expect(response.statusCode).toBe(401);
        } catch (error) {
            throw error;
        }
    }, 10000);
});
