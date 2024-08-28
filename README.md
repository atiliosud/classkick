# ClassKick - Drawing App

A simple drawing and annotation app made with React + Next.js.
It allows you to draw, add text boxes and delete parts of the drawing.

Below are the instructions for installation and use.

## Features

- **Drawing**: Use the mouse to draw on the canvas.
- **Text Box**: Add text to the canvas as required.
- **Eraser**: Erase parts of the drawing or existing text.
- **Customization**: Switch between tools, choose the line color and adjust the line thickness.

## Technologies Used

- React
- CSS
- Font Awesome for icons

## Project Structure

- `src/App.js`: Main component that defines the application interface and manages the state of the tools and settings.
- `src/components/Canvas/Canvas.js`: Component that renders the canvas and handles the drawing, text and eraser logic.
- `src/components/Toolbar/Toolbar.js`: Toolbar component that allows the user to select the tool, color and thickness of the line.

## Installation

1. Clone the repository:
   git clone <CLASSKICK_GIT_URL_REPOSITORY>

2. Navigate to the project directory:
   cd <classkick-app>

3. Install the dependencies:
   npm install

4. Start the development server:
   npm start

- This will open the application at http://localhost:3000 in your browser.

## Use
- **Drawing**: Select the drawing tool and use the mouse to draw on the canvas.
- **Text**: Select the text box tool and click on the canvas to start inserting text. Press Enter to add text or Backspace to delete characters.
- **Eraser**: Select the eraser tool and move it over the areas you want to erase.
- **Color and Thickness**: Use the color picker to change the color of the line and the slider to adjust the thickness of the line.

## Contribution
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch for your feature (git checkout -b feature/feature-name).
3. Make the changes and commit (git commit -am 'Add new feature').
4. Send it to the remote repository (git push origin feature/feature-name).
5. Create a _Pull Request_.

## Contact
If you have any questions or suggestions, feel free to get in touch:

- Email: atiliosud@gmail.com