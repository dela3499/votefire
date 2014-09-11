Elm.Gui = Elm.Gui || {};
Elm.Gui.make = function (_elm) {
   "use strict";
   _elm.Gui = _elm.Gui || {};
   if (_elm.Gui.values)
   return _elm.Gui.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Gui";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Mouse = Elm.Mouse.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var Window = Elm.Window.make(_elm);
   var _op = {};
   var displayUser = F2(function (_v0,
   user) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return A2(Graphics.Collage.move,
              {ctor: "_Tuple2"
              ,_0: Basics.toFloat(user.x - (_v0._0 / 2 | 0))
              ,_1: Basics.toFloat((_v0._1 / 2 | 0) - user.y)},
              A2(Graphics.Collage.filled,
              user.color,
              Graphics.Collage.circle(50)));}
         _E.Case($moduleName,
         "on line 23, column 26 to 125");
      }();
   });
   var display = F2(function (_v4,
   users) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2":
            return A3(Graphics.Collage.collage,
              _v4._0,
              _v4._1,
              _L.fromArray([A2(Graphics.Collage.move,
                           {ctor: "_Tuple2",_0: 0,_1: 0},
                           A2(Graphics.Collage.filled,
                           Color.black,
                           A2(Graphics.Collage.rect,
                           Basics.toFloat(_v4._0),
                           Basics.toFloat(_v4._1))))
                           ,Graphics.Collage.group(A2(List.map,
                           displayUser({ctor: "_Tuple2"
                                       ,_0: _v4._0
                                       ,_1: _v4._1}),
                           users))]));}
         _E.Case($moduleName,
         "on line 22, column 23 to 132");
      }();
   });
   var main = A2(Signal._op["~"],
   A2(Signal._op["<~"],
   display,
   Window.dimensions),
   Signal.constant(_L.fromArray([{_: {}
                                 ,color: Color.red
                                 ,x: 200
                                 ,y: 400}
                                ,{_: {}
                                 ,color: Color.blue
                                 ,x: 300
                                 ,y: 300}])));
   var posFromModel = Native.Ports.portIn("posFromModel",
   Native.Ports.incomingSignal(function (v) {
      return _U.isJSArray(v) ? _L.fromArray(v.map(function (v) {
         return typeof v === "number" ? v : _E.raise("invalid input, expecting JSNumber but got " + v);
      })) : _E.raise("invalid input, expecting JSArray but got " + v);
   }));
   var tupleToList = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2":
            return _L.fromArray([_v8._0
                                ,_v8._1]);}
         _E.Case($moduleName,
         "on line 12, column 21 to 26");
      }();
   };
   var posFromView = Native.Ports.portOut("posFromView",
   Native.Ports.outgoingSignal(function (v) {
      return _L.toArray(v).map(function (v) {
         return v;
      });
   }),
   A2(Signal._op["<~"],
   tupleToList,
   Mouse.position));
   var listToTuple = function (_v12) {
      return function () {
         switch (_v12.ctor)
         {case "::":
            switch (_v12._1.ctor)
              {case "::":
                 return {ctor: "_Tuple2"
                        ,_0: _v12._0
                        ,_1: _v12._1._0};}
              break;}
         _E.Case($moduleName,
         "on line 9, column 38 to 50");
      }();
   };
   _elm.Gui.values = {_op: _op
                     ,listToTuple: listToTuple
                     ,tupleToList: tupleToList
                     ,main: main
                     ,display: display
                     ,displayUser: displayUser};
   return _elm.Gui.values;
};