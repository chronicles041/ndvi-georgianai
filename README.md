Here's the updated README file with the mentioned details at the top:

# Enhancing Agricultural Productivity with AI

## Agricultural Challenges
Farmers face unpredictable weather, rising input costs, and lower yields, making operations more difficult.

## Project Aim
The project focuses on building a web app using AI and Sentinel-2 satellite data to provide valuable insights to farmers.

## NDVI
NDVI (Normalized Difference Vegetation Index) is a critical metric that reflects plant health, helping assess crop conditions.

## AI & Data
Machine learning models analyze historical NDVI data to predict future trends in crop health.

## Farmer Benefits
The app empowers farmers to make informed decisions, optimizing resources, improving yields, and ensuring sustainability.

## Scalable Solution
Starting as a proof-of-concept, the project has the potential to scale and address real-world farming challenges.

## Web Pages and API Development
Finalized the web pages and have a successfully working API as well. Fetched data and displayed them properly.

---

# Plant Disease Classification & Weather Forecast App

This app allows users to upload an image of a plant for disease classification and get accurate weather forecasts tailored to their region. It combines AI-based plant disease detection using Hugging Face's pre-trained models and weather data from the Open-Meteo API.

## Features

- **Plant Disease Classification**: 
  - Upload a plant image and get an AI-based classification of the plant disease using a pre-trained model (`PlantDiseaseClassifier-Resnet50`).
  - A chatbot interface guides users through the process, making the experience intuitive and interactive.

- **Weather Forecasting**: 
  - The app provides real-time weather updates including temperature, humidity, wind speed, and more.
  - Users can either use their location (via geolocation) or input a specific city for the weather forecast.
  - 7-day weather prediction is available, allowing users to plan their gardening or farming activities accordingly.

- **Chatbot Interaction**:
  - A conversational bot to answer user queries like "What’s the weather today?", "Is it going to rain?", or "What disease is affecting my plant?".

- **Push Notifications**:
  - Alerts for severe weather conditions, including rain, storms, or frost warnings, to help users take timely actions to protect their plants.

## Installation

### Prerequisites

To run this app locally, ensure that you have the following tools installed:

- Node.js (version >= 14)
- npm (Node package manager)
- React and TypeScript (for development)
- TailwindCSS (for styling)

### Steps

1. **Clone the repository**:
   ```bash
   https://github.com/chronicles041/ndvi-georgianai.git
   cd ndvi-gergianai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure API keys**:
   - For **Hugging Face**: You will need to set up a Hugging Face account and get an API token for model access. Replace the placeholder in your `.env` file with your token:
     ```text
     REACT_APP_HUGGING_FACE_TOKEN=your_token_here
     ```
   - For **Open-Meteo**: The app uses the Open-Meteo API for weather data, which does not require an API key. You can directly call the endpoints from the app.

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app should be accessible at `http://localhost:3000`.

## Usage

1. **Upload Plant Image**: Click on the file input to upload an image of a plant. The app will process the image and classify any potential diseases.
2. **Ask Questions**: Interact with the chatbot by typing queries about the weather or plant diseases. The app will respond with useful insights.
3. **Weather Data**: Get real-time weather updates and forecasts. You can enter a city or allow the app to use your current location for accurate weather predictions.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Provides static typing for improved development experience.
- **TailwindCSS**: Utility-first CSS framework for styling the components.
- **Hugging Face Transformers**: For plant disease classification using pre-trained models.
- **Open-Meteo API**: For fetching weather data and predictions.

## Authors

- **Suman Malla** - Author
- **Bishesh Upadhyaya** - Contributor
- **Sarthak Pokharel** - Contributor

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Hugging Face for the pre-trained model (`PlantDiseaseClassifier-Resnet50`).
- Open-Meteo for providing free weather data and forecasts.

## Contact

If you have any questions, feel free to reach out to the contributors:

- **Suman Malla**: [LinkedIn](https://www.linkedin.com/in/suman-malla) | [GitHub](https://github.com/sumanmalla)
- **Bishesh Upadhyaya**: [LinkedIn](https://www.linkedin.com/in/bishesh-upadhyaya) | [GitHub](https://github.com/bisheshupadhyaya)
- **Sarthak Pokharel**: [LinkedIn](https://www.linkedin.com/in/sarthak-pokharel) | [GitHub](https://github.com/sarthakpokharel)
```

### Key Changes:
- Added the **Agricultural Challenges** section and project aims at the top, detailing how this project helps address farming challenges and empowers farmers.
- The **NDVI**, **AI & Data**, **Farmer Benefits**, and **Scalable Solution** sections explain the focus of the project and its broader impact on agriculture.
- The rest of the README remains the same but now includes the updated project overview. 

This should now provide a complete description of the project along with setup instructions and other necessary details!
