// This file imports and exports all schemas

import project from './project' // Brings in the project schema we created
import education from './education'
import space from './space'
import category from './category'

export const schemaTypes = [project, education, space, category] // Bundles our schemas together into one list (array) to be used by Sanity
