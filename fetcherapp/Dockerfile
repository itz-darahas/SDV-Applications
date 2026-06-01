# 1. Base image (Node environment already ready)
FROM node:18

# 2. Create app folder inside container
WORKDIR /app

# 3. Copy package files first (for caching)
COPY package*.json ./

# 4. Install dependencies inside container
RUN npm install

# 5. Copy all project files into container
COPY . .

# 6. Tell Docker which port your app uses
EXPOSE 3000

# 7. Start the app
CMD ["npm", "start"]