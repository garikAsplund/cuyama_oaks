import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const WEBP_QUALITY = 80;

async function convertJpegsToWebp() {
    const directory = './static/convert';
    
    try {
        // Read all files in the directory
        const files = (await readdir(directory))
            .filter(filename => 
                /\.(jpg|jpeg)$/i.test(filename)
            );
        
        for (const filename of files) {
            try {
                const filepath = join(directory, filename);
                const newFilename = filename.replace(/\.(jpg|jpeg)$/i, '.webp');
                const outputPath = join(directory, newFilename);
                
                console.log(`Converting ${filename} to ${newFilename}...`);
                
                await sharp(filepath)
                    .webp({
                        quality: WEBP_QUALITY,
                        effort: 4
                    })
                    .toFile(outputPath);
                
                console.log(`✓ Converted ${filename}`);
            } catch (error) {
                console.error(`Error converting ${filename}:`, error);
            }
        }
        
        console.log(`\n✨ Done! Converted ${files.length} images`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

convertJpegsToWebp();