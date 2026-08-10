'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: 0.4,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
