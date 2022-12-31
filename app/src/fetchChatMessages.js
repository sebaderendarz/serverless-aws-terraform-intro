const AWS = require("aws-sdk");

const fetchChatMessages = async () => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let chatMessages;

  try {
    const result = await dynamodb
      .scan({
        TableName: "ChatMessages",
      })
      .promise();
    chatMessages = result.Items;
  } catch (error) {
    console.log(error);
    return {
      statusCode: 503,
      body: "Temporary issue. Please try again",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(chatMessages),
  };
};

module.exports = {
  handler: fetchChatMessages,
};
