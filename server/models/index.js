const User = require("./user");
const Post = require("./post");

// table relationships
User.hasMany(Post);
Post.belongsTo(User);

module.exports = { User, Post };
