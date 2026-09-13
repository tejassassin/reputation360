"use client";

import { useCallback, useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { HOME_FAQ_ITEMS } from "../data/homeFaqItems.js";

export default function HomeFaqAccordionList() {
  const baseId = useId().replace(/[^a-zA-Z0-9_-]/g, "x");
  const [openId, setOpenId] = useState(HOME_FAQ_ITEMS[0]?.id ?? null);

  const toggle = useCallback((id) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <div className="r360-home-faq-accordion">
      {HOME_FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-${item.id}-btn`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <article
            key={item.id}
            className={`r360-home-faq-item ${isOpen ? "r360-home-faq-item--open" : ""}`}
          >
            <h3 className="r360-home-faq-question-wrap m-0">
              <button
                type="button"
                id={buttonId}
                className="r360-home-faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="r360-home-faq-question">{item.question}</span>
                <ChevronDown className="r360-home-faq-chevron shrink-0" aria-hidden />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`r360-home-faq-panel ${isOpen ? "r360-home-faq-panel--open" : ""}`}
              aria-hidden={!isOpen}
            >
              <div className="r360-home-faq-panel-inner">
                <p className="r360-home-faq-answer">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
