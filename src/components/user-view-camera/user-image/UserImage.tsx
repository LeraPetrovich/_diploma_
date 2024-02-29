import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

interface FaceDetectionComponentProps {
  imageUrl: string;
}

function FaceDetectionComponent({ imageUrl }: FaceDetectionComponentProps) {
  const imageRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      console.log(MODEL_URL);

      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ]);

      // Detect faces when models are loaded
      detectFaces();
    };

    const detectFaces = async () => {
      if (imageRef.current) {
        const detections = await faceapi
          .detectAllFaces(imageRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors();

        // Draw detections on the image (canvas)
        faceapi.draw.drawDetections(imageRef.current, detections);
      }
    };

    loadModels();
  }, [imageUrl]);

  return (
    <div>
      {imageUrl ? (
        <canvas
          ref={imageRef}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default FaceDetectionComponent;
