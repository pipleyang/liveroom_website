import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  text: string;
  isLast?: boolean;
}

function ProcessStep({ number, text, isLast }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {number}
        </div>
        {!isLast && <div className="w-0.5 h-8 bg-blue-200"></div>}
      </div>
      <div className="flex-1 pt-1">
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export function JoinProcess() {
  const steps = [
    "在线洽谈",
    "签署电子合约",
    "加盟商准备抖音直播带货达人条件",
    "加盟商从精选联盟的雪莲花开抖店中，选择商品挂载到橱窗，进行直播带货",
    "三体平台初始化无人直播间和系统",
    "加盟商启动无人或有人直播",
    "按照抖音精选联盟的规则，三体平台进行佣金分配"
  ];

  return (
    <section className="py-16 px-6" id="join-process">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">加盟流程</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                text={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}