
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ExperienceScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  company: 'company',
  position: 'position',
  startDate: 'startDate',
  endDate: 'endDate',
  summary: 'summary',
  content: 'content',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ExperienceTagScalarFieldEnum = {
  id: 'id',
  experienceId: 'experienceId',
  tagId: 'tagId'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  title: 'title',
  description: 'description',
  content: 'content',
  repoUrl: 'repoUrl',
  demoUrl: 'demoUrl',
  coverImage: 'coverImage',
  highlights: 'highlights',
  techStack: 'techStack',
  status: 'status',
  occurredAt: 'occurredAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  experienceId: 'experienceId'
};

exports.Prisma.ProjectTagScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  tagId: 'tagId'
};

exports.Prisma.ProjectModuleScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  module: 'module'
};

exports.Prisma.TravelScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  title: 'title',
  destination: 'destination',
  startDate: 'startDate',
  endDate: 'endDate',
  coverImage: 'coverImage',
  summary: 'summary',
  content: 'content',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TravelTagScalarFieldEnum = {
  id: 'id',
  travelId: 'travelId',
  tagId: 'tagId'
};

exports.Prisma.TravelModuleScalarFieldEnum = {
  id: 'id',
  travelId: 'travelId',
  module: 'module'
};

exports.Prisma.DayPlanScalarFieldEnum = {
  id: 'id',
  date: 'date',
  location: 'location',
  content: 'content',
  images: 'images',
  transportation: 'transportation',
  accommodation: 'accommodation',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  travelId: 'travelId'
};

exports.Prisma.LifeEventScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  title: 'title',
  date: 'date',
  category: 'category',
  content: 'content',
  images: 'images',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LifeEventTagScalarFieldEnum = {
  id: 'id',
  lifeEventId: 'lifeEventId',
  tagId: 'tagId'
};

exports.Prisma.LifeEventModuleScalarFieldEnum = {
  id: 'id',
  lifeEventId: 'lifeEventId',
  module: 'module'
};

exports.Prisma.KnowledgeScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  title: 'title',
  url: 'url',
  category: 'category',
  description: 'description',
  notes: 'notes',
  status: 'status',
  occurredAt: 'occurredAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.KnowledgeTagScalarFieldEnum = {
  id: 'id',
  knowledgeId: 'knowledgeId',
  tagId: 'tagId'
};

exports.Prisma.KnowledgeModuleScalarFieldEnum = {
  id: 'id',
  knowledgeId: 'knowledgeId',
  module: 'module'
};

exports.Prisma.EntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  status: 'status',
  title: 'title',
  slug: 'slug',
  summary: 'summary',
  contentType: 'contentType',
  occurredAt: 'occurredAt',
  location: 'location',
  aiAnalysis: 'aiAnalysis',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parentId: 'parentId'
};

exports.Prisma.TextContentScalarFieldEnum = {
  id: 'id',
  entryId: 'entryId',
  content: 'content',
  excerpt: 'excerpt'
};

exports.Prisma.EntryModuleScalarFieldEnum = {
  id: 'id',
  entryId: 'entryId',
  moduleName: 'moduleName'
};

exports.Prisma.WorkExperienceScalarFieldEnum = {
  entryId: 'entryId',
  company: 'company',
  role: 'role',
  startDate: 'startDate',
  endDate: 'endDate',
  techStack: 'techStack',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectOldScalarFieldEnum = {
  entryId: 'entryId',
  name: 'name',
  description: 'description',
  techStack: 'techStack',
  link: 'link',
  highlights: 'highlights',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.KnowledgeLinkScalarFieldEnum = {
  entryId: 'entryId',
  url: 'url',
  category: 'category',
  tags: 'tags',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TravelOldScalarFieldEnum = {
  entryId: 'entryId',
  destination: 'destination',
  travelDate: 'travelDate',
  tags: 'tags',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LifestyleOldScalarFieldEnum = {
  entryId: 'entryId',
  subType: 'subType',
  tags: 'tags',
  date: 'date',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Status = exports.$Enums.Status = {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

exports.Prisma.ModelName = {
  Tag: 'Tag',
  Experience: 'Experience',
  ExperienceTag: 'ExperienceTag',
  Project: 'Project',
  ProjectTag: 'ProjectTag',
  ProjectModule: 'ProjectModule',
  Travel: 'Travel',
  TravelTag: 'TravelTag',
  TravelModule: 'TravelModule',
  DayPlan: 'DayPlan',
  LifeEvent: 'LifeEvent',
  LifeEventTag: 'LifeEventTag',
  LifeEventModule: 'LifeEventModule',
  Knowledge: 'Knowledge',
  KnowledgeTag: 'KnowledgeTag',
  KnowledgeModule: 'KnowledgeModule',
  Entry: 'Entry',
  TextContent: 'TextContent',
  EntryModule: 'EntryModule',
  WorkExperience: 'WorkExperience',
  ProjectOld: 'ProjectOld',
  KnowledgeLink: 'KnowledgeLink',
  TravelOld: 'TravelOld',
  LifestyleOld: 'LifestyleOld'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
