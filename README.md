# Fa-250-Workshop-1
link to website -> (https://glovving.github.io/workshop-task-1/)

## Further experimentations with the p5.js web editor

For this workshop I began by replicating the code Leo shows during the instructional video.
I modified it to have 2 circles, one blue, one red, moving horizontally and vertically across the middle of the canvas.

<img width="150" alt="speed" src="https://github.com/user-attachments/assets/750c97dd-f71f-41d3-a876-6af0dd0e9935" />

As you can see in the above, I made my two circles move at difference speeds by using two different move variables.

Something I found confusing was the fact that setting my fill() and stroke() to colour would affect both of the circles on the canvas:

<img width="216" alt="red2" src="https://github.com/user-attachments/assets/f3871e05-7824-4b56-a692-558e4dbd16c2" />

I figured out that I just had to specify each time I wanted to use a different colour:

<img width="155" alt="colorchange" src="https://github.com/user-attachments/assets/c9f071e8-d89a-479d-980e-1445784c5ced" />

To keep my code tidy, I made the two circles into two different functions which are created and called within the draw function, you can see in the pictures above.

Final result:

<img width="233" alt="final" src="https://github.com/user-attachments/assets/d1407fc0-8d1f-4f98-8f1a-aece3893a519" />


## Reflection

I didn't want to spend too much time on one task as I had a lot to catch up on but I do think that the difference in movement between the circles was interesting and I want to implement that asymmetry into my 
future works.
