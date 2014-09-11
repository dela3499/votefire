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

main = display <~ Window.dimensions ~ (listToTuple <~ posFromModel)
display (w,h) (x,y) = collage w h [move (toFloat x, toFloat y) (filled red (circle 50))]