
# React News Portal

The React News Portal is a responsive web application built with React that allows users to browse and read news articles from various categories. It fetches news data from the NewsAPI and provides features like category filtering, pagination, and search functionality.
## Features

- **Homepage** : Displays a list of news articles with titles, images, and summaries.
- **Category Filtering** :  Users can filter articles by categories such as general, business, technology, and entertainment.
- **Pagination** : Articles are paginated, allowing users to navigate through different pages.
- **Search**: Users can search for articles by entering keywords in the search bar.
- **Detailed Article View** : Clicking on an article summary navigates to a detailed view of the article, displaying the full content.
- **Responsive Design** : The application is responsive and adapts to different screen sizes, ensuring a seamless experience on desktop and mobile devices.


## Tech Stack

 React, TailwindCSS, Redux Toolkit (for state management), Axios (for API calls), Bootstrap (for UI components and styling), React Router (for routing and navigation)




## Installation

Install my-project with npm

```bash
  git clone https://github.com/Hariom70890/newportal.git

  npm install 
  
```
Obtain an API key from NewsAPI and replace 'YOUR_API_KEY' in the services/newsApi.js file with your actual API key.

```
// services/newsApi.js
const API_KEY = 'YOUR_API_KEY';
```

Start the development server:
```
npm start

```

## Usage/Examples


1. On the homepage, you'll see a list of news articles with their titles, images, and summaries.
2. Use the category filter buttons to filter articles by different categories.
3. Navigate through different pages of articles using the pagination controls at the bottom of the page.
4. Enter keywords in the search bar to search for specific articles.
5. Click on an article summary to navigate to the detailed article view, displaying the full content of the article.
## Contributing

Contributions are always welcome!

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


## Acknowledgements


- [NewsAPI for providing the news data API](https://newsapi.org/v2)
- React and the React community for the amazing library and resources.
- Redux Toolkit for simplifying state management in React applications.
- Axios for easy-to-use HTTP client.
- Bootstrap for responsive UI components and styling.
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Demo
```
https://newportal-rho.vercel.app
 ```

