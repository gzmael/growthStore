#!/bin/sh

# You could probably do this fancier and have an array of extensions
# to create, but this is mostly an illustration of what can be done
psql -v ON_ERROR_STOP=1 --username "$POSTGRESQL_POSTGRES_USERNAME" <<EOF
ALTER USER $POSTGRESQL_USERNAME WITH SUPERUSER;
create extension "uuid-ossp";
select * FROM pg_extension;
CREATE DATABASE pets_test;
EOF
