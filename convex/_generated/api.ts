// Mock Convex API types for local compilation and safe runtime mock execution
const functionNameSymbol = Symbol.for("functionName");

const makeProxy = (path: string[] = []): any => {
  return new Proxy(
    {
      _path: path.join(":"),
      _type: "query",
      toString() {
        return path.join(":");
      }
    },
    {
      get(target: any, prop: string | symbol) {
        if (prop === functionNameSymbol) {
          if (path.length < 2) {
            return path.join(":");
          }
          const dirPath = path.slice(0, -1).join("/");
          const exportName = path[path.length - 1];
          return dirPath + ":" + exportName;
        }
        if (typeof prop === "symbol" || prop === "then" || prop === "toJSON") {
          return undefined;
        }
        if (prop === "_path" || prop === "_type" || prop === "toString") {
          return target[prop];
        }
        return makeProxy([...path, String(prop)]);
      }
    }
  );
};

export const api = makeProxy([]);
export const internal = makeProxy([]);



