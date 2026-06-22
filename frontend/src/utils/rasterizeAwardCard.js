/**
 * Rasterize award card SVG/PNG to a bitmap data URL so WebGL can texture it reliably.
 * SVGs with embedded images often render black inside OGL textures.
 */
export function rasterizeAwardCard(src, size = 512) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas not supported"));
        return;
      }

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = () => reject(new Error(`Failed to load award image: ${src}`));
    img.src = src;
  });
}
