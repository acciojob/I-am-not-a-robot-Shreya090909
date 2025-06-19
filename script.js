body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.image-container img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border: 3px solid transparent;
  transition: border 0.3s;
}

img.selected {
  border: 3px solid #007bff;
}

button {
  margin: 15px 10px;
  padding: 10px 20px;
  font-size: 16px;
}

#para {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
