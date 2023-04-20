---
inject: true
to: components/index.ts
append: true
skip_if: export { default as <%= name %> } from "./<%= name %>/<%= name %>";
---

export { default as <%= name %> } from "./<%= name %>/<%= name %>";