/**
 * @typedef {object} Pack20Listing
 * @property {string} id
 * @property {string} slug
 * @property {"Suppression"|"Social Media"|"Monitoring"|"Strategy"|"Career"|"Crisis"|"Legal"} filter
 * @property {string} category
 * @property {string} title
 * @property {string} excerpt
 * @property {string} date
 * @property {string} author
 * @property {string} readTime
 * @property {string} image
 * @property {string} imageAlt
 */

/**
 * @typedef {object} Pack20BlockP
 * @property {"p"} type
 * @property {string} text
 */

/**
 * @typedef {object} Pack20BlockLead
 * @property {"lead"} type
 * @property {string} label
 * @property {string} text
 */

/**
 * @typedef {object} Pack20BlockKeyBox
 * @property {"keyBox"} type
 * @property {"insight"|"tip"|"warning"} [variant]
 * @property {string} title
 * @property {string} text
 */

/**
 * @typedef {object} Pack20Step
 * @property {number} n
 * @property {string} title
 * @property {string} body
 */

/**
 * @typedef {object} Pack20BlockSteps
 * @property {"steps"} type
 * @property {string} [pickerKey]
 * @property {Pack20Step[]} steps
 */

/**
 * @typedef {object} Pack20PillItem
 * @property {string} id
 * @property {string} label
 * @property {string} [title]
 * @property {string} body
 */

/**
 * @typedef {object} Pack20BlockPills
 * @property {"pills"} type
 * @property {string} [pickerKey]
 * @property {Pack20PillItem[]} items
 */

/**
 * @typedef {object} Pack20AccordionItem
 * @property {string} id
 * @property {string} title
 * @property {string} body
 */

/**
 * @typedef {object} Pack20BlockAccordion
 * @property {"accordion"} type
 * @property {Pack20AccordionItem[]} items
 */

/**
 * @typedef {object} Pack20CardItem
 * @property {string} title
 * @property {string} body
 */

/**
 * @typedef {object} Pack20BlockCards
 * @property {"cards"} type
 * @property {Pack20CardItem[]} items
 */

/**
 * @typedef {object} Pack20DoDontColumn
 * @property {string} title
 * @property {string[]} items
 */

/**
 * @typedef {object} Pack20BlockDoDont
 * @property {"doDont"} type
 * @property {Pack20DoDontColumn} do
 * @property {Pack20DoDontColumn} dont
 */

/**
 * @typedef {object} Pack20CompareItem
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {"before"|"after"} [tone]
 */

/**
 * @typedef {object} Pack20BlockCompare
 * @property {"compare"} type
 * @property {string} [pickerKey]
 * @property {Pack20CompareItem[]} items
 */

/**
 * @typedef {object} Pack20BlockBullets
 * @property {"bullets"} type
 * @property {string[]} items
 */

/**
 * @typedef {object} Pack20StatItem
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {object} Pack20BlockStats
 * @property {"stats"} type
 * @property {Pack20StatItem[]} items
 */

/**
 * @typedef {Pack20BlockP|Pack20BlockLead|Pack20BlockKeyBox|Pack20BlockSteps|Pack20BlockPills|Pack20BlockAccordion|Pack20BlockCards|Pack20BlockDoDont|Pack20BlockCompare|Pack20BlockBullets|Pack20BlockStats} Pack20Block
 */

/**
 * @typedef {object} Pack20Section
 * @property {string} id
 * @property {string} [number]
 * @property {string} title
 * @property {Pack20Block[]} blocks
 */

/**
 * @typedef {object} Pack20Faq
 * @property {string} id
 * @property {string} q
 * @property {string} a
 */

/**
 * @typedef {object} Pack20Article
 * @property {string} slug
 * @property {string} path
 * @property {Pack20Listing} listing
 * @property {string} seoTitle
 * @property {string} metaDescription
 * @property {{ badge: string, title: string, lead: string, meta?: { value: string, label: string }[] }} hero
 * @property {{ id: string, label: string }[]} toc
 * @property {{ id: string, label: string }[]} nav
 * @property {string[]} scrollSpyOrder
 * @property {Pack20Section[]} sections
 * @property {Pack20Faq[]} [faqs]
 * @property {{ title: string, lead: string, panelTitle?: string, panelLead?: string }} cta
 * @property {string[]} relatedSlugs
 */

export {};
