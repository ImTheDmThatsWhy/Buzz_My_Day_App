const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const app = require('../index'); 

// mock test data
const testCoffee = {
  name: 'Test Coffee',
  description: 'A coffee created for testing',
  price: 3.99
};

const testAccount = {
  name: 'Test User',
  displayname: 'Test Display Name',
  username: 'testuser',
  email: 'test@example.com',
  password: 'password123'
};

let createdCoffeeId;
let createdAccountId;
let createdPostId;
let favouriteId;

describe('Express App', () => {
  beforeAll(async () => {
    try {
      // connect to db
      await mongoose.connect('mongodb://localhost:27017/testdb');
      
      // setup account
      try {
        if (mongoose.connection.models.Account) {
          const Account = mongoose.connection.models.Account;
          const testAccountDoc = await Account.create(testAccount);
          createdAccountId = testAccountDoc._id.toString();
        }
      } catch (error) {
        console.error('db error:', error.message);
      }
      
      // setup coffee
      try {
        if (mongoose.connection.models.Coffee) {
          const Coffee = mongoose.connection.models.Coffee;
          const testCoffeeDoc = await Coffee.create(testCoffee);
          createdCoffeeId = testCoffeeDoc._id.toString();
        }
      } catch (error) {
        console.error('db error:', error.message);
      }
      
      // setup post
      try {
        if (mongoose.connection.models.Post) {
          const Post = mongoose.connection.models.Post;
          const testPost = {
            title: 'Test Post',
            content: 'This is a test post',
            author: createdAccountId || 'placeholder-id'
          };
          const testPostDoc = await Post.create(testPost);
          createdPostId = testPostDoc._id.toString();
        }
      } catch (error) {
        console.error('db error:', error.message);
      }
    } catch (error) {
      console.error('db error:', error.message);
    }
  }, 15000);

  afterAll(async () => {
    try {
      // cleanup favourite
      if (mongoose.connection.models.Favourite && favouriteId) {
        await mongoose.connection.models.Favourite.findByIdAndDelete(favouriteId);
      }
      
      // cleanup post
      if (mongoose.connection.models.Post && createdPostId) {
        await mongoose.connection.models.Post.findByIdAndDelete(createdPostId);
      }
      
      // cleanup coffee
      if (mongoose.connection.models.Coffee && createdCoffeeId) {
        await mongoose.connection.models.Coffee.findByIdAndDelete(createdCoffeeId);
      }
      
      // cleanup account
      if (mongoose.connection.models.Account && createdAccountId) {
        await mongoose.connection.models.Account.findByIdAndDelete(createdAccountId);
      }
      
      // disconnect db
      if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
      }
    } catch (error) {
      console.error('db error:', error.message);
    }
  }, 15000);

  // test get account
  test('GET /account should return 200', async () => {
    try {
      const response = await request(app).get('/account');
      expect(response.statusCode).toBe(200);
    } catch (error) {
      throw error;
    }
  });

  // test get coffee
  test('GET /coffee should return 200', async () => {
    try {
      const response = await request(app).get('/coffee');
      expect(response.statusCode).toBe(200);
    } catch (error) {
      throw error;
    }
  });

  // test create favourite
  test('POST /favourite should create a new favourite and return 201', async () => {
    try {
      // setup ids
      const newFavourite = {
        coffee_id: createdCoffeeId || '67c84b7bd3ae8ecfc4ac7424',
        account_id: createdAccountId || '67c84b7bd3ae8ecfc4ac741b',
      };
      
      const response = await request(app)
        .post('/favourite')
        .send(newFavourite);
        
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('coffee_id', newFavourite.coffee_id);
      expect(response.body).toHaveProperty('account_id', newFavourite.account_id);
      
      // save id for cleanup
      if (response.body._id) {
        favouriteId = response.body._id;
      }
    } catch (error) {
      throw error;
    }
  }, 10000);

  // test update post
  test('PATCH /post/:postId should update a post and return 200', async () => {
    try {
      // check post exists
      if (!createdPostId) {
        return;
      }
      
      const updateData = {
        title: 'Updated Test Post Title',
        content: 'This post has been updated for testing'
      };
      
      const response = await request(app)
        .patch(`/post/${createdPostId}`)
        .send(updateData);
        
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('title', updateData.title);
      expect(response.body).toHaveProperty('content', updateData.content);
    } catch (error) {
      throw error;
    }
  }, 10000);

  // test delete coffee
  test('DELETE /coffee/:coffeeId should delete a coffee and return 200', async () => {
    try {
      // check coffee exists
      if (!createdCoffeeId) {
        return;
      }
      
      const response = await request(app)
        .delete(`/coffee/${createdCoffeeId}`);
        
      expect(response.statusCode).toBe(200);
      
      // check deletion
      const getResponse = await request(app)
        .get(`/coffee/${createdCoffeeId}`);
        
      expect([404, 200]).toContain(getResponse.statusCode);
      
      if (getResponse.statusCode === 200) {
        expect(getResponse.body).toEqual(expect.objectContaining({ 
          deleted: true 
        }));
      }
      
      // clear id
      createdCoffeeId = null;
    } catch (error) {
      throw error;
    }
  }, 10000);
});
