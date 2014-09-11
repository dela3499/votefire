module Gui where

import Window
import Mouse

-- Create simple type conversions 
listToTuple : [Int] -> (Int,Int)
listToTuple (first::second::rest) = (first,second)

tupleToList : (Int,Int) -> [Int]  
tupleToList (a,b) = [a,b] 

-- Initialize ports
port posFromModel : Signal [Int] -- incoming port
port posFromView : Signal [Int] -- outgoing port
port posFromView = tupleToList <~ Mouse.position

-- Display circle at cursor position
main = display <~ Window.dimensions ~ (listToTuple <~ posFromModel)
display (w,h) (x,y) = collage w h [move (0,0) (filled black (rect (toFloat w) (toFloat h))), displayUser (w,h) (x,y)]
displayUser (w,h) (x,y) = move (toFloat (x - (w `div` 2)), toFloat ((h `div` 2) - y)) (filled blue (circle 50))