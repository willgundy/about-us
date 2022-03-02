## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
![wireframe](/assets/wireframe.png)
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
    1. Header
    2. Main
        1. Div
            1. h1
            2. selector
            3. div
                1. h3
                2. p
                3. span
                4. ul
                    1. li
                    2. li
                    3. li
    3. Footer
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
    1. create data.js file with array of people to display
        1. id
        2. name
        3. age
        4. hobbies
        5. short_bio
    2. Update HTML template to contain following items
        1. Div for selecting user to display
            1. H1 header text
            2. Selector w/ options
        2. Div Container for display user info
            1. H3 header text
            2. paragraph bio
            3. Age display in span
            4. header 4 for hobbies header
            5. unordered list for hobbies
    3. Grabbing dom elements in app.js
    4. Add event listener in app.js
    5. Create elements based on user and render in user display div
    6. Styling per person
    7. Create netlify for page and link to github repository


Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
