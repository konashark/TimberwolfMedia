#!/usr/bin/env sh
cmd="rsync -vzrlp --delete --exclude='.git/' --exclude='.idea/' --exclude='node_modules' ./ konashark@timberwolfmedia.com:public_html/";
eval $cmd && echo "updated" && date
