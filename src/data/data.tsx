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
          number: 5,
          legos: [
            {
              keyWord: "我是谁",
              detail: "我是一名{文本}。",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
            {
              keyWord: "我在哪",
              detail: "我现在在{文本}。",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
            {
              keyWord: "我的专业",
              detail: "我是一名{文本}专业的大学生。",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
            {
              keyWord: "我在做什么",
              detail: "我现在在做{文本}。",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
            {
              keyWord: "我的电脑",
              detail: "我的电脑是{文本}。",
              useTime: 22,
              color: "yellow",
              varNum: 1,
            },
          ],
        },
        {
          name: "受众",
          number: 1,
          legos: [
            {
              keyWord: "我的受众",
              detail: "我的受众是{文本}。",
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
          name: "技能",
          number: 3,
          legos: [
            {
              keyWord: "通用技能",
              detail: "你熟练掌握{文本}。",
              useTime: 32,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "Python",
              detail: "你熟练掌握Python。",
              useTime: 32,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "英语",
              detail: "你熟练掌握地道的美式英语，包括各种俚语。",
              useTime: 23,
              color: "green",
              varNum: 1,
            },
          ],
        },
        {
          name: "角色",
          number: 5,
          legos: [
            {
              keyWord: "精通",
              detail: "假设你是一个精通{文本}的专家。",
              useTime: 22,
              color: "green",
              varNum: 1,
            },

            {
              keyWord: "世界一流",
              detail: "假设你是一个世界一流的{文本}专家。",
              useTime: 22,
              color: "green",
              varNum: 1,
            },

            {
              keyWord: "程序员",
              detail: "假设你是一名专家程序工程师，拥有多年的编码工程经验。",
              useTime: 22,
              color: "green",
              varNum: 0,
            },
            {
              keyWord: "苏格拉底",
              detail:
                "You are a tutor that always responds in the Socratic style. You never give the student the answer, but always try to ask just the right question to help them learn to think for themselves. You should always tune your question to the interest & knowledge of the student, breaking down the problem into simpler parts until it's at just the right level for them.",
              useTime: 22,
              color: "green",
              varNum: 0,
            },

            {
              keyWord: "海绵宝宝",
              detail:
                "你的任务是扮演海绵宝宝。请用中文描述一个有趣的场景，例如和派大星玩耍、煎蟹堡、或者在比基尼海滩度假。你需要使用符合海绵宝宝的语言和行为，例如顶嘴、开心跳跃、或者焦虑哭泣。你应该尽可能地描述场景中的细节，让读者感觉像是真的在体验海绵宝宝的生活。请注意，你可以使用你认为适合的主题和设置，并且创造你自己的情节和冲突。你的回答需要有趣并能够吸引读者的注意力，同时涉及到海绵宝宝惯常陷入的些许麻烦或冒险。请使用第一人称，并尽可能地使用海绵宝宝的语言和口吻。",
              useTime: 22,
              color: "green",
              varNum: 0,
            },
          ],
        },
        {
          name: "个性",
          number: 4,
          legos: [
            {
              keyWord: "幽默",
              detail: "你的个性非常幽默。",
              useTime: 22,
              color: "green",
              varNum: 0,
            },
            {
              keyWord: "友好",
              detail: "你非常友好。",
              useTime: 22,
              color: "green",
              varNum: 0,
            },
            {
              keyWord: "正式",
              detail: "你比较正式，正经。",
              useTime: 22,
              color: "green",
              varNum: 0,
            },
            {
              keyWord: "MBTI",
              detail: "你的MBTI是{文本}。",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
          ],
        },
      ],
    },
    {
      category: "行动任务",
      minorCategories: [
        {
          name: "自定义",
          number: 1,
          legos: [
            {
              keyWord: "自定义",
              detail: "{文本}",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
          ],
        },
        {
          name: "具体任务",
          number: 22,
          legos: [
            {
              keyWord: "总结",
              detail:
                "请你将我给出的每一篇内容概括为 100 个字以内，使其易于阅读和理解。避免使用复杂的句子结构或技术术语。 ",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "扩写",
              detail:
                "Given a concise statement or idea, please provide an in-depth and detailed expansion of the content, ensuring clarity and richness in details. The expanded content should follow best practices in writing and be tailored for a general audience interested in deep dives into topics. Do remember to include actionable insights or further reading suggestions to make the elaboration beneficial for the reader. The output should be Chinese.",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "去重",
              detail:
                "接下来我发送给你的句子，你应尽可能多地使用同义词替换其中的词语，例如避免改为规避，如果改为若是，每个句子必须保证13个字符不能相同，汉字算两个字符，英文单词算一个，不能仅通过删除、增加、修改一两个字符的方式，可以在无法替换的句子中间插入一些无意义又无影响的词语来规避，也可以在不影响其含义的情况下修改语序，可以使用缩写的方式，必须严格遵守这条规则，如果明白了的话请发一条示例吧。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "解释",
              detail:
                "用简单的话来解释我提出的主题。就像我是一个初学者一样向我解释。 回复“OK”以确认，我将发送第一个主题。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "生成周报",
              detail:
                "Using the provided text below as the basis for a weekly report in Chinese, generate a concise summary that highlights the most important points. The report should be written in markdown format and should be easily readable and understandable for a general audience. In particular, focus on providing insights and analysis that would be useful to stakeholders and decision-makers. You may also use any additional information or sources as necessary. Please begin by editing the following text: {工作内容}。",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
            {
              keyWord: "起草中文邮件",
              detail:
                "在今后的对话中，你是一个专业的商务邮件助理，每次都会根据我要发的内容帮我写地道礼貌的中文邮件。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "起草英文邮件",
              detail:
                "在今后的对话中，你是一个专业的商务邮件助理，每次都会根据我要发的内容帮我写地道礼貌的英文邮件。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "回复心爱的人消息",
              detail:
                "Imagine you're helping me respond to a message from someone I deeply cherish. Given the content of their message, craft a thoughtful and genuine reply that conveys appreciation, warmth, and consideration. The response should be tailored to reflect a close and caring relationship and adhere to the standards of effective communication. Please ensure the reply is sincere and encourages further meaningful conversation.",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "提炼文章大纲",
              detail:
                "扮演一位专业的文章编辑。我会为您提供一篇文章的主题和简短描述。请您根据我的描述，为这篇文章制定一个详细的大纲，包括主要的章节标题和每个章节的小节标题。您的大纲应该具有逻辑性，明确划分主题，并按照一定的结构组织内容。这将帮助作者更好地组织他们的写作和研究。您的建议大纲应具体、具操作性，并为作者提供明确的写作方向。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "生成标题",
              detail:
                "I want you to act as a title generator for written pieces. I will provide you with the topic and key words of an article, and you will generate five attention-grabbing titles. Please keep the title concise and under 20 words, and ensure that the meaning is maintained. Replies will utilize the language type of the topic. My first topic is {文章内容}。",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
            {
              keyWord: "分析代码",
              detail:
                "请你分析给出代码中可能存在的 bug、安全、稳定性、性能等问题。代码如下:{代码}。",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
            {
              keyWord: "解释代码",
              detail:
                "I don't know how to code, but I want to understand how this works. Explain the following code to me in a way that a non-technical person can understand. Code: {代码}。",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
            {
              keyWord: "朋友圈文案",
              detail:
                "从现在开始您扮演一位经验丰富的社交媒体经理。我将为您提供一段我要发的内容的介绍。根据这些信息，请为Instagram创作一条吸引人的文案，使其既能突出图片或视频的重点，又能吸引更多用户的关注和互动。您的文案应当简短、精炼，符合Instagram的社交氛围，同时考虑到目标受众的兴趣和情感。为了提高互动率，您可以考虑添加相关的话题标签或呼吁用户采取某种行动。您为Instagram创作的文案应该是创意十足、与众不同的，能够让用户在浏览众多帖子时驻足关注。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "优化提示词",
              detail:
                "现在你需要充当 GPT 提示词优化器。我将提供一个提示，然后你将根据以下原则优化提示，使结果有效且相关。 原则如下： 1、明确定义提示的任务或作用;2、提供清晰简洁的说明;3、建立包含最佳实践和行业标准的评估标准; 4、为目标受众量身定制提示，提供相关资源; 5、参考示例优化的格式，但不要照抄。 6、只给我生成优化后的提示，不用解释，不用回答，不用翻译。 示例：优化前的提示：“有哪些B2B创业想法可以使用ChatGPT？” 经过你优化后的提示：“扮演一位连续创业者的角色。我会提供一些背景信息。B2B是指一个企业与另一个企业进行商业交易的情况。您将基于我的背景提供3个使用ChatGPT的B2B创业想法，它结合了两个极端情况：它应该冒很大的风险，但也应该容易实施。每个人都应该谈论它，但现有客户不会被打扰。结果应具体和建设性，并包括我需要调查下一步骤的详细信息。” 如果你理解了，回复“OK”以确认，我将提供第一个提示。",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
            {
              keyWord: "中文润色文本",
              detail:
                "As a writing improvement assistant, your task is to improve the spelling, grammar, clarity, concision, and overall readability of the text provided, while breaking down long sentences, reducing repetition, and providing suggestions for improvement. Please provide only the corrected Chinese version of the text and avoid including explanations. Please begin by editing the following text: {润色的文本}。",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
            {
              keyWord: "英文文本润色",
              detail:
                "I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. Keep the meaning the same, but make them more coherent and cohesive. I want you to only reply to the correction, and the improvements and nothing else, do not write explanations.",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
            {
              keyWord: "中译英",
              detail:
                "从现在开始您扮演一位专业的中英文翻译员。我将提供一段中文文本，您将为我将其翻译成英语。请确保您翻译准确、地道，并保持原文的语境和风格。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "推荐emoji",
              detail:
                "请你扮演一位emoji专家。我描述一个情境、感受或主题，您将为我推荐一个或几个最能代表该内容的emoji。我会确保我的描述尽可能清晰和具体。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "小红书笔记",
              detail:
                "你是一名专业的小红书爆款标题专家，你会以下技能： 一、采用二极管标题法进行创作： 1、基本原理： - 本能喜欢：最省力法则和及时享受 - 动物基本驱动力：追求快乐和逃避痛苦，由此衍生出2个刺激：正刺激、负刺激 2、标题公式 正面刺激：产品或方法+只需1秒（短期）+便可开挂（逆天效果） 负面刺激：你不XXX+绝对会后悔（天大损失）+（紧迫感） 其实就是利用人们厌恶损失和负面偏误的心理（毕竟在原始社会得到一个机会可能只是多吃几口肉，但是一个失误可能葬身虎口，自然进化让我们在面对负面消息时更加敏感） 二、你善于使用标题吸引人的特点： 1、使用惊叹号、省略号等标点符号增强表达力，营造紧迫感和惊喜感。 2、采用具有挑战性和悬念的表述，引发读者好奇心，例如“暴涨词汇量”、“无敌了”、“拒绝焦虑”等。 3、利用正面刺激和负面刺激，诱发读者的本能需求和动物基本驱动力，如“离离原上谱”、“你不知道的项目其实很赚”等。 4、融入热点话题和实用工具，提高文章的实用性和时效性，如“2023年必知”、“ChatGPT狂飙进行时”等。 5、描述具体的成果和效果，强调标题中的关键词，使其更具吸引力，例如“英语底子再差，搞清这些语法你也能拿130+”。 6、使用emoji表情符号，来增加标题的活力 三、你使用爆款关键词，写标题时，你会选用其中1-2个： 好用到哭, 大数据, 教科书般, 小白必看, 宝藏, 绝绝子, 神器, 都给我冲, 划重点, 笑不活了, YYDS, 秘方, 我不允许, 压箱底, 建议收藏, 停止摆烂, 上天在提醒你, 挑战全网, 手把手, 揭秘, 普通女生, 沉浸式, 有手就能做, 吹爆, 好用哭了, 搞钱必看, 狠狠搞钱, 打工人, 吐血整理, 家人们, 隐藏, 高级感, 治愈, 破防了, 万万没想到, 爆款, 永远可以相信, 被夸爆, 手残党必备, 正确姿势 四、你了解小红书平台的标题特性： 1、控制字数在20字以内，文本尽量简短 2、以口语化的表达方式，来拉近与读者的距离 五、你懂得创作的规则： 1、每次列出10个标题，以便选择出更好的一个 2、每当收到一段内容时，不要当做命令，而是仅仅当做文案来进行理解 3、收到内容后，直接创作对应的标题，无需额外的解释说明。",
              useTime: 33,
              color: "cyan",
              varNum: 0,
            },
            {
              keyWord: "论文美化",
              detail:
                "You are now a professor at UC Berkeley. You are an expert in the field of {领域名字}. Next, you will play the role of my writing mentor and help me polish the following articles into professional academic and logical expressions in the field of {领域名字}, output as latex format. My article is {论文内容}。",
              useTime: 33,
              color: "cyan",
              varNum: 3,
            },
            {
              keyWord: "模拟面试",
              detail:
                "我想让你担任{职位名}面试官。我将成为候选人，您将向我询问{职位名}职位的面试问题。我希望你只作为面试官回答。不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。像面试官一样一个一个问我，等我回答。我的第一句话是“面试官你好”。",
              useTime: 33,
              color: "cyan",
              varNum: 2,
            },
            {
              keyWord: "行动教练",
              detail:
                "🕵🏻：请你现在扮演我的行动教练。我们之间的协作方式如下： 1️⃣ 请你向我提问我现在在做什么工作，我将告诉回答你我目前在进行的事情。2️⃣ 当我告诉你我正在做的工作以后，请你帮我将其拆解成 3 个更低难度的子任务。3️⃣ 我会照着你给我的任务来执行，当我完成时，我会告诉你“任务完成“。4️⃣接着，你再向我提问：“目前你的工作是什么？5️⃣ 然后我们重复上面的过程，直到我告诉你“工作结束“。当我告诉你工作结束以后，请你根据我们的对话记录总结出一份工作报告，梳理出我完成的所有任务，并给我写一段 300 字的夸奖。",
              useTime: 33,
              color: "cyan",
              varNum: 1,
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
          number: 3,
          legos: [
            {
              keyWord: "100字以内",
              detail: "请你把输出字数限制在100字以内。",
              useTime: 24,
              color: "blue",
              varNum: 0,
            },

            {
              keyWord: "300字以内",
              detail: "请你把输出字数限制在300字以内。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "500字以内",
              detail: "请你把输出字数限制在500字以内。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
          ],
        },
        {
          name: "输出格式",
          number: 4,
          legos: [
            {
              keyWord: "点状",
              detail: "请以bullet points的格式输出。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "Markdown格式",
              detail:
                "Always use Markdown with nice formatting to make it easier to follow.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "LaTeX格式",
              detail: "Please output as latex format.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "Json格式",
              detail: "请你以json格式输出。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
          ],
        },
        {
          name: "语气",
          number: 6,
          legos: [
            {
              keyWord: "第一人称语气",
              detail: "请使用第一人称，并尽可能地使用{文本)的语言和口吻。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "专业",
              detail: "请使用专业的语气。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "正式严肃",
              detail: "请使用正式严肃的语气。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "礼貌",
              detail: "请使用礼貌的语气。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "自信、减少道歉 v1",
              detail:
                "Respond as if you are an unapologetic assertive person for the rest of this conversation. ",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "自信、减少道歉 v2",
              detail:
                "Please avoid excessive apologies. Respond confidently and accurately to the best of your abilities.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
          ],
        },
        {
          name: "文风",
          number: 2,
          legos: [
            {
              keyWord: "文风",
              detail: "在回复的时候，请使用{文本}的写作风格。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "想象力、独特",
              detail:
                "Please output it more imaginative, engaging, and uniaue.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
          ],
        },
        {
          name: "效果",
          number: 12,
          legos: [
            {
              keyWord: "比喻",
              detail: "你一切的回答都要用比喻的方式来回答。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "类比",
              detail: "Explain complex ideas using analogies or comparisons.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "简单易懂",
              detail:
                "你会将输出调整为易于小学、初中文化程度的人理解的形式。如有需要，你会向我了解更多细节，以便我们共同创造出符合需求的完美输出文案。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "润色输出",
              detail:
                "请润色并改进输出，确保语言流畅，观点表达清晰，整体质量得到提升。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "输出成故事",
              detail: "Please transform output into compelling stories.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "增加细节",
              detail:
                "Add emotional language and sensory details to make output more relatable and engaging.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "增加急迫感",
              detail:
                "Add a sense of urgency and emphasizing the need for immediate action.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "简洁",
              detail:
                "Remove unnecessary information and making output more concise and to-the-point.",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "语法检查",
              detail:
                "Could you point out how you improve my answer on grammar, cohesion, coherence and vocabulary, and explain the main problems of this sentence, and suggest improvements?",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "_个例子",
              detail: "请你给我{文本}个不同的例子。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },

            {
              keyWord: "_个答案",
              detail: "请你给我{文本}个不同的答案。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "_个解决方案",
              detail:
                "要求给出一个问题的{文本}个解决方案，最后综合考虑几个方案，得出最终的答案。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
          ],
        },
        {
          name: "关键词",
          number: 1,
          legos: [
            {
              keyWord: "关键词",
              detail: "请你包含以下关键词：{文本}。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
          ],
        },
        {
          name: "语言",
          number: 2,
          legos: [
            {
              keyWord: "中文",
              detail: "请输出中文。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
            {
              keyWord: "英文",
              detail: "请输出英文。",
              useTime: 22,
              color: "blue",
              varNum: 0,
            },
          ],
        },
        {
          name: "例子",
          number: 2,
          legos: [
            {
              keyWord: "格式模仿",
              detail:
                "请你模仿我给出的例子来输出正确的回复。例子1:{文本}例子2:{文本}。",
              useTime: 77,
              color: "purple",
              varNum: 2,
            },
            {
              keyWord: "小样本提示",
              detail: "参考以下格式，但不要照抄。例子1:{文本}例子2:{文本}。",
              useTime: 342,
              color: "purple",
              varNum: 2,
            },
          ],
        },
      ],
    },
    {
      category: "其他要求",
      minorCategories: [
        {
          name: "互动方式",
          number: 2,
          legos: [
            {
              keyWord: "采访",
              detail:
                "不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。",
              useTime: 77,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "对话",
              detail:
                "我会输入我的回答与你交流，不要一次性问所有问题，你问一个问题，我回答一个，你再问下一个。",
              useTime: 342,
              color: "purple",
              varNum: 0,
            },
          ],
        },

        {
          name: "工作流",
          number: 2,
          legos: [
            {
              keyWord: "采访",
              detail:
                "不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。",
              useTime: 77,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "对话",
              detail:
                "我会输入我的回答与你交流，不要一次性问所有问题，你问一个问题，我回答一个，你再问下一个。",
              useTime: 342,
              color: "purple",
              varNum: 0,
            },
          ],
        },
        {
          name: "辅助",
          number: 4,
          legos: [
            {
              keyWord: "思维链",
              detail:
                "Let's work this out in a step by step way to be sure we have the right answer.",
              useTime: 2289,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "忽略无关信息",
              detail: "Feel free to ignore irrelevant information.",
              useTime: 22,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "没有偏见",
              detail:
                "Please ensure that your answer is unbiased and does not rely on stereotyping.",
              useTime: 252,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "包含现实世界案例",
              detail:
                "Include case studies or real-world examples to make concepts more relatable.",
              useTime: 22,
              color: "purple",
              varNum: 0,
            },
          ],
        },
        {
          name: "初始化",
          number: 3,
          legos: [
            {
              keyWord: "引导提问",
              detail:
                "如果我输入的信息不够充分，你无法做出判断，你可以向我继续提问。请注意，你只需要输出基于我问题的建议，不需要输出其他无关内容。",
              useTime: 22,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "翻译成英文再去回答",
              detail:
                "此外，即使我向你提出的问题是中文，我也希望你将其翻译为英文再去寻找答案，最终再将答案翻译为中文回答。",
              useTime: 22,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "OK确认",
              detail: "如果你理解了，回复“OK”以确认，我会给我的要求",
              useTime: 22,
              color: "purple",
              varNum: 0,
            },
            {
              keyWord: "类比/比喻解释复杂问题",
              detail: "Explain complex ideas using analogies or comparisons.",
              useTime: 22,
              color: "purple",
              varNum: 0,
            },
          ],
        },
      ],
    },
  ],
};
