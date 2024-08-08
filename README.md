# Welcome to the OpenMusic-API Consumer repository!
This project is a consumer service for exporting songs from playlists. It processes export requests, generates JSON data, and sends the data via email. The service uses RabbitMQ for message brokering and Nodemailer for sending emails.

## Key Features
- **Export Playlist Songs**: Export songs from a playlist and send them via email.
- **Message Brokering**: Use RabbitMQ to handle background tasks.
- **Email Sending**: Use Nodemailer to send emails with the exported data.

## Technologies Used
* [Node.js](https://nodejs.org/) : JavaScript runtime for building the backend service.
* [PostgreSQL](https://www.postgresql.org/) : Relational database for storing playlists, songs, users, and activity logs.
* [RabbitMQ](https://www.rabbitmq.com/) : Message broker for handling background tasks.
* [Mailtrap](https://mailtrap.io/) : Service for testing email sending.
* [Nodemailer](https://www.npmjs.com/package/nodemailer) : Library for sending emails.

## Getting Started
### Prerequisites
- **Node.js**: Ensure you have Node.js installed (version 14.17.0 or higher is recommended).
- **RabbitMQ**: Ensure RabbitMQ is installed and running.
- **Mailtrap**: Set up a Mailtrap account for testing email sending.
- **Environment Variables**: Create a `.env` file based on the `.env.example` file and set the necessary environment variables:

### Steps
1. **Clone the repository**:
    ```sh
    git clone https://github.com/falihdzakwanz/OpenMusic-API-Consumer.git
    cd OpenMusic-API-Consumer
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Configure environment variables**:
    - Create a `.env` file based on the `.env.example` file.
    - Set the necessary environment variables for RabbitMQ and Mailtrap.

4. **Run the consumer program**:
    ```sh
    npm run start
    ```

## API Endpoints
### Export Playlist Songs
- **Method**: POST
- **URL**: `/export/playlists/{playlistId}`
- **Body Request**:
    ```json
    {
        "targetEmail": "example@example.com"
    }
    ```
- **Response**:
    ```json
    {
        "status": "success",
        "message": "Your request is being processed"
    }
    ```

## JSON Export Structure

The exported JSON data structure is as follows:
```json
{
  "playlist": {
    "id": "playlist-Mk8AnmCp210PwT6B",
    "name": "My Favorite Coldplay Song",
    "songs": [
      {
        "id": "song-Qbax5Oy7L8WKf74l",
        "title": "Life in Technicolor",
        "performer": "Coldplay"
      },
      {
        "id": "song-poax5Oy7L8WKllqw",
        "title": "Centimeteries of London",
        "performer": "Coldplay"
      },
      {
        "id": "song-Qalokam7L8WKf74l",
        "title": "Lost!",
        "performer": "Coldplay"
      }
    ]
  }
}
```

## Note
This project is part of a submission for the Dicoding Academy course “Belajar Fundamental Aplikasi Back-End.” 
Please do not reuse this project for your own submissions. It is intended for educational and open-source purposes only.
