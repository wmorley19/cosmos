# Make managed in .env-build
ARG OPENC3_DEPENDENCY_REGISTRY=docker.io
ARG ALPINE_BUILD=6
ARG ALPINE_VERSION=3.19

# Builder stage for dependencies
FROM ${OPENC3_DEPENDENCY_REGISTRY}/alpine:${ALPINE_VERSION}.${ALPINE_BUILD} AS builder

ARG ALPINE_VERSION
ARG APK_URL
ARG RUBYGEMS_URL
ARG PYPI_URL=https://pypi.org

ENV ALPINE_VERSION=${ALPINE_VERSION}
ENV APK_URL=${APK_URL}
ENV RUBYGEMS_URL=${RUBYGEMS_URL}
ENV PYPI_URL=${PYPI_URL}

# Set up package repositories
RUN echo "${APK_URL}/alpine/v${ALPINE_VERSION}/main" > /etc/apk/repositories \
  && echo "${APK_URL}/alpine/v${ALPINE_VERSION}/community" >> /etc/apk/repositories

LABEL maintainer="support@openc3.com"

# Install necessary build dependencies
RUN apk add --no-cache \
    build-base \
    libffi-dev \
    libxml2-dev \
    libxslt-dev \
    ruby-dev \
    python3-dev \
    yaml-dev \
    openblas-dev \
    openssl-dev

# Optimize gem installation (no documentation, parallel install)
RUN gem install rake google-protobuf grpc --platform ruby --no-document && gem cleanup

# Install Python virtual environment
RUN python3 -m venv /openc3/venv \
  && /openc3/venv/bin/pip3 config --global set global.index $PYPI_URL/pypi \
  && /openc3/venv/bin/pip3 config --global set global.index-url $PYPI_URL/simple \
  && /openc3/venv/bin/pip3 install --upgrade pip setuptools

# Final image
FROM ${OPENC3_DEPENDENCY_REGISTRY}/alpine:${ALPINE_VERSION}.${ALPINE_BUILD}

ARG ALPINE_VERSION
ARG APK_URL
ARG RUBYGEMS_URL

ENV ALPINE_VERSION=${ALPINE_VERSION}
ENV APK_URL=${APK_URL}
ENV RUBYGEMS_URL=${RUBYGEMS_URL}
ENV PYPI_URL=https://pypi.org

# Set up package repositories
RUN echo "${APK_URL}/alpine/v${ALPINE_VERSION}/main" > /etc/apk/repositories \
  && echo "${APK_URL}/alpine/v${ALPINE_VERSION}/community" >> /etc/apk/repositories

# We require a local certificate file so set that up.
COPY cacert.pem /devel/cacert.pem
ENV SSL_CERT_FILE=/devel/cacert.pem
ENV CURL_CA_BUNDLE=/devel/cacert.pem
ENV REQUESTS_CA_BUNDLE=/devel/cacert.pem
ENV NODE_EXTRA_CA_CERTS=/devel/cacert.pem

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES=1

COPY .gemrc /root/.gemrc
RUN sed -i "s|RUBYGEMS_URL|${RUBYGEMS_URL}|g" /root/.gemrc && cp /root/.gemrc /etc/gemrc
ENV GEMRC=/etc/gemrc

COPY anycable* /usr/bin
RUN /usr/bin/anycable_install.sh

COPY shoreman.sh /usr/bin/shoreman

# Install only runtime dependencies (no build tools)
RUN apk add --no-cache \
    ca-certificates \
    curl \
    git \
    libc6-compat \
    openssl \
    ruby \
    ruby-bigdecimal \
    ruby-etc \
    ruby-io-console \
    ruby-irb \
    tini \
    py3-pip \
    python3

# Copy necessary dependencies from builder stage
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /usr/bin /usr/bin
COPY --from=builder /openc3/venv /openc3/venv

# Set user and group
ENV IMAGE_USER=openc3
ENV IMAGE_GROUP=openc3
ENV USER_ID=1001
ENV GROUP_ID=1001
ENV PYTHONPATH=/openc3/venv/lib/python3.11/site-packages/:/gems/python_packages/lib/python3.11/site-packages/

RUN addgroup -g ${GROUP_ID} -S ${IMAGE_GROUP} \
  && adduser -u ${USER_ID} -G ${IMAGE_GROUP} -s /bin/ash -S ${IMAGE_USER}

# Switch to user
USER ${USER_ID}:${GROUP_ID}

ENTRYPOINT [ "/sbin/tini", "--" ]
