FROM node:latest
MAINTAINER Ty Walls <tygertec.com>

# Install dependencies
#
RUN npm install -g gulp

# Set an environment variable to store where the app is installed to inside
# of the Docker image. The name matches the project name out of convention only.
#
ENV INSTALL_PATH /runbypacejs
RUN mkdir -p $INSTALL_PATH

# This sets the context of where commands will be ran from
#
WORKDIR $INSTALL_PATH

# Ensure packages are cached and only get updated when they change.
#
COPY package.json package.json

ENV COMMIT $(git rev-parse --no-abbrev HEAD))

# Copy in the application code from your work station at the current directory
# over to the working directory.
#
COPY . .

CMD gulp
