import { Facebook, FacebookApiException } from "fb";
const fb = new Facebook(options);

const base64Img = require("base64-img");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./server/api/apiKey.json");
const db = low(adapter);

const access_token = new Promise((err, suc) => {});

const selectPost = id => new Promise((err, suc) => {});

const getPosts = new Promise((err, suc) => {});

const removePost = new Promise((err, suc) => {});

const createPost = data => new Promise((err, suc) => {});

const insertImage = data => new Promise((err, suc) => {});

module.exports = {
  selectPost,
  removePost,
  getPosts,
  createPost,
  insertImage
};
