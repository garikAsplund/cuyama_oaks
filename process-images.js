import sharp from 'sharp';
import { readdir, mkdir, writeFile, rename } from 'fs/promises';
import { join } from 'path';

const THUMBNAIL_SIZE = 400;
const WEBP_QUALITY = 80;

async function processImages() {
    const directory = './static/gallery';
    const thumbnailDir = join(directory, 'thumbnails');
    const outputPath = './src/lib/gallery.json';
    const images = [];

    try {
        await mkdir(thumbnailDir, { recursive: true }).catch(() => {});
        
        // Get all webp files and sort them naturally
        let files = (await readdir(directory))
            .filter(filename => 
                filename !== 'thumbnails' && 
                filename.endsWith('.webp')
            )
            .sort((a, b) => {
                // Extract numbers from filenames
                const aNum = parseInt(a.match(/\d+/)?.[0] || '0');
                const bNum = parseInt(b.match(/\d+/)?.[0] || '0');
                if (aNum && bNum) {
                    return aNum - bNum;
                }
                // If not both numbers, sort alphabetically
                return a.localeCompare(b);
            });

        console.log('Found files:', files);

        // First pass: rename all files to temporary names to avoid conflicts
        for (let i = 0; i < files.length; i++) {
            const filename = files[i];
            const filepath = join(directory, filename);
            const tempFilename = `temp_${i + 1}.webp`;
            const tempFilepath = join(directory, tempFilename);
            
            if (filename !== tempFilename) {
                console.log(`Temporary rename: ${filename} -> ${tempFilename}`);
                await rename(filepath, tempFilepath);
                files[i] = tempFilename;
            }
        }

        // Second pass: rename to final names and create thumbnails
        for (let i = 0; i < files.length; i++) {
            const tempFilename = files[i];
            console.log(`Processing ${tempFilename}...`);
            
            try {
                const filepath = join(directory, tempFilename);
                const finalFilename = `${i + 1}.webp`;
                const finalFilepath = join(directory, finalFilename);
                
                // Get image metadata
                const metadata = await sharp(filepath).metadata();
                
                // Rename from temp to final name
                if (tempFilename !== finalFilename) {
                    console.log(`Final rename: ${tempFilename} -> ${finalFilename}`);
                    await rename(filepath, finalFilepath);
                }
                
                // Create thumbnail
                console.log(`Creating thumbnail ${finalFilename}...`);
                const thumbnailPath = join(thumbnailDir, finalFilename);
                
                await sharp(finalFilepath)
                    .resize(THUMBNAIL_SIZE, THUMBNAIL_SIZE, {
                        fit: 'cover',
                        position: 'attention'
                    })
                    .webp({
                        quality: WEBP_QUALITY,
                        effort: 4
                    })
                    .toFile(thumbnailPath);
                
                // Add to images array
                images.push({
                    full: `/gallery/${finalFilename}`,
                    thumb: `/gallery/thumbnails/${finalFilename}`,
                    alt: '',
                    width: metadata.width,
                    height: metadata.height,
                    originalName: tempFilename.replace('temp_', ''),
                    element: null
                });
                
                console.log(`✓ Processed ${finalFilename}`);
            } catch (error) {
                console.error(`Error processing ${tempFilename}:`, error);
            }
        }
        
        await mkdir('./src/lib', { recursive: true }).catch(() => {});
        await writeFile(outputPath, JSON.stringify(images, null, 2));
        
        console.log(`\n✨ Success! Generated gallery.json with ${images.length} images`);
        console.log('Final image list:', images.map(img => img.full).join('\n'));
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

processImages();