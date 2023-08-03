import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({
	openAIApiKey: "0j1tT5CfHWD0eqCG0GHxT3BlbkFJXFd11HPjqjEPRnbCH3UF",
	temperature: 0.9,
});

const res = await model.call(
	"What would be good company name for the company that make Agricultural products?"
);

console.log(res);
