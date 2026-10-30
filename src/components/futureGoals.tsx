"use client";

import type { Localized } from "@/i18n/localized";
import type { MouseEvent } from "react";
import { pick } from "@/i18n/localized";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
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
  id: string;
  label: Localized;
  Icon: LucideIcon;
  length: number;
};

const goals: Goal[] = [
  { id: "1", label: { "en": "Finish my EFZ", "de": "EFZ abschliessen" }, Icon: GraduationCap, length: 80 },
  { id: "2", label: { "en": "Further education", "de": "Weiterbildung" }, Icon: Rocket, length: 60 },
  { id: "3", label: { "en": "Learn Java", "de": "Java lernen" }, Icon: Code, length: 70 },
  { id: "4", label: { "en": "Stay fit", "de": "Fit bleiben" }, Icon: Dumbbell, length: 90 },
  { id: "5", label: { "en":"Travel", "de": "Reisen" }, Icon: Plane, length: 50 },
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
  const locale = useLocale();
  return (
    <div
      onMouseEnter={handleEnter}
      onClick={() => swing(30)}
      className="flex w-full cursor-pointer flex-col items-center"
    >
      <div ref={scope} className="flex origin-top flex-col items-center">
        <span className="-mt-1 h-2 w-2 rounded-full bg-gray-500" />
        <span className="w-px bg-white/30" style={{ height: length }} />
        <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-200 sm:p-3">
          <Icon size={24} />
        </div>
        <span className="mt-2 text-center text-[10px] leading-tight text-gray-400 sm:text-xs">{pick(label, locale)}</span>
      </div>
    </div>
  );
}

export default function FutureGoals() {
  const t = useTranslations("Goals");
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <div className="mt-8 border-t border-white/20 pb-8">
        <div className="grid grid-cols-5">
          {goals.map((goal) => (
            <Pendulum key={goal.id} {...goal} />
          ))}
        </div>
      </div>
    </section>
  );
}