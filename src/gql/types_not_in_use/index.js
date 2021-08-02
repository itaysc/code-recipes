
import { stitchSchemas } from '@graphql-tools/stitch';
import {usersSchema} from './user';

export default stitchSchemas({
    subschemas: [
        usersSchema
    ]
  });