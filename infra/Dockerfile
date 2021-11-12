FROM ubuntu AS vm

ENV DEBIAN_FRONTEND=noninteractive
RUN ["/bin/bash", "-c", "apt upgrade && apt update"]

FROM vm AS gitsrc

# Install Git
RUN apt update;
RUN ["/bin/bash", "-c", "apt install git -y"]

# Git clone
RUN ["/bin/bash", "-c", "git clone https://github.com/kleevs/facturation-frontend.git"]
ADD "https://api.github.com/repos/kleevs/facturation-frontend/commits?per_page=1" latest_commit
WORKDIR /facturation-frontend
RUN git pull

FROM vm AS server

# Install node js
RUN apt update;
RUN  ["/bin/bash", "-c", "apt install nodejs npm -y"]
RUN  ["/bin/bash", "-c", "npm install -g yarn"]

WORKDIR /src
COPY --from=gitsrc /facturation-frontend .

# Build
RUN ["/bin/bash", "-c", "yarn install"]
RUN ["/bin/bash", "-c", "yarn run build"]
RUN ["/bin/bash", "-c", "mkdir /app"]
RUN ["/bin/bash", "-c", "cp -r ./.next /app/.next"]
RUN ["/bin/bash", "-c", "cp -r ./public /app/public"]

# conf runner
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./entrypoint /bin/entrypoint
RUN ["/bin/bash", "-c", "chmod +x /bin/entrypoint"]
RUN ["npm", "i"]

#
CMD entrypoint