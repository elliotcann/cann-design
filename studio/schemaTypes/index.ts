// This file imports and exports all schemas

import project from './project' // Brings in the project schema we created
import teaching from './teaching'
import category from './category'

export const schemaTypes = [project, teaching, category] // Bundles our schemas together into one list (array) to be used by Sanity