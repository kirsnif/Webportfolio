"use client";

import type { MouseEvent } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import {
  GraduationCap,
  Code,
  Plane,
  Dumbbell,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type Goal = {
  label: string;
  Icon: LucideIcon;
  length: number;
};

const goals: Goal[] = [
  { label: "Finish my EFZ", Icon: GraduationCap, length: 80 },
  { label: "Further education", Icon: Rocket, length: 60 },
  { label: "Learn Java", Icon: Code, length: 70 },
  { label: "Stay fit", Icon: Dumbbell, length: 90 },
  { label: "Travel", Icon: Plane, length: 50 },
];

function Pendulum({ label, Icon, length }: Goal) {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotion();

  async function swing(angle: number) {
    if (reduceMotion) return;
    await animate(scope.current, { rotate: angle }, { duration: 0.15, ease: "easeOut" });
    animate(scope.current, { rotate: 0 }, { type: "spring", stiffness: 30, damping: 2.5 });
  }

  function handleEnter(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const fromLeft = e.clientX < rect.left + rect.width / 2;
    swing(fromLeft ? -30 : 30);
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onClick={() => swing(30)}
      className="flex w-20 cursor-pointer flex-col items-center"
    >
      <div ref={scope} className="flex origin-top flex-col items-center">
        <span className="-mt-1 h-2 w-2 rounded-full bg-gray-500" />
        <span className="w-px bg-white/30" style={{ height: length }} />
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-200">
          <Icon size={24} />
        </div>
        <span className="mt-2 text-center text-xs text-gray-400">{label}</span>
      </div>
    </div>
  );
}

export default function FutureGoals() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-bold">What&apos;s next</h2>
      <div className="mt-8 border-t border-white/20 pb-8">
        <div className="flex flex-wrap justify-around gap-y-8">
          {goals.map((goal) => (
            <Pendulum key={goal.label} {...goal} />
          ))}
        </div>
      </div>
    </section>
  );
}