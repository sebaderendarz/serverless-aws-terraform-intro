const AWS = require("aws-sdk");

const fetchChatMessage = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  let chatMessage;

  try {
    const result = await dynamodb
      .get({
        TableName: "ChatMessages",
        Key: { Id: id },
      })
      .promise();
    chatMessage = result.Item;
  } catch (error) {
    console.log(error);
    return {
      statusCode: 503,
      body: "Temporary issue. Please try again",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(chatMessage),
  };
};

module.exports = {
  handler: fetchChatMessage,
};
