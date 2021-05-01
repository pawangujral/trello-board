
# Trello board

Trello is task management tool where user can easily create todo tasks with different categories.

## Getting Started

Clone trello-board to a destination folder. The application is built on React framework.

### Git cloning

Open bash/terminal and type following lines in your prefered folder (Make sure Git in installed locally).

```bash
git clone https://github.com/pawangujral/trello-board-react.git
cd trello-board-react

// check git current branch
git branch

// Change branch to feature/trello-board if required
git checkout feature/trello-board
```


### Install
To install project dependencies, you can run at root folder:

```bash
cd trello-board-react
yarn 

OR

cd trello-board-react
npm install 
``` 

#### Third-party utility libraries list

The project is using `momentjs` for data & time formatting.

### Start
To start the project In the project directory, you can run:

```bash 
yarn start

OR

npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Build

```bash 
yarn build

OR

npm run build
```

Builds the app for production to the `build` folder. You can run with static local server on mac.

```bash
cd build
python -m SimpleHTTPServer 8000
```

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### App Responsiveness

Application is fully responsive in nature using @media queries.

### Project structure | Type - Typescript | Description 
- components - Non-functional partial views that are reused in multiple screens across the application.
- views - Functional partial/whole views that are used to present UX on-screen.
- utils - helper functions
- context - Application context management using React useConext hooks
- __tests__ - Folder to place functional/unit test cases.

#### Folder structure

All component folders must follow below structure to keep consistancy in project.

```bash
├── componentFolderName
    ├── componentFolderName.tsx
    ├── componentFolderName.css
    ├── index.ts
    ├── __tests__
        ├── componentFolderName.test.tsx
```

#### Project src folder

All project related assets (image/icons) are in `public/assets` folder.

```bash
order-tracking
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
    ├── app.tsx
    ├── index.css
    ├── index.tsx
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTests.ts
    ├── __tests__
        ├── app.test.tsx
    ├── components
        ├── button
        │    ├── button.css
        │    ├── button.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── button.test.tsx
        ├── card
        │    ├── card.css
        │    ├── card.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── card.test.tsx
        ├── forms
            ├── input
            │    ├── input.css
            │    ├── input.tsx
            │    ├── index.ts
            │    ├── __tests__
            │        ├── input.test.tsx
            ├── select
                ├── select.css
                ├── select.tsx
                ├── index.ts
                ├── __tests__
                    ├── select.test.tsx
    ├── context 
        ├── taskContext
            ├── taskProvider.tsx
            ├── taskStore.ts
            ├── __tests__
                ├── taskProvider.test.tsx
    ├── utils 
        ├── constants.ts
        ├── types.ts
        ├── storeHelper.ts
    ├── views
        ├── tasks
        │    ├── tasks.tsx
        │    ├── tasks.css
        │    ├── index.ts
        │    ├── __tests__
        │        ├── tasks.test.tsx
        ├── list
        │    ├── list.css
        │    ├── list.tsx
        │    ├── index.ts
        │    ├── __tests__
        │            ├── list.test.tsx
        ├── add
           ├── add.css
           ├── add.tsx
           ├── index.ts
           ├── __tests__
                ├── add.test.tsx
    
```

## Testing

Testing is done with jest & react testing library. all test cases are placed in `__tests__` of each component's root folder.

*Note: this is currently in TODO list & not yet implemented.* 

e.g : 
```bash
├── __tests__
    ├── app.test.tsx
```

For code coverage run:

```bash 
yarn test 
Or 
npm run test

// To generate coverage report add following to package.json test script. it will be generate in coverage folder at root level.

  "test": "react-scripts test --coverage",

```

You can use testing method like `getByText`, `getByTestID`, `getByTitle`, `getAllByLabelText` & more to interact with DOM elements to write test cases.

### Locale i18n support 

For locale, you can use [Format js](https://formatjs.io/docs/getting-started/installation/) library. formatjs is a set of libraries that help you set up internationalization in any project.

*Note: this is currently in TODO list & not yet implemented.* 

## Links
- [React](https://reactjs.org/)
- [momentjs](https://momentjs.com/)
- [React Testing Libary](https://testing-library.com/docs/react-testing-library/intro/)

## Next additional features/functionalites

- Include notification custom hooks for toast messsages
- Task filtering functionality (Search, etc)
- Unit test cases
- Usability implmentation (fully ADA compliance)
- Locale support for different languages
- Add linting support
- husky package for sanity before code pushing to repository
