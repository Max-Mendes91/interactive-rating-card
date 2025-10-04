# Interactive Rating Component

A responsive rating component built with HTML, Tailwind CSS, and vanilla JavaScript. Users can select a rating from 1-5 and submit their feedback to see a thank you message.

![Rating Component Preview](design/desktop-design.jpg)


## 🚀 Live Demo

[View Live Demo](https://max-mendes91.github.io/interactive-rating-card/)


## Features

- ✅ **Interactive rating selection** - Click to select ratings 1-5
- ✅ **Visual feedback** - Selected rating highlights in orange
- ✅ **Responsive design** - Works on mobile, tablet, and desktop
- ✅ **Smooth transitions** - Hover effects on buttons
- ✅ **Two-state interface** - Rating screen → Thank you screen
- ✅ **Form validation** - Only submits when rating is selected

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling via CDN
- **JavaScript (ES6)** - DOM manipulation and event handling
- **Google Fonts** - Overpass font family

## Project Structure

```
interactive-rating-component/
│
├── index.html              # Main HTML file
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
│
└── images/
    ├── icon-star.svg       # Star icon for rating card
    └── illustration-thank-you.svg  # Thank you illustration
```

## Responsive Breakpoints

| Device  | Width   | Container Max-Width |
| ------- | ------- | ------------------- |
| Mobile  | < 640px | 340px               |
| Tablet  | 640px+  | 380px               |
| Desktop | 768px+  | 420px               |

## How It Works

### 1. Rating Selection
- Click any number (1-5) to select rating
- Selected button highlights in orange (#fc7614)
- Only one rating can be selected at a time

### 2. Submit Feedback
- Click "SUBMIT" button
- Component validates that a rating is selected
- Displays thank you screen with selected rating

### 3. Thank You Screen
- Shows confirmation message
- Displays selected rating: "You selected X out of 5"
- Full-screen centered layout

## JavaScript Implementation

The component uses vanilla JavaScript for:

```javascript
// Key functionality
- DOM element selection (querySelector/querySelectorAll)
- Event listeners (click events)
- Class manipulation (add/remove for styling)
- State management (storing selected rating)
- Conditional rendering (show/hide screens)
```

## Installation & Usage

### Option 1: Download and Run Locally

1. **Clone or download** this repository
2. **Navigate** to project folder
3. **Open** `index.html` in your browser

```bash
cd interactive-rating-component
open index.html
```

### Option 2: Live Server (Recommended)

If using VS Code:

1. Install **Live Server** extension
2. Right-click `index.html`
3. Select **"Open with Live Server"**

## Color Palette

| Color Name     | Hex Code  | Usage              |
| -------------- | --------- | ------------------ |
| Orange         | `#fc7614` | Primary/Accent     |
| Dark Blue      | `#131518` | Background         |
| Very Dark Blue | `#232a34` | Card background    |
| Dark Blue Gray | `#262e38` | Button backgrounds |
| Medium Gray    | `#969fad` | Body text          |
| White          | `#ffffff` | Headings           |

## Customization

### Change Colors
Edit the Tailwind classes in `index.html`:
```html
<!-- Primary color -->
bg-[#fc7614]  → bg-[#your-color]

<!-- Background -->
bg-[#131518]  → bg-[#your-color]
```

### Modify Sizing
Adjust responsive classes:
```html
<!-- Mobile → Tablet → Desktop -->
text-sm sm:text-[15px] md:text-base
w-10 sm:w-11 md:w-12
```

### Add More Ratings
Add additional rating buttons in the HTML:
```html
<label class="rating-btn ...">
  <input type="radio" name="rating" value="6" class="hidden">
  <span>6</span>
</label>
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Learning Outcomes

This project demonstrates:

- **DOM Manipulation** - Selecting and modifying elements
- **Event Handling** - Click events and user interactions
- **State Management** - Tracking selected rating
- **Responsive Design** - Mobile-first approach with Tailwind
- **CSS Utilities** - Using Tailwind for rapid styling
- **Form Validation** - Ensuring user input before submission

## Future Enhancements

Potential improvements:

- [ ] Add keyboard navigation (arrow keys, Enter to submit)
- [ ] Add animation transitions between screens
- [ ] Store ratings in localStorage
- [ ] Add "Submit Another Rating" button on thank you screen
- [ ] Add accessibility improvements (ARIA labels)
- [ ] Add form validation alert message
- [ ] Add loading state on submit

## Credits

- **Challenge by:** [Frontend Mentor](https://www.frontendmentor.io)
- **Coded by:** Max Mendes
- **Font:** [Overpass](https://fonts.google.com/specimen/Overpass) by Google Fonts

## License

This project is open source and available for personal and educational use.

---

**Made while learning web development**