// 定义请求主体的结构
interface RequestBody {
  data: {
    prompt: string;
    targetModel: string;
  };
}

async function promptperfect(
  prompt: string,
  targetModel: string,
  apiKey: string
): Promise<Response> {
  const requestBody: RequestBody = {
    data: {
      prompt,
      targetModel,
    },
  };

  const response = await fetch(
    "https://promptperfect.aigc.jinaai.cn/optimize",
    {
      headers: {
        "x-api-key": `token ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
      method: "POST",
    }
  );

  return response;
}
export default promptperfect;
