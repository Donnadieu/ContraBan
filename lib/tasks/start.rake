namespace :start do
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
  end

  task :development do
    exec 'NPM_CONFIG_DEVELOPMENT=true npm run postinstall && foreman start'
  end
end
