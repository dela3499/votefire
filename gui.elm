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
-- main = display <~ Window.dimensions ~ (listToTuple <~ posFromModel)
main = display <~ Window.dimensions ~ (constant [{x= 200, y=400, color= red}, {x= 300, y=300, color= blue}]) 
display (w,h) users = collage w h [move (0,0) (filled black (rect (toFloat w) (toFloat h))), group (map (displayUser (w,h)) users)]
displayUser (w,h) user = move (toFloat (user.x - (w `div` 2)), toFloat ((h `div` 2) - user.y)) (filled user.color (circle 50))