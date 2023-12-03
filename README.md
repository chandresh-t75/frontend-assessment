# React App with Favourites Cart

This is a simple and responsive React application that fetches data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API using the `fetch` function, displays it in cards, allows users to add items to their favourites cart, provides a form to add new items, and uses toasts for notifications.

## Features

- Fetch data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/photos) using the `fetch` function
- Display items in responsive cards
- Add items to the "favourites" cart
- Form to add new items
- Toast notifications for user feedback

## Dependencies

- React
- React Router DOM
- Tailwind CSS
- [react-toastify](https://www.npmjs.com/package/react-toastify)

## How to Run Locally

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/chandresh-t75/frontend-assessment.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd frontend-assessment
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Start the Development Server:**

    ```bash
    npm start
    ```

5. **Open in Browser:**

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Additional Libraries Used

- `axios` (or any other HTTP client library) for making API requests
- [react-toastify](https://www.npmjs.com/package/react-toastify) for toast notifications

## Assumptions

- The API endpoint is assumed to be [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos).
- Tailwind CSS is used for styling.
- The application assumes a basic structure with components such as `Card`, `FavouritesCart`, and `NewItemForm`.

## Responsiveness

The application is designed to be responsive and accessible on various devices, providing a seamless user experience across different screen sizes.

## Deployment

The application can be deployed to a hosting service of your choice. Here are general steps for deployment:

1. **Build the Production Version:**

    ```bash
    npm run build
    ```

2. **Choose a Hosting Service:**

   You can use platforms like Netlify, Vercel, GitHub Pages, or any other hosting service of your choice.

3. **Deploy:**

   Follow the deployment instructions provided by your chosen hosting service. Typically, you'll upload the build artifacts (located in the `build` directory) to the hosting service.

4. **Access the Deployed App:**

   Once deployed, your app will be accessible at the provided deployment URL.

## Customize and Extend

Feel free to customize and extend the application based on your specific requirements. You can modify styles, add more features, or integrate additional libraries as needed.
