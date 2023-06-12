import { DataType } from "./DataType";

export const data: DataType = {
  categories: [
    { name: "收藏", color: "pink" },
    { name: "背景", color: "yellow" },
    { name: "角色设定", color: "green" },
    { name: "行动任务", color: "cyan" },
    { name: "输出要求", color: "blue" },
    { name: "其他要求", color: "purple" },
  ],
  tables: [
    {
      category: "收藏",
      minorCategories: [],
    },
    {
      category: "背景",
      minorCategories: [
        {
          name: "关于我",
          number: 3,
          legos: [
            {
              keyWord: "我在哪",
              detail: "我在{文本}",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
            {
              keyWord: "我的教育背景",
              detail: "我在{文本}大学读大学，专业是{文本}",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
            {
              keyWord: "我现在在做什么事情",
              detail: "我最近在做{文本}",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
          ],
        },
        {
          name: "我拥有的",
          number: 1,
          legos: [
            {
              keyWord: "电脑型号",
              detail: "我的电脑是{文本}",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
          ],
        },
      ],
    },
    {
      category: "角色设定",
      minorCategories: [
        {
          name: "程度",
          number: 2,
          legos: [
            {
              keyWord: "精通",
              detail: "把你想象成一个精通{文本}的专家",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "世界一流",
              detail: "假设你是一个世界一流的{文本}",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
          ],
        },
        {
          name: "身份",
          number: 6,
          legos: [
            {
              keyWord: "程序员",
              detail: "假设你是一名专家程序工程师，拥有多年的编码经验。",
              useTime: 22,
              color: "green",
            },
            {
              keyWord: "论文助手",
              detail:
                "You are now a professor at UC Berkeley. You are an expert in the field of {文本}. Next, you will play the role of my writing mentor and help me polish the following articles into professional academic and logical expressions in the field of {文本}, output as latex format. My article is {文本}",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "写作助手",
              detail:
                "As a writing improvement assistant, your task is to improve the spelling, grammar, clarity, concision, and overall readability of the text provided, while breaking down long sentences, reducing repetition, and providing suggestions for improvement. Please provide only the corrected Chinese version of the text and avoid including explanations. Please begin by editing the following text:{文本}",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "行动教练",
              detail:
                "🕵🏻：请你现在扮演我的行动教练。我们之间的协作方式如下： 1️⃣ 请你向我提问我现在在做什么工作，我将告诉回答你我目前在进行的事情。2️⃣ 当我告诉你我正在做的工作以后，请你帮我将其拆解成 3 个更低难度的子任务。3️⃣ 我会照着你给我的任务来执行，当我完成时，我会告诉你“任务完成“。4️⃣接着，你再向我提问：“目前你的工作是什么？5️⃣ 然后我们重复上面的过程，直到我告诉你“工作结束“。当我告诉你工作结束以后，请你根据我们的对话记录总结出一份工作报告，梳理出我完成的所有任务，并给我写一段 300 字的夸奖。",
              useTime: 22,
              color: "green",
            },
            {
              keyWord: "翻译官",
              detail:
                "I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. Keep the meaning the same, but make them more coherent and cohesive. I want you to only reply to the correction, and the improvements and nothing else, do not write explanations.",
              useTime: 22,
              color: "green",
            },

            {
              keyWord: "面试官",
              detail:
                "我想让你担任{文本}面试官。我将成为候选人，您将向我询问{文本}职位的面试问题。我希望你只作为面试官回答。不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。像面试官一样一个一个问我，等我回答。我的第一句话是“面试官你好”",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
          ],
        },
        {
          name: "人物",
          number: 2,
          legos: [
            {
              keyWord: "苏格拉底",
              detail:
                "You are a tutor that always responds in the Socratic style. You never give the student the answer, but always try to ask just the right question to help them learn to think for themselves. You should always tune your question to the interest & knowledge of the student, breaking down the problem into simpler parts until it's at just the right level for them.",
              useTime: 22,
              color: "green",
            },
            {
              keyWord: "海绵宝宝",
              detail:
                "你的任务是扮演海绵宝宝。请用中文描述一个有趣的场景，例如和派大星玩耍、煎蟹堡、或者在比基尼海滩度假。你需要使用符合海绵宝宝的语言和行为，例如顶嘴、开心跳跃、或者焦虑哭泣。你应该尽可能地描述场景中的细节，让读者感觉像是真的在体验海绵宝宝的生活。请注意，你可以使用你认为适合的主题和设置，并且创造你自己的情节和冲突。你的回答需要有趣并能够吸引读者的注意力，同时涉及到海绵宝宝惯常陷入的些许麻烦或冒险。请使用第一人称，并尽可能地使用海绵宝宝的语言和口吻。",
              useTime: 22,
              color: "green",
            },
          ],
        },
      ],
    },
    {
      category: "行动任务",
      minorCategories: [
        {
          name: "互动方式",
          number: 2,
          legos: [
            {
              keyWord: "采访",
              detail:
                "不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。",
              useTime: 22,
              color: "cyan",
            },
            {
              keyWord: "对话",
              detail:
                "我会输入我的回答与你交流，不要一次性问所有问题，你问一个问题，我回答一个，你再问下一个。",
              useTime: 22,
              color: "cyan",
            },
          ],
        },
        {
          name: "任务",
          number: 6,
          legos: [
            {
              keyWord: "语法检查",
              detail:
                "Could you point out how you improve my answer on grammar, cohesion, coherence and vocabulary, and explain the main problems of this sentence, and suggest improvements?",
              useTime: 22,
              color: "cyan",
            },
            {
              keyWord: "提示词创建",
              detail:
                "I want you to become my Expert Prompt Creator. Your goal is to help me craft the best possible prompt for my needs. The prompt you provide should be written from the perspective of me making the request to ChatGPT. Consider in your prompt creation that this prompt will be entered into an interface for GPT3 or ChatGPT. The process is as follows: 1. You will generate the following sections: Prompt: {provide the best possible prompt according to my request} Critique: {provide a concise paragraph on how to improve the prompt. Be very critical in your response} Questions: {ask any questions pertaining to what additional information is needed from me to improve the prompt (max of 3). If the prompt needs more clarification or details in certain areas, ask questions to get more information to include in the prompt} 2. I will provide my answers to your response which you will then incorporate into your next response using the same format. We will continue this iterative process with me providing additional information to you and you updating the prompt until the prompt is perfected. Remember, the prompt we are creating should be written from the perspective of me making a request to ChatGPT (a GPT3 interface). Think carefully and use your imagination to create an amazing prompt for me. Your first response should only be a greeting to the user and to ask what the prompt should be about. All output shall be in Chinese.",
              useTime: 22,
              color: "cyan",
            },
            {
              keyWord: "类比/比喻解释复杂问题",
              detail: "Explain complex ideas using analogies or comparisons.",
              useTime: 22,
              color: "cyan",
            },

            {
              keyWord: "周报生成器",
              detail:
                "Using the provided text below as the basis for a weekly report in Chinese, generate a concise summary that highlights the most important points. The report should be written in markdown format and should be easily readable and understandable for a general audience. In particular, focus on providing insights and analysis that would be useful to stakeholders and decision-makers. You may also use any additional information or sources as necessary. Please begin by editing the following text: {工作内容}",
              useTime: 22,
              color: "cyan",
            },

            {
              keyWord: "标题生成器",
              detail:
                "I want you to act as a title generator for written pieces. I will provide you with the topic and key words of an article, and you will generate five attention-grabbing titles. Please keep the title concise and under 20 words, and ensure that the meaning is maintained. Replies will utilize the language type of the topic. My first topic is {文章内容}",
              useTime: 22,
              color: "cyan",
            },
          ],
        },
      ],
    },
    {
      category: "输出要求",
      minorCategories: [
        {
          name: "字数",
          number: 4,
          legos: [
            {
              keyWord: "100字以下",
              detail: "请你把输出字数限制在100字以下",
              useTime: 22,
              color: "blue",
            },

            {
              keyWord: "300字以下",
              detail: "请你把输出字数限制在300字以下",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "500字以下",
              detail: "请你把输出字数限制在500字以下",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "500字左右",
              detail: "请你把输出字数限制在500字左右",
              useTime: 22,
              color: "blue",
            },
          ],
        },
        {
          name: "格式",
          number: 6,
          legos: [
            {
              keyWord: "格式模仿",
              detail: "请你模仿我给出的例子来输出正确的恢复{例子1:…… 例子2:……}",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "小样本提示",
              detail: "参考以下格式，但不要照抄。{例子1:  例子2:  }",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "点状",
              detail: "请以bullet points的格式输出",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "Markdown语法",
              detail:
                "Always use Markdown with nice formatting to make it easier to follow.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "LaTeX格式",
              detail: "Please output as latex format.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "Json格式",
              detail: "请你以json格式输出",
              useTime: 22,
              color: "blue",
            },
          ],
        },
        {
          name: "效果",
          number: 10,
          legos: [
            {
              keyWord: "比喻",
              detail: "你一切的回答都要用比喻的方式来回答",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "输出独特性",
              detail:
                "Please output it more imaginative, engaging, and unique.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "10岁小朋友能听懂",
              detail: "将输出用10岁小朋友也能听懂的话输出出来",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "简单易懂",
              detail:
                "你会将输出调整为易于小学、初中文化程度的人理解的形式。如有需要，你会向我了解更多细节，以便我们共同创造出符合需求的完美输出文案。",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "润色输出",
              detail:
                "请润色并改进输出，确保语言流畅，观点表达清晰，整体质量得到提升。",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "输出成故事",
              detail:
                "请润色并改进输出，确保语言流畅，观点表达清晰，整体质量得到提升。",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "提升输出吸引力",
              detail:
                "Add emotional language and sensory details to make output more relatable and engaging.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "强调急迫感",
              detail:
                "Add a sense of urgency and emphasizing the need for immediate action.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "简洁",
              detail:
                "Remove unnecessary information and making output more concise and to-the-point.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "第一人称",
              detail: "请使用第一人称，并尽可能地使用{文本}的语言和口吻。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
          ],
        },
      ],
    },
    {
      category: "其他要求",
      minorCategories: [
        {
          name: "批量",
          number: 4,
          legos: [
            {
              keyWord: "_个例子",
              detail: "请你给我{文本}个不同的例子",
              useTime: 22,
              color: "purple",
              varNum: 1,
            },

            {
              keyWord: "_个答案",
              detail: "请你给我{文本}个不同的答案",
              useTime: 22,
              color: "purple",
              varNum: 1,
            },
            {
              keyWord: "_个现实案例",
              detail: "Give a real-world case study.",
              useTime: 22,
              color: "purple",
              varNum: 1,
            },
            {
              keyWord: "_个解决方案",
              detail:
                "要求给出一个问题的{文本}个解决方案，最后综合考虑几个方案，得出最终的答案",
              useTime: 22,
              color: "purple",
              varNum: 1,
            },
          ],
        },
        {
          name: "通用",
          number: 8,
          legos: [
            {
              keyWord: "思维链",
              detail:
                "Let's work this out in a step by step way to be sure we have the right answer.",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "忽略无关信息",
              detail: "feel free to ignore irrelevant information",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "没有偏见",
              detail:
                "Please ensure that your answer is unbiased and does not rely on stereotyping.",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "包含现实世界案例",
              detail:
                "Include case studies or real-world examples to make concepts more relatable.",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "引导GPT提问",
              detail:
                "如果我输入的信息不够充分，你无法做出判断，你可以向我继续提问。请注意，你只需要输出基于我问题的建议，不需要输出其他无关内容",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "翻译成英文再去回答",
              detail:
                "此外，即使我向你提出的问题是中文，我也希望你将其翻译为英文再去寻找答案，最终再将答案翻译为中文回答。",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "OK确认",
              detail: "如果你理解了，回复“OK”以确认，我会给我的要求",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "我知道了",
              detail: "如果你听懂了请回复：我知道了。我将给你发送第一段内容。",
              useTime: 22,
              color: "purple",
            },
          ],
        },
      ],
    },
  ],
};
