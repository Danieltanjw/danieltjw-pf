
# Markdown Syntax Guide

This document provides a comprehensive guide to Markdown syntax, including headings, lists, links, code blocks, and advanced features.

---

## **Basic Markdown Syntax**

### **1. Headings**
Headings are created using `#` symbols:
```markdown
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

### **2. Paragraphs**
Simply write text as-is. Leave an empty line between paragraphs.

```markdown
This is a paragraph.

This is another paragraph.
```

### **3. Line Breaks**
Add two spaces at the end of a line or use `<br>` for a line break.
```markdown
Line 1  
Line 2
```

### **4. Horizontal Rules**
Use three or more dashes (`-`), asterisks (`*`), or underscores (`_`) for a horizontal line.
```markdown
---
```

---

## **Styling Text**

### **1. Bold**
```markdown
**This is bold text**
__This is also bold text__
```

### **2. Italics**
```markdown
*This is italicized text*
_This is also italicized text_
```

### **3. Bold and Italic**
```markdown
***This is bold and italic***
___This is also bold and italic___
```

### **4. Strikethrough**
```markdown
~~This is strikethrough~~
```

---

## **Lists**

### **1. Unordered Lists**
Use `-`, `*`, or `+` for bullet points.
```markdown
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2
```

### **2. Ordered Lists**
Use numbers followed by a period.
```markdown
1. First item
2. Second item
   1. Sub-item 1
   2. Sub-item 2
```

---

## **Links and Images**

### **1. Links**
```markdown
[Text](https://example.com)
```

### **2. Links with Title**
```markdown
[Text](https://example.com "Optional Title")
```

### **3. Images**
```markdown
![Alt Text](https://example.com/image.jpg)
```

### **4. Images with Title**
```markdown
![Alt Text](https://example.com/image.jpg "Image Title")
```

---

## **Code**

### **1. Inline Code**
Use backticks for inline code:
```markdown
`console.log('Hello World');`
```

### **2. Code Blocks**
Use triple backticks (\`\`\`) or indent lines with four spaces for code blocks:
<pre>
```javascript
function greet() {
  console.log('Hello World');
}
```
</pre>

---

## **Blockquotes**
Use `>` for blockquotes:
```markdown
> This is a blockquote.
> It can span multiple lines.
```

---

## **Tables**
Use `|` and `-` to create tables:
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

---

## **Front Matter (for Docusaurus)**
Front matter is required in Docusaurus `.md` files for metadata:
```markdown
---
title: My New Page
description: A brief description of the page.
slug: /my-new-page
---
```

---

## **HTML Support**
Markdown supports raw HTML for advanced formatting:
```markdown
<p>This is an HTML paragraph.</p>
```

---

## **Advanced Features**

### **1. Task Lists**
```markdown
- [ ] Incomplete Task
- [x] Completed Task
```

### **2. Footnotes**
```markdown
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote.
```

### **3. Definition Lists**
```markdown
Term
: Definition of the term
```

### **4. Emojis**
Use `:` syntax for emojis:
```markdown
:smile: :rocket:
```

---

## **Markdown Example**
```markdown
---
title: Markdown Syntax Guide
description: A guide to Markdown syntax with examples.
---

# Markdown Syntax Guide

## Headings
Markdown allows you to create headings using `#` symbols.

### Styling Text
- **Bold**: `**bold**`
- *Italics*: `*italics*`
- ~~Strikethrough~~: `~~strikethrough~~`

### Lists
1. First Item
2. Second Item
   - Sub-item

### Code Example
```javascript
console.log('Hello, Markdown!');
```

### Links
[Visit Docusaurus](https://docusaurus.io)

### Images
![Docusaurus Logo](https://docusaurus.io/img/docusaurus.png)

> This is a blockquote.

| Feature       | Markdown | Docusaurus |
|---------------|----------|------------|
| Easy to Use   | ✅       | ✅         |
| Flexible      | ✅       | ✅         |
```
