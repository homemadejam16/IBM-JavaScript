const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Define the function to handle the mouseover event
function handleMouseOver(event) {
    const headingText = event.target.innerText; // Get the text of the hovered heading
    console.log(`Mouse is over: ${headingText}`);

    // Optionally, you can dynamically show/hide specific menu items
    if (headingText === "Breakfast Menu") {
        const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
        document.getElementById('breakfastMenuItems').style.display = 'block';
        
    } else if (headingText === "Main Course Menu") {
        let mainCourseItem = '';
        mainCourseMenu.forEach((item, index) => {
        mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;})
        document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
        document.getElementById('maincourseMenuItems').style.display = 'block';
        
    } else if (headingText === "Dessert Menu") {
        let dessertItem = '';
        for (let i =0; i< dessertMenu.length; i++){
            dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
        }
        console.log(dessertItem);
        console.log(document.getElementById('dessertMenuItems'));
        document.getElementById('dessertMenuItems').innerHTML = dessertItem;
        document.getElementById('dessertMenuItems').style.display = 'block';
    }
}

// Define the function to handle the mouseout event to hide menu items
function handleMouseOut(event) {
    const headingText = event.target.innerText;

    if (headingText === "Breakfast Menu") {
        document.getElementById('breakfastMenuItems').style.display = 'none';
    } else if (headingText === "Main Course Menu") {
        document.getElementById('maincourseMenuItems').style.display = 'none';
    } else if (headingText === "Dessert Menu") {
        document.getElementById('dessertMenuItems').style.display = 'none';
    }
}

// Attach event listeners to the <h2> elements
document.getElementById('breakfastHeading').addEventListener('mouseover', handleMouseOver);
document.getElementById('breakfastHeading').addEventListener('mouseout', handleMouseOut);

document.getElementById('maincourseHeading').addEventListener('mouseover', handleMouseOver);
document.getElementById('maincourseHeading').addEventListener('mouseout', handleMouseOut);

document.getElementById('dessertHeading').addEventListener('mouseover', handleMouseOver);
document.getElementById('dessertHeading').addEventListener('mouseout', handleMouseOut);
