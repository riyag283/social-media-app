const Post = require("../../models/post");

module.exports = {
  Query: {
    // sayHi: () => "Hello World!",
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
