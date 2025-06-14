const mongoose = require("mongoose");
const Account = require("../models/accountModel");
const { Post } = require("../models/postModel");
const Coffee = require("../models/coffeeModel");
const Forum = require("../models/forumModel");
const Reviews = require("../models/reviewsModel");
const UserLogin = require("../models/userLoginModel");
const Favourites = require("../models/favouritesModel");
const bcrypt = require("bcrypt");
require("dotenv").config({path: ".env.local"});

mongoose
    .connect(
        process.env.DATABASE_URL
    )
    .then(() => {
        console.log("Database connected");
        seedDatabase();
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

async function seedDatabase() {
    await Account.deleteMany({});
    await Post.deleteMany({});
    await Coffee.deleteMany({});
    await Forum.deleteMany({});
    await Reviews.deleteMany({});
    await UserLogin.deleteMany({});
    await Favourites.deleteMany({});

    await Account.syncIndexes();
    await Post.syncIndexes();
    await Coffee.syncIndexes();
    await Forum.syncIndexes();
    await Reviews.syncIndexes();
    await UserLogin.syncIndexes();
    await Favourites.syncIndexes();

    // create hashed password
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    // create a new admin
    const admin = await UserLogin.create({
        email: process.env.ADMIN_EMAIL,
        displayname: "admin",
        password: hashedPassword,
        is_admin: true,
    });
    console.log("Admin seeded");

    const accounts = [
        {
            email: "user1@example.com",
            displayname: "User One",
            photo: "http://example.com/photo1.jpg",
            name: "John Doe",
            description: "This is user one.",
        },
        {
            email: "user2@example.com",
            displayname: "User Two",
            photo: "http://example.com/photo2.jpg",
            name: "Jane Doe",
            description: "This is user two.",
        },
    ];

    const seededAccounts = await Account.insertMany(accounts); // Store the result of the insert
    console.log("Accounts seeded");

    const posts = [
        {
            title: "First Post",
            content: "This is the content of the first post.",
            displayname: "User One",
        },
        {
            title: "Second Post",
            content: "This is the content of the second post.",
            displayname: "User Two",
        },
    ];

    await Post.insertMany(posts);
    console.log("Posts seeded");

    // Seed Forums
    const forums = [
        {
            displayname: "Forum One",
            post_name: "First Forum Post",
            description: "This is the first forum post.",
            account_id: seededAccounts[0]._id, // Use the seeded accounts
        },
        {
            displayname: "Forum Two",
            post_name: "Second Forum Post",
            description: "This is the second forum post.",
            account_id: seededAccounts[1]._id, // Use the seeded accounts
        },
    ];

    await Forum.insertMany(forums);
    console.log("Forums seeded");

    // Continue with seeding other models...

    const coffees = [
        {
            name: "Espresso",
            brand: "Brand A",
            type: "Espresso",
            description: "Strong and bold coffee.",
            cost: 2.5,
            rating: 4.5,
        },
        {
            name: "Latte",
            brand: "Brand B",
            type: "Latte",
            description: "Smooth and creamy coffee.",
            cost: 3.0,
            rating: 4.7,
        },
    ];

    const seededCoffees = await Coffee.insertMany(coffees); // Store the result of the insert
    console.log("Coffees seeded");

    const reviews = [
        {
            displayname: "User One",
            description: "Great coffee!",
            rating: 5,
            coffee_id: seededCoffees[0]._id,
            account_id: seededAccounts[0]._id,
        },
        {
            displayname: "User Two",
            description: "Not bad.",
            rating: 3,
            coffee_id: seededCoffees[1]._id,
            account_id: seededAccounts[1]._id,
        },
    ];

    await Reviews.insertMany(reviews);
    console.log("Reviews seeded");

    const userLogins = [
        {
            displayname: "user1",
            email: "user1@example.com",
            account_id: seededAccounts[0]._id,
            password: "password1",
        },
        {
            displayname: "user2",
            email: "user2@example.com",
            account_id: seededAccounts[1]._id,
            password: "password2",
        },
    ];

    await UserLogin.insertMany(userLogins);
    console.log("User Logins seeded");

    const favourites = [
        {
            coffee_id: seededCoffees[1]._id,
            account_id: seededAccounts[0]._id,
        },
        {
            coffee_id: seededCoffees[1]._id,
            account_id: seededAccounts[1]._id,
        },
    ];

    await Favourites.insertMany(favourites);
    console.log("Favourites seeded");

    mongoose.connection.close();
}
