const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addChatMessage = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { authorId, chatId, message } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const Id = v4();

  const newChatMessage = {
    Id,
    authorId,
    chatId,
    message,
    createdAt,
    viewed: false,
  };

  await dynamodb
    .put({
      TableName: "ChatMessages",
      Item: newChatMessage,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newChatMessage),
  };
};

module.exports = {
  handler: addChatMessage,
};
