import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

const generateImage = async (prompt) => {

  const options = {
    model: 'black-forest-labs/flux-schnell',
    input: {prompt},
  }
  const {output} = await replicate.predictions.create(options);
  console.log( 'this is the output ',output);

  return output;

}

export async function POST(req) {

  const {prompt} = await req.json();
  console.log(prompt)
  const res = await generateImage(prompt)
  console.log('this res value ', res);
  return NextResponse.json({
    name: 'Edson',
    images: res
  });
  
}
