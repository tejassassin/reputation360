import { mapQaFaqs } from "../../faqPageSchema.js";
import { article as blog01 } from "./blog01.js";
import { article as blog02 } from "./blog02.js";
import { article as blog03 } from "./blog03.js";
import { article as blog05 } from "./blog05.js";
import { article as blog06 } from "./blog06.js";
import { article as blog07 } from "./blog07.js";
import { article as blog08 } from "./blog08.js";
import { article as blog09 } from "./blog09.js";
import { article as blog10 } from "./blog10.js";
import { article as blog11 } from "./blog11.js";
import { article as blog12 } from "./blog12.js";
import { article as blog13 } from "./blog13.js";
import { article as blog14 } from "./blog14.js";
import { article as blog15 } from "./blog15.js";
import { article as blog16 } from "./blog16.js";
import { article as blog17 } from "./blog17.js";
import { article as blog18 } from "./blog18.js";
import { article as blog19 } from "./blog19.js";
import { article as blog20 } from "./blog20.js";

const PACK20_ARTICLES_WITH_FAQS = [
  blog01,
  blog02,
  blog03,
  blog05,
  blog06,
  blog07,
  blog08,
  blog09,
  blog10,
  blog11,
  blog12,
  blog13,
  blog14,
  blog15,
  blog16,
  blog17,
  blog18,
  blog19,
  blog20,
];

/** @type {Record<string, { question: string, answer: string }[]>} */
export const PACK20_FAQ_SCHEMA_BY_PATH = Object.fromEntries(
  PACK20_ARTICLES_WITH_FAQS.filter((article) => article.faqs?.length).map(
    (article) => [article.path, mapQaFaqs(article.faqs)],
  ),
);
