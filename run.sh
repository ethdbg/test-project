#! /bin/bash
if [ -d "./build" ]; then
  rm -rf ./build
fi

truffle compile &&
truffle migrate --network debug &&
truffle test --network debug
