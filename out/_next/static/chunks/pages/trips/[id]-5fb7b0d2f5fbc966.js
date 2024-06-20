(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [510],
  {
    36: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/trips/[id]",
        function () {
          return n(1376);
        },
      ]);
    },
    8062: function (e, t, n) {
      "use strict";
      n.d(t, {
        II: function () {
          return r;
        },
        Ph: function () {
          return o;
        },
      });
      var a = n(5893);
      function r(e) {
        let {
          id: t,
          type: n = "text",
          placeholder: r = "",
          defaultValue: o = "",
          refEl: l,
          label: i,
          onChangeEvent: s,
          addlClass: c = "",
          children: d,
        } = e;
        return (0, a.jsxs)("div", {
          className: "field ".concat(c, " text-2xl"),
          children: [
            i && (0, a.jsx)("label", { className: "label", children: i }),
            (0, a.jsx)("div", {
              className: "control",
              children: (0, a.jsx)("input", {
                id: t,
                placeholder: r,
                className: "input",
                type: n,
                defaultValue: o,
                ref: l,
                onChange: s,
              }),
            }),
            d,
          ],
        });
      }
      function o(e) {
        let {
          id: t,
          refEl: n,
          options: r,
          title: o,
          value: l,
          onChangeEvent: i,
          addlClass: s = "",
        } = e;
        return (0, a.jsx)("div", {
          className: "text-2xl",
          children: (0, a.jsx)("div", {
            className: "control",
            children: (0, a.jsxs)("select", {
              id: t,
              ref: n,
              value: l,
              onChange: i,
              className: "input p-1.5",
              children: [
                (0, a.jsx)("option", { value: "0", children: o }),
                r.map((e) =>
                  (0, a.jsx)(
                    "option",
                    { value: e.id, className: "", children: e.name },
                    e.id
                  )
                ),
              ],
            }),
          }),
        });
      }
      n(7294);
    },
    6836: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(5893),
        r = n(9008),
        o = n.n(r),
        l = n(3271);
      function i(e) {
        let { children: t } = e;
        return (0, a.jsx)(l.O, {
          children: (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(o(), {
                children: (0, a.jsx)("title", { children: "Drift Notes" }),
              }),
              (0, a.jsx)("main", { children: t }),
            ],
          }),
        });
      }
    },
    7856: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(5893),
        r = n(7294);
      function o(e) {
        let { showModal: t, setShowModal: n, title: o, children: l } = e,
          i = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            function e(e) {
              i.current && !i.current.contains(e.target) && n(!1);
            }
            return (
              t
                ? ((document.body.style.overflow = "hidden"),
                  document.addEventListener("mousedown", e))
                : ((document.body.style.overflow = "auto"),
                  document.removeEventListener("mousedown", e)),
              () => {
                (document.body.style.overflow = "auto"),
                  document.removeEventListener("mousedown", e);
              }
            );
          }, [t, n]),
          (0, a.jsx)("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
            children: (0, a.jsxs)("div", {
              ref: i,
              className:
                "outline outline-orange-500 bg-rose-100 rounded-lg shadow-lg p-6 w-full max-w-xl",
              children: [
                (0, a.jsxs)("header", {
                  className: "flex justify-end items-center border-b pb-3",
                  children: [
                    (0, a.jsx)("button", {
                      className: "text-2xl text-black hover:text-red-500",
                      "aria-label": "close",
                      onClick: () => n(!1),
                      children: "close",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xl font-semibold",
                      children: o,
                    }),
                  ],
                }),
                (0, a.jsx)("section", { className: "mt-4", children: l }),
              ],
            }),
          })
        );
      }
    },
    1641: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(5893),
        r = n(1664),
        o = n.n(r),
        l = n(7294),
        i = n(3271),
        s = n(1163);
      function c() {
        let { token: e, setProfile: t } = (0, i.b)();
        (0, l.useRef)(null);
        let [n, r] = (0, l.useState)(!1),
          c = (0, s.useRouter)();
        return (
          (0, l.useEffect)(() => {
            e && r(!0);
          }, [e]),
          (0, a.jsxs)("nav", {
            className: "text-emerald-900 py-1 relative w-full",
            children: [
              (0, a.jsx)("div", {
                className:
                  "m-3 container flex justify-between items-center px-1",
                children: (0, a.jsx)("h1", {
                  className:
                    "text-7xl bg-clip-text text-transparent bg-emerald-900 pt-5",
                  children: "drift notes.",
                }),
              }),
              (0, a.jsx)("div", {
                children: n
                  ? (0, a.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex",
                          children: [
                            (0, a.jsx)(o(), {
                              href: "/",
                              className:
                                "text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",
                              children: "home",
                            }),
                            (0, a.jsx)(o(), {
                              href: "/dashboard",
                              className:
                                "text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",
                              children: "dashboard",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)("button", {
                            onClick: () => {
                              t({
                                id: 0,
                                username: "",
                                first_name: "",
                                last_name: "",
                                email: "",
                              }),
                                localStorage.removeItem("token"),
                                r(!1),
                                c.push("/login");
                            },
                            className:
                              "mr-5 text-3xl text-black hover:text-red-500 transition duration-75 hover:underline",
                            children: "log out",
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(o(), {
                          href: "/",
                          className:
                            "text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",
                          children: "home",
                        }),
                        (0, a.jsx)(o(), {
                          href: "/login",
                          className:
                            "text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",
                          children: "log in",
                        }),
                      ],
                    }),
              }),
            ],
          })
        );
      }
    },
    3271: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return s;
        },
        b: function () {
          return c;
        },
      });
      var a = n(5893),
        r = n(7294),
        o = n(3409),
        l = n(1163);
      let i = (0, r.createContext)({
        profile: {
          id: 0,
          username: "",
          first_name: "",
          last_name: "",
          email: "",
        },
        token: "",
        setProfile: () => {},
        setToken: () => {},
      });
      function s(e) {
        let { children: t } = e,
          [n, s] = (0, r.useState)({
            id: 0,
            username: "",
            first_name: "",
            last_name: "",
            email: "",
          }),
          [c, d] = (0, r.useState)("");
        return (
          (0, l.useRouter)(),
          (0, r.useEffect)(() => {
            d(localStorage.getItem("token") || "");
          }, []),
          (0, r.useEffect)(() => {
            !c ||
              (localStorage.setItem("token", c),
              "id" in n ||
                (0, o.et)().then((e) => {
                  e && s(e);
                }));
          }, [c]),
          (0, a.jsx)(i.Provider, {
            value: { profile: n, token: c, setToken: d, setProfile: s },
            children: t,
          })
        );
      }
      function c() {
        return (0, r.useContext)(i);
      }
    },
    3409: function (e, t, n) {
      "use strict";
      n.d(t, {
        et: function () {
          return l;
        },
        x4: function () {
          return r;
        },
        z2: function () {
          return o;
        },
      });
      var a = n(7136);
      function r(e) {
        return (0, a.DI)("login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        });
      }
      function o(e) {
        return (0, a.DI)("register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        });
      }
      function l() {
        let e = localStorage.getItem("token");
        return (0, a.DI)("profile", {
          headers: { Authorization: "Token ".concat(e) },
        });
      }
    },
    7136: function (e, t, n) {
      "use strict";
      n.d(t, {
        DI: function () {
          return i;
        },
        Gk: function () {
          return s;
        },
      });
      let a = "https://app.driftnotes.com",
        r = (e) => {
          if (!e.ok) {
            if (204 === e.status) return;
            throw Error(e.status.toString());
          }
          return e;
        },
        o = (e) => {
          if (200 === e.status || 201 === e.status) return e.json();
          throw Error(e.status.toString());
        },
        l = (e) => {
          if (
            ("401" === e.message && (window.location.href = "/login"),
            "404" === e.message)
          )
            throw Error(e.message);
          if ("400" !== e.message) throw e;
        },
        i = (e, t) => fetch("".concat(a, "/").concat(e), t).then(o).catch(l),
        s = (e, t) => fetch("".concat(a, "/").concat(e), t).then(r).catch(l);
    },
    9036: function (e, t, n) {
      "use strict";
      n.d(t, {
        B7: function () {
          return l;
        },
        Er: function () {
          return r;
        },
        IR: function () {
          return s;
        },
        Rt: function () {
          return i;
        },
        s0: function () {
          return o;
        },
      });
      var a = n(7136);
      function r(e) {
        return (0, a.DI)("trips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
          body: JSON.stringify(e),
        });
      }
      function o(e) {
        return (0, a.DI)("trips/".concat(e), {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      function l() {
        return (0, a.DI)("trips", {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      function i(e) {
        return (0, a.Gk)("trips/".concat(e.id), {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
          body: JSON.stringify(e),
        });
      }
      function s(e) {
        return (0, a.Gk)("trips/".concat(e), {
          method: "DELETE",
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
    },
    1376: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var a = n(5893),
        r = n(6836),
        o = n(1641),
        l = n(7294),
        i = n(1163),
        s = n(777),
        c = n(8029),
        d = n(9036),
        u = n(7136);
      function m() {
        return (0, u.DI)("days", {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      function h(e) {
        return (0, u.DI)("events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
          body: JSON.stringify(e),
        });
      }
      function x() {
        return (0, u.DI)("events", {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      function g(e) {
        return (0, u.DI)("events/".concat(e.id), {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
          body: JSON.stringify(e),
        });
      }
      function f(e) {
        return (0, u.Gk)("events/".concat(e), {
          method: "DELETE",
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      var v = n(202);
      function p() {
        return (0, u.DI)("categories", {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      function y(e) {
        var t;
        let {
            event: n,
            startTime: r,
            endTime: o,
            style: i,
            overlappingIndex: d = 0,
            totalOverlaps: m = 1,
          } = e,
          [h, x] = (0, l.useState)(!1),
          g = null === (t = n.category) || void 0 === t ? void 0 : t.id,
          { data: p } = (0, s.a)({
            queryKey: ["category", g],
            queryFn: () => {
              var e;
              return (
                (e = Number(g)),
                (0, u.DI)("categories/".concat(e), {
                  headers: {
                    Authorization: "Token ".concat(
                      localStorage.getItem("token")
                    ),
                  },
                })
              );
            },
            enabled: !!g,
          }),
          y = (e) => {
            if (!e) return "";
            let t = new Date("2000-01-01T".concat(e)),
              n = t.getHours(),
              a = t.getMinutes().toString().padStart(2, "0");
            return ""
              .concat(n % 12 || 12, ":")
              .concat(a)
              .concat(n >= 12 ? "pm" : "am");
          },
          j = new Date("2000-01-01T".concat(r)),
          b = new Date("2000-01-01T".concat(o)),
          N = j.getHours(),
          w = b.getHours(),
          S = j.getMinutes(),
          k = b.getMinutes(),
          I = async (e) => {
            await E(e);
          },
          T = (0, v.NL)(),
          { mutateAsync: E } = (0, c.D)({
            mutationFn: f,
            onSuccess: () => {
              T.invalidateQueries({ queryKey: ["events"] });
            },
            onError: (e) => {
              console.error("Error deleting event:", e);
            },
          });
        return (0, a.jsxs)("div", {
          className:
            "event-card bg-rose-50 text-emerald-900 rounded-md px-4 py-2 absolute ".concat(
              h ? "z-10 h-auto" : "overflow-hidden"
            ),
          style: {
            top: "calc(".concat(40 * N, "px + ").concat((S / 60) * 40, "px)"),
            height: h
              ? "auto"
              : "calc("
                  .concat((w - N) * 40, "px + ")
                  .concat(((k - S) / 60) * 40, "px)"),
            minHeight: "40px",
            left: "".concat((100 / m) * d, "%"),
            width: "calc(".concat(100 / m, "% - 10px)"),
          },
          onClick: () => x(!h),
          children: [
            (0, a.jsx)("button", {
              onClick: (e) => {
                e.stopPropagation(), void 0 !== n.id && I(n.id);
              },
              className:
                "text-slate-400 px-2 py-1 rounded-md text-xs absolute top-1 right-1 bg-opacity-80 hover:bg-red-500",
              children: "x",
            }),
            (0, a.jsx)("h3", {
              className: "text-xl font-bold mb-2",
              children: n.title,
            }),
            (0, a.jsxs)("div", {
              className: "text-lg",
              children: [
                y(r),
                " - ",
                y(o),
                n.location &&
                  (0, a.jsxs)("div", {
                    className: "text-base text-green-800 mb-2",
                    children: ["Location: ", n.location],
                  }),
                p &&
                  (0, a.jsx)("div", {
                    className: "text-base text-green-800 mb-2",
                    children: p.name,
                  }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "event-details ".concat(h ? "block" : "hidden"),
            }),
          ],
        });
      }
      var j = n(7856),
        b = n(8062),
        N = n(9198),
        w = n.n(N);
      function S(e) {
        let {
            showModal: t,
            setShowModal: n,
            dayId: r,
            createEventMutation: o,
            categories: i,
          } = e,
          [s, c] = (0, l.useState)(""),
          [d, u] = (0, l.useState)(""),
          [m, h] = (0, l.useState)(new Date()),
          [x, g] = (0, l.useState)(new Date()),
          [f, v] = (0, l.useState)(""),
          p = (e) => {
            if (!e) return "";
            let t = e.getHours().toString().padStart(2, "0"),
              n = e.getMinutes().toString().padStart(2, "0"),
              a = e.getSeconds().toString().padStart(2, "0");
            return "".concat(t, ":").concat(n, ":").concat(a);
          },
          y = async (e) => {
            e.preventDefault(), x && m && x < m && g(m);
            let t = {
              day: r,
              title: s,
              location: d,
              start_time: p(m),
              end_time: p(x),
              category: f,
            };
            await o(t);
          };
        return (0, a.jsx)("div", {
          className: "bg-green-100",
          children:
            t &&
            (0, a.jsx)(j.Z, {
              showModal: t,
              setShowModal: n,
              title: "",
              children: (0, a.jsxs)("form", {
                onSubmit: y,
                className: "space-y-6",
                children: [
                  (0, a.jsx)(b.II, {
                    id: "title",
                    label: "Title",
                    placeholder: "Enter event title",
                    defaultValue: s,
                    onChangeEvent: (e) => c(e.target.value),
                    addlClass: "text-green-900",
                  }),
                  (0, a.jsx)(b.II, {
                    id: "location",
                    label: "Location",
                    placeholder: "Enter event location",
                    defaultValue: d,
                    onChangeEvent: (e) => u(e.target.value),
                    addlClass: "text-green-900",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex space-x-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "field text-2xl text-green-900",
                        children: [
                          (0, a.jsx)("label", {
                            htmlFor: "startTime",
                            className: "label",
                            children: "Start Time",
                          }),
                          (0, a.jsx)("div", {
                            className: "control",
                            children: (0, a.jsx)(w(), {
                              id: "startTime",
                              selected: m,
                              onChange: (e) => h(e),
                              showTimeSelect: !0,
                              showTimeSelectOnly: !0,
                              timeIntervals: 15,
                              timeCaption: "Time",
                              dateFormat: "h:mm aa",
                              className: "input",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "field text-2xl text-green-900",
                        children: [
                          (0, a.jsx)("label", {
                            htmlFor: "endTime",
                            className: "label",
                            children: "End Time",
                          }),
                          (0, a.jsx)("div", {
                            className: "control",
                            children: (0, a.jsx)(w(), {
                              id: "endTime",
                              selected: x,
                              onChange: (e) => g(e),
                              showTimeSelect: !0,
                              showTimeSelectOnly: !0,
                              timeIntervals: 15,
                              timeCaption: "Time",
                              dateFormat: "h:mm aa",
                              className: "input",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "field text-2xl text-green-900",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "category",
                        className: "label",
                        children: "Category",
                      }),
                      (0, a.jsx)("div", {
                        className: "control",
                        children: (0, a.jsx)(b.Ph, {
                          id: "category",
                          options: i.map((e) => ({
                            id: e.id.toString(),
                            name: e.name,
                          })),
                          title: "Select Category",
                          value: f,
                          onChangeEvent: (e) => {
                            v(e.target.value);
                          },
                          addlClass: "text-green-900",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("button", {
                    className:
                      "bg-pink-500 text-white px-4 py-2 rounded-md text-lg mt-4 hover:bg-pink-600",
                    type: "submit",
                    children: "Submit",
                  }),
                ],
              }),
            }),
        });
      }
      n(3794);
      let k = () => {
        let e = [];
        for (let t = 0; t < 24; t++) {
          let n = t > 23 ? "".concat(t - 24, ":00") : "".concat(t, ":00");
          e.push(
            (0, a.jsx)(
              "div",
              {
                className: "time-slot text-emerald-900 font-bold",
                children: n,
              },
              n
            )
          );
        }
        return (0, a.jsx)("div", { className: "time-column", children: e });
      };
      function I(e) {
        let { day: t } = e,
          [n, r] = (0, l.useState)(!1),
          {
            data: o,
            isLoading: i,
            isError: d,
          } = (0, s.a)({
            queryKey: ["day", t.id],
            queryFn: () => {
              var e;
              return (
                (e = t.id),
                (0, u.DI)("days/".concat(e), {
                  headers: {
                    Authorization: "Token ".concat(
                      localStorage.getItem("token")
                    ),
                  },
                })
              );
            },
          }),
          {
            data: m,
            isLoading: g,
            isError: f,
          } = (0, s.a)({ queryFn: x, queryKey: ["events"] }),
          { data: j } = (0, s.a)({ queryFn: p, queryKey: ["categories"] }),
          b = (0, v.NL)(),
          { mutateAsync: N } = (0, c.D)({
            mutationFn: h,
            onSuccess: async () => {
              await b.invalidateQueries({ queryKey: ["events"] }), r(!1);
            },
          });
        if (i || g) return (0, a.jsx)("div", { children: "Loading..." });
        if (d || f || !o || !m)
          return (0, a.jsx)("div", { children: "Error fetching data" });
        let w = m
            .filter((e) => {
              var n;
              return (
                (null === (n = e.day) || void 0 === n ? void 0 : n.id) ===
                  t.id &&
                e.start_time &&
                e.end_time
              );
            })
            .sort(
              (e, t) =>
                new Date(e.start_time).getTime() -
                new Date(t.start_time).getTime()
            ),
          I = (e) => {
            let t = [],
              n = new Map();
            return (
              e.forEach((e) => {
                let n = !1;
                for (let a of t)
                  if (!a.some((t) => T(e, t))) {
                    a.push(e), (n = !0);
                    break;
                  }
                n || t.push([e]);
              }),
              t.forEach((e) => {
                e.forEach((t, a) => {
                  n.set(t, { overlappingIndex: a, totalOverlaps: e.length });
                });
              }),
              n
            );
          },
          T = (e, t) => {
            if (!e.start_time || !e.end_time || !t.start_time || !t.end_time)
              return !1;
            let n = new Date(e.start_time).getTime(),
              a = new Date(e.end_time).getTime(),
              r = new Date(t.start_time).getTime();
            return n < new Date(t.end_time).getTime() && a > r;
          };
        I(w);
        let E = [];
        w.forEach((e) => {
          let t = !1;
          for (let n of E)
            if (n.some((t) => T(e, t))) {
              n.push(e), (t = !0);
              break;
            }
          t || E.push([e]);
        });
        let C = E.flatMap((e) => {
            let t = I(e);
            return e.map((e) => {
              var n, a, r, o;
              return {
                ...e,
                overlappingIndex:
                  null !==
                    (r =
                      null === (n = t.get(e)) || void 0 === n
                        ? void 0
                        : n.overlappingIndex) && void 0 !== r
                    ? r
                    : 0,
                totalOverlaps:
                  null !==
                    (o =
                      null === (a = t.get(e)) || void 0 === a
                        ? void 0
                        : a.totalOverlaps) && void 0 !== o
                    ? o
                    : 1,
              };
            });
          }),
          _ = new Map();
        w.forEach((e) => {
          var t, n;
          let a =
            (null === (t = e.start_time) || void 0 === t
              ? void 0
              : t.substring(0, 2)) || "";
          _.has(a) || _.set(a, []),
            null === (n = _.get(a)) || void 0 === n || n.push(e);
        });
        let D = new Map();
        return (
          _.forEach((e, t) => {
            let n = I(e),
              a = e.map((e) => {
                var t, a, r, o;
                return {
                  ...e,
                  overlappingIndex:
                    null !==
                      (r =
                        null === (t = n.get(e)) || void 0 === t
                          ? void 0
                          : t.overlappingIndex) && void 0 !== r
                      ? r
                      : 0,
                  totalOverlaps:
                    null !==
                      (o =
                        null === (a = n.get(e)) || void 0 === a
                          ? void 0
                          : a.totalOverlaps) && void 0 !== o
                      ? o
                      : 1,
                };
              });
            D.set(t, a);
          }),
          (0, a.jsxs)("div", {
            className:
              "bg-green-50 day-column border border-solid border-green-900 rounded-2xl w-1/4 min-w-96 p-4",
            children: [
              (0, a.jsx)("h2", {
                className: "text-2xl font-bold mb-4 text-green-900",
                children: t.date
                  ? ((e) => {
                      let [t, n, a] = e.split("-");
                      return "".concat(n, "/").concat(a, "/").concat(t);
                    })(t.date)
                  : "",
              }),
              (0, a.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, a.jsx)("button", {
                    className:
                      "flex outline outline-yellow-300 bg-yellow-50 hover:bg-rose-50 text-black font-bold py-2 px-4 rounded text-lg m-5 self-center",
                    onClick: () => r(!0),
                    children: "create event",
                  }),
                  n &&
                    (0, a.jsx)(S, {
                      showModal: n,
                      setShowModal: r,
                      dayId: t.id,
                      createEventMutation: N,
                      categories: j || [],
                      eventsForDay: C,
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "day-grid",
                children: [
                  (0, a.jsx)("div", {
                    className: "time-column",
                    children: (0, a.jsx)(k, {}),
                  }),
                  (0, a.jsx)("div", {
                    className: "event-column grid grid-cols-1 gap-4 relative",
                    children: Array.from(D.entries()).map((e) => {
                      let [t, n] = e;
                      return (0, a.jsx)(
                        "div",
                        {
                          children: n.map((e) =>
                            (0, a.jsx)(
                              y,
                              {
                                event: e,
                                startTime: e.start_time,
                                endTime: e.end_time,
                                overlappingIndex: e.overlappingIndex,
                                totalOverlaps: e.totalOverlaps,
                              },
                              e.id
                            )
                          ),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function T() {
        return (0, u.DI)("users", {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      function E(e) {
        return (0, u.DI)("usertrips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
          body: JSON.stringify(e),
        });
      }
      function C() {
        return (0, u.DI)("usertrips", {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        });
      }
      function _(e) {
        let { showModal: t, setShowModal: n, tripId: r } = e,
          [o, i] = (0, l.useState)(""),
          d = (0, v.NL)(),
          { data: u } = (0, s.a)({ queryKey: ["allUsers"], queryFn: T }),
          { data: m } = (0, s.a)({ queryKey: ["allUserTrips"], queryFn: C }),
          { mutateAsync: h } = (0, c.D)({
            mutationFn: E,
            onSuccess: async () => {
              await d.invalidateQueries({ queryKey: ["allUserTrips"] }), n(!1);
            },
          }),
          x = async (e) => {
            e.preventDefault();
            let t = null == u ? void 0 : u.find((e) => e.username === o);
            if (t) {
              console.log(t);
              let e = { user: t.id, trip: r };
              await h(e);
            } else window.alert("No user found");
          },
          g =
            m && u
              ? m
                  .filter((e) => e.trip.id === r)
                  .map((e) => {
                    console.log(e);
                    let t = u.find((t) => t.id === e.user.id);
                    return console.log(t), t ? t.username : null;
                  })
                  .filter((e) => e)
              : [];
        return (0, a.jsx)("div", {
          className: "bg-green-100 rounded-lg p-8",
          children:
            t &&
            (0, a.jsxs)(j.Z, {
              showModal: t,
              setShowModal: n,
              title: "",
              children: [
                (0, a.jsxs)("div", {
                  className: "bg-white shadow-md rounded-lg p-6 m-5",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-2xl font-semibold mb-4 text-green-800",
                      children: "Collaborators",
                    }),
                    (0, a.jsx)("ul", {
                      className: "space-y-4",
                      children: g.map((e) =>
                        (0, a.jsx)(
                          "li",
                          { className: "text-xl text-green-700", children: e },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                (0, a.jsxs)("form", {
                  onSubmit: x,
                  className: "space-y-4",
                  children: [
                    (0, a.jsx)(b.II, {
                      id: "username",
                      label: "Username",
                      placeholder: "username",
                      defaultValue: o,
                      onChangeEvent: (e) => {
                        i(e.target.value);
                      },
                    }),
                    (0, a.jsx)("button", {
                      type: "submit",
                      className:
                        "bg-pink-500 text-white px-4 py-2 rounded-md text-lg hover:bg-pink-600 transition duration-300",
                      children: "Add Collaborator",
                    }),
                  ],
                }),
              ],
            }),
        });
      }
      function D() {
        let e = (0, v.NL)(),
          t = (0, i.useRouter)(),
          { id: n } = t.query,
          [r, o] = (0, l.useState)(null),
          [u, m] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          n && o((e) => ({ ...e, id: Number(n) }));
        }, [n]);
        let {
            data: h,
            isLoading: x,
            error: g,
          } = (0, s.a)({
            queryKey: ["trip", n],
            queryFn: () => (0, d.s0)(Number(n)),
            enabled: !!n,
          }),
          f = (e, t) => {
            o((n) => ({ ...n, [e]: t }));
          },
          { mutateAsync: p } = (0, c.D)({
            mutationFn: d.Rt,
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ["trip"] });
            },
          }),
          y = async () => {
            try {
              r && (await p(r), t.push("/trips/".concat(r.id)));
            } catch (e) {
              console.error("An error occurred while updating the trip:", e);
            }
          };
        return x
          ? (0, a.jsx)("div", { children: "Loading..." })
          : g
          ? (0, a.jsxs)("div", { children: ["Error: ", g.message] })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("button", {
                  className:
                    "outline outline-cyan-500 hover:bg-cyan-100 text-cyan-600 font-bold py-2 px-4 rounded text-lg m-5",
                  onClick: () => m(!0),
                  children: "edit trip",
                }),
                u &&
                  (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsx)(j.Z, {
                      showModal: u,
                      setShowModal: m,
                      title: "",
                      children: (0, a.jsxs)("form", {
                        onSubmit: y,
                        className: "space-y-4",
                        children: [
                          (0, a.jsx)(b.II, {
                            id: "title",
                            label: "Title",
                            placeholder: "Trip Title",
                            defaultValue: (null == h ? void 0 : h.title) || "",
                            onChangeEvent: (e) => f("title", e.target.value),
                          }),
                          (0, a.jsx)(b.II, {
                            id: "city",
                            label: "City",
                            placeholder: "City",
                            defaultValue: (null == h ? void 0 : h.city) || "",
                            onChangeEvent: (e) => f("city", e.target.value),
                          }),
                          (0, a.jsx)(b.II, {
                            id: "start_date",
                            label: "Start Date",
                            type: "date",
                            defaultValue:
                              (null == h ? void 0 : h.start_date) || "",
                            onChangeEvent: (e) =>
                              f("start_date", e.target.value),
                          }),
                          (0, a.jsx)(b.II, {
                            id: "end_date",
                            label: "End Date",
                            type: "date",
                            min: null == h ? void 0 : h.start_date,
                            defaultValue:
                              (null == h ? void 0 : h.end_date) || "",
                            onChangeEvent: (e) => f("end_date", e.target.value),
                          }),
                          (0, a.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, a.jsx)("button", {
                              type: "submit",
                              className:
                                "bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-xl",
                              children: "Save",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            });
      }
      var A = n(7054);
      let q = ["core", "maps", "places", "marker"];
      function F(e) {
        let [t, n] = (0, l.useState)(null),
          [r, o] = (0, l.useState)(null),
          { isLoaded: i } = (0, A.Ji)({
            googleMapsApiKey: "[sensitive-information]",
            libraries: q,
          }),
          s = (0, l.useRef)(null);
        return (
          (0, l.useRef)(null),
          (0, l.useEffect)(() => {
            if (i) {
              let t = {
                center: { lat: e.coordinates[0], lng: e.coordinates[1] },
                zoom: 17,
                mapId: "MY-MAP",
              };
              new google.maps.Map(s.current, t);
            }
          }, [i]),
          (0, a.jsx)("div", {
            className: "flex flex-col space-y-4",
            children: i
              ? (0, a.jsx)("div", { style: { height: "600px" }, ref: s })
              : (0, a.jsx)("p", { children: "Loading..." }),
          })
        );
      }
      let O = async (e) => {
        let t = "https://maps.googleapis.com/maps/api/geocode/json?address="
          .concat(encodeURIComponent(e), "&key=")
          .concat("[sensitive information]");
        try {
          let e = await fetch(t),
            n = await e.json();
          if (n.results.length > 0) {
            let { location: e } = n.results[0].geometry;
            return [e.lat, e.lng];
          }
          throw Error("No results found for the given city");
        } catch (e) {
          throw (console.error("Error occurred:", e), e);
        }
      };
      function L() {
        let [e, t] = (0, l.useState)(!1),
          { id: n } = (0, i.useRouter)().query,
          {
            data: r,
            isLoading: o,
            error: u,
          } = (0, s.a)({
            queryKey: ["trip", n],
            queryFn: () => (0, d.s0)(Number(n)),
            enabled: !!n,
          }),
          [h, f] = (0, l.useState)([0, 0]);
        (0, l.useEffect)(() => {
          (async () => {
            if (null == r ? void 0 : r.city)
              try {
                let [e, t] = await O(r.city);
                f([e, t]);
              } catch (e) {
                console.error("Error occurred while fetching coordinates:", e);
              }
          })();
        }, [null == r ? void 0 : r.city]);
        let {
            data: v,
            isLoading: p,
            error: y,
          } = (0, s.a)({ queryKey: ["days"], queryFn: m, enabled: !!n }),
          {
            data: j,
            isLoading: b,
            error: N,
          } = (0, s.a)({ queryKey: ["events"], queryFn: x }),
          { mutateAsync: w } = (0, c.D)({ mutationFn: g });
        if (o || p || b) return (0, a.jsx)("div", { children: "Loading..." });
        if (u) return (0, a.jsxs)("div", { children: ["Error: ", u.message] });
        if (y) return (0, a.jsxs)("div", { children: ["Error: ", y.message] });
        if (N) return (0, a.jsxs)("div", { children: ["Error: ", N.message] });
        let S = (e) => {
          let [t, n, a] = e.split("-");
          return "".concat(n, "/").concat(a, "/").concat(t);
        };
        return (0, a.jsx)("div", {
          className:
            "w-full flex flex-col min-h-screen items-center justify-between pt-40",
          children: (0, a.jsx)("div", {
            className: "max-w-8xl w-full px-4 sm:px-6 lg:px-8",
            children: (0, a.jsx)("div", {
              className: "py-6",
              children: (0, a.jsx)("div", {
                className: "flex flex-col md:flex-row gap-6",
                children: (0, a.jsxs)("div", {
                  className: "md:flex-1 rounded-lg shadow-lg p-6 w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex justify-end mb-8",
                      children: [
                        (0, a.jsx)("button", {
                          className:
                            "outline outline-amber-500 hover:bg-amber-50 text-amber-600 font-bold py-2 px-4 rounded text-lg m-5",
                          onClick: () => t(!0),
                          children: "+users",
                        }),
                        (0, a.jsx)(D, {}),
                        e &&
                          (0, a.jsx)(_, {
                            showModal: e,
                            setShowModal: t,
                            tripId: Number(n),
                          }),
                      ],
                    }),
                    (0, a.jsx)("h1", {
                      className:
                        "text-5xl font-bold mb-6 text-center text-orange-500",
                      children: null == r ? void 0 : r.title,
                    }),
                    (0, a.jsxs)("p", {
                      className: "text-2xl text-rose-400 mb-10 text-center",
                      children: [
                        null == r ? void 0 : r.city,
                        " | ",
                        S(null == r ? void 0 : r.start_date),
                        " -",
                        " ",
                        S(null == r ? void 0 : r.end_date),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "overflow-x-auto",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex space-x-6",
                          children:
                            null == v
                              ? void 0
                              : v
                                  .filter((e) => {
                                    var t;
                                    return (
                                      (null === (t = e.trip) || void 0 === t
                                        ? void 0
                                        : t.id) === Number(n)
                                    );
                                  })
                                  .sort(
                                    (e, t) =>
                                      new Date(e.date).getTime() -
                                      new Date(t.date).getTime()
                                  )
                                  .map((e) => (0, a.jsx)(I, { day: e }, e.id)),
                        }),
                        (0, a.jsx)(F, { coordinates: h }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      L.getLayout = function (e) {
        return (0, a.jsxs)(r.Z, { children: [(0, a.jsx)(o.Z, {}), e] });
      };
    },
  },
  function (e) {
    e.O(0, [255, 814, 393, 888, 774, 179], function () {
      return e((e.s = 36));
    }),
      (_N_E = e.O());
  },
]);
