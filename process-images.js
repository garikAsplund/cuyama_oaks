// process-images.js
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const MAX_IMAGE_SIZE = 2000;
const THUMBNAIL_SIZE = 400;

async function processImages() {
    const directory = './static/gallery';
    const thumbnailDir = join(directory, 'thumbnails');
    const outputPath = './src/lib/gallery.json';
    const images = [];

    try {
        // Create thumbnail directory
        await mkdir(thumbnailDir, { recursive: true }).catch(() => {});

        // Read all files in the gallery directory
        const files = await readdir(directory);

        for (const filename of files) {
            if (filename === 'thumbnails') continue;
            if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(filename)) continue;

            console.log(`Processing ${filename}...`);

            try {
                const filepath = join(directory, filename);
                
                // Get image metadata
                const metadata = await sharp(filepath).metadata();

                // Create thumbnail
                console.log(`Creating thumbnail for ${filename}...`);
                const thumbnailPath = join(thumbnailDir, filename);
                await sharp(filepath)
                    .resize(THUMBNAIL_SIZE, THUMBNAIL_SIZE, {
                        fit: 'cover',
                        position: 'attention'
                    })
                    .toFile(thumbnailPath);

                images.push({
                    full: `/gallery/${filename}`,
                    thumb: `/gallery/thumbnails/${filename}`,
                    alt: '',
                    width: metadata.width,
                    height: metadata.height,
                    element: null
                });

                console.log(`✓ Processed ${filename}`);
            } catch (error) {
                console.error(`Error processing ${filename}:`, error);
            }
        }

        // Create lib directory if it doesn't exist
        await mkdir('./src/lib', { recursive: true }).catch(() => {});

        // Write the JSON file
        await writeFile(outputPath, JSON.stringify(images, null, 2));
        console.log(`\n✨ Success! Generated gallery.json with ${images.length} images`);

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

processImages();