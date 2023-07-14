
# NewsDO

NewsDO is a web application that provides users with up-to-date information and news stories from a variety of sources, including newspapers, websites, blogs, and social media. NewsDO allows users to select the topics or categories they are interested in, such as politics, sports, technology, entertainment etc. The project involves using APIs to collect and parse news data from various sources, such as newspapers, websites, blogs, and social media. Users can also search queries related the news they are searching for.


## Run Locally

Clone the project

```bash
  git clone https://github.com/YashSrivastava26/NewsDo
```

Go to the project directory

```bash
  cd NewsDo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Get Headlines

```http
  GET https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${api_key}&page=${page}&pageSize=${pageSize}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `country` | `string` | **Default**. India         |
| `page`    | `string` | **Default**. page: 1       |
| `pageSize`| `string` | **Default**. pageSize: 9   |


#### query 

```http
  GET https://newsapi.org/v2/everything?q=${query}&apiKey={api_key}
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :--------------------------------------|
| `api_key` | `string` | **Required**.  Your API key            |
| `query`   | `string` | **Required**. query you want to search |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_News_API_KEY` : api key can be claimed at https://newsapi.org/


## 🛠 Skills
Javascript, HTML, CSS, ReactJs


## Features

- Fully responsive site
- Light/Dark mode
- Includes search functionality for finding specific news stories
- Provides the latest news updates on various topics such as politics, sports, technology, entertainment etc.
# Hi, I'm Yash! 👋


## 🚀 About Me
I'm a full stack (MERN stack) developer, currently in 6 semester at Kalinga Institute of Industrial Technology, Bhubaneswar. for more info you can visit my portfolio


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](#)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yashsrivastava2603/)


