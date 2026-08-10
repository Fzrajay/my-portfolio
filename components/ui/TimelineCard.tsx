'use client';

import { motion } from 'motion/react';
import { JourneyItem } from '@/types/journey';
import Card from './Card';
import Badge from './Badge';

interface TimelineCardProps {
  item: JourneyItem;
}

export default function TimelineCard({ item }: TimelineCardProps) {
  const Icon = item.icon;

  return (
    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <Card>
        <div className="flex items-start gap-5">
          <div
            className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10
            text-cyan-400
            border
            border-cyan-500/20
            "
          >
            <Icon size={26} />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="
                rounded-full
                bg-cyan-500
                px-3
                py-1
                text-xs
                font-semibold
                text-white
                "
              >
                {item.year}
              </span>

              <span className="text-sm text-slate-400 capitalize">{item.category}</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

            <p className="mt-1 text-cyan-400 font-medium">{item.organization}</p>

            <p className="mt-4 leading-7 text-slate-400">{item.description}</p>

            {item.technologies && (
              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} text={tech} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
