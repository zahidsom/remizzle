import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-AY2NLHPM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-STYMVNPU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/db/config.server
var require_config = __commonJS({
  "empty-module:~/db/config.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/db/schema.server
var require_schema = __commonJS({
  "empty-module:~/db/schema.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/Items.tsx
var import_config = __toESM(require_config(), 1);
var import_node = __toESM(require_node(), 1);
var import_schema = __toESM(require_schema(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/Items.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/Items.tsx"
  );
  import.meta.hot.lastModified = "1706159619916.8071";
}
function DisplayItems() {
  _s();
  const Items = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Items" }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this),
    Items.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: Items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
      item.title,
      " ",
      item.description
    ] }, item.id, true, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 45,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 44,
      columnNumber: 26
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No Items" }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 48,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", value: "Submit" }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 49,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Items.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(DisplayItems, "gky+tL2sZec11SLy2HF/GDaT1Zg=", false, function() {
  return [useLoaderData];
});
_c = DisplayItems;
var _c;
$RefreshReg$(_c, "DisplayItems");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DisplayItems as default
};
//# sourceMappingURL=/build/routes/Items-LME4WJAF.js.map
