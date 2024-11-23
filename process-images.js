import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'fs/promises';
import { join, parse } from 'path';

const MAX_IMAGE_SIZE = 2000;
const THUMBNAIL_SIZE = 400;
const WEBP_QUALITY = 80; // Adjust quality setting (0-100)

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
            if (!/\.(jpg|jpeg|png|gif|webp|avif)$/i.test(filename)) continue;

            console.log(`Processing ${filename}...`);
            
            try {
                const filepath = join(directory, filename);
                const { name } = parse(filename);
                
                // Get image metadata
                const metadata = await sharp(filepath).metadata();

                // Process full-size image to WebP
                console.log(`Converting ${filename} to WebP...`);
                const fullWebpFilename = `${name}.webp`;
                const fullWebpPath = join(directory, fullWebpFilename);
                
                await sharp(filepath)
                    .resize(Math.min(metadata.width, MAX_IMAGE_SIZE), Math.min(metadata.height, MAX_IMAGE_SIZE), {
                        fit: 'inside',
                        withoutEnlargement: true
                    })
                    .webp({
                        quality: WEBP_QUALITY,
                        effort: 4 // Range 0-6, higher means better compression but slower
                    })
                    .toFile(fullWebpPath);

                // Create WebP thumbnail
                console.log(`Creating WebP thumbnail for ${filename}...`);
                const thumbnailWebpPath = join(thumbnailDir, fullWebpFilename);
                
                await sharp(filepath)
                    .resize(THUMBNAIL_SIZE, THUMBNAIL_SIZE, {
                        fit: 'cover',
                        position: 'attention'
                    })
                    .webp({
                        quality: WEBP_QUALITY,
                        effort: 4
                    })
                    .toFile(thumbnailWebpPath);

                // Add to images array
                images.push({
                    full: `/gallery/${fullWebpFilename}`,
                    thumb: `/gallery/thumbnails/${fullWebpFilename}`,
                    alt: '',
                    width: metadata.width,
                    height: metadata.height,
                    originalName: filename,
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