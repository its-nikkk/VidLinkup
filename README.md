# VidLinkup

VidLinkup is a simple web application that enables users to search for and view YouTube videos based on specific topics. This repository contains the HTML, CSS, and JavaScript code for the VidLinkup web application.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Customization](#customization)
- [API Key](#api-key)
- [License](#license)

## Features

- Users can search for YouTube videos by entering a topic in the search input.
- The application fetches and displays video results from YouTube's API.
- Clicking on a video thumbnail opens the video on YouTube in a new tab.
- Clean and responsive user interface.
- Easy to integrate and customize for different use cases.

## Usage

1. Open the VidLinkup web application by opening the `index.html` file in a web browser.

2. In the header section, you will see the VidLinkup title and a search input field.

3. Enter a topic you want to search for YouTube videos about in the search input.

4. Click the "Search" button to initiate the search.

5. VidLinkup will fetch YouTube videos related to the entered topic and display them as clickable thumbnails in the results container below.

6. Click on any video thumbnail to open the corresponding YouTube video in a new tab.

## Customization

You can easily customize VidLinkup to match your branding or modify its behavior. Here are some customization options:

- **Styling**: Customize the appearance by editing the `style.css` file. You can change colors, fonts, and layout styles.

- **Header**: Modify the header section in `index.html` to include your own branding or logo.

- **Search Input**: Customize the search input field by adjusting its size, placeholder text, or appearance in `index.html` and `style.css`.

- **Result Display**: Modify how video results are displayed in the `displayResults` function in `script.js`. You can add additional information or change the layout.

## API Key

To use the YouTube Data API for fetching video results, you will need to obtain a YouTube API key:

1. Visit the [Google Developers Console](https://console.developers.google.com/).

2. Create a new project or select an existing one.

3. Enable the "YouTube Data API v3" for your project.

4. Create a new API key in the "Credentials" section.

5. Replace the `apiKey` variable in `script.js` with your API key.

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

Ensure that your API key is kept secure and not shared publicly.
