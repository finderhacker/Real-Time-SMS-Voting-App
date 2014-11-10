# Queue Workers

# Run task once per hour at high priority
$ iron_worker schedule hello --start-at "2013-01-01T00:00:00-04:00" \
--run-every 3600 --priority 2