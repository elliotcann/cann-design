import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'CANN Design',

  projectId: 'b9nvsyw4',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})


/*

**Tell Sanity about our content types:**
- This is where we connect our schemas (project, teaching, category) to Sanity
- Now Sanity knows what content types exist and how they're structured

---

## The Big Picture

**What happens when you run `npm run dev` in the studio folder:**

1. Node.js starts a local web server
2. It reads `sanity.config.ts` to understand your setup
3. It sees you have three content types: project, teaching, category
4. It creates a beautiful web interface at `http://localhost:3333`
5. Your sister can now click "Projects" and add a new project with all the fields we defined

**The flow:**
```
You define schemas → Sanity builds interface → Your sister adds content → Frontend fetches content → Website displays it 

*/