const axios = require('axios');
const crypto = require('crypto');

const API_URI =
  'https://jsonplaceholder.typicode.com/todos/';

exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;
  const result = await axios.get(API_URI);
  for (const stuff of result.data) {
    await createNode({
      id: stuff.id.toString(),
      userId: stuff.userId,
      title: stuff.title,
      completed: stuff.completed,
      internal: {
        type: 'Stuff',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(stuff))
          .digest(`hex`),
      },
    });
  }
};
