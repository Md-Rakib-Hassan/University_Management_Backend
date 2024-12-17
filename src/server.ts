import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect(config.database_uri as string);
}

main();

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
