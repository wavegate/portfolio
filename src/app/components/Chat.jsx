import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MyForm } from "./Form";

export default function Chat() {
  return (
    <Card className={`flex flex-col flex-1`}>
      <CardHeader>
        <CardTitle className={`text-[22px] flex justify-between items-center`}>
          <div>Chat with me!</div>
          <div className={`flex gap-[12px] items-center`}>
            <div className={`flex flex-col`}>
              <div className={`text-sm text-slate-800`}>Frank Lee</div>
            </div>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/4790280?v=4" />
              <AvatarFallback>FL</AvatarFallback>
            </Avatar>
          </div>
        </CardTitle>
        <CardDescription>
          This chatbot is trained to answer any questions about me.
        </CardDescription>
      </CardHeader>
      <CardContent className={`flex flex-1 flex-col justify-between`}>
        <div className={`flex flex-col gap-[4px]`}>
          <div
            className={`rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] shadow-sm border border-solid border-slate-100 px-2 py-1 w-fit`}
          >
            <div>Greetings!</div>
            <div className={`text-xs text-slate-400`}>4:03PM</div>
          </div>
          <div
            className={`rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] shadow-md px-2 py-1 border border-solid border-slate-100 bg-gray-800 text-slate-100 w-fit self-end`}
          >
            <div>Oh! Hello!</div>
            <div className={`text-xs`}>4:05PM</div>
          </div>
        </div>
        <MyForm />
      </CardContent>
    </Card>
  );
}
