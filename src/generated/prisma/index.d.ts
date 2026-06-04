
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Entry
 * 
 */
export type Entry = $Result.DefaultSelection<Prisma.$EntryPayload>
/**
 * Model TextContent
 * 
 */
export type TextContent = $Result.DefaultSelection<Prisma.$TextContentPayload>
/**
 * Model EntryModule
 * 
 */
export type EntryModule = $Result.DefaultSelection<Prisma.$EntryModulePayload>
/**
 * Model WorkExperience
 * 
 */
export type WorkExperience = $Result.DefaultSelection<Prisma.$WorkExperiencePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model KnowledgeLink
 * 
 */
export type KnowledgeLink = $Result.DefaultSelection<Prisma.$KnowledgeLinkPayload>
/**
 * Model Travel
 * 
 */
export type Travel = $Result.DefaultSelection<Prisma.$TravelPayload>
/**
 * Model Lifestyle
 * 
 */
export type Lifestyle = $Result.DefaultSelection<Prisma.$LifestylePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EntryType: {
  work_experience: 'work_experience',
  project: 'project',
  knowledge_link: 'knowledge_link',
  travel: 'travel',
  food: 'food',
  daily: 'daily',
  other: 'other'
};

export type EntryType = (typeof EntryType)[keyof typeof EntryType]


export const EntryStatus: {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

export type EntryStatus = (typeof EntryStatus)[keyof typeof EntryStatus]


export const ModuleName: {
  resume: 'resume',
  timeline: 'timeline',
  projects: 'projects',
  knowledge: 'knowledge',
  blog: 'blog',
  travel: 'travel',
  lifestyle: 'lifestyle',
  games: 'games'
};

export type ModuleName = (typeof ModuleName)[keyof typeof ModuleName]

}

export type EntryType = $Enums.EntryType

export const EntryType: typeof $Enums.EntryType

export type EntryStatus = $Enums.EntryStatus

export const EntryStatus: typeof $Enums.EntryStatus

export type ModuleName = $Enums.ModuleName

export const ModuleName: typeof $Enums.ModuleName

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entries
 * const entries = await prisma.entry.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Entries
   * const entries = await prisma.entry.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.entry`: Exposes CRUD operations for the **Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.EntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textContent`: Exposes CRUD operations for the **TextContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextContents
    * const textContents = await prisma.textContent.findMany()
    * ```
    */
  get textContent(): Prisma.TextContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entryModule`: Exposes CRUD operations for the **EntryModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntryModules
    * const entryModules = await prisma.entryModule.findMany()
    * ```
    */
  get entryModule(): Prisma.EntryModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workExperience`: Exposes CRUD operations for the **WorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperiences
    * const workExperiences = await prisma.workExperience.findMany()
    * ```
    */
  get workExperience(): Prisma.WorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledgeLink`: Exposes CRUD operations for the **KnowledgeLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeLinks
    * const knowledgeLinks = await prisma.knowledgeLink.findMany()
    * ```
    */
  get knowledgeLink(): Prisma.KnowledgeLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travel`: Exposes CRUD operations for the **Travel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travels
    * const travels = await prisma.travel.findMany()
    * ```
    */
  get travel(): Prisma.TravelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lifestyle`: Exposes CRUD operations for the **Lifestyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lifestyles
    * const lifestyles = await prisma.lifestyle.findMany()
    * ```
    */
  get lifestyle(): Prisma.LifestyleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Entry: 'Entry',
    TextContent: 'TextContent',
    EntryModule: 'EntryModule',
    WorkExperience: 'WorkExperience',
    Project: 'Project',
    KnowledgeLink: 'KnowledgeLink',
    Travel: 'Travel',
    Lifestyle: 'Lifestyle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "entry" | "textContent" | "entryModule" | "workExperience" | "project" | "knowledgeLink" | "travel" | "lifestyle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Entry: {
        payload: Prisma.$EntryPayload<ExtArgs>
        fields: Prisma.EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findFirst: {
            args: Prisma.EntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findMany: {
            args: Prisma.EntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          create: {
            args: Prisma.EntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          createMany: {
            args: Prisma.EntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          delete: {
            args: Prisma.EntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          update: {
            args: Prisma.EntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          deleteMany: {
            args: Prisma.EntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          upsert: {
            args: Prisma.EntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.EntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryCountArgs<ExtArgs>
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
          }
        }
      }
      TextContent: {
        payload: Prisma.$TextContentPayload<ExtArgs>
        fields: Prisma.TextContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          findFirst: {
            args: Prisma.TextContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          findMany: {
            args: Prisma.TextContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>[]
          }
          create: {
            args: Prisma.TextContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          createMany: {
            args: Prisma.TextContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>[]
          }
          delete: {
            args: Prisma.TextContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          update: {
            args: Prisma.TextContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          deleteMany: {
            args: Prisma.TextContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>[]
          }
          upsert: {
            args: Prisma.TextContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          aggregate: {
            args: Prisma.TextContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextContent>
          }
          groupBy: {
            args: Prisma.TextContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextContentCountArgs<ExtArgs>
            result: $Utils.Optional<TextContentCountAggregateOutputType> | number
          }
        }
      }
      EntryModule: {
        payload: Prisma.$EntryModulePayload<ExtArgs>
        fields: Prisma.EntryModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>
          }
          findFirst: {
            args: Prisma.EntryModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>
          }
          findMany: {
            args: Prisma.EntryModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>[]
          }
          create: {
            args: Prisma.EntryModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>
          }
          createMany: {
            args: Prisma.EntryModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>[]
          }
          delete: {
            args: Prisma.EntryModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>
          }
          update: {
            args: Prisma.EntryModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>
          }
          deleteMany: {
            args: Prisma.EntryModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntryModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>[]
          }
          upsert: {
            args: Prisma.EntryModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryModulePayload>
          }
          aggregate: {
            args: Prisma.EntryModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntryModule>
          }
          groupBy: {
            args: Prisma.EntryModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryModuleCountArgs<ExtArgs>
            result: $Utils.Optional<EntryModuleCountAggregateOutputType> | number
          }
        }
      }
      WorkExperience: {
        payload: Prisma.$WorkExperiencePayload<ExtArgs>
        fields: Prisma.WorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findMany: {
            args: Prisma.WorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          create: {
            args: Prisma.WorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          createMany: {
            args: Prisma.WorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.WorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          update: {
            args: Prisma.WorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.WorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperience>
          }
          groupBy: {
            args: Prisma.WorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeLink: {
        payload: Prisma.$KnowledgeLinkPayload<ExtArgs>
        fields: Prisma.KnowledgeLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>
          }
          findMany: {
            args: Prisma.KnowledgeLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>[]
          }
          create: {
            args: Prisma.KnowledgeLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>
          }
          createMany: {
            args: Prisma.KnowledgeLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>
          }
          update: {
            args: Prisma.KnowledgeLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeLinkPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeLink>
          }
          groupBy: {
            args: Prisma.KnowledgeLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeLinkCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeLinkCountAggregateOutputType> | number
          }
        }
      }
      Travel: {
        payload: Prisma.$TravelPayload<ExtArgs>
        fields: Prisma.TravelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findFirst: {
            args: Prisma.TravelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findMany: {
            args: Prisma.TravelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          create: {
            args: Prisma.TravelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          createMany: {
            args: Prisma.TravelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          delete: {
            args: Prisma.TravelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          update: {
            args: Prisma.TravelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          deleteMany: {
            args: Prisma.TravelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          upsert: {
            args: Prisma.TravelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          aggregate: {
            args: Prisma.TravelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravel>
          }
          groupBy: {
            args: Prisma.TravelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelCountArgs<ExtArgs>
            result: $Utils.Optional<TravelCountAggregateOutputType> | number
          }
        }
      }
      Lifestyle: {
        payload: Prisma.$LifestylePayload<ExtArgs>
        fields: Prisma.LifestyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LifestyleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LifestyleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          findFirst: {
            args: Prisma.LifestyleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LifestyleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          findMany: {
            args: Prisma.LifestyleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>[]
          }
          create: {
            args: Prisma.LifestyleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          createMany: {
            args: Prisma.LifestyleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LifestyleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>[]
          }
          delete: {
            args: Prisma.LifestyleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          update: {
            args: Prisma.LifestyleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          deleteMany: {
            args: Prisma.LifestyleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LifestyleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LifestyleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>[]
          }
          upsert: {
            args: Prisma.LifestyleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          aggregate: {
            args: Prisma.LifestyleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLifestyle>
          }
          groupBy: {
            args: Prisma.LifestyleGroupByArgs<ExtArgs>
            result: $Utils.Optional<LifestyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.LifestyleCountArgs<ExtArgs>
            result: $Utils.Optional<LifestyleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    entry?: EntryOmit
    textContent?: TextContentOmit
    entryModule?: EntryModuleOmit
    workExperience?: WorkExperienceOmit
    project?: ProjectOmit
    knowledgeLink?: KnowledgeLinkOmit
    travel?: TravelOmit
    lifestyle?: LifestyleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EntryCountOutputType
   */

  export type EntryCountOutputType = {
    children: number
    modules: number
  }

  export type EntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | EntryCountOutputTypeCountChildrenArgs
    modules?: boolean | EntryCountOutputTypeCountModulesArgs
  }

  // Custom InputTypes
  /**
   * EntryCountOutputType without action
   */
  export type EntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryCountOutputType
     */
    select?: EntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntryCountOutputType without action
   */
  export type EntryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
  }

  /**
   * EntryCountOutputType without action
   */
  export type EntryCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryModuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.EntryType | null
    status: $Enums.EntryStatus | null
    title: string | null
    slug: string | null
    summary: string | null
    contentType: string | null
    occurredAt: Date | null
    location: string | null
    aiAnalysis: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
  }

  export type EntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.EntryType | null
    status: $Enums.EntryStatus | null
    title: string | null
    slug: string | null
    summary: string | null
    contentType: string | null
    occurredAt: Date | null
    location: string | null
    aiAnalysis: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    title: number
    slug: number
    summary: number
    contentType: number
    occurredAt: number
    location: number
    aiAnalysis: number
    createdAt: number
    updatedAt: number
    parentId: number
    _all: number
  }


  export type EntryMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    title?: true
    slug?: true
    summary?: true
    contentType?: true
    occurredAt?: true
    location?: true
    aiAnalysis?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    title?: true
    slug?: true
    summary?: true
    contentType?: true
    occurredAt?: true
    location?: true
    aiAnalysis?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    title?: true
    slug?: true
    summary?: true
    contentType?: true
    occurredAt?: true
    location?: true
    aiAnalysis?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entry to aggregate.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithAggregationInput | EntryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.EntryType
    status: $Enums.EntryStatus
    title: string
    slug: string
    summary: string | null
    contentType: string
    occurredAt: Date | null
    location: string | null
    aiAnalysis: string | null
    createdAt: Date
    updatedAt: Date
    parentId: string | null
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    contentType?: boolean
    occurredAt?: boolean
    location?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | Entry$parentArgs<ExtArgs>
    children?: boolean | Entry$childrenArgs<ExtArgs>
    textContent?: boolean | Entry$textContentArgs<ExtArgs>
    modules?: boolean | Entry$modulesArgs<ExtArgs>
    workExp?: boolean | Entry$workExpArgs<ExtArgs>
    project?: boolean | Entry$projectArgs<ExtArgs>
    knowledge?: boolean | Entry$knowledgeArgs<ExtArgs>
    travel?: boolean | Entry$travelArgs<ExtArgs>
    lifestyle?: boolean | Entry$lifestyleArgs<ExtArgs>
    _count?: boolean | EntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    contentType?: boolean
    occurredAt?: boolean
    location?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | Entry$parentArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    contentType?: boolean
    occurredAt?: boolean
    location?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | Entry$parentArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    contentType?: boolean
    occurredAt?: boolean
    location?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
  }

  export type EntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "status" | "title" | "slug" | "summary" | "contentType" | "occurredAt" | "location" | "aiAnalysis" | "createdAt" | "updatedAt" | "parentId", ExtArgs["result"]["entry"]>
  export type EntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Entry$parentArgs<ExtArgs>
    children?: boolean | Entry$childrenArgs<ExtArgs>
    textContent?: boolean | Entry$textContentArgs<ExtArgs>
    modules?: boolean | Entry$modulesArgs<ExtArgs>
    workExp?: boolean | Entry$workExpArgs<ExtArgs>
    project?: boolean | Entry$projectArgs<ExtArgs>
    knowledge?: boolean | Entry$knowledgeArgs<ExtArgs>
    travel?: boolean | Entry$travelArgs<ExtArgs>
    lifestyle?: boolean | Entry$lifestyleArgs<ExtArgs>
    _count?: boolean | EntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Entry$parentArgs<ExtArgs>
  }
  export type EntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Entry$parentArgs<ExtArgs>
  }

  export type $EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entry"
    objects: {
      parent: Prisma.$EntryPayload<ExtArgs> | null
      children: Prisma.$EntryPayload<ExtArgs>[]
      textContent: Prisma.$TextContentPayload<ExtArgs> | null
      modules: Prisma.$EntryModulePayload<ExtArgs>[]
      workExp: Prisma.$WorkExperiencePayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs> | null
      knowledge: Prisma.$KnowledgeLinkPayload<ExtArgs> | null
      travel: Prisma.$TravelPayload<ExtArgs> | null
      lifestyle: Prisma.$LifestylePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.EntryType
      status: $Enums.EntryStatus
      title: string
      slug: string
      summary: string | null
      contentType: string
      occurredAt: Date | null
      location: string | null
      aiAnalysis: string | null
      createdAt: Date
      updatedAt: Date
      parentId: string | null
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }

  type EntryGetPayload<S extends boolean | null | undefined | EntryDefaultArgs> = $Result.GetResult<Prisma.$EntryPayload, S>

  type EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entry'], meta: { name: 'Entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {EntryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryFindUniqueArgs>(args: SelectSubset<T, EntryFindUniqueArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryFindFirstArgs>(args?: SelectSubset<T, EntryFindFirstArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryFindManyArgs>(args?: SelectSubset<T, EntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry.
     * @param {EntryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
     */
    create<T extends EntryCreateArgs>(args: SelectSubset<T, EntryCreateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {EntryCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryCreateManyArgs>(args?: SelectSubset<T, EntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entries and returns the data saved in the database.
     * @param {EntryCreateManyAndReturnArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entry.
     * @param {EntryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
     */
    delete<T extends EntryDeleteArgs>(args: SelectSubset<T, EntryDeleteArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry.
     * @param {EntryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryUpdateArgs>(args: SelectSubset<T, EntryUpdateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {EntryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryDeleteManyArgs>(args?: SelectSubset<T, EntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryUpdateManyArgs>(args: SelectSubset<T, EntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries and returns the data updated in the database.
     * @param {EntryUpdateManyAndReturnArgs} args - Arguments to update many Entries.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entry.
     * @param {EntryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
     */
    upsert<T extends EntryUpsertArgs>(args: SelectSubset<T, EntryUpsertArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends EntryCountArgs>(
      args?: Subset<T, EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryGroupByArgs['orderBy'] }
        : { orderBy?: EntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entry model
   */
  readonly fields: EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Entry$parentArgs<ExtArgs> = {}>(args?: Subset<T, Entry$parentArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Entry$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Entry$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    textContent<T extends Entry$textContentArgs<ExtArgs> = {}>(args?: Subset<T, Entry$textContentArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    modules<T extends Entry$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Entry$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workExp<T extends Entry$workExpArgs<ExtArgs> = {}>(args?: Subset<T, Entry$workExpArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends Entry$projectArgs<ExtArgs> = {}>(args?: Subset<T, Entry$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    knowledge<T extends Entry$knowledgeArgs<ExtArgs> = {}>(args?: Subset<T, Entry$knowledgeArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    travel<T extends Entry$travelArgs<ExtArgs> = {}>(args?: Subset<T, Entry$travelArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lifestyle<T extends Entry$lifestyleArgs<ExtArgs> = {}>(args?: Subset<T, Entry$lifestyleArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entry model
   */ 
  interface EntryFieldRefs {
    readonly id: FieldRef<"Entry", 'String'>
    readonly userId: FieldRef<"Entry", 'String'>
    readonly type: FieldRef<"Entry", 'EntryType'>
    readonly status: FieldRef<"Entry", 'EntryStatus'>
    readonly title: FieldRef<"Entry", 'String'>
    readonly slug: FieldRef<"Entry", 'String'>
    readonly summary: FieldRef<"Entry", 'String'>
    readonly contentType: FieldRef<"Entry", 'String'>
    readonly occurredAt: FieldRef<"Entry", 'DateTime'>
    readonly location: FieldRef<"Entry", 'String'>
    readonly aiAnalysis: FieldRef<"Entry", 'String'>
    readonly createdAt: FieldRef<"Entry", 'DateTime'>
    readonly updatedAt: FieldRef<"Entry", 'DateTime'>
    readonly parentId: FieldRef<"Entry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entry findUnique
   */
  export type EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findUniqueOrThrow
   */
  export type EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findFirst
   */
  export type EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findFirstOrThrow
   */
  export type EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findMany
   */
  export type EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entries to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry create
   */
  export type EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to create a Entry.
     */
    data: XOR<EntryCreateInput, EntryUncheckedCreateInput>
  }

  /**
   * Entry createMany
   */
  export type EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
  }

  /**
   * Entry createManyAndReturn
   */
  export type EntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry update
   */
  export type EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to update a Entry.
     */
    data: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
    /**
     * Choose, which Entry to update.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry updateMany
   */
  export type EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry updateManyAndReturn
   */
  export type EntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry upsert
   */
  export type EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The filter to search for the Entry to update in case it exists.
     */
    where: EntryWhereUniqueInput
    /**
     * In case the Entry found by the `where` argument doesn't exist, create a new Entry with this data.
     */
    create: XOR<EntryCreateInput, EntryUncheckedCreateInput>
    /**
     * In case the Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
  }

  /**
   * Entry delete
   */
  export type EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter which Entry to delete.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry deleteMany
   */
  export type EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entries to delete
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to delete.
     */
    limit?: number
  }

  /**
   * Entry.parent
   */
  export type Entry$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    where?: EntryWhereInput
  }

  /**
   * Entry.children
   */
  export type Entry$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    cursor?: EntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry.textContent
   */
  export type Entry$textContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    where?: TextContentWhereInput
  }

  /**
   * Entry.modules
   */
  export type Entry$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    where?: EntryModuleWhereInput
    orderBy?: EntryModuleOrderByWithRelationInput | EntryModuleOrderByWithRelationInput[]
    cursor?: EntryModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryModuleScalarFieldEnum | EntryModuleScalarFieldEnum[]
  }

  /**
   * Entry.workExp
   */
  export type Entry$workExpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    where?: WorkExperienceWhereInput
  }

  /**
   * Entry.project
   */
  export type Entry$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Entry.knowledge
   */
  export type Entry$knowledgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    where?: KnowledgeLinkWhereInput
  }

  /**
   * Entry.travel
   */
  export type Entry$travelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
  }

  /**
   * Entry.lifestyle
   */
  export type Entry$lifestyleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    where?: LifestyleWhereInput
  }

  /**
   * Entry without action
   */
  export type EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
  }


  /**
   * Model TextContent
   */

  export type AggregateTextContent = {
    _count: TextContentCountAggregateOutputType | null
    _min: TextContentMinAggregateOutputType | null
    _max: TextContentMaxAggregateOutputType | null
  }

  export type TextContentMinAggregateOutputType = {
    id: string | null
    entryId: string | null
    content: string | null
    excerpt: string | null
  }

  export type TextContentMaxAggregateOutputType = {
    id: string | null
    entryId: string | null
    content: string | null
    excerpt: string | null
  }

  export type TextContentCountAggregateOutputType = {
    id: number
    entryId: number
    content: number
    excerpt: number
    _all: number
  }


  export type TextContentMinAggregateInputType = {
    id?: true
    entryId?: true
    content?: true
    excerpt?: true
  }

  export type TextContentMaxAggregateInputType = {
    id?: true
    entryId?: true
    content?: true
    excerpt?: true
  }

  export type TextContentCountAggregateInputType = {
    id?: true
    entryId?: true
    content?: true
    excerpt?: true
    _all?: true
  }

  export type TextContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextContent to aggregate.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextContents
    **/
    _count?: true | TextContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextContentMaxAggregateInputType
  }

  export type GetTextContentAggregateType<T extends TextContentAggregateArgs> = {
        [P in keyof T & keyof AggregateTextContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextContent[P]>
      : GetScalarType<T[P], AggregateTextContent[P]>
  }




  export type TextContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextContentWhereInput
    orderBy?: TextContentOrderByWithAggregationInput | TextContentOrderByWithAggregationInput[]
    by: TextContentScalarFieldEnum[] | TextContentScalarFieldEnum
    having?: TextContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextContentCountAggregateInputType | true
    _min?: TextContentMinAggregateInputType
    _max?: TextContentMaxAggregateInputType
  }

  export type TextContentGroupByOutputType = {
    id: string
    entryId: string
    content: string
    excerpt: string | null
    _count: TextContentCountAggregateOutputType | null
    _min: TextContentMinAggregateOutputType | null
    _max: TextContentMaxAggregateOutputType | null
  }

  type GetTextContentGroupByPayload<T extends TextContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextContentGroupByOutputType[P]>
            : GetScalarType<T[P], TextContentGroupByOutputType[P]>
        }
      >
    >


  export type TextContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    content?: boolean
    excerpt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textContent"]>

  export type TextContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    content?: boolean
    excerpt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textContent"]>

  export type TextContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    content?: boolean
    excerpt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textContent"]>

  export type TextContentSelectScalar = {
    id?: boolean
    entryId?: boolean
    content?: boolean
    excerpt?: boolean
  }

  export type TextContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entryId" | "content" | "excerpt", ExtArgs["result"]["textContent"]>
  export type TextContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type TextContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type TextContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $TextContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TextContent"
    objects: {
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entryId: string
      content: string
      excerpt: string | null
    }, ExtArgs["result"]["textContent"]>
    composites: {}
  }

  type TextContentGetPayload<S extends boolean | null | undefined | TextContentDefaultArgs> = $Result.GetResult<Prisma.$TextContentPayload, S>

  type TextContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextContentCountAggregateInputType | true
    }

  export interface TextContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TextContent'], meta: { name: 'TextContent' } }
    /**
     * Find zero or one TextContent that matches the filter.
     * @param {TextContentFindUniqueArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextContentFindUniqueArgs>(args: SelectSubset<T, TextContentFindUniqueArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TextContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextContentFindUniqueOrThrowArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextContentFindUniqueOrThrowArgs>(args: SelectSubset<T, TextContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentFindFirstArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextContentFindFirstArgs>(args?: SelectSubset<T, TextContentFindFirstArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentFindFirstOrThrowArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextContentFindFirstOrThrowArgs>(args?: SelectSubset<T, TextContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TextContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextContents
     * const textContents = await prisma.textContent.findMany()
     * 
     * // Get first 10 TextContents
     * const textContents = await prisma.textContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textContentWithIdOnly = await prisma.textContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextContentFindManyArgs>(args?: SelectSubset<T, TextContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TextContent.
     * @param {TextContentCreateArgs} args - Arguments to create a TextContent.
     * @example
     * // Create one TextContent
     * const TextContent = await prisma.textContent.create({
     *   data: {
     *     // ... data to create a TextContent
     *   }
     * })
     * 
     */
    create<T extends TextContentCreateArgs>(args: SelectSubset<T, TextContentCreateArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TextContents.
     * @param {TextContentCreateManyArgs} args - Arguments to create many TextContents.
     * @example
     * // Create many TextContents
     * const textContent = await prisma.textContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextContentCreateManyArgs>(args?: SelectSubset<T, TextContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TextContents and returns the data saved in the database.
     * @param {TextContentCreateManyAndReturnArgs} args - Arguments to create many TextContents.
     * @example
     * // Create many TextContents
     * const textContent = await prisma.textContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TextContents and only return the `id`
     * const textContentWithIdOnly = await prisma.textContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextContentCreateManyAndReturnArgs>(args?: SelectSubset<T, TextContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TextContent.
     * @param {TextContentDeleteArgs} args - Arguments to delete one TextContent.
     * @example
     * // Delete one TextContent
     * const TextContent = await prisma.textContent.delete({
     *   where: {
     *     // ... filter to delete one TextContent
     *   }
     * })
     * 
     */
    delete<T extends TextContentDeleteArgs>(args: SelectSubset<T, TextContentDeleteArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TextContent.
     * @param {TextContentUpdateArgs} args - Arguments to update one TextContent.
     * @example
     * // Update one TextContent
     * const textContent = await prisma.textContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextContentUpdateArgs>(args: SelectSubset<T, TextContentUpdateArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TextContents.
     * @param {TextContentDeleteManyArgs} args - Arguments to filter TextContents to delete.
     * @example
     * // Delete a few TextContents
     * const { count } = await prisma.textContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextContentDeleteManyArgs>(args?: SelectSubset<T, TextContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextContents
     * const textContent = await prisma.textContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextContentUpdateManyArgs>(args: SelectSubset<T, TextContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextContents and returns the data updated in the database.
     * @param {TextContentUpdateManyAndReturnArgs} args - Arguments to update many TextContents.
     * @example
     * // Update many TextContents
     * const textContent = await prisma.textContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TextContents and only return the `id`
     * const textContentWithIdOnly = await prisma.textContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TextContentUpdateManyAndReturnArgs>(args: SelectSubset<T, TextContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TextContent.
     * @param {TextContentUpsertArgs} args - Arguments to update or create a TextContent.
     * @example
     * // Update or create a TextContent
     * const textContent = await prisma.textContent.upsert({
     *   create: {
     *     // ... data to create a TextContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextContent we want to update
     *   }
     * })
     */
    upsert<T extends TextContentUpsertArgs>(args: SelectSubset<T, TextContentUpsertArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TextContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentCountArgs} args - Arguments to filter TextContents to count.
     * @example
     * // Count the number of TextContents
     * const count = await prisma.textContent.count({
     *   where: {
     *     // ... the filter for the TextContents we want to count
     *   }
     * })
    **/
    count<T extends TextContentCountArgs>(
      args?: Subset<T, TextContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TextContentAggregateArgs>(args: Subset<T, TextContentAggregateArgs>): Prisma.PrismaPromise<GetTextContentAggregateType<T>>

    /**
     * Group by TextContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TextContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextContentGroupByArgs['orderBy'] }
        : { orderBy?: TextContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TextContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TextContent model
   */
  readonly fields: TextContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TextContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TextContent model
   */ 
  interface TextContentFieldRefs {
    readonly id: FieldRef<"TextContent", 'String'>
    readonly entryId: FieldRef<"TextContent", 'String'>
    readonly content: FieldRef<"TextContent", 'String'>
    readonly excerpt: FieldRef<"TextContent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TextContent findUnique
   */
  export type TextContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent findUniqueOrThrow
   */
  export type TextContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent findFirst
   */
  export type TextContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextContents.
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextContents.
     */
    distinct?: TextContentScalarFieldEnum | TextContentScalarFieldEnum[]
  }

  /**
   * TextContent findFirstOrThrow
   */
  export type TextContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextContents.
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextContents.
     */
    distinct?: TextContentScalarFieldEnum | TextContentScalarFieldEnum[]
  }

  /**
   * TextContent findMany
   */
  export type TextContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContents to fetch.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextContents.
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    distinct?: TextContentScalarFieldEnum | TextContentScalarFieldEnum[]
  }

  /**
   * TextContent create
   */
  export type TextContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * The data needed to create a TextContent.
     */
    data: XOR<TextContentCreateInput, TextContentUncheckedCreateInput>
  }

  /**
   * TextContent createMany
   */
  export type TextContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TextContents.
     */
    data: TextContentCreateManyInput | TextContentCreateManyInput[]
  }

  /**
   * TextContent createManyAndReturn
   */
  export type TextContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * The data used to create many TextContents.
     */
    data: TextContentCreateManyInput | TextContentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TextContent update
   */
  export type TextContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * The data needed to update a TextContent.
     */
    data: XOR<TextContentUpdateInput, TextContentUncheckedUpdateInput>
    /**
     * Choose, which TextContent to update.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent updateMany
   */
  export type TextContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TextContents.
     */
    data: XOR<TextContentUpdateManyMutationInput, TextContentUncheckedUpdateManyInput>
    /**
     * Filter which TextContents to update
     */
    where?: TextContentWhereInput
    /**
     * Limit how many TextContents to update.
     */
    limit?: number
  }

  /**
   * TextContent updateManyAndReturn
   */
  export type TextContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * The data used to update TextContents.
     */
    data: XOR<TextContentUpdateManyMutationInput, TextContentUncheckedUpdateManyInput>
    /**
     * Filter which TextContents to update
     */
    where?: TextContentWhereInput
    /**
     * Limit how many TextContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TextContent upsert
   */
  export type TextContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * The filter to search for the TextContent to update in case it exists.
     */
    where: TextContentWhereUniqueInput
    /**
     * In case the TextContent found by the `where` argument doesn't exist, create a new TextContent with this data.
     */
    create: XOR<TextContentCreateInput, TextContentUncheckedCreateInput>
    /**
     * In case the TextContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextContentUpdateInput, TextContentUncheckedUpdateInput>
  }

  /**
   * TextContent delete
   */
  export type TextContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter which TextContent to delete.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent deleteMany
   */
  export type TextContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextContents to delete
     */
    where?: TextContentWhereInput
    /**
     * Limit how many TextContents to delete.
     */
    limit?: number
  }

  /**
   * TextContent without action
   */
  export type TextContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
  }


  /**
   * Model EntryModule
   */

  export type AggregateEntryModule = {
    _count: EntryModuleCountAggregateOutputType | null
    _min: EntryModuleMinAggregateOutputType | null
    _max: EntryModuleMaxAggregateOutputType | null
  }

  export type EntryModuleMinAggregateOutputType = {
    id: string | null
    entryId: string | null
    moduleName: $Enums.ModuleName | null
  }

  export type EntryModuleMaxAggregateOutputType = {
    id: string | null
    entryId: string | null
    moduleName: $Enums.ModuleName | null
  }

  export type EntryModuleCountAggregateOutputType = {
    id: number
    entryId: number
    moduleName: number
    _all: number
  }


  export type EntryModuleMinAggregateInputType = {
    id?: true
    entryId?: true
    moduleName?: true
  }

  export type EntryModuleMaxAggregateInputType = {
    id?: true
    entryId?: true
    moduleName?: true
  }

  export type EntryModuleCountAggregateInputType = {
    id?: true
    entryId?: true
    moduleName?: true
    _all?: true
  }

  export type EntryModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntryModule to aggregate.
     */
    where?: EntryModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryModules to fetch.
     */
    orderBy?: EntryModuleOrderByWithRelationInput | EntryModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntryModules
    **/
    _count?: true | EntryModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryModuleMaxAggregateInputType
  }

  export type GetEntryModuleAggregateType<T extends EntryModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateEntryModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntryModule[P]>
      : GetScalarType<T[P], AggregateEntryModule[P]>
  }




  export type EntryModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryModuleWhereInput
    orderBy?: EntryModuleOrderByWithAggregationInput | EntryModuleOrderByWithAggregationInput[]
    by: EntryModuleScalarFieldEnum[] | EntryModuleScalarFieldEnum
    having?: EntryModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryModuleCountAggregateInputType | true
    _min?: EntryModuleMinAggregateInputType
    _max?: EntryModuleMaxAggregateInputType
  }

  export type EntryModuleGroupByOutputType = {
    id: string
    entryId: string
    moduleName: $Enums.ModuleName
    _count: EntryModuleCountAggregateOutputType | null
    _min: EntryModuleMinAggregateOutputType | null
    _max: EntryModuleMaxAggregateOutputType | null
  }

  type GetEntryModuleGroupByPayload<T extends EntryModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryModuleGroupByOutputType[P]>
            : GetScalarType<T[P], EntryModuleGroupByOutputType[P]>
        }
      >
    >


  export type EntryModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    moduleName?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entryModule"]>

  export type EntryModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    moduleName?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entryModule"]>

  export type EntryModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    moduleName?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entryModule"]>

  export type EntryModuleSelectScalar = {
    id?: boolean
    entryId?: boolean
    moduleName?: boolean
  }

  export type EntryModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entryId" | "moduleName", ExtArgs["result"]["entryModule"]>
  export type EntryModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type EntryModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type EntryModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $EntryModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntryModule"
    objects: {
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entryId: string
      moduleName: $Enums.ModuleName
    }, ExtArgs["result"]["entryModule"]>
    composites: {}
  }

  type EntryModuleGetPayload<S extends boolean | null | undefined | EntryModuleDefaultArgs> = $Result.GetResult<Prisma.$EntryModulePayload, S>

  type EntryModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryModuleCountAggregateInputType | true
    }

  export interface EntryModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntryModule'], meta: { name: 'EntryModule' } }
    /**
     * Find zero or one EntryModule that matches the filter.
     * @param {EntryModuleFindUniqueArgs} args - Arguments to find a EntryModule
     * @example
     * // Get one EntryModule
     * const entryModule = await prisma.entryModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryModuleFindUniqueArgs>(args: SelectSubset<T, EntryModuleFindUniqueArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EntryModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryModuleFindUniqueOrThrowArgs} args - Arguments to find a EntryModule
     * @example
     * // Get one EntryModule
     * const entryModule = await prisma.entryModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntryModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryModuleFindFirstArgs} args - Arguments to find a EntryModule
     * @example
     * // Get one EntryModule
     * const entryModule = await prisma.entryModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryModuleFindFirstArgs>(args?: SelectSubset<T, EntryModuleFindFirstArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntryModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryModuleFindFirstOrThrowArgs} args - Arguments to find a EntryModule
     * @example
     * // Get one EntryModule
     * const entryModule = await prisma.entryModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EntryModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntryModules
     * const entryModules = await prisma.entryModule.findMany()
     * 
     * // Get first 10 EntryModules
     * const entryModules = await prisma.entryModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryModuleWithIdOnly = await prisma.entryModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryModuleFindManyArgs>(args?: SelectSubset<T, EntryModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EntryModule.
     * @param {EntryModuleCreateArgs} args - Arguments to create a EntryModule.
     * @example
     * // Create one EntryModule
     * const EntryModule = await prisma.entryModule.create({
     *   data: {
     *     // ... data to create a EntryModule
     *   }
     * })
     * 
     */
    create<T extends EntryModuleCreateArgs>(args: SelectSubset<T, EntryModuleCreateArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EntryModules.
     * @param {EntryModuleCreateManyArgs} args - Arguments to create many EntryModules.
     * @example
     * // Create many EntryModules
     * const entryModule = await prisma.entryModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryModuleCreateManyArgs>(args?: SelectSubset<T, EntryModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EntryModules and returns the data saved in the database.
     * @param {EntryModuleCreateManyAndReturnArgs} args - Arguments to create many EntryModules.
     * @example
     * // Create many EntryModules
     * const entryModule = await prisma.entryModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EntryModules and only return the `id`
     * const entryModuleWithIdOnly = await prisma.entryModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EntryModule.
     * @param {EntryModuleDeleteArgs} args - Arguments to delete one EntryModule.
     * @example
     * // Delete one EntryModule
     * const EntryModule = await prisma.entryModule.delete({
     *   where: {
     *     // ... filter to delete one EntryModule
     *   }
     * })
     * 
     */
    delete<T extends EntryModuleDeleteArgs>(args: SelectSubset<T, EntryModuleDeleteArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EntryModule.
     * @param {EntryModuleUpdateArgs} args - Arguments to update one EntryModule.
     * @example
     * // Update one EntryModule
     * const entryModule = await prisma.entryModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryModuleUpdateArgs>(args: SelectSubset<T, EntryModuleUpdateArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EntryModules.
     * @param {EntryModuleDeleteManyArgs} args - Arguments to filter EntryModules to delete.
     * @example
     * // Delete a few EntryModules
     * const { count } = await prisma.entryModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryModuleDeleteManyArgs>(args?: SelectSubset<T, EntryModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntryModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntryModules
     * const entryModule = await prisma.entryModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryModuleUpdateManyArgs>(args: SelectSubset<T, EntryModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntryModules and returns the data updated in the database.
     * @param {EntryModuleUpdateManyAndReturnArgs} args - Arguments to update many EntryModules.
     * @example
     * // Update many EntryModules
     * const entryModule = await prisma.entryModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EntryModules and only return the `id`
     * const entryModuleWithIdOnly = await prisma.entryModule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntryModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, EntryModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EntryModule.
     * @param {EntryModuleUpsertArgs} args - Arguments to update or create a EntryModule.
     * @example
     * // Update or create a EntryModule
     * const entryModule = await prisma.entryModule.upsert({
     *   create: {
     *     // ... data to create a EntryModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntryModule we want to update
     *   }
     * })
     */
    upsert<T extends EntryModuleUpsertArgs>(args: SelectSubset<T, EntryModuleUpsertArgs<ExtArgs>>): Prisma__EntryModuleClient<$Result.GetResult<Prisma.$EntryModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EntryModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryModuleCountArgs} args - Arguments to filter EntryModules to count.
     * @example
     * // Count the number of EntryModules
     * const count = await prisma.entryModule.count({
     *   where: {
     *     // ... the filter for the EntryModules we want to count
     *   }
     * })
    **/
    count<T extends EntryModuleCountArgs>(
      args?: Subset<T, EntryModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntryModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntryModuleAggregateArgs>(args: Subset<T, EntryModuleAggregateArgs>): Prisma.PrismaPromise<GetEntryModuleAggregateType<T>>

    /**
     * Group by EntryModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntryModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryModuleGroupByArgs['orderBy'] }
        : { orderBy?: EntryModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntryModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntryModule model
   */
  readonly fields: EntryModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntryModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EntryModule model
   */ 
  interface EntryModuleFieldRefs {
    readonly id: FieldRef<"EntryModule", 'String'>
    readonly entryId: FieldRef<"EntryModule", 'String'>
    readonly moduleName: FieldRef<"EntryModule", 'ModuleName'>
  }
    

  // Custom InputTypes
  /**
   * EntryModule findUnique
   */
  export type EntryModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * Filter, which EntryModule to fetch.
     */
    where: EntryModuleWhereUniqueInput
  }

  /**
   * EntryModule findUniqueOrThrow
   */
  export type EntryModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * Filter, which EntryModule to fetch.
     */
    where: EntryModuleWhereUniqueInput
  }

  /**
   * EntryModule findFirst
   */
  export type EntryModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * Filter, which EntryModule to fetch.
     */
    where?: EntryModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryModules to fetch.
     */
    orderBy?: EntryModuleOrderByWithRelationInput | EntryModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntryModules.
     */
    cursor?: EntryModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntryModules.
     */
    distinct?: EntryModuleScalarFieldEnum | EntryModuleScalarFieldEnum[]
  }

  /**
   * EntryModule findFirstOrThrow
   */
  export type EntryModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * Filter, which EntryModule to fetch.
     */
    where?: EntryModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryModules to fetch.
     */
    orderBy?: EntryModuleOrderByWithRelationInput | EntryModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntryModules.
     */
    cursor?: EntryModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntryModules.
     */
    distinct?: EntryModuleScalarFieldEnum | EntryModuleScalarFieldEnum[]
  }

  /**
   * EntryModule findMany
   */
  export type EntryModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * Filter, which EntryModules to fetch.
     */
    where?: EntryModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryModules to fetch.
     */
    orderBy?: EntryModuleOrderByWithRelationInput | EntryModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntryModules.
     */
    cursor?: EntryModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryModules.
     */
    skip?: number
    distinct?: EntryModuleScalarFieldEnum | EntryModuleScalarFieldEnum[]
  }

  /**
   * EntryModule create
   */
  export type EntryModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a EntryModule.
     */
    data: XOR<EntryModuleCreateInput, EntryModuleUncheckedCreateInput>
  }

  /**
   * EntryModule createMany
   */
  export type EntryModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntryModules.
     */
    data: EntryModuleCreateManyInput | EntryModuleCreateManyInput[]
  }

  /**
   * EntryModule createManyAndReturn
   */
  export type EntryModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * The data used to create many EntryModules.
     */
    data: EntryModuleCreateManyInput | EntryModuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EntryModule update
   */
  export type EntryModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a EntryModule.
     */
    data: XOR<EntryModuleUpdateInput, EntryModuleUncheckedUpdateInput>
    /**
     * Choose, which EntryModule to update.
     */
    where: EntryModuleWhereUniqueInput
  }

  /**
   * EntryModule updateMany
   */
  export type EntryModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntryModules.
     */
    data: XOR<EntryModuleUpdateManyMutationInput, EntryModuleUncheckedUpdateManyInput>
    /**
     * Filter which EntryModules to update
     */
    where?: EntryModuleWhereInput
    /**
     * Limit how many EntryModules to update.
     */
    limit?: number
  }

  /**
   * EntryModule updateManyAndReturn
   */
  export type EntryModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * The data used to update EntryModules.
     */
    data: XOR<EntryModuleUpdateManyMutationInput, EntryModuleUncheckedUpdateManyInput>
    /**
     * Filter which EntryModules to update
     */
    where?: EntryModuleWhereInput
    /**
     * Limit how many EntryModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EntryModule upsert
   */
  export type EntryModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the EntryModule to update in case it exists.
     */
    where: EntryModuleWhereUniqueInput
    /**
     * In case the EntryModule found by the `where` argument doesn't exist, create a new EntryModule with this data.
     */
    create: XOR<EntryModuleCreateInput, EntryModuleUncheckedCreateInput>
    /**
     * In case the EntryModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryModuleUpdateInput, EntryModuleUncheckedUpdateInput>
  }

  /**
   * EntryModule delete
   */
  export type EntryModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
    /**
     * Filter which EntryModule to delete.
     */
    where: EntryModuleWhereUniqueInput
  }

  /**
   * EntryModule deleteMany
   */
  export type EntryModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntryModules to delete
     */
    where?: EntryModuleWhereInput
    /**
     * Limit how many EntryModules to delete.
     */
    limit?: number
  }

  /**
   * EntryModule without action
   */
  export type EntryModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryModule
     */
    select?: EntryModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryModule
     */
    omit?: EntryModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryModuleInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperience
   */

  export type AggregateWorkExperience = {
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  export type WorkExperienceMinAggregateOutputType = {
    entryId: string | null
    company: string | null
    role: string | null
    startDate: Date | null
    endDate: Date | null
    techStack: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    entryId: string | null
    company: string | null
    role: string | null
    startDate: Date | null
    endDate: Date | null
    techStack: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    entryId: number
    company: number
    role: number
    startDate: number
    endDate: number
    techStack: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkExperienceMinAggregateInputType = {
    entryId?: true
    company?: true
    role?: true
    startDate?: true
    endDate?: true
    techStack?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    entryId?: true
    company?: true
    role?: true
    startDate?: true
    endDate?: true
    techStack?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    entryId?: true
    company?: true
    role?: true
    startDate?: true
    endDate?: true
    techStack?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperience to aggregate.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperiences
    **/
    _count?: true | WorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type GetWorkExperienceAggregateType<T extends WorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperience[P]>
      : GetScalarType<T[P], AggregateWorkExperience[P]>
  }




  export type WorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithAggregationInput | WorkExperienceOrderByWithAggregationInput[]
    by: WorkExperienceScalarFieldEnum[] | WorkExperienceScalarFieldEnum
    having?: WorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceCountAggregateInputType | true
    _min?: WorkExperienceMinAggregateInputType
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type WorkExperienceGroupByOutputType = {
    entryId: string
    company: string
    role: string
    startDate: Date
    endDate: Date | null
    techStack: string
    createdAt: Date
    updatedAt: Date
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  type GetWorkExperienceGroupByPayload<T extends WorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    techStack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    techStack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    techStack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectScalar = {
    entryId?: boolean
    company?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    techStack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entryId" | "company" | "role" | "startDate" | "endDate" | "techStack" | "createdAt" | "updatedAt", ExtArgs["result"]["workExperience"]>
  export type WorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $WorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperience"
    objects: {
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entryId: string
      company: string
      role: string
      startDate: Date
      endDate: Date | null
      techStack: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workExperience"]>
    composites: {}
  }

  type WorkExperienceGetPayload<S extends boolean | null | undefined | WorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$WorkExperiencePayload, S>

  type WorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkExperienceCountAggregateInputType | true
    }

  export interface WorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperience'], meta: { name: 'WorkExperience' } }
    /**
     * Find zero or one WorkExperience that matches the filter.
     * @param {WorkExperienceFindUniqueArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceFindUniqueArgs>(args: SelectSubset<T, WorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceFindFirstArgs>(args?: SelectSubset<T, WorkExperienceFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany()
     * 
     * // Get first 10 WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany({ take: 10 })
     * 
     * // Only select the `entryId`
     * const workExperienceWithEntryIdOnly = await prisma.workExperience.findMany({ select: { entryId: true } })
     * 
     */
    findMany<T extends WorkExperienceFindManyArgs>(args?: SelectSubset<T, WorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkExperience.
     * @param {WorkExperienceCreateArgs} args - Arguments to create a WorkExperience.
     * @example
     * // Create one WorkExperience
     * const WorkExperience = await prisma.workExperience.create({
     *   data: {
     *     // ... data to create a WorkExperience
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceCreateArgs>(args: SelectSubset<T, WorkExperienceCreateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkExperiences.
     * @param {WorkExperienceCreateManyArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceCreateManyArgs>(args?: SelectSubset<T, WorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkExperiences and returns the data saved in the database.
     * @param {WorkExperienceCreateManyAndReturnArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkExperiences and only return the `entryId`
     * const workExperienceWithEntryIdOnly = await prisma.workExperience.createManyAndReturn({
     *   select: { entryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkExperience.
     * @param {WorkExperienceDeleteArgs} args - Arguments to delete one WorkExperience.
     * @example
     * // Delete one WorkExperience
     * const WorkExperience = await prisma.workExperience.delete({
     *   where: {
     *     // ... filter to delete one WorkExperience
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDeleteArgs>(args: SelectSubset<T, WorkExperienceDeleteArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkExperience.
     * @param {WorkExperienceUpdateArgs} args - Arguments to update one WorkExperience.
     * @example
     * // Update one WorkExperience
     * const workExperience = await prisma.workExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceUpdateArgs>(args: SelectSubset<T, WorkExperienceUpdateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkExperiences.
     * @param {WorkExperienceDeleteManyArgs} args - Arguments to filter WorkExperiences to delete.
     * @example
     * // Delete a few WorkExperiences
     * const { count } = await prisma.workExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceUpdateManyArgs>(args: SelectSubset<T, WorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences and returns the data updated in the database.
     * @param {WorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many WorkExperiences.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkExperiences and only return the `entryId`
     * const workExperienceWithEntryIdOnly = await prisma.workExperience.updateManyAndReturn({
     *   select: { entryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkExperience.
     * @param {WorkExperienceUpsertArgs} args - Arguments to update or create a WorkExperience.
     * @example
     * // Update or create a WorkExperience
     * const workExperience = await prisma.workExperience.upsert({
     *   create: {
     *     // ... data to create a WorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceUpsertArgs>(args: SelectSubset<T, WorkExperienceUpsertArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceCountArgs} args - Arguments to filter WorkExperiences to count.
     * @example
     * // Count the number of WorkExperiences
     * const count = await prisma.workExperience.count({
     *   where: {
     *     // ... the filter for the WorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceCountArgs>(
      args?: Subset<T, WorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkExperienceAggregateArgs>(args: Subset<T, WorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceAggregateType<T>>

    /**
     * Group by WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperience model
   */
  readonly fields: WorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkExperience model
   */ 
  interface WorkExperienceFieldRefs {
    readonly entryId: FieldRef<"WorkExperience", 'String'>
    readonly company: FieldRef<"WorkExperience", 'String'>
    readonly role: FieldRef<"WorkExperience", 'String'>
    readonly startDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly endDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly techStack: FieldRef<"WorkExperience", 'String'>
    readonly createdAt: FieldRef<"WorkExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperience findUnique
   */
  export type WorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findUniqueOrThrow
   */
  export type WorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findFirst
   */
  export type WorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findFirstOrThrow
   */
  export type WorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findMany
   */
  export type WorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperiences to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience create
   */
  export type WorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperience.
     */
    data: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
  }

  /**
   * WorkExperience createMany
   */
  export type WorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
  }

  /**
   * WorkExperience createManyAndReturn
   */
  export type WorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience update
   */
  export type WorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperience.
     */
    data: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which WorkExperience to update.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience updateMany
   */
  export type WorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
  }

  /**
   * WorkExperience updateManyAndReturn
   */
  export type WorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience upsert
   */
  export type WorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperience to update in case it exists.
     */
    where: WorkExperienceWhereUniqueInput
    /**
     * In case the WorkExperience found by the `where` argument doesn't exist, create a new WorkExperience with this data.
     */
    create: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
    /**
     * In case the WorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
  }

  /**
   * WorkExperience delete
   */
  export type WorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which WorkExperience to delete.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience deleteMany
   */
  export type WorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperiences to delete
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * WorkExperience without action
   */
  export type WorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    entryId: string | null
    name: string | null
    description: string | null
    techStack: string | null
    link: string | null
    highlights: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    entryId: string | null
    name: string | null
    description: string | null
    techStack: string | null
    link: string | null
    highlights: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    entryId: number
    name: number
    description: number
    techStack: number
    link: number
    highlights: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    entryId?: true
    name?: true
    description?: true
    techStack?: true
    link?: true
    highlights?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    entryId?: true
    name?: true
    description?: true
    techStack?: true
    link?: true
    highlights?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    entryId?: true
    name?: true
    description?: true
    techStack?: true
    link?: true
    highlights?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    entryId: string
    name: string
    description: string
    techStack: string
    link: string | null
    highlights: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    name?: boolean
    description?: boolean
    techStack?: boolean
    link?: boolean
    highlights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    name?: boolean
    description?: boolean
    techStack?: boolean
    link?: boolean
    highlights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    name?: boolean
    description?: boolean
    techStack?: boolean
    link?: boolean
    highlights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    entryId?: boolean
    name?: boolean
    description?: boolean
    techStack?: boolean
    link?: boolean
    highlights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entryId" | "name" | "description" | "techStack" | "link" | "highlights" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entryId: string
      name: string
      description: string
      techStack: string
      link: string | null
      highlights: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `entryId`
     * const projectWithEntryIdOnly = await prisma.project.findMany({ select: { entryId: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `entryId`
     * const projectWithEntryIdOnly = await prisma.project.createManyAndReturn({
     *   select: { entryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `entryId`
     * const projectWithEntryIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { entryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly entryId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly techStack: FieldRef<"Project", 'String'>
    readonly link: FieldRef<"Project", 'String'>
    readonly highlights: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model KnowledgeLink
   */

  export type AggregateKnowledgeLink = {
    _count: KnowledgeLinkCountAggregateOutputType | null
    _min: KnowledgeLinkMinAggregateOutputType | null
    _max: KnowledgeLinkMaxAggregateOutputType | null
  }

  export type KnowledgeLinkMinAggregateOutputType = {
    entryId: string | null
    url: string | null
    category: string | null
    tags: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeLinkMaxAggregateOutputType = {
    entryId: string | null
    url: string | null
    category: string | null
    tags: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeLinkCountAggregateOutputType = {
    entryId: number
    url: number
    category: number
    tags: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KnowledgeLinkMinAggregateInputType = {
    entryId?: true
    url?: true
    category?: true
    tags?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeLinkMaxAggregateInputType = {
    entryId?: true
    url?: true
    category?: true
    tags?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeLinkCountAggregateInputType = {
    entryId?: true
    url?: true
    category?: true
    tags?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KnowledgeLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeLink to aggregate.
     */
    where?: KnowledgeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeLinks to fetch.
     */
    orderBy?: KnowledgeLinkOrderByWithRelationInput | KnowledgeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeLinks
    **/
    _count?: true | KnowledgeLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeLinkMaxAggregateInputType
  }

  export type GetKnowledgeLinkAggregateType<T extends KnowledgeLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeLink[P]>
      : GetScalarType<T[P], AggregateKnowledgeLink[P]>
  }




  export type KnowledgeLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeLinkWhereInput
    orderBy?: KnowledgeLinkOrderByWithAggregationInput | KnowledgeLinkOrderByWithAggregationInput[]
    by: KnowledgeLinkScalarFieldEnum[] | KnowledgeLinkScalarFieldEnum
    having?: KnowledgeLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeLinkCountAggregateInputType | true
    _min?: KnowledgeLinkMinAggregateInputType
    _max?: KnowledgeLinkMaxAggregateInputType
  }

  export type KnowledgeLinkGroupByOutputType = {
    entryId: string
    url: string
    category: string
    tags: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: KnowledgeLinkCountAggregateOutputType | null
    _min: KnowledgeLinkMinAggregateOutputType | null
    _max: KnowledgeLinkMaxAggregateOutputType | null
  }

  type GetKnowledgeLinkGroupByPayload<T extends KnowledgeLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeLinkGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeLinkGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeLink"]>

  export type KnowledgeLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeLink"]>

  export type KnowledgeLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeLink"]>

  export type KnowledgeLinkSelectScalar = {
    entryId?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KnowledgeLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entryId" | "url" | "category" | "tags" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["knowledgeLink"]>
  export type KnowledgeLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type KnowledgeLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type KnowledgeLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $KnowledgeLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeLink"
    objects: {
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entryId: string
      url: string
      category: string
      tags: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledgeLink"]>
    composites: {}
  }

  type KnowledgeLinkGetPayload<S extends boolean | null | undefined | KnowledgeLinkDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeLinkPayload, S>

  type KnowledgeLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeLinkCountAggregateInputType | true
    }

  export interface KnowledgeLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeLink'], meta: { name: 'KnowledgeLink' } }
    /**
     * Find zero or one KnowledgeLink that matches the filter.
     * @param {KnowledgeLinkFindUniqueArgs} args - Arguments to find a KnowledgeLink
     * @example
     * // Get one KnowledgeLink
     * const knowledgeLink = await prisma.knowledgeLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeLinkFindUniqueArgs>(args: SelectSubset<T, KnowledgeLinkFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeLinkFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeLink
     * @example
     * // Get one KnowledgeLink
     * const knowledgeLink = await prisma.knowledgeLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeLinkFindFirstArgs} args - Arguments to find a KnowledgeLink
     * @example
     * // Get one KnowledgeLink
     * const knowledgeLink = await prisma.knowledgeLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeLinkFindFirstArgs>(args?: SelectSubset<T, KnowledgeLinkFindFirstArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeLinkFindFirstOrThrowArgs} args - Arguments to find a KnowledgeLink
     * @example
     * // Get one KnowledgeLink
     * const knowledgeLink = await prisma.knowledgeLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeLinks
     * const knowledgeLinks = await prisma.knowledgeLink.findMany()
     * 
     * // Get first 10 KnowledgeLinks
     * const knowledgeLinks = await prisma.knowledgeLink.findMany({ take: 10 })
     * 
     * // Only select the `entryId`
     * const knowledgeLinkWithEntryIdOnly = await prisma.knowledgeLink.findMany({ select: { entryId: true } })
     * 
     */
    findMany<T extends KnowledgeLinkFindManyArgs>(args?: SelectSubset<T, KnowledgeLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeLink.
     * @param {KnowledgeLinkCreateArgs} args - Arguments to create a KnowledgeLink.
     * @example
     * // Create one KnowledgeLink
     * const KnowledgeLink = await prisma.knowledgeLink.create({
     *   data: {
     *     // ... data to create a KnowledgeLink
     *   }
     * })
     * 
     */
    create<T extends KnowledgeLinkCreateArgs>(args: SelectSubset<T, KnowledgeLinkCreateArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeLinks.
     * @param {KnowledgeLinkCreateManyArgs} args - Arguments to create many KnowledgeLinks.
     * @example
     * // Create many KnowledgeLinks
     * const knowledgeLink = await prisma.knowledgeLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeLinkCreateManyArgs>(args?: SelectSubset<T, KnowledgeLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeLinks and returns the data saved in the database.
     * @param {KnowledgeLinkCreateManyAndReturnArgs} args - Arguments to create many KnowledgeLinks.
     * @example
     * // Create many KnowledgeLinks
     * const knowledgeLink = await prisma.knowledgeLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeLinks and only return the `entryId`
     * const knowledgeLinkWithEntryIdOnly = await prisma.knowledgeLink.createManyAndReturn({
     *   select: { entryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeLink.
     * @param {KnowledgeLinkDeleteArgs} args - Arguments to delete one KnowledgeLink.
     * @example
     * // Delete one KnowledgeLink
     * const KnowledgeLink = await prisma.knowledgeLink.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeLink
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeLinkDeleteArgs>(args: SelectSubset<T, KnowledgeLinkDeleteArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeLink.
     * @param {KnowledgeLinkUpdateArgs} args - Arguments to update one KnowledgeLink.
     * @example
     * // Update one KnowledgeLink
     * const knowledgeLink = await prisma.knowledgeLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeLinkUpdateArgs>(args: SelectSubset<T, KnowledgeLinkUpdateArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeLinks.
     * @param {KnowledgeLinkDeleteManyArgs} args - Arguments to filter KnowledgeLinks to delete.
     * @example
     * // Delete a few KnowledgeLinks
     * const { count } = await prisma.knowledgeLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeLinkDeleteManyArgs>(args?: SelectSubset<T, KnowledgeLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeLinks
     * const knowledgeLink = await prisma.knowledgeLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeLinkUpdateManyArgs>(args: SelectSubset<T, KnowledgeLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeLinks and returns the data updated in the database.
     * @param {KnowledgeLinkUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeLinks.
     * @example
     * // Update many KnowledgeLinks
     * const knowledgeLink = await prisma.knowledgeLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeLinks and only return the `entryId`
     * const knowledgeLinkWithEntryIdOnly = await prisma.knowledgeLink.updateManyAndReturn({
     *   select: { entryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KnowledgeLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeLink.
     * @param {KnowledgeLinkUpsertArgs} args - Arguments to update or create a KnowledgeLink.
     * @example
     * // Update or create a KnowledgeLink
     * const knowledgeLink = await prisma.knowledgeLink.upsert({
     *   create: {
     *     // ... data to create a KnowledgeLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeLink we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeLinkUpsertArgs>(args: SelectSubset<T, KnowledgeLinkUpsertArgs<ExtArgs>>): Prisma__KnowledgeLinkClient<$Result.GetResult<Prisma.$KnowledgeLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeLinkCountArgs} args - Arguments to filter KnowledgeLinks to count.
     * @example
     * // Count the number of KnowledgeLinks
     * const count = await prisma.knowledgeLink.count({
     *   where: {
     *     // ... the filter for the KnowledgeLinks we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeLinkCountArgs>(
      args?: Subset<T, KnowledgeLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KnowledgeLinkAggregateArgs>(args: Subset<T, KnowledgeLinkAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeLinkAggregateType<T>>

    /**
     * Group by KnowledgeLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KnowledgeLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeLinkGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KnowledgeLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeLink model
   */
  readonly fields: KnowledgeLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KnowledgeLink model
   */ 
  interface KnowledgeLinkFieldRefs {
    readonly entryId: FieldRef<"KnowledgeLink", 'String'>
    readonly url: FieldRef<"KnowledgeLink", 'String'>
    readonly category: FieldRef<"KnowledgeLink", 'String'>
    readonly tags: FieldRef<"KnowledgeLink", 'String'>
    readonly description: FieldRef<"KnowledgeLink", 'String'>
    readonly createdAt: FieldRef<"KnowledgeLink", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeLink findUnique
   */
  export type KnowledgeLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeLink to fetch.
     */
    where: KnowledgeLinkWhereUniqueInput
  }

  /**
   * KnowledgeLink findUniqueOrThrow
   */
  export type KnowledgeLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeLink to fetch.
     */
    where: KnowledgeLinkWhereUniqueInput
  }

  /**
   * KnowledgeLink findFirst
   */
  export type KnowledgeLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeLink to fetch.
     */
    where?: KnowledgeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeLinks to fetch.
     */
    orderBy?: KnowledgeLinkOrderByWithRelationInput | KnowledgeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeLinks.
     */
    cursor?: KnowledgeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeLinks.
     */
    distinct?: KnowledgeLinkScalarFieldEnum | KnowledgeLinkScalarFieldEnum[]
  }

  /**
   * KnowledgeLink findFirstOrThrow
   */
  export type KnowledgeLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeLink to fetch.
     */
    where?: KnowledgeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeLinks to fetch.
     */
    orderBy?: KnowledgeLinkOrderByWithRelationInput | KnowledgeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeLinks.
     */
    cursor?: KnowledgeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeLinks.
     */
    distinct?: KnowledgeLinkScalarFieldEnum | KnowledgeLinkScalarFieldEnum[]
  }

  /**
   * KnowledgeLink findMany
   */
  export type KnowledgeLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeLinks to fetch.
     */
    where?: KnowledgeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeLinks to fetch.
     */
    orderBy?: KnowledgeLinkOrderByWithRelationInput | KnowledgeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeLinks.
     */
    cursor?: KnowledgeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeLinks.
     */
    skip?: number
    distinct?: KnowledgeLinkScalarFieldEnum | KnowledgeLinkScalarFieldEnum[]
  }

  /**
   * KnowledgeLink create
   */
  export type KnowledgeLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeLink.
     */
    data: XOR<KnowledgeLinkCreateInput, KnowledgeLinkUncheckedCreateInput>
  }

  /**
   * KnowledgeLink createMany
   */
  export type KnowledgeLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeLinks.
     */
    data: KnowledgeLinkCreateManyInput | KnowledgeLinkCreateManyInput[]
  }

  /**
   * KnowledgeLink createManyAndReturn
   */
  export type KnowledgeLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeLinks.
     */
    data: KnowledgeLinkCreateManyInput | KnowledgeLinkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeLink update
   */
  export type KnowledgeLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeLink.
     */
    data: XOR<KnowledgeLinkUpdateInput, KnowledgeLinkUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeLink to update.
     */
    where: KnowledgeLinkWhereUniqueInput
  }

  /**
   * KnowledgeLink updateMany
   */
  export type KnowledgeLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeLinks.
     */
    data: XOR<KnowledgeLinkUpdateManyMutationInput, KnowledgeLinkUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeLinks to update
     */
    where?: KnowledgeLinkWhereInput
    /**
     * Limit how many KnowledgeLinks to update.
     */
    limit?: number
  }

  /**
   * KnowledgeLink updateManyAndReturn
   */
  export type KnowledgeLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeLinks.
     */
    data: XOR<KnowledgeLinkUpdateManyMutationInput, KnowledgeLinkUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeLinks to update
     */
    where?: KnowledgeLinkWhereInput
    /**
     * Limit how many KnowledgeLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeLink upsert
   */
  export type KnowledgeLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeLink to update in case it exists.
     */
    where: KnowledgeLinkWhereUniqueInput
    /**
     * In case the KnowledgeLink found by the `where` argument doesn't exist, create a new KnowledgeLink with this data.
     */
    create: XOR<KnowledgeLinkCreateInput, KnowledgeLinkUncheckedCreateInput>
    /**
     * In case the KnowledgeLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeLinkUpdateInput, KnowledgeLinkUncheckedUpdateInput>
  }

  /**
   * KnowledgeLink delete
   */
  export type KnowledgeLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
    /**
     * Filter which KnowledgeLink to delete.
     */
    where: KnowledgeLinkWhereUniqueInput
  }

  /**
   * KnowledgeLink deleteMany
   */
  export type KnowledgeLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeLinks to delete
     */
    where?: KnowledgeLinkWhereInput
    /**
     * Limit how many KnowledgeLinks to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeLink without action
   */
  export type KnowledgeLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeLink
     */
    select?: KnowledgeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeLink
     */
    omit?: KnowledgeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeLinkInclude<ExtArgs> | null
  }


  /**
   * Model Travel
   */

  export type AggregateTravel = {
    _count: TravelCountAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  export type TravelMinAggregateOutputType = {
    entryId: string | null
    destination: string | null
    travelDate: Date | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelMaxAggregateOutputType = {
    entryId: string | null
    destination: string | null
    travelDate: Date | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelCountAggregateOutputType = {
    entryId: number
    destination: number
    travelDate: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelMinAggregateInputType = {
    entryId?: true
    destination?: true
    travelDate?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelMaxAggregateInputType = {
    entryId?: true
    destination?: true
    travelDate?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelCountAggregateInputType = {
    entryId?: true
    destination?: true
    travelDate?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travel to aggregate.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Travels
    **/
    _count?: true | TravelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelMaxAggregateInputType
  }

  export type GetTravelAggregateType<T extends TravelAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel[P]>
      : GetScalarType<T[P], AggregateTravel[P]>
  }




  export type TravelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithAggregationInput | TravelOrderByWithAggregationInput[]
    by: TravelScalarFieldEnum[] | TravelScalarFieldEnum
    having?: TravelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelCountAggregateInputType | true
    _min?: TravelMinAggregateInputType
    _max?: TravelMaxAggregateInputType
  }

  export type TravelGroupByOutputType = {
    entryId: string
    destination: string
    travelDate: Date | null
    tags: string
    createdAt: Date
    updatedAt: Date
    _count: TravelCountAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  type GetTravelGroupByPayload<T extends TravelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelGroupByOutputType[P]>
            : GetScalarType<T[P], TravelGroupByOutputType[P]>
        }
      >
    >


  export type TravelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    destination?: boolean
    travelDate?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    destination?: boolean
    travelDate?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    destination?: boolean
    travelDate?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectScalar = {
    entryId?: boolean
    destination?: boolean
    travelDate?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entryId" | "destination" | "travelDate" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["travel"]>
  export type TravelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type TravelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type TravelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $TravelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Travel"
    objects: {
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entryId: string
      destination: string
      travelDate: Date | null
      tags: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travel"]>
    composites: {}
  }

  type TravelGetPayload<S extends boolean | null | undefined | TravelDefaultArgs> = $Result.GetResult<Prisma.$TravelPayload, S>

  type TravelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelCountAggregateInputType | true
    }

  export interface TravelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Travel'], meta: { name: 'Travel' } }
    /**
     * Find zero or one Travel that matches the filter.
     * @param {TravelFindUniqueArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelFindUniqueArgs>(args: SelectSubset<T, TravelFindUniqueArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Travel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelFindUniqueOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelFindFirstArgs>(args?: SelectSubset<T, TravelFindFirstArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Travels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travels
     * const travels = await prisma.travel.findMany()
     * 
     * // Get first 10 Travels
     * const travels = await prisma.travel.findMany({ take: 10 })
     * 
     * // Only select the `entryId`
     * const travelWithEntryIdOnly = await prisma.travel.findMany({ select: { entryId: true } })
     * 
     */
    findMany<T extends TravelFindManyArgs>(args?: SelectSubset<T, TravelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Travel.
     * @param {TravelCreateArgs} args - Arguments to create a Travel.
     * @example
     * // Create one Travel
     * const Travel = await prisma.travel.create({
     *   data: {
     *     // ... data to create a Travel
     *   }
     * })
     * 
     */
    create<T extends TravelCreateArgs>(args: SelectSubset<T, TravelCreateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Travels.
     * @param {TravelCreateManyArgs} args - Arguments to create many Travels.
     * @example
     * // Create many Travels
     * const travel = await prisma.travel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelCreateManyArgs>(args?: SelectSubset<T, TravelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Travels and returns the data saved in the database.
     * @param {TravelCreateManyAndReturnArgs} args - Arguments to create many Travels.
     * @example
     * // Create many Travels
     * const travel = await prisma.travel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Travels and only return the `entryId`
     * const travelWithEntryIdOnly = await prisma.travel.createManyAndReturn({
     *   select: { entryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Travel.
     * @param {TravelDeleteArgs} args - Arguments to delete one Travel.
     * @example
     * // Delete one Travel
     * const Travel = await prisma.travel.delete({
     *   where: {
     *     // ... filter to delete one Travel
     *   }
     * })
     * 
     */
    delete<T extends TravelDeleteArgs>(args: SelectSubset<T, TravelDeleteArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Travel.
     * @param {TravelUpdateArgs} args - Arguments to update one Travel.
     * @example
     * // Update one Travel
     * const travel = await prisma.travel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelUpdateArgs>(args: SelectSubset<T, TravelUpdateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Travels.
     * @param {TravelDeleteManyArgs} args - Arguments to filter Travels to delete.
     * @example
     * // Delete a few Travels
     * const { count } = await prisma.travel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelDeleteManyArgs>(args?: SelectSubset<T, TravelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelUpdateManyArgs>(args: SelectSubset<T, TravelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels and returns the data updated in the database.
     * @param {TravelUpdateManyAndReturnArgs} args - Arguments to update many Travels.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Travels and only return the `entryId`
     * const travelWithEntryIdOnly = await prisma.travel.updateManyAndReturn({
     *   select: { entryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Travel.
     * @param {TravelUpsertArgs} args - Arguments to update or create a Travel.
     * @example
     * // Update or create a Travel
     * const travel = await prisma.travel.upsert({
     *   create: {
     *     // ... data to create a Travel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel we want to update
     *   }
     * })
     */
    upsert<T extends TravelUpsertArgs>(args: SelectSubset<T, TravelUpsertArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelCountArgs} args - Arguments to filter Travels to count.
     * @example
     * // Count the number of Travels
     * const count = await prisma.travel.count({
     *   where: {
     *     // ... the filter for the Travels we want to count
     *   }
     * })
    **/
    count<T extends TravelCountArgs>(
      args?: Subset<T, TravelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelAggregateArgs>(args: Subset<T, TravelAggregateArgs>): Prisma.PrismaPromise<GetTravelAggregateType<T>>

    /**
     * Group by Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelGroupByArgs['orderBy'] }
        : { orderBy?: TravelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Travel model
   */
  readonly fields: TravelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Travel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Travel model
   */ 
  interface TravelFieldRefs {
    readonly entryId: FieldRef<"Travel", 'String'>
    readonly destination: FieldRef<"Travel", 'String'>
    readonly travelDate: FieldRef<"Travel", 'DateTime'>
    readonly tags: FieldRef<"Travel", 'String'>
    readonly createdAt: FieldRef<"Travel", 'DateTime'>
    readonly updatedAt: FieldRef<"Travel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Travel findUnique
   */
  export type TravelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findUniqueOrThrow
   */
  export type TravelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findFirst
   */
  export type TravelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findFirstOrThrow
   */
  export type TravelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findMany
   */
  export type TravelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travels to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel create
   */
  export type TravelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to create a Travel.
     */
    data: XOR<TravelCreateInput, TravelUncheckedCreateInput>
  }

  /**
   * Travel createMany
   */
  export type TravelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
  }

  /**
   * Travel createManyAndReturn
   */
  export type TravelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Travel update
   */
  export type TravelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to update a Travel.
     */
    data: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
    /**
     * Choose, which Travel to update.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel updateMany
   */
  export type TravelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to update.
     */
    limit?: number
  }

  /**
   * Travel updateManyAndReturn
   */
  export type TravelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Travel upsert
   */
  export type TravelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The filter to search for the Travel to update in case it exists.
     */
    where: TravelWhereUniqueInput
    /**
     * In case the Travel found by the `where` argument doesn't exist, create a new Travel with this data.
     */
    create: XOR<TravelCreateInput, TravelUncheckedCreateInput>
    /**
     * In case the Travel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
  }

  /**
   * Travel delete
   */
  export type TravelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter which Travel to delete.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel deleteMany
   */
  export type TravelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travels to delete
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to delete.
     */
    limit?: number
  }

  /**
   * Travel without action
   */
  export type TravelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
  }


  /**
   * Model Lifestyle
   */

  export type AggregateLifestyle = {
    _count: LifestyleCountAggregateOutputType | null
    _min: LifestyleMinAggregateOutputType | null
    _max: LifestyleMaxAggregateOutputType | null
  }

  export type LifestyleMinAggregateOutputType = {
    entryId: string | null
    subType: string | null
    tags: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LifestyleMaxAggregateOutputType = {
    entryId: string | null
    subType: string | null
    tags: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LifestyleCountAggregateOutputType = {
    entryId: number
    subType: number
    tags: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LifestyleMinAggregateInputType = {
    entryId?: true
    subType?: true
    tags?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LifestyleMaxAggregateInputType = {
    entryId?: true
    subType?: true
    tags?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LifestyleCountAggregateInputType = {
    entryId?: true
    subType?: true
    tags?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LifestyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lifestyle to aggregate.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lifestyles
    **/
    _count?: true | LifestyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LifestyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LifestyleMaxAggregateInputType
  }

  export type GetLifestyleAggregateType<T extends LifestyleAggregateArgs> = {
        [P in keyof T & keyof AggregateLifestyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLifestyle[P]>
      : GetScalarType<T[P], AggregateLifestyle[P]>
  }




  export type LifestyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LifestyleWhereInput
    orderBy?: LifestyleOrderByWithAggregationInput | LifestyleOrderByWithAggregationInput[]
    by: LifestyleScalarFieldEnum[] | LifestyleScalarFieldEnum
    having?: LifestyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LifestyleCountAggregateInputType | true
    _min?: LifestyleMinAggregateInputType
    _max?: LifestyleMaxAggregateInputType
  }

  export type LifestyleGroupByOutputType = {
    entryId: string
    subType: string
    tags: string
    date: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LifestyleCountAggregateOutputType | null
    _min: LifestyleMinAggregateOutputType | null
    _max: LifestyleMaxAggregateOutputType | null
  }

  type GetLifestyleGroupByPayload<T extends LifestyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LifestyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LifestyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LifestyleGroupByOutputType[P]>
            : GetScalarType<T[P], LifestyleGroupByOutputType[P]>
        }
      >
    >


  export type LifestyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    subType?: boolean
    tags?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lifestyle"]>

  export type LifestyleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    subType?: boolean
    tags?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lifestyle"]>

  export type LifestyleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    subType?: boolean
    tags?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lifestyle"]>

  export type LifestyleSelectScalar = {
    entryId?: boolean
    subType?: boolean
    tags?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LifestyleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entryId" | "subType" | "tags" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["lifestyle"]>
  export type LifestyleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type LifestyleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type LifestyleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $LifestylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lifestyle"
    objects: {
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entryId: string
      subType: string
      tags: string
      date: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lifestyle"]>
    composites: {}
  }

  type LifestyleGetPayload<S extends boolean | null | undefined | LifestyleDefaultArgs> = $Result.GetResult<Prisma.$LifestylePayload, S>

  type LifestyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LifestyleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LifestyleCountAggregateInputType | true
    }

  export interface LifestyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lifestyle'], meta: { name: 'Lifestyle' } }
    /**
     * Find zero or one Lifestyle that matches the filter.
     * @param {LifestyleFindUniqueArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LifestyleFindUniqueArgs>(args: SelectSubset<T, LifestyleFindUniqueArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lifestyle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LifestyleFindUniqueOrThrowArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LifestyleFindUniqueOrThrowArgs>(args: SelectSubset<T, LifestyleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lifestyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleFindFirstArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LifestyleFindFirstArgs>(args?: SelectSubset<T, LifestyleFindFirstArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lifestyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleFindFirstOrThrowArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LifestyleFindFirstOrThrowArgs>(args?: SelectSubset<T, LifestyleFindFirstOrThrowArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lifestyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lifestyles
     * const lifestyles = await prisma.lifestyle.findMany()
     * 
     * // Get first 10 Lifestyles
     * const lifestyles = await prisma.lifestyle.findMany({ take: 10 })
     * 
     * // Only select the `entryId`
     * const lifestyleWithEntryIdOnly = await prisma.lifestyle.findMany({ select: { entryId: true } })
     * 
     */
    findMany<T extends LifestyleFindManyArgs>(args?: SelectSubset<T, LifestyleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lifestyle.
     * @param {LifestyleCreateArgs} args - Arguments to create a Lifestyle.
     * @example
     * // Create one Lifestyle
     * const Lifestyle = await prisma.lifestyle.create({
     *   data: {
     *     // ... data to create a Lifestyle
     *   }
     * })
     * 
     */
    create<T extends LifestyleCreateArgs>(args: SelectSubset<T, LifestyleCreateArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lifestyles.
     * @param {LifestyleCreateManyArgs} args - Arguments to create many Lifestyles.
     * @example
     * // Create many Lifestyles
     * const lifestyle = await prisma.lifestyle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LifestyleCreateManyArgs>(args?: SelectSubset<T, LifestyleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lifestyles and returns the data saved in the database.
     * @param {LifestyleCreateManyAndReturnArgs} args - Arguments to create many Lifestyles.
     * @example
     * // Create many Lifestyles
     * const lifestyle = await prisma.lifestyle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lifestyles and only return the `entryId`
     * const lifestyleWithEntryIdOnly = await prisma.lifestyle.createManyAndReturn({
     *   select: { entryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LifestyleCreateManyAndReturnArgs>(args?: SelectSubset<T, LifestyleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lifestyle.
     * @param {LifestyleDeleteArgs} args - Arguments to delete one Lifestyle.
     * @example
     * // Delete one Lifestyle
     * const Lifestyle = await prisma.lifestyle.delete({
     *   where: {
     *     // ... filter to delete one Lifestyle
     *   }
     * })
     * 
     */
    delete<T extends LifestyleDeleteArgs>(args: SelectSubset<T, LifestyleDeleteArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lifestyle.
     * @param {LifestyleUpdateArgs} args - Arguments to update one Lifestyle.
     * @example
     * // Update one Lifestyle
     * const lifestyle = await prisma.lifestyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LifestyleUpdateArgs>(args: SelectSubset<T, LifestyleUpdateArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lifestyles.
     * @param {LifestyleDeleteManyArgs} args - Arguments to filter Lifestyles to delete.
     * @example
     * // Delete a few Lifestyles
     * const { count } = await prisma.lifestyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LifestyleDeleteManyArgs>(args?: SelectSubset<T, LifestyleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lifestyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lifestyles
     * const lifestyle = await prisma.lifestyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LifestyleUpdateManyArgs>(args: SelectSubset<T, LifestyleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lifestyles and returns the data updated in the database.
     * @param {LifestyleUpdateManyAndReturnArgs} args - Arguments to update many Lifestyles.
     * @example
     * // Update many Lifestyles
     * const lifestyle = await prisma.lifestyle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lifestyles and only return the `entryId`
     * const lifestyleWithEntryIdOnly = await prisma.lifestyle.updateManyAndReturn({
     *   select: { entryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LifestyleUpdateManyAndReturnArgs>(args: SelectSubset<T, LifestyleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lifestyle.
     * @param {LifestyleUpsertArgs} args - Arguments to update or create a Lifestyle.
     * @example
     * // Update or create a Lifestyle
     * const lifestyle = await prisma.lifestyle.upsert({
     *   create: {
     *     // ... data to create a Lifestyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lifestyle we want to update
     *   }
     * })
     */
    upsert<T extends LifestyleUpsertArgs>(args: SelectSubset<T, LifestyleUpsertArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lifestyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleCountArgs} args - Arguments to filter Lifestyles to count.
     * @example
     * // Count the number of Lifestyles
     * const count = await prisma.lifestyle.count({
     *   where: {
     *     // ... the filter for the Lifestyles we want to count
     *   }
     * })
    **/
    count<T extends LifestyleCountArgs>(
      args?: Subset<T, LifestyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LifestyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lifestyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LifestyleAggregateArgs>(args: Subset<T, LifestyleAggregateArgs>): Prisma.PrismaPromise<GetLifestyleAggregateType<T>>

    /**
     * Group by Lifestyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LifestyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LifestyleGroupByArgs['orderBy'] }
        : { orderBy?: LifestyleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LifestyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLifestyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lifestyle model
   */
  readonly fields: LifestyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lifestyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LifestyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lifestyle model
   */ 
  interface LifestyleFieldRefs {
    readonly entryId: FieldRef<"Lifestyle", 'String'>
    readonly subType: FieldRef<"Lifestyle", 'String'>
    readonly tags: FieldRef<"Lifestyle", 'String'>
    readonly date: FieldRef<"Lifestyle", 'DateTime'>
    readonly createdAt: FieldRef<"Lifestyle", 'DateTime'>
    readonly updatedAt: FieldRef<"Lifestyle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lifestyle findUnique
   */
  export type LifestyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle findUniqueOrThrow
   */
  export type LifestyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle findFirst
   */
  export type LifestyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifestyles.
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifestyles.
     */
    distinct?: LifestyleScalarFieldEnum | LifestyleScalarFieldEnum[]
  }

  /**
   * Lifestyle findFirstOrThrow
   */
  export type LifestyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifestyles.
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifestyles.
     */
    distinct?: LifestyleScalarFieldEnum | LifestyleScalarFieldEnum[]
  }

  /**
   * Lifestyle findMany
   */
  export type LifestyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * Filter, which Lifestyles to fetch.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lifestyles.
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    distinct?: LifestyleScalarFieldEnum | LifestyleScalarFieldEnum[]
  }

  /**
   * Lifestyle create
   */
  export type LifestyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * The data needed to create a Lifestyle.
     */
    data: XOR<LifestyleCreateInput, LifestyleUncheckedCreateInput>
  }

  /**
   * Lifestyle createMany
   */
  export type LifestyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lifestyles.
     */
    data: LifestyleCreateManyInput | LifestyleCreateManyInput[]
  }

  /**
   * Lifestyle createManyAndReturn
   */
  export type LifestyleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * The data used to create many Lifestyles.
     */
    data: LifestyleCreateManyInput | LifestyleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lifestyle update
   */
  export type LifestyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * The data needed to update a Lifestyle.
     */
    data: XOR<LifestyleUpdateInput, LifestyleUncheckedUpdateInput>
    /**
     * Choose, which Lifestyle to update.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle updateMany
   */
  export type LifestyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lifestyles.
     */
    data: XOR<LifestyleUpdateManyMutationInput, LifestyleUncheckedUpdateManyInput>
    /**
     * Filter which Lifestyles to update
     */
    where?: LifestyleWhereInput
    /**
     * Limit how many Lifestyles to update.
     */
    limit?: number
  }

  /**
   * Lifestyle updateManyAndReturn
   */
  export type LifestyleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * The data used to update Lifestyles.
     */
    data: XOR<LifestyleUpdateManyMutationInput, LifestyleUncheckedUpdateManyInput>
    /**
     * Filter which Lifestyles to update
     */
    where?: LifestyleWhereInput
    /**
     * Limit how many Lifestyles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lifestyle upsert
   */
  export type LifestyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * The filter to search for the Lifestyle to update in case it exists.
     */
    where: LifestyleWhereUniqueInput
    /**
     * In case the Lifestyle found by the `where` argument doesn't exist, create a new Lifestyle with this data.
     */
    create: XOR<LifestyleCreateInput, LifestyleUncheckedCreateInput>
    /**
     * In case the Lifestyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LifestyleUpdateInput, LifestyleUncheckedUpdateInput>
  }

  /**
   * Lifestyle delete
   */
  export type LifestyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
    /**
     * Filter which Lifestyle to delete.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle deleteMany
   */
  export type LifestyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lifestyles to delete
     */
    where?: LifestyleWhereInput
    /**
     * Limit how many Lifestyles to delete.
     */
    limit?: number
  }

  /**
   * Lifestyle without action
   */
  export type LifestyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LifestyleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EntryScalarFieldEnum: {
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

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const TextContentScalarFieldEnum: {
    id: 'id',
    entryId: 'entryId',
    content: 'content',
    excerpt: 'excerpt'
  };

  export type TextContentScalarFieldEnum = (typeof TextContentScalarFieldEnum)[keyof typeof TextContentScalarFieldEnum]


  export const EntryModuleScalarFieldEnum: {
    id: 'id',
    entryId: 'entryId',
    moduleName: 'moduleName'
  };

  export type EntryModuleScalarFieldEnum = (typeof EntryModuleScalarFieldEnum)[keyof typeof EntryModuleScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
    entryId: 'entryId',
    company: 'company',
    role: 'role',
    startDate: 'startDate',
    endDate: 'endDate',
    techStack: 'techStack',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    entryId: 'entryId',
    name: 'name',
    description: 'description',
    techStack: 'techStack',
    link: 'link',
    highlights: 'highlights',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const KnowledgeLinkScalarFieldEnum: {
    entryId: 'entryId',
    url: 'url',
    category: 'category',
    tags: 'tags',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KnowledgeLinkScalarFieldEnum = (typeof KnowledgeLinkScalarFieldEnum)[keyof typeof KnowledgeLinkScalarFieldEnum]


  export const TravelScalarFieldEnum: {
    entryId: 'entryId',
    destination: 'destination',
    travelDate: 'travelDate',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelScalarFieldEnum = (typeof TravelScalarFieldEnum)[keyof typeof TravelScalarFieldEnum]


  export const LifestyleScalarFieldEnum: {
    entryId: 'entryId',
    subType: 'subType',
    tags: 'tags',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LifestyleScalarFieldEnum = (typeof LifestyleScalarFieldEnum)[keyof typeof LifestyleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'EntryType'
   */
  export type EnumEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryType'>
    


  /**
   * Reference to a field of type 'EntryStatus'
   */
  export type EnumEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ModuleName'
   */
  export type EnumModuleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModuleName'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type EntryWhereInput = {
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    id?: StringFilter<"Entry"> | string
    userId?: StringFilter<"Entry"> | string
    type?: EnumEntryTypeFilter<"Entry"> | $Enums.EntryType
    status?: EnumEntryStatusFilter<"Entry"> | $Enums.EntryStatus
    title?: StringFilter<"Entry"> | string
    slug?: StringFilter<"Entry"> | string
    summary?: StringNullableFilter<"Entry"> | string | null
    contentType?: StringFilter<"Entry"> | string
    occurredAt?: DateTimeNullableFilter<"Entry"> | Date | string | null
    location?: StringNullableFilter<"Entry"> | string | null
    aiAnalysis?: StringNullableFilter<"Entry"> | string | null
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
    parentId?: StringNullableFilter<"Entry"> | string | null
    parent?: XOR<EntryNullableScalarRelationFilter, EntryWhereInput> | null
    children?: EntryListRelationFilter
    textContent?: XOR<TextContentNullableScalarRelationFilter, TextContentWhereInput> | null
    modules?: EntryModuleListRelationFilter
    workExp?: XOR<WorkExperienceNullableScalarRelationFilter, WorkExperienceWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    knowledge?: XOR<KnowledgeLinkNullableScalarRelationFilter, KnowledgeLinkWhereInput> | null
    travel?: XOR<TravelNullableScalarRelationFilter, TravelWhereInput> | null
    lifestyle?: XOR<LifestyleNullableScalarRelationFilter, LifestyleWhereInput> | null
  }

  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrderInput | SortOrder
    contentType?: SortOrder
    occurredAt?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: EntryOrderByWithRelationInput
    children?: EntryOrderByRelationAggregateInput
    textContent?: TextContentOrderByWithRelationInput
    modules?: EntryModuleOrderByRelationAggregateInput
    workExp?: WorkExperienceOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    knowledge?: KnowledgeLinkOrderByWithRelationInput
    travel?: TravelOrderByWithRelationInput
    lifestyle?: LifestyleOrderByWithRelationInput
  }

  export type EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    userId?: StringFilter<"Entry"> | string
    type?: EnumEntryTypeFilter<"Entry"> | $Enums.EntryType
    status?: EnumEntryStatusFilter<"Entry"> | $Enums.EntryStatus
    title?: StringFilter<"Entry"> | string
    summary?: StringNullableFilter<"Entry"> | string | null
    contentType?: StringFilter<"Entry"> | string
    occurredAt?: DateTimeNullableFilter<"Entry"> | Date | string | null
    location?: StringNullableFilter<"Entry"> | string | null
    aiAnalysis?: StringNullableFilter<"Entry"> | string | null
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
    parentId?: StringNullableFilter<"Entry"> | string | null
    parent?: XOR<EntryNullableScalarRelationFilter, EntryWhereInput> | null
    children?: EntryListRelationFilter
    textContent?: XOR<TextContentNullableScalarRelationFilter, TextContentWhereInput> | null
    modules?: EntryModuleListRelationFilter
    workExp?: XOR<WorkExperienceNullableScalarRelationFilter, WorkExperienceWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    knowledge?: XOR<KnowledgeLinkNullableScalarRelationFilter, KnowledgeLinkWhereInput> | null
    travel?: XOR<TravelNullableScalarRelationFilter, TravelWhereInput> | null
    lifestyle?: XOR<LifestyleNullableScalarRelationFilter, LifestyleWhereInput> | null
  }, "id" | "slug">

  export type EntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrderInput | SortOrder
    contentType?: SortOrder
    occurredAt?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: EntryCountOrderByAggregateInput
    _max?: EntryMaxOrderByAggregateInput
    _min?: EntryMinOrderByAggregateInput
  }

  export type EntryScalarWhereWithAggregatesInput = {
    AND?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    OR?: EntryScalarWhereWithAggregatesInput[]
    NOT?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entry"> | string
    userId?: StringWithAggregatesFilter<"Entry"> | string
    type?: EnumEntryTypeWithAggregatesFilter<"Entry"> | $Enums.EntryType
    status?: EnumEntryStatusWithAggregatesFilter<"Entry"> | $Enums.EntryStatus
    title?: StringWithAggregatesFilter<"Entry"> | string
    slug?: StringWithAggregatesFilter<"Entry"> | string
    summary?: StringNullableWithAggregatesFilter<"Entry"> | string | null
    contentType?: StringWithAggregatesFilter<"Entry"> | string
    occurredAt?: DateTimeNullableWithAggregatesFilter<"Entry"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Entry"> | string | null
    aiAnalysis?: StringNullableWithAggregatesFilter<"Entry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"Entry"> | string | null
  }

  export type TextContentWhereInput = {
    AND?: TextContentWhereInput | TextContentWhereInput[]
    OR?: TextContentWhereInput[]
    NOT?: TextContentWhereInput | TextContentWhereInput[]
    id?: StringFilter<"TextContent"> | string
    entryId?: StringFilter<"TextContent"> | string
    content?: StringFilter<"TextContent"> | string
    excerpt?: StringNullableFilter<"TextContent"> | string | null
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type TextContentOrderByWithRelationInput = {
    id?: SortOrder
    entryId?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    entry?: EntryOrderByWithRelationInput
  }

  export type TextContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entryId?: string
    AND?: TextContentWhereInput | TextContentWhereInput[]
    OR?: TextContentWhereInput[]
    NOT?: TextContentWhereInput | TextContentWhereInput[]
    content?: StringFilter<"TextContent"> | string
    excerpt?: StringNullableFilter<"TextContent"> | string | null
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "id" | "entryId">

  export type TextContentOrderByWithAggregationInput = {
    id?: SortOrder
    entryId?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    _count?: TextContentCountOrderByAggregateInput
    _max?: TextContentMaxOrderByAggregateInput
    _min?: TextContentMinOrderByAggregateInput
  }

  export type TextContentScalarWhereWithAggregatesInput = {
    AND?: TextContentScalarWhereWithAggregatesInput | TextContentScalarWhereWithAggregatesInput[]
    OR?: TextContentScalarWhereWithAggregatesInput[]
    NOT?: TextContentScalarWhereWithAggregatesInput | TextContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TextContent"> | string
    entryId?: StringWithAggregatesFilter<"TextContent"> | string
    content?: StringWithAggregatesFilter<"TextContent"> | string
    excerpt?: StringNullableWithAggregatesFilter<"TextContent"> | string | null
  }

  export type EntryModuleWhereInput = {
    AND?: EntryModuleWhereInput | EntryModuleWhereInput[]
    OR?: EntryModuleWhereInput[]
    NOT?: EntryModuleWhereInput | EntryModuleWhereInput[]
    id?: StringFilter<"EntryModule"> | string
    entryId?: StringFilter<"EntryModule"> | string
    moduleName?: EnumModuleNameFilter<"EntryModule"> | $Enums.ModuleName
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type EntryModuleOrderByWithRelationInput = {
    id?: SortOrder
    entryId?: SortOrder
    moduleName?: SortOrder
    entry?: EntryOrderByWithRelationInput
  }

  export type EntryModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entryId_moduleName?: EntryModuleEntryIdModuleNameCompoundUniqueInput
    AND?: EntryModuleWhereInput | EntryModuleWhereInput[]
    OR?: EntryModuleWhereInput[]
    NOT?: EntryModuleWhereInput | EntryModuleWhereInput[]
    entryId?: StringFilter<"EntryModule"> | string
    moduleName?: EnumModuleNameFilter<"EntryModule"> | $Enums.ModuleName
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "id" | "entryId_moduleName">

  export type EntryModuleOrderByWithAggregationInput = {
    id?: SortOrder
    entryId?: SortOrder
    moduleName?: SortOrder
    _count?: EntryModuleCountOrderByAggregateInput
    _max?: EntryModuleMaxOrderByAggregateInput
    _min?: EntryModuleMinOrderByAggregateInput
  }

  export type EntryModuleScalarWhereWithAggregatesInput = {
    AND?: EntryModuleScalarWhereWithAggregatesInput | EntryModuleScalarWhereWithAggregatesInput[]
    OR?: EntryModuleScalarWhereWithAggregatesInput[]
    NOT?: EntryModuleScalarWhereWithAggregatesInput | EntryModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EntryModule"> | string
    entryId?: StringWithAggregatesFilter<"EntryModule"> | string
    moduleName?: EnumModuleNameWithAggregatesFilter<"EntryModule"> | $Enums.ModuleName
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    entryId?: StringFilter<"WorkExperience"> | string
    company?: StringFilter<"WorkExperience"> | string
    role?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    techStack?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    entryId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    techStack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entry?: EntryOrderByWithRelationInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    entryId?: string
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    company?: StringFilter<"WorkExperience"> | string
    role?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    techStack?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "entryId">

  export type WorkExperienceOrderByWithAggregationInput = {
    entryId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    techStack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkExperienceCountOrderByAggregateInput
    _max?: WorkExperienceMaxOrderByAggregateInput
    _min?: WorkExperienceMinOrderByAggregateInput
  }

  export type WorkExperienceScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    entryId?: StringWithAggregatesFilter<"WorkExperience"> | string
    company?: StringWithAggregatesFilter<"WorkExperience"> | string
    role?: StringWithAggregatesFilter<"WorkExperience"> | string
    startDate?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"WorkExperience"> | Date | string | null
    techStack?: StringWithAggregatesFilter<"WorkExperience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    entryId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    techStack?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    highlights?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    entryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    link?: SortOrderInput | SortOrder
    highlights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entry?: EntryOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    entryId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    techStack?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    highlights?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "entryId">

  export type ProjectOrderByWithAggregationInput = {
    entryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    link?: SortOrderInput | SortOrder
    highlights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    entryId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    techStack?: StringWithAggregatesFilter<"Project"> | string
    link?: StringNullableWithAggregatesFilter<"Project"> | string | null
    highlights?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type KnowledgeLinkWhereInput = {
    AND?: KnowledgeLinkWhereInput | KnowledgeLinkWhereInput[]
    OR?: KnowledgeLinkWhereInput[]
    NOT?: KnowledgeLinkWhereInput | KnowledgeLinkWhereInput[]
    entryId?: StringFilter<"KnowledgeLink"> | string
    url?: StringFilter<"KnowledgeLink"> | string
    category?: StringFilter<"KnowledgeLink"> | string
    tags?: StringFilter<"KnowledgeLink"> | string
    description?: StringFilter<"KnowledgeLink"> | string
    createdAt?: DateTimeFilter<"KnowledgeLink"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeLink"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type KnowledgeLinkOrderByWithRelationInput = {
    entryId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entry?: EntryOrderByWithRelationInput
  }

  export type KnowledgeLinkWhereUniqueInput = Prisma.AtLeast<{
    entryId?: string
    AND?: KnowledgeLinkWhereInput | KnowledgeLinkWhereInput[]
    OR?: KnowledgeLinkWhereInput[]
    NOT?: KnowledgeLinkWhereInput | KnowledgeLinkWhereInput[]
    url?: StringFilter<"KnowledgeLink"> | string
    category?: StringFilter<"KnowledgeLink"> | string
    tags?: StringFilter<"KnowledgeLink"> | string
    description?: StringFilter<"KnowledgeLink"> | string
    createdAt?: DateTimeFilter<"KnowledgeLink"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeLink"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "entryId">

  export type KnowledgeLinkOrderByWithAggregationInput = {
    entryId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KnowledgeLinkCountOrderByAggregateInput
    _max?: KnowledgeLinkMaxOrderByAggregateInput
    _min?: KnowledgeLinkMinOrderByAggregateInput
  }

  export type KnowledgeLinkScalarWhereWithAggregatesInput = {
    AND?: KnowledgeLinkScalarWhereWithAggregatesInput | KnowledgeLinkScalarWhereWithAggregatesInput[]
    OR?: KnowledgeLinkScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeLinkScalarWhereWithAggregatesInput | KnowledgeLinkScalarWhereWithAggregatesInput[]
    entryId?: StringWithAggregatesFilter<"KnowledgeLink"> | string
    url?: StringWithAggregatesFilter<"KnowledgeLink"> | string
    category?: StringWithAggregatesFilter<"KnowledgeLink"> | string
    tags?: StringWithAggregatesFilter<"KnowledgeLink"> | string
    description?: StringWithAggregatesFilter<"KnowledgeLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeLink"> | Date | string
  }

  export type TravelWhereInput = {
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    entryId?: StringFilter<"Travel"> | string
    destination?: StringFilter<"Travel"> | string
    travelDate?: DateTimeNullableFilter<"Travel"> | Date | string | null
    tags?: StringFilter<"Travel"> | string
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    updatedAt?: DateTimeFilter<"Travel"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type TravelOrderByWithRelationInput = {
    entryId?: SortOrder
    destination?: SortOrder
    travelDate?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entry?: EntryOrderByWithRelationInput
  }

  export type TravelWhereUniqueInput = Prisma.AtLeast<{
    entryId?: string
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    destination?: StringFilter<"Travel"> | string
    travelDate?: DateTimeNullableFilter<"Travel"> | Date | string | null
    tags?: StringFilter<"Travel"> | string
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    updatedAt?: DateTimeFilter<"Travel"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "entryId">

  export type TravelOrderByWithAggregationInput = {
    entryId?: SortOrder
    destination?: SortOrder
    travelDate?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelCountOrderByAggregateInput
    _max?: TravelMaxOrderByAggregateInput
    _min?: TravelMinOrderByAggregateInput
  }

  export type TravelScalarWhereWithAggregatesInput = {
    AND?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    OR?: TravelScalarWhereWithAggregatesInput[]
    NOT?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    entryId?: StringWithAggregatesFilter<"Travel"> | string
    destination?: StringWithAggregatesFilter<"Travel"> | string
    travelDate?: DateTimeNullableWithAggregatesFilter<"Travel"> | Date | string | null
    tags?: StringWithAggregatesFilter<"Travel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Travel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Travel"> | Date | string
  }

  export type LifestyleWhereInput = {
    AND?: LifestyleWhereInput | LifestyleWhereInput[]
    OR?: LifestyleWhereInput[]
    NOT?: LifestyleWhereInput | LifestyleWhereInput[]
    entryId?: StringFilter<"Lifestyle"> | string
    subType?: StringFilter<"Lifestyle"> | string
    tags?: StringFilter<"Lifestyle"> | string
    date?: DateTimeNullableFilter<"Lifestyle"> | Date | string | null
    createdAt?: DateTimeFilter<"Lifestyle"> | Date | string
    updatedAt?: DateTimeFilter<"Lifestyle"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type LifestyleOrderByWithRelationInput = {
    entryId?: SortOrder
    subType?: SortOrder
    tags?: SortOrder
    date?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entry?: EntryOrderByWithRelationInput
  }

  export type LifestyleWhereUniqueInput = Prisma.AtLeast<{
    entryId?: string
    AND?: LifestyleWhereInput | LifestyleWhereInput[]
    OR?: LifestyleWhereInput[]
    NOT?: LifestyleWhereInput | LifestyleWhereInput[]
    subType?: StringFilter<"Lifestyle"> | string
    tags?: StringFilter<"Lifestyle"> | string
    date?: DateTimeNullableFilter<"Lifestyle"> | Date | string | null
    createdAt?: DateTimeFilter<"Lifestyle"> | Date | string
    updatedAt?: DateTimeFilter<"Lifestyle"> | Date | string
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "entryId">

  export type LifestyleOrderByWithAggregationInput = {
    entryId?: SortOrder
    subType?: SortOrder
    tags?: SortOrder
    date?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LifestyleCountOrderByAggregateInput
    _max?: LifestyleMaxOrderByAggregateInput
    _min?: LifestyleMinOrderByAggregateInput
  }

  export type LifestyleScalarWhereWithAggregatesInput = {
    AND?: LifestyleScalarWhereWithAggregatesInput | LifestyleScalarWhereWithAggregatesInput[]
    OR?: LifestyleScalarWhereWithAggregatesInput[]
    NOT?: LifestyleScalarWhereWithAggregatesInput | LifestyleScalarWhereWithAggregatesInput[]
    entryId?: StringWithAggregatesFilter<"Lifestyle"> | string
    subType?: StringWithAggregatesFilter<"Lifestyle"> | string
    tags?: StringWithAggregatesFilter<"Lifestyle"> | string
    date?: DateTimeNullableWithAggregatesFilter<"Lifestyle"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lifestyle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lifestyle"> | Date | string
  }

  export type EntryCreateInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateManyInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
  }

  export type EntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextContentCreateInput = {
    id?: string
    content: string
    excerpt?: string | null
    entry: EntryCreateNestedOneWithoutTextContentInput
  }

  export type TextContentUncheckedCreateInput = {
    id?: string
    entryId: string
    content: string
    excerpt?: string | null
  }

  export type TextContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EntryUpdateOneRequiredWithoutTextContentNestedInput
  }

  export type TextContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextContentCreateManyInput = {
    id?: string
    entryId: string
    content: string
    excerpt?: string | null
  }

  export type TextContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntryModuleCreateInput = {
    id?: string
    moduleName: $Enums.ModuleName
    entry: EntryCreateNestedOneWithoutModulesInput
  }

  export type EntryModuleUncheckedCreateInput = {
    id?: string
    entryId: string
    moduleName: $Enums.ModuleName
  }

  export type EntryModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleName?: EnumModuleNameFieldUpdateOperationsInput | $Enums.ModuleName
    entry?: EntryUpdateOneRequiredWithoutModulesNestedInput
  }

  export type EntryModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    moduleName?: EnumModuleNameFieldUpdateOperationsInput | $Enums.ModuleName
  }

  export type EntryModuleCreateManyInput = {
    id?: string
    entryId: string
    moduleName: $Enums.ModuleName
  }

  export type EntryModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleName?: EnumModuleNameFieldUpdateOperationsInput | $Enums.ModuleName
  }

  export type EntryModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    moduleName?: EnumModuleNameFieldUpdateOperationsInput | $Enums.ModuleName
  }

  export type WorkExperienceCreateInput = {
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    techStack: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entry?: EntryCreateNestedOneWithoutWorkExpInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    entryId?: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    techStack: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    techStack?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: EntryUpdateOneRequiredWithoutWorkExpNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    techStack?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateManyInput = {
    entryId?: string
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    techStack: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceUpdateManyMutationInput = {
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    techStack?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    techStack?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    description: string
    techStack: string
    link?: string | null
    highlights: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entry?: EntryCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    entryId?: string
    name: string
    description: string
    techStack: string
    link?: string | null
    highlights: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: EntryUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    entryId?: string
    name: string
    description: string
    techStack: string
    link?: string | null
    highlights: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeLinkCreateInput = {
    url: string
    category: string
    tags: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entry?: EntryCreateNestedOneWithoutKnowledgeInput
  }

  export type KnowledgeLinkUncheckedCreateInput = {
    entryId?: string
    url: string
    category: string
    tags: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeLinkUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: EntryUpdateOneRequiredWithoutKnowledgeNestedInput
  }

  export type KnowledgeLinkUncheckedUpdateInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeLinkCreateManyInput = {
    entryId?: string
    url: string
    category: string
    tags: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeLinkUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeLinkUncheckedUpdateManyInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelCreateInput = {
    destination: string
    travelDate?: Date | string | null
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entry?: EntryCreateNestedOneWithoutTravelInput
  }

  export type TravelUncheckedCreateInput = {
    entryId?: string
    destination: string
    travelDate?: Date | string | null
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelUpdateInput = {
    destination?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: EntryUpdateOneRequiredWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelCreateManyInput = {
    entryId?: string
    destination: string
    travelDate?: Date | string | null
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelUpdateManyMutationInput = {
    destination?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUncheckedUpdateManyInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LifestyleCreateInput = {
    subType: string
    tags: string
    date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entry?: EntryCreateNestedOneWithoutLifestyleInput
  }

  export type LifestyleUncheckedCreateInput = {
    entryId?: string
    subType: string
    tags: string
    date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LifestyleUpdateInput = {
    subType?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: EntryUpdateOneRequiredWithoutLifestyleNestedInput
  }

  export type LifestyleUncheckedUpdateInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    subType?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LifestyleCreateManyInput = {
    entryId?: string
    subType: string
    tags: string
    date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LifestyleUpdateManyMutationInput = {
    subType?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LifestyleUncheckedUpdateManyInput = {
    entryId?: StringFieldUpdateOperationsInput | string
    subType?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeFilter<$PrismaModel> | $Enums.EntryType
  }

  export type EnumEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[]
    notIn?: $Enums.EntryStatus[]
    not?: NestedEnumEntryStatusFilter<$PrismaModel> | $Enums.EntryStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EntryNullableScalarRelationFilter = {
    is?: EntryWhereInput | null
    isNot?: EntryWhereInput | null
  }

  export type EntryListRelationFilter = {
    every?: EntryWhereInput
    some?: EntryWhereInput
    none?: EntryWhereInput
  }

  export type TextContentNullableScalarRelationFilter = {
    is?: TextContentWhereInput | null
    isNot?: TextContentWhereInput | null
  }

  export type EntryModuleListRelationFilter = {
    every?: EntryModuleWhereInput
    some?: EntryModuleWhereInput
    none?: EntryModuleWhereInput
  }

  export type WorkExperienceNullableScalarRelationFilter = {
    is?: WorkExperienceWhereInput | null
    isNot?: WorkExperienceWhereInput | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type KnowledgeLinkNullableScalarRelationFilter = {
    is?: KnowledgeLinkWhereInput | null
    isNot?: KnowledgeLinkWhereInput | null
  }

  export type TravelNullableScalarRelationFilter = {
    is?: TravelWhereInput | null
    isNot?: TravelWhereInput | null
  }

  export type LifestyleNullableScalarRelationFilter = {
    is?: LifestyleWhereInput | null
    isNot?: LifestyleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntryModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    occurredAt?: SortOrder
    location?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    occurredAt?: SortOrder
    location?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type EntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    occurredAt?: SortOrder
    location?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumEntryTypeFilter<$PrismaModel>
  }

  export type EnumEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[]
    notIn?: $Enums.EntryStatus[]
    not?: NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumEntryStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EntryScalarRelationFilter = {
    is?: EntryWhereInput
    isNot?: EntryWhereInput
  }

  export type TextContentCountOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
  }

  export type TextContentMaxOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
  }

  export type TextContentMinOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
  }

  export type EnumModuleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleName | EnumModuleNameFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleName[]
    notIn?: $Enums.ModuleName[]
    not?: NestedEnumModuleNameFilter<$PrismaModel> | $Enums.ModuleName
  }

  export type EntryModuleEntryIdModuleNameCompoundUniqueInput = {
    entryId: string
    moduleName: $Enums.ModuleName
  }

  export type EntryModuleCountOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    moduleName?: SortOrder
  }

  export type EntryModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    moduleName?: SortOrder
  }

  export type EntryModuleMinOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    moduleName?: SortOrder
  }

  export type EnumModuleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleName | EnumModuleNameFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleName[]
    notIn?: $Enums.ModuleName[]
    not?: NestedEnumModuleNameWithAggregatesFilter<$PrismaModel> | $Enums.ModuleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModuleNameFilter<$PrismaModel>
    _max?: NestedEnumModuleNameFilter<$PrismaModel>
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    entryId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    techStack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    entryId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    techStack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    entryId?: SortOrder
    company?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    techStack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    entryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    link?: SortOrder
    highlights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    entryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    link?: SortOrder
    highlights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    entryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    link?: SortOrder
    highlights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeLinkCountOrderByAggregateInput = {
    entryId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeLinkMaxOrderByAggregateInput = {
    entryId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeLinkMinOrderByAggregateInput = {
    entryId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelCountOrderByAggregateInput = {
    entryId?: SortOrder
    destination?: SortOrder
    travelDate?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelMaxOrderByAggregateInput = {
    entryId?: SortOrder
    destination?: SortOrder
    travelDate?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelMinOrderByAggregateInput = {
    entryId?: SortOrder
    destination?: SortOrder
    travelDate?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LifestyleCountOrderByAggregateInput = {
    entryId?: SortOrder
    subType?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LifestyleMaxOrderByAggregateInput = {
    entryId?: SortOrder
    subType?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LifestyleMinOrderByAggregateInput = {
    entryId?: SortOrder
    subType?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<EntryCreateWithoutChildrenInput, EntryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: EntryCreateOrConnectWithoutChildrenInput
    connect?: EntryWhereUniqueInput
  }

  export type EntryCreateNestedManyWithoutParentInput = {
    create?: XOR<EntryCreateWithoutParentInput, EntryUncheckedCreateWithoutParentInput> | EntryCreateWithoutParentInput[] | EntryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutParentInput | EntryCreateOrConnectWithoutParentInput[]
    createMany?: EntryCreateManyParentInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type TextContentCreateNestedOneWithoutEntryInput = {
    create?: XOR<TextContentCreateWithoutEntryInput, TextContentUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutEntryInput
    connect?: TextContentWhereUniqueInput
  }

  export type EntryModuleCreateNestedManyWithoutEntryInput = {
    create?: XOR<EntryModuleCreateWithoutEntryInput, EntryModuleUncheckedCreateWithoutEntryInput> | EntryModuleCreateWithoutEntryInput[] | EntryModuleUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EntryModuleCreateOrConnectWithoutEntryInput | EntryModuleCreateOrConnectWithoutEntryInput[]
    createMany?: EntryModuleCreateManyEntryInputEnvelope
    connect?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
  }

  export type WorkExperienceCreateNestedOneWithoutEntryInput = {
    create?: XOR<WorkExperienceCreateWithoutEntryInput, WorkExperienceUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutEntryInput
    connect?: WorkExperienceWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutEntryInput = {
    create?: XOR<ProjectCreateWithoutEntryInput, ProjectUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEntryInput
    connect?: ProjectWhereUniqueInput
  }

  export type KnowledgeLinkCreateNestedOneWithoutEntryInput = {
    create?: XOR<KnowledgeLinkCreateWithoutEntryInput, KnowledgeLinkUncheckedCreateWithoutEntryInput>
    connectOrCreate?: KnowledgeLinkCreateOrConnectWithoutEntryInput
    connect?: KnowledgeLinkWhereUniqueInput
  }

  export type TravelCreateNestedOneWithoutEntryInput = {
    create?: XOR<TravelCreateWithoutEntryInput, TravelUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TravelCreateOrConnectWithoutEntryInput
    connect?: TravelWhereUniqueInput
  }

  export type LifestyleCreateNestedOneWithoutEntryInput = {
    create?: XOR<LifestyleCreateWithoutEntryInput, LifestyleUncheckedCreateWithoutEntryInput>
    connectOrCreate?: LifestyleCreateOrConnectWithoutEntryInput
    connect?: LifestyleWhereUniqueInput
  }

  export type EntryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<EntryCreateWithoutParentInput, EntryUncheckedCreateWithoutParentInput> | EntryCreateWithoutParentInput[] | EntryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutParentInput | EntryCreateOrConnectWithoutParentInput[]
    createMany?: EntryCreateManyParentInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type TextContentUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<TextContentCreateWithoutEntryInput, TextContentUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutEntryInput
    connect?: TextContentWhereUniqueInput
  }

  export type EntryModuleUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<EntryModuleCreateWithoutEntryInput, EntryModuleUncheckedCreateWithoutEntryInput> | EntryModuleCreateWithoutEntryInput[] | EntryModuleUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EntryModuleCreateOrConnectWithoutEntryInput | EntryModuleCreateOrConnectWithoutEntryInput[]
    createMany?: EntryModuleCreateManyEntryInputEnvelope
    connect?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
  }

  export type WorkExperienceUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<WorkExperienceCreateWithoutEntryInput, WorkExperienceUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutEntryInput
    connect?: WorkExperienceWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<ProjectCreateWithoutEntryInput, ProjectUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEntryInput
    connect?: ProjectWhereUniqueInput
  }

  export type KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<KnowledgeLinkCreateWithoutEntryInput, KnowledgeLinkUncheckedCreateWithoutEntryInput>
    connectOrCreate?: KnowledgeLinkCreateOrConnectWithoutEntryInput
    connect?: KnowledgeLinkWhereUniqueInput
  }

  export type TravelUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<TravelCreateWithoutEntryInput, TravelUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TravelCreateOrConnectWithoutEntryInput
    connect?: TravelWhereUniqueInput
  }

  export type LifestyleUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<LifestyleCreateWithoutEntryInput, LifestyleUncheckedCreateWithoutEntryInput>
    connectOrCreate?: LifestyleCreateOrConnectWithoutEntryInput
    connect?: LifestyleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEntryTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntryType
  }

  export type EnumEntryStatusFieldUpdateOperationsInput = {
    set?: $Enums.EntryStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EntryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<EntryCreateWithoutChildrenInput, EntryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: EntryCreateOrConnectWithoutChildrenInput
    upsert?: EntryUpsertWithoutChildrenInput
    disconnect?: EntryWhereInput | boolean
    delete?: EntryWhereInput | boolean
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutChildrenInput, EntryUpdateWithoutChildrenInput>, EntryUncheckedUpdateWithoutChildrenInput>
  }

  export type EntryUpdateManyWithoutParentNestedInput = {
    create?: XOR<EntryCreateWithoutParentInput, EntryUncheckedCreateWithoutParentInput> | EntryCreateWithoutParentInput[] | EntryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutParentInput | EntryCreateOrConnectWithoutParentInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutParentInput | EntryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: EntryCreateManyParentInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutParentInput | EntryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutParentInput | EntryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type TextContentUpdateOneWithoutEntryNestedInput = {
    create?: XOR<TextContentCreateWithoutEntryInput, TextContentUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutEntryInput
    upsert?: TextContentUpsertWithoutEntryInput
    disconnect?: TextContentWhereInput | boolean
    delete?: TextContentWhereInput | boolean
    connect?: TextContentWhereUniqueInput
    update?: XOR<XOR<TextContentUpdateToOneWithWhereWithoutEntryInput, TextContentUpdateWithoutEntryInput>, TextContentUncheckedUpdateWithoutEntryInput>
  }

  export type EntryModuleUpdateManyWithoutEntryNestedInput = {
    create?: XOR<EntryModuleCreateWithoutEntryInput, EntryModuleUncheckedCreateWithoutEntryInput> | EntryModuleCreateWithoutEntryInput[] | EntryModuleUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EntryModuleCreateOrConnectWithoutEntryInput | EntryModuleCreateOrConnectWithoutEntryInput[]
    upsert?: EntryModuleUpsertWithWhereUniqueWithoutEntryInput | EntryModuleUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: EntryModuleCreateManyEntryInputEnvelope
    set?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    disconnect?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    delete?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    connect?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    update?: EntryModuleUpdateWithWhereUniqueWithoutEntryInput | EntryModuleUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: EntryModuleUpdateManyWithWhereWithoutEntryInput | EntryModuleUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: EntryModuleScalarWhereInput | EntryModuleScalarWhereInput[]
  }

  export type WorkExperienceUpdateOneWithoutEntryNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutEntryInput, WorkExperienceUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutEntryInput
    upsert?: WorkExperienceUpsertWithoutEntryInput
    disconnect?: WorkExperienceWhereInput | boolean
    delete?: WorkExperienceWhereInput | boolean
    connect?: WorkExperienceWhereUniqueInput
    update?: XOR<XOR<WorkExperienceUpdateToOneWithWhereWithoutEntryInput, WorkExperienceUpdateWithoutEntryInput>, WorkExperienceUncheckedUpdateWithoutEntryInput>
  }

  export type ProjectUpdateOneWithoutEntryNestedInput = {
    create?: XOR<ProjectCreateWithoutEntryInput, ProjectUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEntryInput
    upsert?: ProjectUpsertWithoutEntryInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEntryInput, ProjectUpdateWithoutEntryInput>, ProjectUncheckedUpdateWithoutEntryInput>
  }

  export type KnowledgeLinkUpdateOneWithoutEntryNestedInput = {
    create?: XOR<KnowledgeLinkCreateWithoutEntryInput, KnowledgeLinkUncheckedCreateWithoutEntryInput>
    connectOrCreate?: KnowledgeLinkCreateOrConnectWithoutEntryInput
    upsert?: KnowledgeLinkUpsertWithoutEntryInput
    disconnect?: KnowledgeLinkWhereInput | boolean
    delete?: KnowledgeLinkWhereInput | boolean
    connect?: KnowledgeLinkWhereUniqueInput
    update?: XOR<XOR<KnowledgeLinkUpdateToOneWithWhereWithoutEntryInput, KnowledgeLinkUpdateWithoutEntryInput>, KnowledgeLinkUncheckedUpdateWithoutEntryInput>
  }

  export type TravelUpdateOneWithoutEntryNestedInput = {
    create?: XOR<TravelCreateWithoutEntryInput, TravelUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TravelCreateOrConnectWithoutEntryInput
    upsert?: TravelUpsertWithoutEntryInput
    disconnect?: TravelWhereInput | boolean
    delete?: TravelWhereInput | boolean
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutEntryInput, TravelUpdateWithoutEntryInput>, TravelUncheckedUpdateWithoutEntryInput>
  }

  export type LifestyleUpdateOneWithoutEntryNestedInput = {
    create?: XOR<LifestyleCreateWithoutEntryInput, LifestyleUncheckedCreateWithoutEntryInput>
    connectOrCreate?: LifestyleCreateOrConnectWithoutEntryInput
    upsert?: LifestyleUpsertWithoutEntryInput
    disconnect?: LifestyleWhereInput | boolean
    delete?: LifestyleWhereInput | boolean
    connect?: LifestyleWhereUniqueInput
    update?: XOR<XOR<LifestyleUpdateToOneWithWhereWithoutEntryInput, LifestyleUpdateWithoutEntryInput>, LifestyleUncheckedUpdateWithoutEntryInput>
  }

  export type EntryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<EntryCreateWithoutParentInput, EntryUncheckedCreateWithoutParentInput> | EntryCreateWithoutParentInput[] | EntryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutParentInput | EntryCreateOrConnectWithoutParentInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutParentInput | EntryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: EntryCreateManyParentInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutParentInput | EntryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutParentInput | EntryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type TextContentUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<TextContentCreateWithoutEntryInput, TextContentUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutEntryInput
    upsert?: TextContentUpsertWithoutEntryInput
    disconnect?: TextContentWhereInput | boolean
    delete?: TextContentWhereInput | boolean
    connect?: TextContentWhereUniqueInput
    update?: XOR<XOR<TextContentUpdateToOneWithWhereWithoutEntryInput, TextContentUpdateWithoutEntryInput>, TextContentUncheckedUpdateWithoutEntryInput>
  }

  export type EntryModuleUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<EntryModuleCreateWithoutEntryInput, EntryModuleUncheckedCreateWithoutEntryInput> | EntryModuleCreateWithoutEntryInput[] | EntryModuleUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EntryModuleCreateOrConnectWithoutEntryInput | EntryModuleCreateOrConnectWithoutEntryInput[]
    upsert?: EntryModuleUpsertWithWhereUniqueWithoutEntryInput | EntryModuleUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: EntryModuleCreateManyEntryInputEnvelope
    set?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    disconnect?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    delete?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    connect?: EntryModuleWhereUniqueInput | EntryModuleWhereUniqueInput[]
    update?: EntryModuleUpdateWithWhereUniqueWithoutEntryInput | EntryModuleUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: EntryModuleUpdateManyWithWhereWithoutEntryInput | EntryModuleUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: EntryModuleScalarWhereInput | EntryModuleScalarWhereInput[]
  }

  export type WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutEntryInput, WorkExperienceUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutEntryInput
    upsert?: WorkExperienceUpsertWithoutEntryInput
    disconnect?: WorkExperienceWhereInput | boolean
    delete?: WorkExperienceWhereInput | boolean
    connect?: WorkExperienceWhereUniqueInput
    update?: XOR<XOR<WorkExperienceUpdateToOneWithWhereWithoutEntryInput, WorkExperienceUpdateWithoutEntryInput>, WorkExperienceUncheckedUpdateWithoutEntryInput>
  }

  export type ProjectUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<ProjectCreateWithoutEntryInput, ProjectUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEntryInput
    upsert?: ProjectUpsertWithoutEntryInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEntryInput, ProjectUpdateWithoutEntryInput>, ProjectUncheckedUpdateWithoutEntryInput>
  }

  export type KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<KnowledgeLinkCreateWithoutEntryInput, KnowledgeLinkUncheckedCreateWithoutEntryInput>
    connectOrCreate?: KnowledgeLinkCreateOrConnectWithoutEntryInput
    upsert?: KnowledgeLinkUpsertWithoutEntryInput
    disconnect?: KnowledgeLinkWhereInput | boolean
    delete?: KnowledgeLinkWhereInput | boolean
    connect?: KnowledgeLinkWhereUniqueInput
    update?: XOR<XOR<KnowledgeLinkUpdateToOneWithWhereWithoutEntryInput, KnowledgeLinkUpdateWithoutEntryInput>, KnowledgeLinkUncheckedUpdateWithoutEntryInput>
  }

  export type TravelUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<TravelCreateWithoutEntryInput, TravelUncheckedCreateWithoutEntryInput>
    connectOrCreate?: TravelCreateOrConnectWithoutEntryInput
    upsert?: TravelUpsertWithoutEntryInput
    disconnect?: TravelWhereInput | boolean
    delete?: TravelWhereInput | boolean
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutEntryInput, TravelUpdateWithoutEntryInput>, TravelUncheckedUpdateWithoutEntryInput>
  }

  export type LifestyleUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<LifestyleCreateWithoutEntryInput, LifestyleUncheckedCreateWithoutEntryInput>
    connectOrCreate?: LifestyleCreateOrConnectWithoutEntryInput
    upsert?: LifestyleUpsertWithoutEntryInput
    disconnect?: LifestyleWhereInput | boolean
    delete?: LifestyleWhereInput | boolean
    connect?: LifestyleWhereUniqueInput
    update?: XOR<XOR<LifestyleUpdateToOneWithWhereWithoutEntryInput, LifestyleUpdateWithoutEntryInput>, LifestyleUncheckedUpdateWithoutEntryInput>
  }

  export type EntryCreateNestedOneWithoutTextContentInput = {
    create?: XOR<EntryCreateWithoutTextContentInput, EntryUncheckedCreateWithoutTextContentInput>
    connectOrCreate?: EntryCreateOrConnectWithoutTextContentInput
    connect?: EntryWhereUniqueInput
  }

  export type EntryUpdateOneRequiredWithoutTextContentNestedInput = {
    create?: XOR<EntryCreateWithoutTextContentInput, EntryUncheckedCreateWithoutTextContentInput>
    connectOrCreate?: EntryCreateOrConnectWithoutTextContentInput
    upsert?: EntryUpsertWithoutTextContentInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutTextContentInput, EntryUpdateWithoutTextContentInput>, EntryUncheckedUpdateWithoutTextContentInput>
  }

  export type EntryCreateNestedOneWithoutModulesInput = {
    create?: XOR<EntryCreateWithoutModulesInput, EntryUncheckedCreateWithoutModulesInput>
    connectOrCreate?: EntryCreateOrConnectWithoutModulesInput
    connect?: EntryWhereUniqueInput
  }

  export type EnumModuleNameFieldUpdateOperationsInput = {
    set?: $Enums.ModuleName
  }

  export type EntryUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<EntryCreateWithoutModulesInput, EntryUncheckedCreateWithoutModulesInput>
    connectOrCreate?: EntryCreateOrConnectWithoutModulesInput
    upsert?: EntryUpsertWithoutModulesInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutModulesInput, EntryUpdateWithoutModulesInput>, EntryUncheckedUpdateWithoutModulesInput>
  }

  export type EntryCreateNestedOneWithoutWorkExpInput = {
    create?: XOR<EntryCreateWithoutWorkExpInput, EntryUncheckedCreateWithoutWorkExpInput>
    connectOrCreate?: EntryCreateOrConnectWithoutWorkExpInput
    connect?: EntryWhereUniqueInput
  }

  export type EntryUpdateOneRequiredWithoutWorkExpNestedInput = {
    create?: XOR<EntryCreateWithoutWorkExpInput, EntryUncheckedCreateWithoutWorkExpInput>
    connectOrCreate?: EntryCreateOrConnectWithoutWorkExpInput
    upsert?: EntryUpsertWithoutWorkExpInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutWorkExpInput, EntryUpdateWithoutWorkExpInput>, EntryUncheckedUpdateWithoutWorkExpInput>
  }

  export type EntryCreateNestedOneWithoutProjectInput = {
    create?: XOR<EntryCreateWithoutProjectInput, EntryUncheckedCreateWithoutProjectInput>
    connectOrCreate?: EntryCreateOrConnectWithoutProjectInput
    connect?: EntryWhereUniqueInput
  }

  export type EntryUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<EntryCreateWithoutProjectInput, EntryUncheckedCreateWithoutProjectInput>
    connectOrCreate?: EntryCreateOrConnectWithoutProjectInput
    upsert?: EntryUpsertWithoutProjectInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutProjectInput, EntryUpdateWithoutProjectInput>, EntryUncheckedUpdateWithoutProjectInput>
  }

  export type EntryCreateNestedOneWithoutKnowledgeInput = {
    create?: XOR<EntryCreateWithoutKnowledgeInput, EntryUncheckedCreateWithoutKnowledgeInput>
    connectOrCreate?: EntryCreateOrConnectWithoutKnowledgeInput
    connect?: EntryWhereUniqueInput
  }

  export type EntryUpdateOneRequiredWithoutKnowledgeNestedInput = {
    create?: XOR<EntryCreateWithoutKnowledgeInput, EntryUncheckedCreateWithoutKnowledgeInput>
    connectOrCreate?: EntryCreateOrConnectWithoutKnowledgeInput
    upsert?: EntryUpsertWithoutKnowledgeInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutKnowledgeInput, EntryUpdateWithoutKnowledgeInput>, EntryUncheckedUpdateWithoutKnowledgeInput>
  }

  export type EntryCreateNestedOneWithoutTravelInput = {
    create?: XOR<EntryCreateWithoutTravelInput, EntryUncheckedCreateWithoutTravelInput>
    connectOrCreate?: EntryCreateOrConnectWithoutTravelInput
    connect?: EntryWhereUniqueInput
  }

  export type EntryUpdateOneRequiredWithoutTravelNestedInput = {
    create?: XOR<EntryCreateWithoutTravelInput, EntryUncheckedCreateWithoutTravelInput>
    connectOrCreate?: EntryCreateOrConnectWithoutTravelInput
    upsert?: EntryUpsertWithoutTravelInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutTravelInput, EntryUpdateWithoutTravelInput>, EntryUncheckedUpdateWithoutTravelInput>
  }

  export type EntryCreateNestedOneWithoutLifestyleInput = {
    create?: XOR<EntryCreateWithoutLifestyleInput, EntryUncheckedCreateWithoutLifestyleInput>
    connectOrCreate?: EntryCreateOrConnectWithoutLifestyleInput
    connect?: EntryWhereUniqueInput
  }

  export type EntryUpdateOneRequiredWithoutLifestyleNestedInput = {
    create?: XOR<EntryCreateWithoutLifestyleInput, EntryUncheckedCreateWithoutLifestyleInput>
    connectOrCreate?: EntryCreateOrConnectWithoutLifestyleInput
    upsert?: EntryUpsertWithoutLifestyleInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutLifestyleInput, EntryUpdateWithoutLifestyleInput>, EntryUncheckedUpdateWithoutLifestyleInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeFilter<$PrismaModel> | $Enums.EntryType
  }

  export type NestedEnumEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[]
    notIn?: $Enums.EntryStatus[]
    not?: NestedEnumEntryStatusFilter<$PrismaModel> | $Enums.EntryStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumEntryTypeFilter<$PrismaModel>
  }

  export type NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[]
    notIn?: $Enums.EntryStatus[]
    not?: NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumEntryStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumModuleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleName | EnumModuleNameFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleName[]
    notIn?: $Enums.ModuleName[]
    not?: NestedEnumModuleNameFilter<$PrismaModel> | $Enums.ModuleName
  }

  export type NestedEnumModuleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleName | EnumModuleNameFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleName[]
    notIn?: $Enums.ModuleName[]
    not?: NestedEnumModuleNameWithAggregatesFilter<$PrismaModel> | $Enums.ModuleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModuleNameFilter<$PrismaModel>
    _max?: NestedEnumModuleNameFilter<$PrismaModel>
  }

  export type EntryCreateWithoutChildrenInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutChildrenInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutChildrenInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutChildrenInput, EntryUncheckedCreateWithoutChildrenInput>
  }

  export type EntryCreateWithoutParentInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutParentInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutParentInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutParentInput, EntryUncheckedCreateWithoutParentInput>
  }

  export type EntryCreateManyParentInputEnvelope = {
    data: EntryCreateManyParentInput | EntryCreateManyParentInput[]
  }

  export type TextContentCreateWithoutEntryInput = {
    id?: string
    content: string
    excerpt?: string | null
  }

  export type TextContentUncheckedCreateWithoutEntryInput = {
    id?: string
    content: string
    excerpt?: string | null
  }

  export type TextContentCreateOrConnectWithoutEntryInput = {
    where: TextContentWhereUniqueInput
    create: XOR<TextContentCreateWithoutEntryInput, TextContentUncheckedCreateWithoutEntryInput>
  }

  export type EntryModuleCreateWithoutEntryInput = {
    id?: string
    moduleName: $Enums.ModuleName
  }

  export type EntryModuleUncheckedCreateWithoutEntryInput = {
    id?: string
    moduleName: $Enums.ModuleName
  }

  export type EntryModuleCreateOrConnectWithoutEntryInput = {
    where: EntryModuleWhereUniqueInput
    create: XOR<EntryModuleCreateWithoutEntryInput, EntryModuleUncheckedCreateWithoutEntryInput>
  }

  export type EntryModuleCreateManyEntryInputEnvelope = {
    data: EntryModuleCreateManyEntryInput | EntryModuleCreateManyEntryInput[]
  }

  export type WorkExperienceCreateWithoutEntryInput = {
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    techStack: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceUncheckedCreateWithoutEntryInput = {
    company: string
    role: string
    startDate: Date | string
    endDate?: Date | string | null
    techStack: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceCreateOrConnectWithoutEntryInput = {
    where: WorkExperienceWhereUniqueInput
    create: XOR<WorkExperienceCreateWithoutEntryInput, WorkExperienceUncheckedCreateWithoutEntryInput>
  }

  export type ProjectCreateWithoutEntryInput = {
    name: string
    description: string
    techStack: string
    link?: string | null
    highlights: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutEntryInput = {
    name: string
    description: string
    techStack: string
    link?: string | null
    highlights: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutEntryInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEntryInput, ProjectUncheckedCreateWithoutEntryInput>
  }

  export type KnowledgeLinkCreateWithoutEntryInput = {
    url: string
    category: string
    tags: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeLinkUncheckedCreateWithoutEntryInput = {
    url: string
    category: string
    tags: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeLinkCreateOrConnectWithoutEntryInput = {
    where: KnowledgeLinkWhereUniqueInput
    create: XOR<KnowledgeLinkCreateWithoutEntryInput, KnowledgeLinkUncheckedCreateWithoutEntryInput>
  }

  export type TravelCreateWithoutEntryInput = {
    destination: string
    travelDate?: Date | string | null
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelUncheckedCreateWithoutEntryInput = {
    destination: string
    travelDate?: Date | string | null
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelCreateOrConnectWithoutEntryInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutEntryInput, TravelUncheckedCreateWithoutEntryInput>
  }

  export type LifestyleCreateWithoutEntryInput = {
    subType: string
    tags: string
    date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LifestyleUncheckedCreateWithoutEntryInput = {
    subType: string
    tags: string
    date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LifestyleCreateOrConnectWithoutEntryInput = {
    where: LifestyleWhereUniqueInput
    create: XOR<LifestyleCreateWithoutEntryInput, LifestyleUncheckedCreateWithoutEntryInput>
  }

  export type EntryUpsertWithoutChildrenInput = {
    update: XOR<EntryUpdateWithoutChildrenInput, EntryUncheckedUpdateWithoutChildrenInput>
    create: XOR<EntryCreateWithoutChildrenInput, EntryUncheckedCreateWithoutChildrenInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutChildrenInput, EntryUncheckedUpdateWithoutChildrenInput>
  }

  export type EntryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryUpsertWithWhereUniqueWithoutParentInput = {
    where: EntryWhereUniqueInput
    update: XOR<EntryUpdateWithoutParentInput, EntryUncheckedUpdateWithoutParentInput>
    create: XOR<EntryCreateWithoutParentInput, EntryUncheckedCreateWithoutParentInput>
  }

  export type EntryUpdateWithWhereUniqueWithoutParentInput = {
    where: EntryWhereUniqueInput
    data: XOR<EntryUpdateWithoutParentInput, EntryUncheckedUpdateWithoutParentInput>
  }

  export type EntryUpdateManyWithWhereWithoutParentInput = {
    where: EntryScalarWhereInput
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyWithoutParentInput>
  }

  export type EntryScalarWhereInput = {
    AND?: EntryScalarWhereInput | EntryScalarWhereInput[]
    OR?: EntryScalarWhereInput[]
    NOT?: EntryScalarWhereInput | EntryScalarWhereInput[]
    id?: StringFilter<"Entry"> | string
    userId?: StringFilter<"Entry"> | string
    type?: EnumEntryTypeFilter<"Entry"> | $Enums.EntryType
    status?: EnumEntryStatusFilter<"Entry"> | $Enums.EntryStatus
    title?: StringFilter<"Entry"> | string
    slug?: StringFilter<"Entry"> | string
    summary?: StringNullableFilter<"Entry"> | string | null
    contentType?: StringFilter<"Entry"> | string
    occurredAt?: DateTimeNullableFilter<"Entry"> | Date | string | null
    location?: StringNullableFilter<"Entry"> | string | null
    aiAnalysis?: StringNullableFilter<"Entry"> | string | null
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
    parentId?: StringNullableFilter<"Entry"> | string | null
  }

  export type TextContentUpsertWithoutEntryInput = {
    update: XOR<TextContentUpdateWithoutEntryInput, TextContentUncheckedUpdateWithoutEntryInput>
    create: XOR<TextContentCreateWithoutEntryInput, TextContentUncheckedCreateWithoutEntryInput>
    where?: TextContentWhereInput
  }

  export type TextContentUpdateToOneWithWhereWithoutEntryInput = {
    where?: TextContentWhereInput
    data: XOR<TextContentUpdateWithoutEntryInput, TextContentUncheckedUpdateWithoutEntryInput>
  }

  export type TextContentUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextContentUncheckedUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntryModuleUpsertWithWhereUniqueWithoutEntryInput = {
    where: EntryModuleWhereUniqueInput
    update: XOR<EntryModuleUpdateWithoutEntryInput, EntryModuleUncheckedUpdateWithoutEntryInput>
    create: XOR<EntryModuleCreateWithoutEntryInput, EntryModuleUncheckedCreateWithoutEntryInput>
  }

  export type EntryModuleUpdateWithWhereUniqueWithoutEntryInput = {
    where: EntryModuleWhereUniqueInput
    data: XOR<EntryModuleUpdateWithoutEntryInput, EntryModuleUncheckedUpdateWithoutEntryInput>
  }

  export type EntryModuleUpdateManyWithWhereWithoutEntryInput = {
    where: EntryModuleScalarWhereInput
    data: XOR<EntryModuleUpdateManyMutationInput, EntryModuleUncheckedUpdateManyWithoutEntryInput>
  }

  export type EntryModuleScalarWhereInput = {
    AND?: EntryModuleScalarWhereInput | EntryModuleScalarWhereInput[]
    OR?: EntryModuleScalarWhereInput[]
    NOT?: EntryModuleScalarWhereInput | EntryModuleScalarWhereInput[]
    id?: StringFilter<"EntryModule"> | string
    entryId?: StringFilter<"EntryModule"> | string
    moduleName?: EnumModuleNameFilter<"EntryModule"> | $Enums.ModuleName
  }

  export type WorkExperienceUpsertWithoutEntryInput = {
    update: XOR<WorkExperienceUpdateWithoutEntryInput, WorkExperienceUncheckedUpdateWithoutEntryInput>
    create: XOR<WorkExperienceCreateWithoutEntryInput, WorkExperienceUncheckedCreateWithoutEntryInput>
    where?: WorkExperienceWhereInput
  }

  export type WorkExperienceUpdateToOneWithWhereWithoutEntryInput = {
    where?: WorkExperienceWhereInput
    data: XOR<WorkExperienceUpdateWithoutEntryInput, WorkExperienceUncheckedUpdateWithoutEntryInput>
  }

  export type WorkExperienceUpdateWithoutEntryInput = {
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    techStack?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateWithoutEntryInput = {
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    techStack?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutEntryInput = {
    update: XOR<ProjectUpdateWithoutEntryInput, ProjectUncheckedUpdateWithoutEntryInput>
    create: XOR<ProjectCreateWithoutEntryInput, ProjectUncheckedCreateWithoutEntryInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEntryInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEntryInput, ProjectUncheckedUpdateWithoutEntryInput>
  }

  export type ProjectUpdateWithoutEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeLinkUpsertWithoutEntryInput = {
    update: XOR<KnowledgeLinkUpdateWithoutEntryInput, KnowledgeLinkUncheckedUpdateWithoutEntryInput>
    create: XOR<KnowledgeLinkCreateWithoutEntryInput, KnowledgeLinkUncheckedCreateWithoutEntryInput>
    where?: KnowledgeLinkWhereInput
  }

  export type KnowledgeLinkUpdateToOneWithWhereWithoutEntryInput = {
    where?: KnowledgeLinkWhereInput
    data: XOR<KnowledgeLinkUpdateWithoutEntryInput, KnowledgeLinkUncheckedUpdateWithoutEntryInput>
  }

  export type KnowledgeLinkUpdateWithoutEntryInput = {
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeLinkUncheckedUpdateWithoutEntryInput = {
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUpsertWithoutEntryInput = {
    update: XOR<TravelUpdateWithoutEntryInput, TravelUncheckedUpdateWithoutEntryInput>
    create: XOR<TravelCreateWithoutEntryInput, TravelUncheckedCreateWithoutEntryInput>
    where?: TravelWhereInput
  }

  export type TravelUpdateToOneWithWhereWithoutEntryInput = {
    where?: TravelWhereInput
    data: XOR<TravelUpdateWithoutEntryInput, TravelUncheckedUpdateWithoutEntryInput>
  }

  export type TravelUpdateWithoutEntryInput = {
    destination?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUncheckedUpdateWithoutEntryInput = {
    destination?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LifestyleUpsertWithoutEntryInput = {
    update: XOR<LifestyleUpdateWithoutEntryInput, LifestyleUncheckedUpdateWithoutEntryInput>
    create: XOR<LifestyleCreateWithoutEntryInput, LifestyleUncheckedCreateWithoutEntryInput>
    where?: LifestyleWhereInput
  }

  export type LifestyleUpdateToOneWithWhereWithoutEntryInput = {
    where?: LifestyleWhereInput
    data: XOR<LifestyleUpdateWithoutEntryInput, LifestyleUncheckedUpdateWithoutEntryInput>
  }

  export type LifestyleUpdateWithoutEntryInput = {
    subType?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LifestyleUncheckedUpdateWithoutEntryInput = {
    subType?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryCreateWithoutTextContentInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutTextContentInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutTextContentInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutTextContentInput, EntryUncheckedCreateWithoutTextContentInput>
  }

  export type EntryUpsertWithoutTextContentInput = {
    update: XOR<EntryUpdateWithoutTextContentInput, EntryUncheckedUpdateWithoutTextContentInput>
    create: XOR<EntryCreateWithoutTextContentInput, EntryUncheckedCreateWithoutTextContentInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutTextContentInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutTextContentInput, EntryUncheckedUpdateWithoutTextContentInput>
  }

  export type EntryUpdateWithoutTextContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutTextContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateWithoutModulesInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutModulesInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutModulesInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutModulesInput, EntryUncheckedCreateWithoutModulesInput>
  }

  export type EntryUpsertWithoutModulesInput = {
    update: XOR<EntryUpdateWithoutModulesInput, EntryUncheckedUpdateWithoutModulesInput>
    create: XOR<EntryCreateWithoutModulesInput, EntryUncheckedCreateWithoutModulesInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutModulesInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutModulesInput, EntryUncheckedUpdateWithoutModulesInput>
  }

  export type EntryUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateWithoutWorkExpInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutWorkExpInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutWorkExpInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutWorkExpInput, EntryUncheckedCreateWithoutWorkExpInput>
  }

  export type EntryUpsertWithoutWorkExpInput = {
    update: XOR<EntryUpdateWithoutWorkExpInput, EntryUncheckedUpdateWithoutWorkExpInput>
    create: XOR<EntryCreateWithoutWorkExpInput, EntryUncheckedCreateWithoutWorkExpInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutWorkExpInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutWorkExpInput, EntryUncheckedUpdateWithoutWorkExpInput>
  }

  export type EntryUpdateWithoutWorkExpInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutWorkExpInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateWithoutProjectInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutProjectInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutProjectInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutProjectInput, EntryUncheckedCreateWithoutProjectInput>
  }

  export type EntryUpsertWithoutProjectInput = {
    update: XOR<EntryUpdateWithoutProjectInput, EntryUncheckedUpdateWithoutProjectInput>
    create: XOR<EntryCreateWithoutProjectInput, EntryUncheckedCreateWithoutProjectInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutProjectInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutProjectInput, EntryUncheckedUpdateWithoutProjectInput>
  }

  export type EntryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateWithoutKnowledgeInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutKnowledgeInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutKnowledgeInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutKnowledgeInput, EntryUncheckedCreateWithoutKnowledgeInput>
  }

  export type EntryUpsertWithoutKnowledgeInput = {
    update: XOR<EntryUpdateWithoutKnowledgeInput, EntryUncheckedUpdateWithoutKnowledgeInput>
    create: XOR<EntryCreateWithoutKnowledgeInput, EntryUncheckedCreateWithoutKnowledgeInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutKnowledgeInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutKnowledgeInput, EntryUncheckedUpdateWithoutKnowledgeInput>
  }

  export type EntryUpdateWithoutKnowledgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutKnowledgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateWithoutTravelInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutTravelInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    lifestyle?: LifestyleUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutTravelInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutTravelInput, EntryUncheckedCreateWithoutTravelInput>
  }

  export type EntryUpsertWithoutTravelInput = {
    update: XOR<EntryUpdateWithoutTravelInput, EntryUncheckedUpdateWithoutTravelInput>
    create: XOR<EntryCreateWithoutTravelInput, EntryUncheckedCreateWithoutTravelInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutTravelInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutTravelInput, EntryUncheckedUpdateWithoutTravelInput>
  }

  export type EntryUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateWithoutLifestyleInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EntryCreateNestedOneWithoutChildrenInput
    children?: EntryCreateNestedManyWithoutParentInput
    textContent?: TextContentCreateNestedOneWithoutEntryInput
    modules?: EntryModuleCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceCreateNestedOneWithoutEntryInput
    project?: ProjectCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkCreateNestedOneWithoutEntryInput
    travel?: TravelCreateNestedOneWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutLifestyleInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: EntryUncheckedCreateNestedManyWithoutParentInput
    textContent?: TextContentUncheckedCreateNestedOneWithoutEntryInput
    modules?: EntryModuleUncheckedCreateNestedManyWithoutEntryInput
    workExp?: WorkExperienceUncheckedCreateNestedOneWithoutEntryInput
    project?: ProjectUncheckedCreateNestedOneWithoutEntryInput
    knowledge?: KnowledgeLinkUncheckedCreateNestedOneWithoutEntryInput
    travel?: TravelUncheckedCreateNestedOneWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutLifestyleInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutLifestyleInput, EntryUncheckedCreateWithoutLifestyleInput>
  }

  export type EntryUpsertWithoutLifestyleInput = {
    update: XOR<EntryUpdateWithoutLifestyleInput, EntryUncheckedUpdateWithoutLifestyleInput>
    create: XOR<EntryCreateWithoutLifestyleInput, EntryUncheckedCreateWithoutLifestyleInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutLifestyleInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutLifestyleInput, EntryUncheckedUpdateWithoutLifestyleInput>
  }

  export type EntryUpdateWithoutLifestyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EntryUpdateOneWithoutChildrenNestedInput
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutLifestyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryCreateManyParentInput = {
    id?: string
    userId?: string
    type: $Enums.EntryType
    status?: $Enums.EntryStatus
    title: string
    slug: string
    summary?: string | null
    contentType?: string
    occurredAt?: Date | string | null
    location?: string | null
    aiAnalysis?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntryModuleCreateManyEntryInput = {
    id?: string
    moduleName: $Enums.ModuleName
  }

  export type EntryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EntryUpdateManyWithoutParentNestedInput
    textContent?: TextContentUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUpdateOneWithoutEntryNestedInput
    project?: ProjectUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUpdateOneWithoutEntryNestedInput
    travel?: TravelUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EntryUncheckedUpdateManyWithoutParentNestedInput
    textContent?: TextContentUncheckedUpdateOneWithoutEntryNestedInput
    modules?: EntryModuleUncheckedUpdateManyWithoutEntryNestedInput
    workExp?: WorkExperienceUncheckedUpdateOneWithoutEntryNestedInput
    project?: ProjectUncheckedUpdateOneWithoutEntryNestedInput
    knowledge?: KnowledgeLinkUncheckedUpdateOneWithoutEntryNestedInput
    travel?: TravelUncheckedUpdateOneWithoutEntryNestedInput
    lifestyle?: LifestyleUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    occurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryModuleUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleName?: EnumModuleNameFieldUpdateOperationsInput | $Enums.ModuleName
  }

  export type EntryModuleUncheckedUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleName?: EnumModuleNameFieldUpdateOperationsInput | $Enums.ModuleName
  }

  export type EntryModuleUncheckedUpdateManyWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleName?: EnumModuleNameFieldUpdateOperationsInput | $Enums.ModuleName
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}