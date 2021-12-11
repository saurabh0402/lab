import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(404).json({
      success: false,
      message: 'Invalid method',
    });
  }

  try {
    const { title, image, address, description } = req.body;
    const client = await MongoClient.connect(process.env.DB_STRING);

    const meetupsCollection = client.db().collection('meetups');
    await meetupsCollection.insertOne({
      title, image, address, description,
    });

    client.close();
    
    return res.send({
      success: true,
      message: 'Meetup added successfully.',
    });
  } catch(err) {
    console.error(`Error: ${err}`);
  }
}

export default handler;