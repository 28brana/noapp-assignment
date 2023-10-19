# Node.js Express.js Project

This is a Node.js project using Express.js for handling HTTP requests.

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/28brana/noapp-server.git
    ```

2. Change into the project directory:

    ```bash
    cd noapp-server
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

Start the server using either of the following commands:

- Using npm:

    ```bash
    npm start
    ```

- Using nodemon (for automatic restarts during development):

    ```bash
    nodemon src/index
    ```

### Routes

- **Upload Route:**
  
  To upload a CSV file: 
  curl --location 'http://localhost:8000/upload' \
--form 'csvFile=@"/C:/Users/28bra/Downloads/MOCK_DATA.csv"'

  To fetch user data, use the following route:
  curl --location 'http://localhost:8000/user'

