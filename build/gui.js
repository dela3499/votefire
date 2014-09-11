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
   _v1) {
      return function () {
         switch (_v1.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v0.ctor)
                 {case "_Tuple2":
                    return A2(Graphics.Collage.move,
                      {ctor: "_Tuple2"
                      ,_0: Basics.toFloat(_v1._0 - (_v0._0 / 2 | 0))
                      ,_1: Basics.toFloat((_v0._1 / 2 | 0) - _v1._1)},
                      A2(Graphics.Collage.filled,
                      Color.blue,
                      Graphics.Collage.circle(50)));}
                 _E.Case($moduleName,
                 "on line 21, column 27 to 110");
              }();}
         _E.Case($moduleName,
         "on line 21, column 27 to 110");
      }();
   });
   var display = F2(function (_v8,
   _v9) {
      return function () {
         switch (_v9.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v8.ctor)
                 {case "_Tuple2":
                    return A3(Graphics.Collage.collage,
                      _v8._0,
                      _v8._1,
                      _L.fromArray([A2(Graphics.Collage.move,
                                   {ctor: "_Tuple2",_0: 0,_1: 0},
                                   A2(Graphics.Collage.filled,
                                   Color.black,
                                   A2(Graphics.Collage.rect,
                                   Basics.toFloat(_v8._0),
                                   Basics.toFloat(_v8._1))))
                                   ,A2(displayUser,
                                   {ctor: "_Tuple2"
                                   ,_0: _v8._0
                                   ,_1: _v8._1},
                                   {ctor: "_Tuple2"
                                   ,_0: _v9._0
                                   ,_1: _v9._1})]));}
                 _E.Case($moduleName,
                 "on line 20, column 23 to 118");
              }();}
         _E.Case($moduleName,
         "on line 20, column 23 to 118");
      }();
   });
   var posFromModel = Native.Ports.portIn("posFromModel",
   Native.Ports.incomingSignal(function (v) {
      return _U.isJSArray(v) ? _L.fromArray(v.map(function (v) {
         return typeof v === "number" ? v : _E.raise("invalid input, expecting JSNumber but got " + v);
      })) : _E.raise("invalid input, expecting JSArray but got " + v);
   }));
   var tupleToList = function (_v16) {
      return function () {
         switch (_v16.ctor)
         {case "_Tuple2":
            return _L.fromArray([_v16._0
                                ,_v16._1]);}
         _E.Case($moduleName,
         "on line 11, column 21 to 26");
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
   var listToTuple = function (_v20) {
      return function () {
         switch (_v20.ctor)
         {case "::":
            switch (_v20._1.ctor)
              {case "::":
                 return {ctor: "_Tuple2"
                        ,_0: _v20._0
                        ,_1: _v20._1._0};}
              break;}
         _E.Case($moduleName,
         "on line 8, column 38 to 50");
      }();
   };
   var main = A2(Signal._op["~"],
   A2(Signal._op["<~"],
   display,
   Window.dimensions),
   A2(Signal._op["<~"],
   listToTuple,
   posFromModel));
   _elm.Gui.values = {_op: _op
                     ,listToTuple: listToTuple
                     ,tupleToList: tupleToList
                     ,main: main
                     ,display: display
                     ,displayUser: displayUser};
   return _elm.Gui.values;
};