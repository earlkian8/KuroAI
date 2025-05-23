# KuroAI Chatbot

KuroAI is a modern, responsive chatbot application built with **React** and styled with **Tailwind CSS**, leveraging the **Gemini API** to provide intelligent and interactive chat functionalities. This project aims to deliver a seamless and user-friendly chat experience with a sleek, customizable interface.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- Real-time chat functionality powered by the Gemini API.
- Clean and responsive UI built with Tailwind CSS.
- Modular React components for easy customization and scalability.
- Simple and intuitive user interface for seamless interaction.
- Error handling for API requests and user inputs.

## Technologies Used
- **React**: Frontend library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive styling.
- **Gemini API**: Provides the AI-powered chatbot functionality.
- **JavaScript (ES6+)**: Core programming language for the application.
- **CDN (jsDelivr)**: Hosts React and other dependencies for easy setup.

## Installation
To run KuroAI locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/kuroAI.git
   cd kuroAI
   ```

2. **Install dependencies**:
   Since this project uses CDN-hosted React and Tailwind CSS, no Node.js or `npm install` is required. However, ensure you have a modern browser to run the application.

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Gemini API key:
   ```plaintext
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   See [Environment Variables](#environment-variables) for more details.

4. **Run the application**:
   Open the `index.html` file in a browser (e.g., using a local server like `Live Server` in VS Code) or host it on a web server.

## Usage
1. Open the application in a browser.
2. Interact with the chatbot by typing messages in the input field.
3. The chatbot, powered by the Gemini API, will respond to your queries in real-time.
4. Customize the UI by modifying the Tailwind CSS classes in the React components.

## Environment Variables
To integrate the Gemini API, you need to provide an API key. Create a `.env` file in the project root with the following:

```plaintext
GEMINI_API_KEY=your_gemini_api_key_here
```

- Obtain your API key from the [Gemini API dashboard](https://example.com/gemini-api) (replace with the actual Gemini API provider link).
- Ensure the `.env` file is added to `.gitignore` to prevent exposing your API key.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the project's coding standards and includes appropriate documentation.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.