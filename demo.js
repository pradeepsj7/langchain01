import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const template =
	"What would be good company name for the company that make {product}?";

const promptTemplate = new PromptTemplate({
	template: template,
	inputVariables: ["product"],
});

const model = new OpenAI({
	openAIApiKey: "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",
	temperature: 0.9,
});

const chain = new LLMChain({
	llm: model,
	prompt: promptTemplate,
});
const res = await chain.call({
	product: "Agriculture products",
});

console.log(res);

//Formatted code
// const formattedPrompt = await promptTemplates.format({
// 	product: "Agriculture product",
// });
// console.log(formattedPrompt);

// const res = await model.call(
// 	"What would be good company name for the company that make Agricultural products?"
// );
